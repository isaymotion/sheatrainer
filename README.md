# Psychiatric Interviewing Trainer

A practice space for psychiatry residents learning to interview patients sensitively and with compassion. Content is based on study guides for Shawn Christopher Shea, *Psychiatric Interviewing: The Art of Understanding* (3rd ed.). Part I (Chapters 1–8) and Part II (Chapters 9–15) are included.

This app was created by Isabella Navarro, MD. Last updated October 2026. isaymotion@gmail.com

## What's inside

- **Learn**: key ideas, a pocket card of pearls, and vocabulary for each chapter.
- **Response practice**: 87 composed clinical moments, each with three replies explained (best, workable, likely to backfire).
- **Chapter quizzes**: 78 questions.
- **Simulated interviews**: 16 branching cases. Part I: paranoid patient, angry patient, shut-down veteran, wandering patient, overdose verbal video, reluctant teen, culture and the quiet yes, potential violence. Part II: hidden bipolar history, dysphoric mania before an antidepressant, the window shade, alcohol withdrawal delirium, delusional disorder and dangerousness, command hallucinations, borderline differential, engaging the grandiose pole. A sunflower gauge tracks blending and a bar tracks the database gathered.
- **Technique drills**: degree of openness, facilic gates, validity techniques, empathic valence, mood presentations, delusional disorder subtypes, first-rank symptoms, personality probes, stages of the self (80 items).
- **Flashcards**: 158 terms.
- **Progress**: saved in each user's own browser (localStorage). Nothing is sent anywhere.

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

## Notes

- A drill set can set `speaker` ("Patient", "Clinician", or "" for a plain case description) and `prompt` to change how its items are framed.
- All patient statements, cases, and names are composed for teaching; they are not transcripts from the book.
- This is an educational tool, not clinical guidance. Confidentiality limits, reporting duties, and risk procedures vary by institution and jurisdiction.
- Fonts (Newsreader, Atkinson Hyperlegible) load from Google Fonts, with system fallbacks if offline.
