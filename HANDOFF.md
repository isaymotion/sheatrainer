# Handoff: Psychiatric Interviewing Trainer (sheatrainer)

Updated 2026-10-27, after the Chapter 8 study guide (commit 70bfacc on main). Parts I and III are complete; Part II guides (9–15) next.

## 1. Project and audience
- Static web app teaching psychiatry residents to interview sensitively and compassionately, built on Shea, *Psychiatric Interviewing: The Art of Understanding*, 3rd ed.
- Owner: Ma. Isabella P. Navarro, MD (isaymotion@gmail.com), incoming psychiatry resident.
- Repo: `github.com/isaymotion/sheatrainer`, branch `main` is published by GitHub Pages (live at `https://isaymotion.github.io/sheatrainer/`). Tools and this doc: branch `dev-tools`.
- No build step: vanilla JS hash-router SPA.

## 2. Fixed rules
- Attribution must stay verbatim in the footer (index.html) and the About view: "This app was created by Isabella Navarro, MD. Last updated October 2026. isaymotion@gmail.com" (email is a mailto link).
- Study guides are written **in our own words** as a companion. Never reproduce book passages, the book's dialogues, or its Clinician A/B excerpts. Clinical exchanges are composed (label them "Composed."); book cases are summarized ("Summarized from the chapter."). The `deeper` list points readers to the book and its video modules.
- Patient speech inside strings uses single quotes for nested quotes. No "·" separators in UI text.
- Commits: `git -c user.name="isaymotion" -c user.email="isaymotion@users.noreply.github.com" commit`, message ending with
  `Co-Authored-By: <model named in the session's attribution reminder> <noreply@anthropic.com>` and `Claude-Session: <current session URL>` (use the attribution given in the new session's system reminder).
- User approved the guide depth/layout of Ch 1 ("Looks about right"). One chapter per turn, then report briefly.
- Order requested by the user: Chapters 16, 17, 18, then 3–8 (all done); now **Part II, Chapters 9–15 in order**.
- User preference: use subagents for simpler mechanical tasks; Claude writes the clinical content and does the final review itself.

## 3. Architecture and data formats
```
index.html        header (menu button, brand, nav, back/fwd, search), drawer, search panel, footer, script tags
app.js            router + views; script tag carries ?v=N cache-buster (now v=16)
styles.css        tokens, light/dark, guide styles (now ?v=7)
content/part1-chapters.js, part1-practice.js   Ch 1–8 (chapters; sims/drills)
content/part2-chapters.js, part2-practice.js   Ch 9–15
content/part3-chapters.js                      Ch 16–18 complete (parts.part3)
content/guide-ch1.js … guide-ch8.js, guide-ch16.js, guide-ch17.js, guide-ch18.js   study guides (schema documented at top of guide-ch1.js)
icons/, manifest.webmanifest                    sunflower icon (?v=2)
```
- Routes: `#/home`, `#/learn`, `#/learn/chN` (guide), `#/learn/chN/<sectionId>`, `#/learn/chN/review`, `#/practice/<chN|all>[/<itemId>]`, `#/quiz/chN`, `#/simulate[/<id>]`, `#/drills[/<id>]`, `#/cards/<chN|all>`, `#/bookmarks`, `#/progress`, `#/about`.
- A guide only renders if a chapter entry exists in some `parts.partX.chapters`. `UPCOMING` in app.js lists Parts III/IV chapter titles; any not yet present show as "Coming soon" (`pendingChapters()`), inside an existing part too.
- Chapter entry: `{ id:"ch16", num:16, title, sub, summary, concepts:[{h,b}], pearls:[".."], practice:[], quiz:[{q, opts:[4], a:<index>, w:"why"}], glossary:[{term, def}] }`. Practice item: `{ id:"c9p1", skill, ctx, p, cue, opts:[{t, v:"best"|"ok"|"poor", w}] }`. Chapters with empty `practice` are hidden from practice chips and show "—" in Progress.
- Guide: `window.TRAINER.guides.chN = { chapter, intro, highYield:{ mustKnow:[], pitfalls:[], phrases:[{say, when}] }, sections:[{ id, title, lede, blocks:[...], practice:[{kind:"practice"|"sim"|"drill"|"quiz", id, label}] }], deeper:[{title, text}] }`.
- Block types: `p {text}`, `list {items}`, `steps {items}`, `table {head, rows}`, `compare {a:{title,items}, b:{title,items}}`, `case {title,text}`, `exchange {title, lines:[{who,t,tag?}], note}`, `pearl {title,text}`.
- Inline glossary links in any guide string: `[[Term]]` or `[[Term|shown text]]`. Terms resolve case-insensitively against ALL chapters' glossaries (global), so a guide can cite earlier chapters' terms (e.g. `[[Delirium]]` from Ch 11). Duplicate terms across chapters are an error.
- Search index is built automatically from chapters, guides, glossary, practice, sims, drills. Nothing to register.

## 4. Per-unit recipe (one study guide)
1. Extract the chapter: `python3 -I tools/extract_chapter.py <epub> N /scratch/chN.txt`, then read it fully (Ch 17 is ~123k chars; read in chunks).
2. **If Ch 1–15**: the chapter entry already exists in part1/part2-chapters.js (with glossary). Reuse its glossary terms; add any new terms the guide needs to that chapter's glossary.
   **If Ch 17–18**: add a chapter object to `content/part3-chapters.js` (concepts ~8–9, pearls ~8, `practice: []`, quiz 10, glossary ~25–35 non-duplicate terms), following ch16.
3. Write `content/guide-chN.js`: intro, high-yield (mustKnow ~9–11, pitfalls ~7–9, phrases ~5–6), 8–10 sections, deeper list (video modules, appendices). Composed examples only; reserved section ids `high-yield`, `deeper`, `review` are not allowed.
4. Add `<script src="content/guide-chN.js"></script>` in index.html after the other guides, before app.js (and part3-chapters.js stays after part2-practice.js). Bump `app.js?v=` (or styles) only if those files changed.
5. Update README "Study guides" line (currently "Chapters 1–8 and 16–18 so far") and the intro sentence listing included chapters and counts if changed.
6. `node tools/validate.js .` → OK; `python3 tools/check.py . --chapter chN --out /scratch/shots` → PASS; look at 2–3 screenshots (desktop + phone).
7. `git fetch -q origin main`, commit, `git push origin HEAD:main`.
8. Update the status table/next step in this doc (dev-tools branch and project doc `claude/handoff.md`).

## 5. Commands
```bash
git clone https://github.com/isaymotion/sheatrainer.git /home/claude/sheatrainer
cd /home/claude/sheatrainer && git fetch origin dev-tools && git worktree add ../dev-tools-wt dev-tools
pip install beautifulsoup4 --break-system-packages   # if missing
node ../dev-tools-wt/tools/validate.js .              # expect: scripts: 16 chapters: 18 guides: ch1,ch16,...,ch8 / practice: 87 quiz: 108 glossary: 300 sims: 16 drills: 9 / OK: no errors
python3 ../dev-tools-wt/tools/check.py . --chapter ch16 --out /scratch/shots   # expect PASS
```
Baseline counts (2026-10-27): 18 chapters, practice 87, quiz 108, glossary 300, sims 16, drills 9.
Every release: add an entry at the top of `WHATS_NEW` in app.js (date, title, items; optional `teaser` shown on Home) and bump `app.js?v=`.

## 6. Status
| Area | Status |
|---|---|
| Part I trainer (Ch 1–8): learn, practice, quiz, sims, drills, cards | Done |
| Part II trainer (Ch 9–15) | Done |
| Navigation: hamburger drawer, back/forward, search (`/`, Ctrl/Cmd+K) | Done (a852eee) |
| Standard-feature parity: theme toggle (light/dark/auto, key `sheatrainer.theme`), Alt+←/→, scroll restoration, What's New (`#/whats-new`, `WHATS_NEW` array in app.js, add new entries at top with every release), backup export/import (Progress page), Leitner spaced repetition for flashcards (`store.cards[key] = {box 0–5, due, reps}`) | Done (797f3e1) |
| Study guides | Ch 1–8, 16–18 done; 9–15 remaining (7 left) |
| Ch 16 trainer extras | Key ideas, pocket card, glossary 32, quiz 10. No practice items or sims (waiting on Part III PPTX study guides) |
| Parts III–IV trainer content (practice, sims, drills) | Waiting for the user's Part III/IV PPTX study guides |
| Ch 19–23 | Listed as Coming soon |

## 7. Next step
**Chapter 9** (epub part0021; chapter N = part(0012+N) for 1–15). First Part II chapter; chapter objects live in `content/part2-chapters.js`. Check its practice ids (c9p1…) and existing glossary before writing; check candidate terms against all chapters with a node one-liner to avoid duplicates. Then Chapters 10–15.

## 8. Pitfalls learned
- Glossary syntax is `[[term|shown text]]` (term first). A guide whose chapter has no entry in a parts file renders "not found".
- Wide tables overflowed on phones until `.guide-grid` used `grid-template-columns: minmax(0,1fr)`; the check script catches regressions.
- Header height drives sticky offsets: `.guide-side`/`.learn-grid aside` `top: 5.5rem`, `.guide-sec scroll-margin-top: 5.5rem` (7.5rem ≤900px). Adjust if the header changes.
- Desktop nav clips at mid widths; brand text is hidden between 761–1320px.
- Abort Google Fonts in Playwright (`**/fonts.*`) or pages stall. Use Chromium at `/opt/pw-browsers/chromium-1243/chrome-linux64/chrome` (pass as `CHROME=` env to check.py; the script's default path is stale); don't run `playwright install`.
- `gh api` Pages endpoints are blocked by the sandbox proxy; verify deploys by pushing and trusting Pages, or ask the user to check.
- When validating with ad-hoc `JSON.stringify` + regex, nested arrays produce false "missing" refs like `"[[MMSE`; `tools/validate.js` walks strings properly.
- Bump `?v=N` on app.js/styles.css whenever they change, or phones serve stale code.
- Pushing to main returned 403 until the repo was attached to the session with push access (`add_repo` isaymotion/sheatrainer). Do that first in a new chat. The first Bash call of a session may be blocked by the auto-mode classifier; just repeat it.
- Chapter 17 spanned two epub files (part0032 and part0033); extract_chapter.py only reads one, so if an extract ends mid-sentence, also extract the next part. Ch 1–15 = part(0012+N), Ch 16 = part0031.
- validate.js rejects duplicate glossary terms across chapters (hit once: "Negative statement of inquiry" in ch3 and ch17). Before adding terms, check them with a node one-liner against every chapter's glossary; a guide cites the owning chapter's term via `[[term]]`.
- Dark-theme screenshots need a page reload after setting `localStorage.sheatrainer.theme`.
- When adding a What's New entry, remove `teaser` from the previous top entry (only the newest shows on Home).

## 9. Files to re-attach in a new chat
- `Psychiatric_Interviewing_-_Shawn_Christopher_Shea.epub`: needed for every remaining study guide.
- Part III/IV PPTX study guides (Shea Ch 16–23): only when building practice items, simulations and drills for those parts.
- Not needed: the Part I/II PPTX decks and SunflowerShea.png (already used).
