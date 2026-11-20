#!/usr/bin/env python3
"""Extract PDF textbooks into page-addressable text for citation lookup.

Usage:
  python build.py --slug peskin
  python build.py --all
  python build.py --list
  python build.py --slug peskin --force

Data lives in <workspace>/.dsh/textbooks by default; override with --data-dir
or TEXTBOOK_DATA. The catalog is catalog.json, page texts are text/<slug>.txt
with form-feed page separators.
"""
from __future__ import annotations

import argparse
import json
import os
import re
import shutil
import subprocess
import sys
from collections import Counter
from datetime import datetime, timezone
from pathlib import Path

HERE = Path(__file__).resolve()
_VAULT_DATA = HERE.parents[3] / "textbooks" if len(HERE.parents) > 3 else None
DEFAULT_DATA = _VAULT_DATA if _VAULT_DATA and _VAULT_DATA.exists() else Path.cwd() / ".dsh" / "textbooks"

LIGATURES = {
    "\ufb00": "ff", "\ufb01": "fi", "\ufb02": "fl", "\ufb03": "ffi",
    "\ufb04": "ffl", "\ufb05": "st", "\ufb06": "st",
    "\u00ad": "", "\u0000": "",
}


def find_exe(name: str, env: str, candidates: list[str]) -> str:
    if os.environ.get(env):
        return os.environ[env]
    for cand in candidates:
        if Path(cand).exists():
            return cand
    found = shutil.which(name)
    if found:
        return found
    sys.exit(f"cannot find {name}; set {env} to its path")


PDFTOTEXT = find_exe("pdftotext", "PDFTOTEXT", [
    r"C:\Users\ghykk\AppData\Local\Programs\MiKTeX\miktex\bin\x64\pdftotext.exe",
])
PDFINFO = find_exe("pdfinfo", "PDFINFO", [
    r"C:\Users\ghykk\AppData\Local\Programs\MiKTeX\miktex\bin\x64\pdfinfo.exe",
])


def clean(text: str) -> str:
    for bad, good in LIGATURES.items():
        text = text.replace(bad, good)
    return text.replace("\r\n", "\n").replace("\r", "\n")


def pdf_page_count(pdf: Path) -> int | None:
    try:
        out = subprocess.run([PDFINFO, str(pdf)], capture_output=True, text=True,
                             encoding="utf-8", errors="replace").stdout
    except OSError:
        return None
    m = re.search(r"^Pages:\s+(\d+)", out, re.M)
    return int(m.group(1)) if m else None


def extract_text(pdf: Path, out: Path) -> str:
    out.parent.mkdir(parents=True, exist_ok=True)
    subprocess.run([PDFTOTEXT, "-layout", "-enc", "UTF-8", str(pdf), str(out)],
                   check=True)
    return clean(out.read_text(encoding="utf-8", errors="replace"))


def detect_offset(pages: list[str]) -> tuple[int | None, int]:
    """Guess printed_page - pdf_page from standalone numbers in headers/footers."""
    votes: Counter[int] = Counter()
    for i, text in enumerate(pages, start=1):
        lines = [ln.strip() for ln in text.splitlines() if ln.strip()]
        if not lines:
            continue
        cands: list[int] = []
        for ln in lines[:2] + lines[-2:]:
            m = re.fullmatch(r"(\d{1,4})", ln)
            if m:
                cands.append(int(m.group(1)))
                continue
            # Running heads such as "2.4  The Klein-Gordon Field in Space-Time   27"
            m = re.search(r"\s(\d{1,4})$", ln)
            if m and len(ln) >= 10 and not re.search(r"[=+\-/]$", ln):
                cands.append(int(m.group(1)))
        for n in cands:
            off = n - i
            if -80 <= off <= 120:
                votes[off] += 1
    if not votes:
        return None, 0
    off, count = votes.most_common(1)[0]
    return off, count


def load_catalog(path: Path) -> dict:
    if path.exists():
        return json.loads(path.read_text(encoding="utf-8"))
    return {"books": []}


def build_one(entry: dict, data_dir: Path, force: bool = False) -> dict:
    pdf = Path(entry["file"])
    if not pdf.exists():
        sys.exit(f"missing PDF: {pdf}")
    text_path = data_dir / "text" / f"{entry['slug']}.txt"
    if text_path.exists() and not force:
        text = clean(text_path.read_text(encoding="utf-8", errors="replace"))
    else:
        print(f"extracting {entry['slug']} ...", file=sys.stderr)
        text = extract_text(pdf, text_path)
    pages = text.split("\f")
    if pages and not pages[-1].strip():
        pages = pages[:-1]
    declared = pdf_page_count(pdf)
    offset, votes = detect_offset(pages)
    record = dict(entry)
    record.update({
        "pages": declared or len(pages),
        "text_pages": len(pages),
        "offset": offset,
        "offset_votes": votes,
        "chars": len(text),
        "text_file": f"text/{entry['slug']}.txt",
        "extracted_at": datetime.now(timezone.utc).isoformat(timespec="seconds"),
    })
    return record


def main() -> None:
    ap = argparse.ArgumentParser()
    ap.add_argument("--manifest", default=str(DEFAULT_DATA / "books.json"))
    ap.add_argument("--data-dir", default=os.environ.get("TEXTBOOK_DATA", str(DEFAULT_DATA)))
    ap.add_argument("--slug", action="append", default=[])
    ap.add_argument("--all", action="store_true")
    ap.add_argument("--force", action="store_true")
    ap.add_argument("--list", action="store_true")
    args = ap.parse_args()

    data_dir = Path(args.data_dir)
    catalog_path = data_dir / "catalog.json"
    catalog = load_catalog(catalog_path)

    if args.list:
        for b in catalog.get("books", []):
            print(f"{b['slug']:12s} p.{b['pages']:<5} offset={b.get('offset')} "
                  f"{b['title']}")
        return

    manifest = json.loads(Path(args.manifest).read_text(encoding="utf-8"))
    if args.slug:
        manifest = [e for e in manifest if e["slug"] in args.slug]
    elif not args.all:
        sys.exit("pass --slug, --all, or --list")

    by_slug = {b["slug"]: b for b in catalog.get("books", [])}
    for entry in manifest:
        by_slug[entry["slug"]] = build_one(entry, data_dir, force=args.force)
    catalog["books"] = sorted(by_slug.values(), key=lambda b: b["slug"])
    data_dir.mkdir(parents=True, exist_ok=True)
    catalog_path.write_text(json.dumps(catalog, ensure_ascii=False, indent=2),
                            encoding="utf-8")
    for b in catalog["books"]:
        print(f"{b['slug']}: {b['pages']} pages, offset {b['offset']} "
              f"({b['offset_votes']} votes), {b['chars']} chars")


if __name__ == "__main__":
    main()
