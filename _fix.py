import re
from pathlib import Path
p = Path(r"D:\Obsidian\Physics\.dsh\skills\physics-note-style\SKILL.md")
t = p.read_text(encoding="utf-8")
marker = "## 九、范例（照这个密度写）"
head, tail = t.split(marker, 1)
tail = tail.replace("$$\\begin{aligned}\n", "$$\n\\begin{aligned}\n")
tail = tail.replace("\n\\end{aligned}$$", "\n\\end{aligned}\n$$")
# single-line $$...$$ on its own line -> opening/closing on separate lines
def fix(m):
    body = m.group(1).strip()
    return "$$\n" + body + "\n$$"
tail = re.sub(r"^\$\$([^\n$]+)\$\$$", fix, tail, flags=re.M)
p.write_text(head + marker + tail, encoding="utf-8")
print("done")
