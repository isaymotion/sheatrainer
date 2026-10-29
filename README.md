# Psychiatric Interviewing Trainer

A practice space for psychiatry residents learning to interview patients sensitively and with compassion. Content is based on study guides for Shawn Christopher Shea, *Psychiatric Interviewing: The Art of Understanding* (3rd ed.). Part I (Chapters 1–8), Part II (Chapters 9–15), and Part III (Chapters 16–18) are included.

This app was created by Isabella Navarro, MD. Last updated October 2026. isaymotion@gmail.com

## What's inside

- **Study guides**: a full reading guide per chapter (Chapters 1–18, all of Parts I–III), with a high-yield box, clickable glossary terms, section bookmarks, and links into practice. Written in our own words as a companion to the book.
- **Learn / Quick review**: key ideas, a pocket card of pearls, and vocabulary for each chapter.
- **Bookmarks**: saved study guide sections, kept in each user's browser.
- **Response practice**: 87 composed clinical moments, each with three replies explained (best, workable, likely to backfire).
- **Chapter quizzes**: 108 questions.
- **Simulated interviews**: 16 branching cases, four of them playable in Filipino with a Sa Tagalog switch (patient lines and choices in Tagalog, English underneath). Part I: paranoid patient, angry patient, shut-down veteran, wandering patient, overdose verbal video, reluctant teen, culture and the quiet yes, potential violence. Part II: hidden bipolar history, dysphoric mania before an antidepressant, the window shade, alcohol withdrawal delirium, delusional disorder and dangerousness, command hallucinations, borderline differential, engaging the grandiose pole. A sunflower gauge tracks blending and a bar tracks the database gathered.
- **Technique drills**: degree of openness, facilic gates, validity techniques, empathic valence, mood presentations, delusional disorder subtypes, first-rank symptoms, personality probes, stages of the self (80 items), plus four Tagalog drills: Sabihin sa Tagalog, idioms of distress, register and respect (po, kayo, ikaw), and Pakinggan (54 items).
- **Flashcards**: 300 terms, reviewed with spaced repetition (Leitner boxes). Rate each card Again, Good, or Easy; cards return after 1, 3, 7, 14, or 30 days. The Progress page shows cards learned and due today.
- **Progress**: saved in each user's own browser (localStorage). Nothing is sent anywhere.
- **Backup export / import**: on the Progress page, export all progress, bookmarks, and the flashcard schedule to a JSON file, and import it in another browser or device.
- **Theme**: light, dark, or match device, from the top-bar button or Settings on the Progress page. Saved per device.
- **What's New**: a page (`#/whats-new`, linked from the menu, About, and Home) listing each release in plain language. Add new entries at the top of `WHATS_NEW` in `app.js`.

## Publish on GitHub Pages

1. Create a new repository on GitHub (for example `interviewing-trainer`).
2. Upload everything in this folder to the root of the repository, keeping the folder structure (`index.html`, `app.js`, `styles.css`, `manifest.webmanifest`, `.nojekyll`, `content/`, `icons/`).
3. In the repository, go to **Settings → Pages**. Under **Build and deployment**, choose **Deploy from a branch**, select `main` and `/ (root)`, then save.
4. After a minute or two, the site appears at `https://<your-username>.github.io/<repository-name>/`.

No build step is needed. To test locally, open `index.html` in a browser.

## Adding later parts

Content lives in plain JavaScript files in `content/`. Each file registers itself on `window.TRAINER`.

1. Create `content/part3-chapters.js` (and optionally `content/part3-practice.js`) following the same structure as the existing files, but register under `parts.part3`:

   ```js
   window.TRAINER = window.TRAINER || { parts: {} };
   (function () {
     var part = (window.TRAINER.parts.part3 = window.TRAINER.parts.part3 || {});
     part.id = "part3";
     part.numeral = "III";
     part.title = "Mastering Complex Interviewing Tasks Demanded in Everyday Clinical Practice";
     part.blurb = "...";
     part.chapters = [ { id: "ch16", num: 16, title: "The Mental Status", ... } ];
   })();
   ```

2. Add the script tags in `index.html`, before `app.js`:

   ```html
   <script src="content/part3-chapters.js"></script>
   <script src="content/part3-practice.js"></script>
   ```

The app picks up new parts automatically: chapters, practice items, quizzes, simulations, drills, and flashcards all appear in their sections, and the "Coming soon" list for that part disappears.

## Adding a study guide

Create `content/guide-chN.js` following the schema at the top of `content/guide-ch1.js`, and add its script tag in `index.html` before `app.js`. Link glossary terms inline with `[[term]]` or `[[glossary term|shown text]]`; the term must exist in some chapter's glossary. The chapter's Learn page switches to the study guide automatically, with Quick review one tap away.

## Notes

- A drill set can set `speaker` ("Patient", "Clinician", or "" for a plain case description) and `prompt` to change how its items are framed.
- All patient statements, cases, and names are composed for teaching; they are not transcripts from the book.
- This is an educational tool, not clinical guidance. Confidentiality limits, reporting duties, and risk procedures vary by institution and jurisdiction.
- Fonts (Newsreader, Atkinson Hyperlegible) load from Google Fonts, with system fallbacks if offline.


## Navigation

- **Menu (three bars, upper left):** a drawer listing every part and chapter, with a Guide badge where a study guide exists and the current chapter highlighted.
- **Back / Forward:** arrows in the top bar; greyed out when there is nowhere to go. Going back or forward returns you to where you were on the page.
- **Keyboard shortcuts:** Alt+Left arrow goes back, Alt+Right arrow goes forward (ignored while typing in a field).
- **Search:** the Search button, or press `/` (or Ctrl/Cmd+K). It searches chapters, study-guide text, high-yield boxes, glossary terms, practice cases, interviews and drills. Arrow keys and Enter pick a result; Escape closes. The index builds itself from whatever content files are loaded, so new chapters and guides are searchable automatically.
