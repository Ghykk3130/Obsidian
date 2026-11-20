#!/usr/bin/env python3
"""Search extracted textbooks and read pages by printed page number.

Examples:
  python lookup.py list
  python lookup.py info peskin
  python lookup.py search "Ward identity"
  python lookup.py search "optical theorem" --book peskin --limit 5
  python lookup.py page peskin 213
  python lookup.py page peskin 236 --pdf

Page labels prefer the book's printed page number; the PDF page is shown too.
"""
from __future__ import annotations

import argparse
import json
import os
import re
import sys
from pathlib import Path

try:
    sys.stdout.reconfigure(encoding="utf-8", errors="replace")
    sys.stderr.reconfigure(encoding="utf-8", errors="replace")
except AttributeError:
    pass

DEFAULT_DATA = Path.cwd() / ".dsh" / "textbooks"


def load_catalog(data_dir: Path) -> dict:
    path = data_dir / "catalog.json"
    if not path.exists():
        sys.exit(f"no catalog at {path}; run build.py first")
    return json.loads(path.read_text(encoding="utf-8"))


def pages_of(book: dict, data_dir: Path) -> list[str]:
    text = (data_dir / book["text_file"]).read_text(encoding="utf-8", errors="replace")
    pages = text.split("\f")
    while pages and not pages[-1].strip():
        pages.pop()
    return pages


def label(book: dict, pdf_page: int, total: int) -> str:
    offset = book.get("offset")
    if offset is None:
        return f"PDF p. {pdf_page}"
    printed = pdf_page + offset
    if 1 <= printed <= total + 5:
        return f"printed p. {printed} (PDF p. {pdf_page})"
    return f"PDF p. {pdf_page} (front matter)"


def norm(s: str) -> str:
    s = s.lower()
    for bad, good in {"\ufb01": "fi", "\ufb02": "fl", "\ufb00": "ff", "\u00ad": ""}.items():
        s = s.replace(bad, good)
    s = re.sub(r"(?<=[a-z])-\s+(?=[a-z])", "", s)
    return re.sub(r"\s+", " ", s)


def snippet(text: str, terms: list[str], width: int = 320) -> str:
    low = norm(text)
    pos = -1
    for t in terms:
        pos = low.find(t)
        if pos >= 0:
            break
    if pos < 0:
        pos = 0
    start = max(0, pos - width // 3)
    end = min(len(text), start + width)
    out = re.sub(r"\s+", " ", text[start:end]).strip()
    return ("..." if start else "") + out + ("..." if end < len(text) else "")


def search(args: argparse.Namespace) -> None:
    data_dir = Path(args.data_dir)
    catalog = load_catalog(data_dir)
    query = args.query.strip()
    terms = [norm(m.group(1) or m.group(2))
             for m in re.finditer(r'"([^"]+)"|(\S+)', query)]
    terms = [t for t in terms if t]
    phrases = re.findall(r'"([^"]+)"', query)
    books = catalog["books"]
    if args.book:
        books = [b for b in books if b["slug"] in args.book]
        if not books:
            sys.exit(f"unknown book; choose from {[b['slug'] for b in catalog['books']]}")

    hits = []
    for book in books:
        pages = pages_of(book, data_dir)
        for i, text in enumerate(pages, start=1):
            low = norm(text)
            counts = [low.count(t) for t in terms]
            if not terms or (not args.any and min(counts) == 0):
                continue
            score = sum(counts)
            for p in phrases:
                score += 5 * low.count(norm(p))
            if score <= 0:
                continue
            # Prefer pages where the term is a running head or section title.
            lines = [ln.strip() for ln in text.splitlines() if ln.strip()]
            head = norm(" ".join(lines[:2]))
            section = norm(" ".join(ln for ln in lines[:5]
                                    if re.match(r"^\d+(\.\d+)*\s", ln)))
            for t in terms:
                if t in head:
                    score += 4
                if t in section:
                    score += 4
            if lines and re.match(r"^(index|bibliography|references)\b", norm(lines[0])):
                score = max(1, score // 5)
            hits.append((score, book, i, text))
    hits.sort(key=lambda x: (-x[0], x[1]["slug"], x[2]))
    if not hits:
        print(f"No hit for {query!r}. Try fewer terms or --any.")
        return
    for score, book, i, text in hits[: args.limit]:
        print(f"{book['slug']:10s} {label(book, i, book['pages']):38s} score={score}")
        print("    " + snippet(text, terms))
    print(f"\n{len(hits)} page(s) matched; showing {min(len(hits), args.limit)}.")


def page(args: argparse.Namespace) -> None:
    data_dir = Path(args.data_dir)
    catalog = load_catalog(data_dir)
    matches = [b for b in catalog["books"] if b["slug"] == args.book]
    if not matches:
        sys.exit(f"unknown book; choose from {[b['slug'] for b in catalog['books']]}")
    book = matches[0]
    pages = pages_of(book, data_dir)
    if args.pdf:
        pdf_page = args.page
    else:
        if book.get("offset") is None:
            sys.exit("no printed-page offset for this book; use --pdf")
        pdf_page = args.page - book["offset"]
    if not 1 <= pdf_page <= len(pages):
        sys.exit(f"page out of range: PDF {pdf_page}, 1..{len(pages)}")
    text = pages[pdf_page - 1]
    print(f"# {book['slug']} — {book['title']}")
    print(f"# {label(book, pdf_page, book['pages'])}")
    print()
    print(text[: args.max_chars])
    if len(text) > args.max_chars:
        print(f"\n[truncated at {args.max_chars} chars; use --max-chars]")


def info(args: argparse.Namespace) -> None:
    catalog = load_catalog(Path(args.data_dir))
    for b in catalog["books"]:
        if args.book and b["slug"] not in args.book:
            continue
        print(f"{b['slug']}: {b['title']}")
        print(f"  authors: {b['authors']} ({b.get('year', 'n.d.')}, {b.get('publisher', '')})")
        print(f"  pages: {b['pages']}  offset: {b['offset']}  chars: {b['chars']}")
        print(f"  file: {b['file']}")


def main() -> None:
    ap = argparse.ArgumentParser()
    ap.add_argument("--data-dir", default=os.environ.get("TEXTBOOK_DATA", str(DEFAULT_DATA)))
    sub = ap.add_subparsers(dest="cmd", required=True)

    p_list = sub.add_parser("list")
    p_info = sub.add_parser("info")
    p_info.add_argument("book", nargs="*")

    p_search = sub.add_parser("search")
    p_search.add_argument("query")
    p_search.add_argument("--book", action="append", default=[])
    p_search.add_argument("--limit", type=int, default=8)
    p_search.add_argument("--any", action="store_true")

    p_page = sub.add_parser("page")
    p_page.add_argument("book")
    p_page.add_argument("page", type=int)
    p_page.add_argument("--pdf", action="store_true")
    p_page.add_argument("--max-chars", type=int, default=8000)

    args = ap.parse_args()
    if args.cmd == "list":
        for b in load_catalog(Path(args.data_dir))["books"]:
            print(f"{b['slug']:10s} {b['pages']:4d} pp  {b['title']}")
    elif args.cmd == "info":
        info(args)
    elif args.cmd == "search":
        search(args)
    elif args.cmd == "page":
        page(args)


if __name__ == "__main__":
    main()
