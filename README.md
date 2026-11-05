# Shea Trainer

A practice space for psychiatry residents learning to interview patients sensitively and with compassion, built from Shawn Christopher Shea, *Psychiatric Interviewing: The Art of Understanding* (3rd ed.). Part I (Chapters 1–8), Part II (Chapters 9–15) and Part III (Chapters 16–18) are included. It runs entirely in the browser, works offline after the first visit, and can be installed on phones and desktops.

**Live site:** https://isaymotion.github.io/sheatrainer/

## Features

- **Study guides** for all 18 chapters, with a high-yield box, glossary terms you can tap for a definition, section bookmarks, and links into practice. Written in our own words as a companion to the book.
- **Quick review** per chapter: key ideas, a pocket card of pearls, and vocabulary.
- **Response practice**: 87 composed clinical moments, each with three replies explained (best, workable, likely to backfire). A **Sagot sa Tagalog** switch shows the patient's line and the options in Filipino (Chapters 1, 3, 5 and 9 so far), English underneath.
- **Chapter quizzes**: 108 questions, best score saved per chapter.
- **Simulated interviews**: 19 branching cases with a sunflower gauge for blending and a bar for the database gathered. Four can be played **Sa Tagalog**; three (Nasa kuwarto si Nanay, Nerbiyos daw, Ang kasama) are written in Tagalog first and set in Mariveles.
- **Technique drills**: nine English drills (80 items) and four Tagalog drills (54 items).
- **Flashcards**: 385 terms with spaced repetition (Leitner boxes: Again, Good, Easy; cards return after 1, 3, 7, 14 or 30 days).
- **Sa Tagalog** page gathering every Filipino path in the trainer, and Sa Tagalog cards in the study guides linking to Usap Tayo.
- **Bookmarks** and **Progress** (practice, quiz, interview, drill and flashcard progress per chapter).
- Shared isaymotion shell: menu as a docked sidebar on desktop (with hide/show) and a drawer on phones listing every part and chapter; bottom tab bar on phones (Home, Menu, Practice, Progress); search from the top bar (press `/` or Ctrl/Cmd+K) with suggestions and a full results page at `#/search/<query>`; back and forward buttons, `Alt+Left` / `Alt+Right`, and scroll position restored on back/forward; light / dark / match-device theme; text size (Aa); English / Tagalog interface language on the About page (Tagalog interface strings are a draft); an "Other apps" group in the menu.
- **Backup** in the footer (and on the Progress page): export progress, bookmarks, flashcard schedule and settings to a file, import it elsewhere, and undo the last import. Backup files from v10 still import.
- Offline support via a service worker. No accounts, no tracking: progress stays in each user's browser.

## Files to upload

Upload everything in this folder to the root of the `sheatrainer` repository, keeping the folder structure:

```
.nojekyll               (empty file; tells GitHub Pages not to run Jekyll)
README.md
index.html              App shell (top bar, sidebar menu, footer, bottom tabs) and the script list
css/app.css             Styles (light and dark themes, Shea's screens)
js/app.js               Router, menu, search, theme, backup, and all Shea screens
data/app-meta.js        App name, version, attribution (window.APP_META), menu links (window.APP_LINKS)
data/changelog.js       What's new entries (window.APP_CHANGELOG)
data/hospital.js        Hospital, program, posts and year levels (window.HOSPITAL), shared across apps
data/strings.js         Shell UI strings in English and Tagalog (window.STRINGS)
content/                Chapters, practice, study guides and Tagalog content (window.TRAINER)
icons/                  icon-192.png, icon-512.png, icon-maskable-512.png, apple-touch-icon.png, favicon-32.png
manifest.webmanifest    Install metadata
sw.js                   Offline cache
```

## Publish on GitHub Pages

1. Upload the files above to the `sheatrainer` repository on GitHub (see `UPLOAD.md` for exactly what to add, replace and delete when updating from v10).
2. In the repository, open **Settings > Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**, select `main` and `/ (root)`, and save.
4. After a minute the site is live at `https://isaymotion.github.io/sheatrainer/`.
5. On a phone, open that link, then use **Add to Home Screen** (iPhone Safari) or **Install app** (Android Chrome).

There is no build step and no dependencies. To preview locally, run `python3 -m http.server` in this folder and visit `http://localhost:8000`.

## Upgrading from v10

- **Progress is kept automatically.** The progress blob (`pit.progress.v1`: practice answers, quiz bests, interviews, drills, flashcard boxes, bookmarks) and the two Tagalog switches (`sheatrainer.simTl`, `sheatrainer.practiceTl`) are read and written under the same names as before. Theme and text size are picked up from the old `sheatrainer.theme` / `sheatrainer.textSize` keys on the first visit and moved under the new prefix.
- **Old backup files still import.** A v10 backup (`{app:"sheatrainer", version:1, store, theme, textSize}`) is recognised by **Import backup** and restored, and the import can be undone.
- Old links keep working: `#/learn/ch5`, `#/learn/ch5/<section>`, `#/practice/all`, `#/quiz/ch3`, `#/simulate/<id>`, `#/drills/<id>`, `#/cards/all`, `#/bookmarks`, `#/progress`, `#/whats-new`, `#/about` (Usap Tayo links into these).
- The old flat `app.js` and `styles.css` are no longer used and should be deleted from the repository.

## Adding content

- New part: create `content/partN-chapters.js` (and optionally `content/partN-practice.js`) registering under `window.TRAINER.parts.partN`, as in `content/part3-chapters.js`, and add its `<script>` tag in `index.html` before `js/app.js`. Chapters, practice, quizzes, interviews, drills, flashcards, the menu and search pick it up automatically.
- New study guide: create `content/guide-chN.js` following the schema at the top of `content/guide-ch1.js` and add its `<script>` tag. Link glossary terms inline with `[[term]]` or `[[glossary term|shown text]]`.
- Add each new script to `CORE` in `sw.js` so it is available offline.

## Version and What's new

- The version is a semantic version string. It lives in `data/app-meta.js` (`version`), in the first entry of `data/changelog.js`, and in `sw.js` (`VERSION`); all three must agree.
- `data/changelog.js` is newest first: `{version, date, title, teaser?, items:[{type, text}]}` with an ISO date and `type` `feature`, `update`, `correction` or `content`. A `teaser` on the newest entry shows on Home.
- For every release: add the changelog entry at the top, update `version` in `data/app-meta.js`, set `VERSION` in `sw.js` (this makes phones pick up the new files), and update "Latest version" in `index.html`, `data/app-meta.js` and this README.
- Storage keys start with `sheatrainer:v1:` (plus the v10 keys above) and cache names with `sheatrainer-`. All isaymotion apps share `isaymotion.github.io`, so these must stay unique and must not change after release.

## Attribution

App created by Isabella Navarro, MD. Latest version November 2026. isaymotion@gmail.com

An independent study aid for psychiatry residents built from Shea, Psychiatric Interviewing: The Art of Understanding, 3rd edition. Not affiliated with or endorsed by the author or publisher. For education only; not clinical guidance. All patient statements, cases and names are composed for teaching; they are not transcripts from the book.
