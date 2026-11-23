from pathlib import Path
p = Path(r"D:\Obsidian\Physics\.dsh\skills\physics-note-style\SKILL.md")
t = p.read_text(encoding="utf-8")
marker = "## 九、范例（照这个密度写）"
head, tail = t.split(marker, 1)
lines = tail.splitlines()
out = []
for line in lines:
    s = line.strip()
    starts = s.startswith("$$")
    ends = s.endswith("$$")
    if starts and out and out[-1].strip() != "":
        out.append("")
    out.append(line)
    if ends and (not starts or len(s) > 4):
        out.append("")
# collapse 3+ blank lines
clean = []
for line in out:
    if line == "" and clean and clean[-1] == "":
        continue
    clean.append(line)
p.write_text(head + marker + "\n\n" + "\n".join(clean).lstrip("\n"), encoding="utf-8")
print("ok")
