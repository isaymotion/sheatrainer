# Psychiatric Interviewing Trainer

A practice space for psychiatry residents learning to interview patients sensitively and with compassion. Content is based on study guides for Shawn Christopher Shea, *Psychiatric Interviewing: The Art of Understanding* (3rd ed.). Part I (Chapters 1–8) is included.

This app was created by Isabella Navarro, MD. Last updated October 2026. isaymotion@gmail.com

## What's inside

- **Learn**: key ideas, a pocket card of pearls, and vocabulary for each chapter.
- **Response practice**: 46 composed clinical moments, each with three replies explained (best, workable, likely to backfire).
- **Chapter quizzes**: 40 questions.
- **Simulated interviews**: 8 branching cases (paranoid patient, angry patient, shut-down veteran, wandering patient, overdose verbal video, reluctant teen, culture and the quiet yes, potential violence). A sunflower gauge tracks blending and a bar tracks the database gathered.
- **Technique drills**: degree of openness, facilic gates, validity techniques, empathic valence (42 items).
- **Flashcards**: 88 terms.
- **Progress**: saved in each user's own browser (localStorage). Nothing is sent anywhere.

## Publish on GitHub Pages

1. Create a new repository on GitHub (for example `interviewing-trainer`).
2. Upload everything in this folder to the root of the repository, keeping the folder structure (`index.html`, `app.js`, `styles.css`, `manifest.webmanifest`, `.nojekyll`, `content/`, `icons/`).
3. In the repository, go to **Settings → Pages**. Under **Build and deployment**, choose **Deploy from a branch**, select `main` and `/ (root)`, then save.
4. After a minute or two, the site appears at `https://<your-username>.github.io/<repository-name>/`.

No build step is needed. To test locally, open `index.html` in a browser.

## Adding Part II later

Content lives in plain JavaScript files in `content/`. Each file registers itself on `window.TRAINER`.

1. Create `content/part2-chapters.js` (and optionally `content/part2-practice.js`) following the same structure as the Part I files, but register under `parts.part2`:

   ```js
   window.TRAINER = window.TRAINER || { parts: {} };
   (function () {
     var part = (window.TRAINER.parts.part2 = window.TRAINER.parts.part2 || {});
     part.id = "part2";
     part.numeral = "II";
     part.title = "The Interview and Psychopathology: From Differential Diagnosis to Understanding";
     part.blurb = "...";
     part.chapters = [ { id: "ch9", num: 9, title: "Mood Disorders", ... } ];
   })();
   ```

2. Add the script tags in `index.html`, before `app.js`:

   ```html
   <script src="content/part2-chapters.js"></script>
   <script src="content/part2-practice.js"></script>
   ```

The app picks up new parts automatically: chapters, practice items, quizzes, simulations, drills, and flashcards all appear in their sections, and the "Coming soon" list for that part disappears.

## Notes

- All patient statements, cases, and names are composed for teaching; they are not transcripts from the book.
- This is an educational tool, not clinical guidance. Confidentiality limits, reporting duties, and risk procedures vary by institution and jurisdiction.
- Fonts (Newsreader, Atkinson Hyperlegible) load from Google Fonts, with system fallbacks if offline.
