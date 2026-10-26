#!/usr/bin/env python3
"""
Extract one chapter of Shea's Psychiatric Interviewing (3rd ed.) epub to plain text for reading.
The book text is copyrighted: keep the output in a scratch folder, never commit it.

Usage:
  python3 -I tools/extract_chapter.py /path/to/book.epub 17 /scratch/ch17.txt

How it maps chapters: the epub's OEBPS/Text/partNNNN.xhtml files. Chapters 1-15 are part0013-part0029
(chapter N = part(0012+N)); part0030 is the Part III divider, so chapters 16+ are part(0015+N)
(ch16 = part0031). Part IV has another divider, so for 19+ the script searches by heading instead of
trusting arithmetic. It always verifies the "Chapter N" heading and prints the section headings.
Requires: beautifulsoup4 (pip install beautifulsoup4 --break-system-packages).
"""
import re, sys, zipfile, tempfile, os
from bs4 import BeautifulSoup

epub, num, out = sys.argv[1], int(sys.argv[2]), sys.argv[3]
z = zipfile.ZipFile(epub)
names = sorted(n for n in z.namelist() if re.search(r"Text/part\d{4}\.xhtml$", n))

def text_of(n):
    return BeautifulSoup(z.read(n).decode("utf8"), "html.parser")

target = None
for n in names:  # find the file whose opening text is "Psychiatric Interviewing Chapter N <title>"
    head = text_of(n).get_text(" ", strip=True)[:120]
    if re.search(rf"\bChapter {num}\b", head) and len(head) >= 60:
        body_len = len(text_of(n).get_text())
        if body_len > 5000:
            target = n
            break
if not target:
    sys.exit(f"Chapter {num} not found")

s = text_of(target)
lines = []
for el in s.find_all(["h1", "h2", "h3", "h4", "p", "li", "td", "th"]):
    if el.find(["p", "li"]):
        continue
    t = el.get_text(" ", strip=True)
    if t:
        lines.append(("## " if el.name[0] == "h" else "") + t)
open(out, "w").write("\n".join(lines))
print(f"{target}: {len(lines)} lines, {sum(map(len, lines))} chars -> {out}")
for l in lines:
    if l.startswith("## "):
        print("  ", l)
