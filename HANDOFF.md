# Handoff: Psychiatric Interviewing Trainer (sheatrainer)

Updated 2026-10-29 after the Chapter 15 study guide (trainer 58e5d27; Usap Tayo 1520961, v2.2.4). Baseline reconfirmed clean 2026-10-30 (validate.js, check.py ch15, check-shea-links.js all pass; no content changes since). Study guides now exist for every chapter in Parts I–III (Ch 1–18). The Tagalog phrase review is pending with the user; Part IV (Ch 19–23) waits on her PPTX study guides and her go-ahead.

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
- Order requested by the user: Chapters 16, 17, 18, then 3–8 (all done); then Part II, Chapters 9–15 (all done). Parts I–III guides are complete.
- User preference: use subagents for simpler mechanical tasks; Claude writes the clinical content and does the final review itself.

## 3. Architecture and data formats
```
index.html        header (menu button, brand, nav, back/fwd, search), drawer, search panel, footer, script tags
app.js            router + views; script tag carries ?v=N cache-buster (now v=25)
styles.css        tokens, light/dark, guide styles (now ?v=8)
content/part1-chapters.js, part1-practice.js   Ch 1–8 (chapters; sims/drills)
content/part2-chapters.js, part2-practice.js   Ch 9–15
content/part3-chapters.js                      Ch 16–18 complete (parts.part3)
content/guide-ch1.js … guide-ch18.js                study guides (schema documented at top of guide-ch1.js)
content/tagalog.js                              Sa Tagalog cards (links map chN:sectionId -> Usap Tayo section, with teaser) and the sabihin-tagalog drill (per-item opts)
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
5. Update README "Study guides" line (currently "Chapters 1–18, all of Parts I–III") and the intro sentence listing included chapters and counts if changed.
6. `node tools/validate.js .` → OK; `python3 tools/check.py . --chapter chN --out /scratch/shots` → PASS; look at 2–3 screenshots (desktop + phone).
7. `git fetch -q origin main`, commit, `git push origin HEAD:main`.
8. Add the new guide's `chN:sectionId` entries to `content/tagalog.js` where a Usap Tayo section fits (1–2 for a short chapter, ~5 for a long one; add any new Usap Tayo section id to the `sections` map there), add a WHATS_NEW entry with `teaser` (remove the previous entry's teaser) and bump `app.js?v=`.
9. In the same pass, Usap Tayo (`/home/claude/tagalog`): append the matching link(s) to `SHEA_LINKS` in `js/data/psych-shea.js` (value may be one link or an array, most relevant first), bump `sw.js` VERSION and `js/data/meta.js` version, add a WHATS_NEW item; run `node ../dev-tools-wt/tools/check-shea-links.js /home/claude/sheatrainer /home/claude/tagalog` (expect `all resolve`) and optionally `tools/usaptayo-render.js`; `git fetch` + rebase (other sessions push audio packs) and push.
10. Update the status table/next step in this doc (dev-tools branch and project doc `claude/handoff.md`).

## 5. Commands
```bash
git clone https://github.com/isaymotion/sheatrainer.git /home/claude/sheatrainer
cd /home/claude/sheatrainer && git fetch origin dev-tools && git worktree add ../dev-tools-wt dev-tools
pip install beautifulsoup4 --break-system-packages   # if missing
node ../dev-tools-wt/tools/validate.js .              # expect: scripts: 24 chapters: 18 guides: ch1..ch18 (all 18) / practice: 87 quiz: 108 glossary: 385 sims: 16 drills: 10 / OK: no errors
CHROME=/opt/pw-browsers/chromium-1243/chrome-linux64/chrome python3 ../dev-tools-wt/tools/check.py . --chapter ch15 --out /scratch/shots   # expect PASS
# Usap Tayo (attach with add_repo isaymotion/Tagalog, access push; the user granted permission on 2026-10-28)
git clone --depth 1 https://github.com/isaymotion/tagalog /home/claude/tagalog
node ../dev-tools-wt/tools/check-shea-links.js /home/claude/sheatrainer /home/claude/tagalog   # expect: 28 sections, 49 links, 62 trainer cards: all resolve
node ../dev-tools-wt/tools/usaptayo-render.js /home/claude/tagalog /scratch/shots social shea-techniques   # expect PASS
```
Use the session's scratchpad directory for `/scratch`.
Baseline counts (2026-10-29, after Ch 15): 18 chapters, 18 guides, practice 87, quiz 108, glossary 385, sims 16, drills 10.
Every release: add an entry at the top of `WHATS_NEW` in app.js (date, title, items; optional `teaser` shown on Home) and bump `app.js?v=`.

## 6. Status
| Area | Status |
|---|---|
| Part I trainer (Ch 1–8): learn, practice, quiz, sims, drills, cards | Done |
| Part II trainer (Ch 9–15) | Done |
| Navigation: hamburger drawer, back/forward, search (`/`, Ctrl/Cmd+K) | Done (a852eee) |
| Standard-feature parity: theme toggle (light/dark/auto, key `sheatrainer.theme`), Alt+←/→, scroll restoration, What's New (`#/whats-new`, `WHATS_NEW` array in app.js, add new entries at top with every release), backup export/import (Progress page), Leitner spaced repetition for flashcards (`store.cards[key] = {box 0–5, due, reps}`) | Done (797f3e1) |
| Study guides | Ch 1–18 all done (Ch 15 added 58e5d27: 10 sections, 12 new glossary terms, 3 Sa Tagalog cards) |
| Ch 16 trainer extras | Key ideas, pocket card, glossary 32, quiz 10. No practice items or sims (waiting on Part III PPTX study guides) |
| Parts III–IV trainer content (practice, sims, drills) | Waiting for the user's Part III/IV PPTX study guides |
| Ch 19–23 | Listed as Coming soon |
| Tagalog integration | Done. Trainer: `content/tagalog.js`, 62 Sa Tagalog cards + the sabihin-tagalog drill (card format `"chN:sectionId": { s: usapTayoSectionId, why, en?, tl? }`; `s` must also be in that file's `sections` map). Usap Tayo (`isaymotion/Tagalog`): `js/data/psych-shea.js` holds the 24-phrase `shea-techniques` section (DRAFT until `REVIEWED = true`) and `SHEA_LINKS` (section id → one link or an array `{ ch, sec, label }`, rendered as a Technique notes list by `js/psych-views.js`); 28 sections, 49 links. Deferred: a Tagalog toggle for simulations. |

## 7. Next step
**Two tracks; the chapter track is the default unless the user brings the review.**

*Track A, Tagalog review (user-driven):* the user is reviewing `claude/tagalog-phrase-review.md` (project doc; regenerate with `node ../dev-tools-wt/tools/tagalog-review-list.js . ../tagalog <out.md>` after cloning isaymotion/Tagalog with `add_repo` push access). When she sends corrections, apply each change in BOTH `tagalog/js/data/psych-shea.js` (f and c forms) and `sheatrainer/content/tagalog.js` (drill `a` + `opts`, card `tl`), then regenerate and re-upload the review doc. Two lines already corrected on 2026-10-27 (A11 catch-all, A15 early waking). When she says the review is done: set `REVIEWED = true` in psych-shea.js, bump Usap Tayo `sw.js` VERSION and `meta.js` version, add a What's New line, and remove 'Draft wording under review' from `tagalog.js` (`status` and the drill `about`). The recorded audio pack does NOT yet contain the 25 Shea phrases (manifest keys checked against `js/audio-key.js`); they play by device TTS until `tools/make_audio_pack.py` is rerun by the user (needs the edge TTS voice; not runnable in the sandbox).

*Track B, Part IV (needs the user):* Chapters 19–23 show as "Coming soon". They need the user's Part IV PPTX study guides plus new chapter entries (a `part4` in a new `content/part4-chapters.js`, following ch16 in part3-chapters.js, and removing them from `UPCOMING` as they land) before any guide can render. **Ask her before starting**, and ask whether she wants guides only or also practice/sims. Next numbers: `app.js?v=26`, Usap Tayo `2.2.5`.

*Track C, Part III trainer extras (needs the user):* practice items, simulations and drills for Ch 16–18 wait on her Part III PPTX study guides.

Ch 15 notes for reference: the guide cites Ch 14/13/12/11/10/8/7/2/1 terms; new ch15 terms are introjection, holding environment, black/whiting, linguistic polarization, object constancy, bipolar self, grandiose imago, idealizing imago, mirror transference, mentalization, stable self, nonverbal leakage. Cards: ch15:merger → closing, ch15:splitting → explain, ch15:complementary → deescalation (their `tl` lines are in section C of the review doc, which was regenerated and re-uploaded 2026-10-29; sections A and B unchanged).

## 8. Pitfalls learned
- Glossary syntax is `[[term|shown text]]` (term first). A guide whose chapter has no entry in a parts file renders "not found".
- Wide tables overflowed on phones until `.guide-grid` used `grid-template-columns: minmax(0,1fr)`; the check script catches regressions.
- Header height drives sticky offsets: `.guide-side`/`.learn-grid aside` `top: 5.5rem`, `.guide-sec scroll-margin-top: 5.5rem` (7.5rem ≤900px). Adjust if the header changes.
- Desktop nav clips at mid widths; brand text is hidden between 761–1320px.
- A `[[glossary]]` link followed by more text in a table's first column renders as a centered block; make the link the whole cell or leave it unlinked.
- Abort Google Fonts in Playwright (`**/fonts.*`) or pages stall. Use Chromium at `/opt/pw-browsers/chromium-1243/chrome-linux64/chrome` (pass as `CHROME=` env to check.py; the script's default path is stale); don't run `playwright install`.
- `gh api` Pages endpoints are blocked by the sandbox proxy; verify deploys by pushing and trusting Pages, or ask the user to check.
- When validating with ad-hoc `JSON.stringify` + regex, nested arrays produce false "missing" refs like `"[[MMSE`; `tools/validate.js` walks strings properly.
- Bump `?v=N` on app.js/styles.css whenever they change, or phones serve stale code.
- Pushing to main returned 403 until the repo was attached to the session with push access (`add_repo` isaymotion/sheatrainer). Do that first in a new chat. The first Bash call of a session may be blocked by the auto-mode classifier; just repeat it.
- Chapter 17 spanned two epub files (part0032 and part0033) and Chapter 9 spanned part0022 and part0023 (Part II has its own divider at part0021, so the part(0012+N) arithmetic in the script's docstring is off by one from Ch 9 on; the script finds the chapter by heading anyway). extract_chapter.py only reads one file, so if an extract does not end with the Video Module / References block, also extract the next part (unzip the epub and run BeautifulSoup on `OEBPS/Text/partNNNN.xhtml`). Ch 10 = part0024, Ch 11 = part0025, Ch 12 = part0026.
- validate.js rejects duplicate glossary terms across chapters (hit once: "Negative statement of inquiry" in ch3 and ch17). Before adding terms, check them with a node one-liner against every chapter's glossary; a guide cites the owning chapter's term via `[[term]]`.
- Dark-theme screenshots need a page reload after setting `localStorage.sheatrainer.theme`.
- When adding a What's New entry, remove `teaser` from the previous top entry (only the newest shows on Home).
- Drill items may carry their own `opts` array (used by sabihin-tagalog); otherwise options come from `set.categories`.
- `pkill -f` with a pattern that appears in the same shell line kills the Bash call itself (exit 144); use a different pattern or `fuser -k`.
- Usap Tayo is also pushed to by other sessions (audio-pack updates, new modules): always `git fetch` and rebase before pushing. Its remote reports a move to `github.com/isaymotion/Tagalog.git` (capital T); pushes still work.
- Usap Tayo pitfalls: append new phrase sections to `PSYCH_SECTIONS` (flashcard ids are `p:<section>:<index>`); add new files to the `FILES` list in `sw.js` and bump its VERSION; new phrases play with device TTS until `tools/make_audio_pack.py` regenerates the audio pack.

## 9. Files to re-attach in a new chat
- `Psychiatric_Interviewing_-_Shawn_Christopher_Shea.epub`: needed for every remaining study guide.
- Part III/IV PPTX study guides (Shea Ch 16–23): only when building practice items, simulations and drills for those parts.
- Not needed: the Part I/II PPTX decks and SunflowerShea.png (already used).
