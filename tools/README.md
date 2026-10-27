# dev-tools (not published)

Development tools for the Psychiatric Interviewing Trainer. This branch holds only tools and the handoff doc; the site lives on `main`.

Restore next to a clone of main:

```bash
git clone https://github.com/isaymotion/sheatrainer.git ~/sheatrainer
cd ~/sheatrainer && git fetch origin dev-tools && git worktree add ../dev-tools-wt dev-tools
# tools are now in ~/dev-tools-wt/tools ; they take the site folder as an argument, so they can live anywhere
```

| File | Purpose | Run |
|---|---|---|
| `validate.js` | Loads every content script listed in index.html and checks glossary refs, duplicate terms/ids, quiz answers, guide links, simulation reachability | `node tools/validate.js ~/sheatrainer` → ends with `OK: no errors` |
| `check.py` | Playwright smoke test at 1280px and 390px: routes, every guide section, overflow, JS errors, menu drawer, back button, search; saves screenshots | `python3 tools/check.py ~/sheatrainer --chapter ch17 --out /scratch/shots` → ends with `PASS` |
| `extract_chapter.py` | Pulls one chapter of the epub into plain text with section headings, for reading while writing a guide | `python3 -I tools/extract_chapter.py book.epub 17 /scratch/ch17.txt` |

Requirements: node, python3, playwright (python) with Chromium at `/opt/pw-browsers/chromium-1194/chrome-linux/chrome` (set `CHROME` to override), beautifulsoup4 (`pip install beautifulsoup4 --break-system-packages`).

Never commit the epub, extracted chapter text, or slide decks to any branch: they are copyrighted.
- `tagalog-review-list.js`: regenerates the Tagalog phrase review list from `sheatrainer/content/tagalog.js` and `Tagalog/js/data/psych-shea.js`; usage in its header. Upload the output to the project as `claude/tagalog-phrase-review.md`.
