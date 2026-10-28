/* Psychiatric Interviewing Trainer — application logic
   Plain JavaScript, no build step. Content lives in /content/*.js and registers itself on window.TRAINER. */
(function () {
  "use strict";

  /* ───────── Content registry ───────── */
  var TR = window.TRAINER || { parts: {} };
  var PART_ORDER = ["part1", "part2", "part3", "part4"];

  // Shown in Learn until each part's content file is added.
  var UPCOMING = [
    { id: "part3", numeral: "III", title: "Mastering Complex Interviewing Tasks Demanded in Everyday Clinical Practice",
      chapters: [[16, "The Mental Status"], [17, "Exploring Suicidal Ideation"], [18, "Exploring Violent and Homicidal Ideation"]] },
    { id: "part4", numeral: "IV", title: "Specialized Topics and Advanced Interviewing",
      chapters: [[19, "Transforming Anger, Confrontation, and Other Points of Disengagement"], [20, "Culturally Adaptive Interviewing"], [21, "Vantage Points"],
        [22, "Motivational Interviewing"], [23, "Medication Interest Model"]] }
  ];

  // Chapters listed in UPCOMING that have no content file yet, for a given part id.
  function pendingChapters(partId) {
    var have = {};
    chapters().forEach(function (c) { have[c.num] = 1; });
    var u = UPCOMING.filter(function (x) { return x.id === partId; })[0];
    return u ? u.chapters.filter(function (c) { return !have[c[0]]; }) : [];
  }
  function parts() {
    return PART_ORDER.map(function (id) { return TR.parts[id]; }).filter(function (p) { return p && p.chapters && p.chapters.length; });
  }
  function chapters() {
    var out = [];
    parts().forEach(function (p) { p.chapters.forEach(function (c) { c._part = p; out.push(c); }); });
    return out;
  }
  function chapterById(id) { return chapters().filter(function (c) { return c.id === id; })[0]; }
  function chapterByNum(n) { return chapters().filter(function (c) { return c.num === n; })[0]; }
  function simulations() {
    var out = [];
    parts().forEach(function (p) { (p.simulations || []).forEach(function (s) { out.push(s); }); });
    return out;
  }
  function drills() {
    var out = [];
    parts().forEach(function (p) { (p.drills || []).forEach(function (d) { out.push(d); }); });
    return out;
  }
  function allPractice() {
    var out = [];
    chapters().forEach(function (c) { (c.practice || []).forEach(function (it) { it._ch = c; out.push(it); }); });
    return out;
  }

  /* ───────── Storage ───────── */
  var KEY = "pit.progress.v1";
  var STORE_KEYS = ["practice", "quiz", "sims", "cards", "drills", "bookmarks"];
  function emptyStore() { var o = {}; STORE_KEYS.forEach(function (k) { o[k] = {}; }); return o; }
  var store = emptyStore();
  try {
    var raw = window.localStorage.getItem(KEY);
    if (raw) {
      var parsed = JSON.parse(raw);
      Object.keys(store).forEach(function (k) { if (parsed[k]) store[k] = parsed[k]; });
    }
    // One-time migration: flashcards used to be stored as `true` ("Got it"); they are now Leitner box entries.
    if (normalizeCards(store.cards)) save();
  } catch (e) { /* storage unavailable: progress lives for this session only */ }
  function save() {
    try { window.localStorage.setItem(KEY, JSON.stringify(store)); } catch (e) { /* ignore */ }
  }

  /* ───────── Spaced repetition (Leitner boxes) ─────────
     store.cards[key] = { box: 0..5, due: ms timestamp, reps: n }. A missing entry is a new card. */
  var SRS_DAYS = [0, 1, 3, 7, 14, 30];
  var DAY_MS = 86400000;
  function normalizeCards(cards) {
    var changed = false, now = Date.now();
    Object.keys(cards).forEach(function (k) {
      var v = cards[k];
      if (v === true) { cards[k] = { box: 2, due: now, reps: 1 }; changed = true; return; }
      if (!v || typeof v !== "object" || typeof v.box !== "number") { delete cards[k]; changed = true; return; }
      var box = Math.max(0, Math.min(5, Math.round(v.box)));
      if (box !== v.box || typeof v.due !== "number" || typeof v.reps !== "number") {
        cards[k] = { box: box, due: typeof v.due === "number" ? v.due : now, reps: typeof v.reps === "number" ? v.reps : 0 };
        changed = true;
      }
    });
    return changed;
  }
  function cardEntry(key) { var e = store.cards[key]; return e && typeof e === "object" ? e : null; }
  function isDue(key, now) { var e = cardEntry(key); return !e || e.due <= now; }
  function endOfDay(offsetDays) { var d = new Date(); d.setHours(23, 59, 59, 999); return d.getTime() + (offsetDays || 0) * DAY_MS; }
  function cardDeck(scope) {
    var deck = [];
    chapters().forEach(function (c) {
      if (scope === "all" || c.id === scope) (c.glossary || []).forEach(function (g) { deck.push({ term: g.term, def: g.def, ch: c.num, key: c.id + ":" + g.term }); });
    });
    return deck;
  }
  function gradeCard(key, grade) {
    var e = cardEntry(key) || { box: 0, due: 0, reps: 0 }, now = Date.now();
    var box = grade === "again" ? 0 : Math.min(5, e.box + (grade === "easy" ? 2 : 1));
    store.cards[key] = { box: box, due: now + SRS_DAYS[box] * DAY_MS, reps: (e.reps || 0) + 1 };
    save();
  }
  function fmtDay(ms) {
    var d = new Date(ms);
    if (ms <= endOfDay(0)) return "today";
    if (ms <= endOfDay(1)) return "tomorrow";
    return d.toLocaleDateString(undefined, { weekday: "short", month: "short", day: "numeric" });
  }

  /* ───────── Theme (light / dark / match device), saved per device ───────── */
  var THEME_KEY = "sheatrainer.theme";
  var THEME_NAMES = { auto: "Match device", light: "Light", dark: "Dark" };
  var THEME_ICONS = {
    light: '<svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true"><circle cx="12" cy="12" r="4.2" fill="none" stroke="currentColor" stroke-width="2"/><path d="M12 2.5v2.2M12 19.3v2.2M2.5 12h2.2M19.3 12h2.2M5.3 5.3l1.6 1.6M17.1 17.1l1.6 1.6M5.3 18.7l1.6-1.6M17.1 6.9l1.6-1.6" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>',
    dark: '<svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true"><path d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5z" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/></svg>',
    auto: '<svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true"><circle cx="12" cy="12" r="8" fill="none" stroke="currentColor" stroke-width="2"/><path d="M12 4a8 8 0 0 1 0 16z" fill="currentColor"/></svg>'
  };
  var darkMQ = window.matchMedia ? window.matchMedia("(prefers-color-scheme: dark)") : null;
  function getTheme() {
    try { var t = window.localStorage.getItem(THEME_KEY); return t === "light" || t === "dark" ? t : "auto"; } catch (e) { return "auto"; }
  }
  function applyTheme(t) {
    var root = document.documentElement;
    if (t === "light" || t === "dark") root.setAttribute("data-theme", t); else root.removeAttribute("data-theme");
    var dark = t === "dark" || (t !== "light" && darkMQ && darkMQ.matches);
    var meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute("content", dark ? "#111B15" : "#1C3126");
    var btn = document.getElementById("theme-btn");
    if (btn) {
      btn.innerHTML = THEME_ICONS[t];
      btn.setAttribute("aria-label", "Theme: " + THEME_NAMES[t]);
      btn.setAttribute("title", "Theme: " + THEME_NAMES[t]);
    }
    document.querySelectorAll("[data-theme-opt]").forEach(function (b) { b.setAttribute("aria-pressed", b.getAttribute("data-theme-opt") === t ? "true" : "false"); });
  }
  function setTheme(t) {
    if (t !== "light" && t !== "dark") t = "auto";
    try {
      if (t === "auto") window.localStorage.removeItem(THEME_KEY); else window.localStorage.setItem(THEME_KEY, t);
    } catch (e) { /* storage unavailable: applies for this visit only */ }
    applyTheme(t);
  }
  var themeNow = getTheme();
  applyTheme(themeNow);
  (function () {
    var btn = document.getElementById("theme-btn");
    if (btn) btn.addEventListener("click", function () {
      var cur = document.documentElement.getAttribute("data-theme") || "auto";
      setTheme({ auto: "light", light: "dark", dark: "auto" }[cur]);
    });
    // Keep the browser bar colour right when the device switches while on "Match device".
    function onDeviceChange() { applyTheme(document.documentElement.getAttribute("data-theme") || "auto"); }
    if (darkMQ) { if (darkMQ.addEventListener) darkMQ.addEventListener("change", onDeviceChange); else if (darkMQ.addListener) darkMQ.addListener(onDeviceChange); }
  })();

  /* ───────── What's new ─────────
     Newest first. Add an entry at the top for each release; `teaser` (optional) shows on Home for the newest entry. */
  var WHATS_NEW = [
    { date: "2026-10-28", title: "Chapter 12 study guide: Beneath the Psychosis",
      teaser: "New: the Chapter 12 study guide on the person beneath the psychosis: the porous ego and Schneider's first-rank symptoms, akathisia and catatonia, raising and exploring voices, command hallucinations, the wounded self, families, culture and language (including a Filipino patient whose delusions lived only in Ilocano), and Jake.",
      items: [
        "A full study guide for Chapter 12 in nine sections: sleep, the porous ego, and the first-rank symptoms with a question for each; akathisia and the approach to a catatonic patient; what voices are and the relationship patients form with them; raising voices without disengaging and exploring their phenomenology (Kenney); command hallucinations and the four dimensions of dangerousness; thought process, the agitated patient, and the gates into psychotic material; the wounded self, the precox feeling, and agreeing to disagree; families, mourning, the alliance with parents, and confidentiality; culture, subculture, and language; and the worldview wing with Jake.",
        "Fourteen glossary terms added to Chapter 12 (made symptoms, thought withdrawal, thought insertion, phenomenological leverage, audible thoughts, thought leakage, auditory illusion, negativism, ambitendency, precox feeling, agree to disagree, recovery vs rehabilitation, counterprojection, koro).",
        "Sa Tagalog cards on five Chapter 12 sections."
      ] },
    { date: "2026-10-28", title: "Chapter 11 study guide: Psychotic Disorders",
      items: [
        "A full study guide for Chapter 11 in eleven sections: what psychosis is, visual hallucinations and withdrawal, intoxication and medications and the interview with the police, schizophrenia's signature, mood versus psychosis and the schizoaffective middle, delusional disorders with dangerousness and paraphrenia, the life cycle of a psychosis and its soft signs, hallucinations that are not psychosis, delirium and the bedside tests, medical psychosis and the screening physical, and micropsychotic episodes, flashbacks, and partial complex seizures.",
        "Twenty-four glossary terms added to Chapter 11 (including schizophreniform and brief psychotic disorder, schizoaffective disorder, the schizo–bipolar continuum, distance from a delusion, overvalued idea, Othello syndrome, folie à deux, confrontation with a paranoid persecutor, partition delusion, psychotic matrix, the Confusion Assessment Method, the anticholinergic syndrome, and partial complex seizures).",
        "Sa Tagalog cards on five Chapter 11 sections."
      ] },
    { date: "2026-10-27", title: "Chapter 10 study guide: Beneath the Mood Disorder",
      items: [
        "A full study guide for Chapter 10: the body as first messenger and the depressive paradox, agitated depression versus dysphoric mania, blocking of the future and the shrinking active world, the window shade response, opening an ideational cage, Beck's distortions and the immunity to logic, loneliness, burdensomeness, helplessness and hopelessness, the defenses that hide depression, the dyadic wing and countertransference, first tears, the family as co-sufferer and informant, culture and stigma, and the framework for meaning.",
        "Nine glossary terms added to Chapter 10 (ossification, delusional guilt, hopelessness, isolation as a defense, projection, countertransference, family homeostasis, identified patient, existential crisis).",
        "Sa Tagalog cards on five Chapter 10 sections."
      ] },
    { date: "2026-10-27", title: "Sa Tagalog: links to Usap Tayo and a new drill",
      items: [
        "'Sa Tagalog' cards at the end of forty study-guide sections (Chapters 1 to 9 and 16 to 18): why the topic matters in Filipino, one example phrase, and a link to the matching section of Usap Tayo, the companion Tagalog app. Usap Tayo links back here from each of its psychiatry sections.",
        "New technique drill: Sabihin sa Tagalog. Twelve of Shea's validity techniques and mood questions; pick the respectful Tagalog wording that keeps the technique, and learn why the leading, closed, or rude options lose it.",
        "Tagalog wording is original, conversational Filipino written for training; it is marked as draft until reviewed."
      ] },
    { date: "2026-10-27", title: "Chapter 9 study guide: Mood Disorders",
      items: [
        "A full study guide for Chapter 9: how diagnostic systems are built, major depression and SIG E CAPS, exploring anhedonia and the neurovegetative symptoms conversationally, melancholia, anxiety and alcohol, the bipolar trap and euphoric mania, mixed states and dysphoric mania, bipolar II, induced episodes and cyclothymia, denial of depression, culture, atypical features and the organic screen, persistence and the history of the present illness, and the family history.",
        "Sixteen glossary terms added to Chapter 9 (including categorical vs dimensional systems, SIG E CAPS, early morning awakening, euphoric mania, agitated depression, mood-congruent / mood-incongruent, sealing over, hypomanic episode, cyclothymic disorder, rapid cycling, mood reactivity, rejection sensitivity, leaden paralysis, nervios)."
      ] },
    { date: "2026-10-27", title: "Chapter 8 study guide: Nonverbal Behavior",
      items: [
        "A full study guide for Chapter 8: the interview as mime, proxemics, kinesics, and paralanguage, immediacy and context, nonverbal hints of hidden psychopathology (Mary), anxiety, deception, and ambivalence, the unspoken no and kinesic reciprocals, engaging with your body, the guarded patient and your own habits, note taking, calming potential violence, and technology.",
        "Seven glossary terms added to Chapter 8 (illustrators and regulators, affective display, displacement activity, micro-expression, postural echoing, intention movements and vacuum gestures, naked communication effect). All Part I and Part III study guides are now complete."
      ] },
    { date: "2026-10-27", title: "Chapter 7 study guide: Assessment Perspectives and the Human Matrix",
      items: [
        "A full study guide for Chapter 7: assessment as a bridge, the healing power and limits of diagnosis, the two delineations and the lost axes, the DSM-5 applied to Debbie, matrix treatment planning (Engel, intra- and inter-wing interventions, Mr. Franklin), all six wings with Debbie and Ted, the eight core pains, and Debbie's course.",
        "Five glossary terms added to Chapter 7 (six wings, intra-wing intervention, hidden diagnosis, worldview, caring/healing/teaching)."
      ] },
    { date: "2026-10-27", title: "Chapter 6 study guide: Understanding the Person Beneath the Diagnosis",
      items: [
        "A full study guide for Chapter 6: the two arrows to treatment planning (Jennifer), parataxic distortion and intersubjectivity, reliability and the reliably invalid, Whitehorn's interpersonal perspective, phenomenological inquiry and the tense shift, the wellness triad of strengths, skills, and interests (Jamal), kulturbrille, and culture in treatment planning (Anna's mother).",
        "Four glossary terms added to Chapter 6 (Daseins-analysis, present-tense shift, VIA Inventory of Strengths, patient skill)."
      ] },
    { date: "2026-10-27", title: "Chapter 5 study guide: Validity Techniques",
      items: [
        "A full study guide for Chapter 5: why patients don't always tell the truth; anchor, tagging, and exaggeration; defining terms and clarifying norms; normalization, both types of shame attenuation, induction to bragging; the behavioral incident and verbal video; gentle assumption, denial of the specific, the catch-all, symptom amplification; doublets and triplets; bogus symptoms, soundings, and the sexual history; and the closing interview with Billy.",
        "Four glossary terms added to Chapter 5 (defining technical terms, patient-opinion question, endorsement of bogus symptoms, validity doublet)."
      ] },
    { date: "2026-10-27", title: "Chapter 4 study guide: Facilics",
      items: [
        "A full study guide for Chapter 4: content and process regions, using time (the 5-minute check, the dead zone), stilted versus blended expansions, pivot points and spontaneous gates, natural and manufactured gates, referred gates for the cognitive exam and sensitive topics, phantom, implied, introduced, and observed gates.",
        "Nine glossary terms added to Chapter 4 (free facilitation, transformational, and psychodynamic regions; tracking; pivot point; spontaneous, implied, and introduced gates; split expansion)."
      ] },
    { date: "2026-10-27", title: "Chapter 3 study guide: The Dynamic Structure of the Interview",
      items: [
        "A full study guide for Chapter 3: the introduction and confidentiality, the opening and PACE, the Degree of Openness Continuum, transforming shut-down, wandering, and rehearsed interviews, the body's database, and the closing and termination.",
        "Seven glossary terms added to Chapter 3 (Degree of Openness Continuum, open-ended question, closed-ended and variable verbalizations, facilitating and focusing statements, return visit)."
      ] },
    { date: "2026-10-27", title: "Chapter 18 study guide: Exploring Violent and Homicidal Ideation",
      items: [
        "A full study guide for Chapter 18: the three domains of violence, what structured instruments can and cannot predict, risk factors, the tetrad of lethality for violence, paranoid process and Knoll and Meloy's four steps, domestic violence caveats, and the CADE Approach region by region.",
        "Chapter 18 key ideas, pocket card, quiz, and flashcards (26 terms). Part III is now complete."
      ] },
    { date: "2026-10-26", title: "Chapter 17 study guide: Exploring Suicidal Ideation",
      items: [
        "A full study guide for Chapter 17: risk factors, warning signs, and protective factors; the tetrad of lethality; the equation of suicidal intent; timing the inquiry; and the CASE Approach region by region, with composed examples of the verbal video, gentle assumption, and denials of the specific.",
        "Chapter 17 key ideas, pocket card, quiz, and flashcards (41 terms)."
      ] },
    { date: "2026-10-26", title: "Themes, spaced repetition, and backups",
      items: [
        "Theme button in the top bar: match your device, or always use light or dark. Your choice is saved on this device and can also be changed under Settings on the Progress page.",
        "Flashcards now use spaced repetition. Rate each card Again, Good, or Easy, and it comes back after 1, 3, 7, 14, or 30 days depending on how well you know it.",
        "Export a backup of your progress to a file, and import it on another browser or device (Progress page).",
        "Keyboard shortcuts: Alt+Left arrow goes back and Alt+Right arrow goes forward.",
        "Going back or forward now returns you to where you were on the page.",
        "This What's new page."
      ] },
    { date: "2026-10-14", title: "Chapter 16 study guide: The Mental Status",
      items: ["A full study guide for Chapter 16, the first chapter of Part III, with high-yield points, glossary terms, and bookmarks."] },
    { date: "2026-10-14", title: "Chapter menu, back and forward buttons, and search",
      items: [
        "A menu (three bars, upper left) lists every part and chapter and shows which have study guides.",
        "Back and forward arrows in the top bar.",
        "Search across chapters, study guides, glossary terms, practice cases, interviews, and drills. Press / or Ctrl+K to open it."
      ] },
    { date: "2026-10-14", title: "Chapter 2 study guide: Beyond Empathy",
      items: ["A full study guide for Chapter 2."] },
    { date: "2026-10-08", title: "Chapter 1 study guide, bookmarks, and glossary pop-ups",
      items: [
        "The first full chapter study guide, with a high-yield box and links into practice.",
        "Bookmark any study guide section and find it later under Bookmarks.",
        "Tap an underlined term to see its glossary definition."
      ] },
    { date: "2026-10-08", title: "Part II: The Interview and Psychopathology",
      items: [
        "Chapters 9 to 15 with key ideas, practice moments, quizzes, drills, and flashcards.",
        "Eight new simulated interviews.",
        "A new sunflower app icon."
      ] },
    { date: "2026-10-02", title: "First release: Part I",
      items: [
        "Chapters 1 to 8 with key ideas, pocket cards, and vocabulary.",
        "Response practice, chapter quizzes, technique drills, and flashcards.",
        "Eight branching simulated interviews with the sunflower blending gauge.",
        "Progress saved in your browser."
      ] }
  ];
  function whatsNewSorted() {
    return WHATS_NEW.map(function (w, i) { return { w: w, i: i }; })
      .sort(function (a, b) { return a.w.date < b.w.date ? 1 : a.w.date > b.w.date ? -1 : a.i - b.i; })
      .map(function (x) { return x.w; });
  }
  function fmtDate(iso) {
    var p = iso.split("-");
    return new Date(+p[0], +p[1] - 1, +p[2]).toLocaleDateString(undefined, { year: "numeric", month: "long", day: "numeric" });
  }

  /* ───────── Helpers ───────── */
  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (ch) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[ch];
    });
  }
  function shuffle(a) {
    var arr = a.slice();
    for (var i = arr.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = arr[i]; arr[i] = arr[j]; arr[j] = t; }
    return arr;
  }
  function clamp(n) { return Math.max(0, Math.min(100, n)); }
  var VERDICT = { best: "Best response", ok: "Workable", poor: "Likely to backfire" };
  var app = document.getElementById("app");

  /* ───────── Sunflower gauge ─────────
     The flower turns toward the sun and opens as the patient engages. value: 0–100. */
  function flowerSVG(value, label) {
    var v = clamp(value) / 100;
    var petals = "";
    var n = 18;
    for (var i = 0; i < n; i++) {
      var a = (360 / n) * i;
      petals += '<g transform="translate(100 96) rotate(' + a.toFixed(1) + ')"><path class="petal" d="M0,-21 C10,-31 8,-50 0,-60 C-8,-50 -10,-31 0,-21Z" fill="' + (i % 2 ? "#F6B819" : "#E9A20A") + '"/></g>';
    }
    var seeds = "";
    var ga = Math.PI * (3 - Math.sqrt(5));
    for (var k = 1; k < 46; k++) {
      var r = 20 * Math.sqrt(k / 46), th = k * ga;
      seeds += '<circle cx="' + (100 + r * Math.cos(th)).toFixed(1) + '" cy="' + (96 + r * Math.sin(th)).toFixed(1) + '" r="' + (0.9 + r / 18).toFixed(2) + '" fill="#7A4E26"/>';
    }
    return '<svg class="flower" viewBox="0 0 200 230" role="img" aria-label="' + esc(label || "Blending") + ": " + Math.round(value) + ' out of 100" data-flower>' +
      '<g class="sunray" opacity="0.9"><circle cx="182" cy="18" r="11" fill="var(--sun)"/>' +
      '<g stroke="var(--sun)" stroke-width="3" stroke-linecap="round">' +
      '<line x1="182" y1="0" x2="182" y2="3"/><line x1="164" y1="18" x2="167" y2="18"/><line x1="169" y1="5" x2="171" y2="7"/><line x1="169" y1="31" x2="171" y2="29"/><line x1="195" y1="5" x2="193" y2="7"/></g></g>' +
      '<path d="M100 120 C 98 160, 106 190, 100 228" stroke="var(--stem)" stroke-width="6" fill="none" stroke-linecap="round"/>' +
      '<path d="M101 178 C 122 160, 146 166, 152 156 C 140 184, 118 186, 101 182Z" fill="var(--stem)"/>' +
      '<path d="M100 200 C 80 186, 60 192, 52 184 C 62 208, 86 208, 100 204Z" fill="var(--stem)" opacity="0.85"/>' +
      '<g class="head">' + petals +
      '<circle cx="100" cy="96" r="23" fill="#3E2614"/>' + seeds + "</g></svg>";
  }
  function setFlower(svg, value) {
    if (!svg) return;
    var v = clamp(value) / 100;
    var tilt = -42 + 56 * v;
    var head = svg.querySelector(".head");
    head.style.transformOrigin = "100px 120px";
    head.style.transform = "rotate(" + tilt.toFixed(1) + "deg)";
    var s = 0.28 + 0.72 * v;
    svg.querySelectorAll(".petal").forEach(function (p) {
      p.style.transformBox = "fill-box";
      p.style.transformOrigin = "50% 100%";
      p.style.transform = "scale(" + (0.75 + 0.25 * v).toFixed(2) + "," + s.toFixed(2) + ")";
      p.style.opacity = (0.45 + 0.55 * v).toFixed(2);
      p.style.filter = "saturate(" + (0.45 + 0.55 * v).toFixed(2) + ")";
    });
    svg.setAttribute("aria-label", "Blending: " + Math.round(value) + " out of 100");
  }

  /* ───────── Shared bits ───────── */
  function speech(p, who) {
    var inner = String(p == null ? "" : p).replace(/"([^"]*)"/g, "\u2018$1\u2019");
    return '<p class="speech"><span class="speech-who">' + esc(who || "Patient") + "</span>\u201C" + esc(inner) + "\u201D</p>";
  }
  function cue(c) { return c ? '<p class="cue">' + esc(c) + "</p>" : ""; }
  function chapterChips(active, base, extra) {
    var html = '<div class="chips" role="group" aria-label="Choose chapter">';
    html += '<a class="chip" href="#/' + base + '/all" aria-pressed="' + (active === "all") + '">All chapters</a>';
    chapters().forEach(function (c) {
      if (base === "practice" && !(c.practice || []).length) return;
      if (base === "cards" && !(c.glossary || []).length) return;
      html += '<a class="chip" href="#/' + base + "/" + c.id + '" aria-pressed="' + (active === c.id) + '">Ch. ' + c.num + "</a>";
    });
    return html + (extra || "") + "</div>";
  }
  function setNav(route) {
    document.querySelectorAll(".nav a").forEach(function (a) {
      if (a.getAttribute("data-route") === route) a.setAttribute("aria-current", "page");
      else a.removeAttribute("aria-current");
    });
  }
  function optionHTML(o, idx, state) {
    // state: undefined (unanswered) or { chosen }
    if (!state) return '<button class="option" data-action="pick" data-i="' + idx + '">' + esc(o.t) + "</button>";
    var cls = "option " + o.v + (state.chosen === idx ? " chosen" : "");
    return '<button class="' + cls + '" disabled>' + esc(o.t) +
      '<span class="verdict">' + (state.chosen === idx ? "Your choice: " : "") + VERDICT[o.v] + '</span><span class="why">' + esc(o.w) + "</span></button>";
  }

  /* ───────── Views ───────── */
  var views = {};
  var session = {}; // per-view working state

  /* Home */
  views.home = function () {
    setNav("home");
    var pool = allPractice();
    var item = pool[Math.floor(Math.random() * pool.length)];
    session.hero = { item: item, opts: shuffle(item.opts), answered: null, value: 45 };
    var progressCount = Object.keys(store.practice).length;

    var partLists = parts().map(function (p) {
      var items = p.chapters.map(function (c) {
        var done = (c.practice || []).filter(function (it) { return store.practice[it.id]; }).length;
        return '<li><a href="#/learn/' + c.id + '"><span class="ch-num">' + c.num + '</span><span><span class="ch-title">' + esc(c.title) +
          '</span><span class="ch-sub">' + esc(c.sub) + '</span></span><span class="ch-meta">' + ((c.practice || []).length ? done + "/" + c.practice.length + " practiced" : (guideFor(c.id) ? "Study guide" : "")) + "</span></a></li>";
      }).join("");
      return '<section class="section"><h2>Part ' + esc(p.numeral) + " \u00A0" + esc(p.title) + '</h2><ul class="chapter-list">' + items + "</ul></section>";
    }).join("");

    app.innerHTML =
      '<section class="hero">' +
        '<div class="hero-intro">' +
          "<h1>What would you say next?</h1>" +
          '<p class="lede">Practice the moment-to-moment choices that help patients feel safe enough to tell you the truth. The sunflower turns toward you as the patient engages.</p>' +
          whatsNewTeaser() +
          '<div class="panel" id="hero-item" aria-live="polite"></div>' +
        "</div>" +
        '<figure class="hero-flower">' + flowerSVG(45) + "<figcaption>Blending: how engaged this patient feels with you right now.</figcaption></figure>" +
      "</section>" +
      '<section class="section"><h2>Ways to practice</h2><div class="modes">' +
        '<a class="mode" href="#/practice/all"><h3>Response practice</h3><p>One patient statement, three possible replies. Learn why each works or backfires.</p></a>' +
        '<a class="mode" href="#/simulate"><h3>Simulated interviews</h3><p>Branching cases where every choice moves engagement and the database you gather.</p></a>' +
        '<a class="mode" href="#/drills"><h3>Technique drills</h3><p>Name the technique, symptom, or pattern: question types, gates, validity techniques, delusions, first-rank symptoms, personality probes.</p></a>' +
        '<a class="mode" href="#/cards/all"><h3>Flashcards</h3><p>Shea\'s vocabulary, chapter by chapter.</p></a>' +
      "</div></section>" +
      '<p class="muted section">' + progressCount + " of " + pool.length + ' practice items answered so far.</p>' + partLists;
    renderHero();
    setFlower(app.querySelector("[data-flower]"), 45);
  };
  function whatsNewTeaser() {
    var w = whatsNewSorted()[0];
    return w && w.teaser ? '<p class="teaser">' + esc(w.teaser) + ' <a href="#/whats-new">See what\'s new</a></p>' : "";
  }
  function renderHero() {
    var h = session.hero, it = h.item;
    var box = document.getElementById("hero-item");
    var html = '<div class="row"><div class="skill">' + esc(it.skill) + '</div><span class="spacer"></span><span class="counter">Chapter ' + it._ch.num + "</span></div>" +
      '<p class="context">' + esc(it.ctx) + "</p>" + speech(it.p) + cue(it.cue) +
      '<p class="prompt">Choose your response.</p><div class="options">' +
      h.opts.map(function (o, i) { return optionHTML(o, i, h.answered); }).join("") + "</div>";
    if (h.answered) {
      html += '<div class="row" style="margin-top:1rem"><button class="btn" data-action="hero-next">Try another moment</button><a class="btn secondary" href="#/practice/' + it._ch.id + '">More from Chapter ' + it._ch.num + "</a></div>";
    }
    box.innerHTML = html;
  }

  /* Learn index */
  views.learn = function (arg, sub) {
    setNav("learn");
    if (arg) return views.chapter(arg, sub);
    var html = "<h1>Learn</h1><p class=\"lede\">Read each chapter's study guide, or review its key ideas, pocket card, and vocabulary.</p>" + bookmarkTeaser();
    parts().forEach(function (p) {
      html += '<section class="section"><h2>Part ' + esc(p.numeral) + " \u00A0" + esc(p.title) + "</h2><p class=\"muted\">" + esc(p.blurb || "") + '</p><ul class="chapter-list">';
      p.chapters.forEach(function (c) {
        html += '<li><a href="#/learn/' + c.id + '"><span class="ch-num">' + c.num + '</span><span><span class="ch-title">' + esc(c.title) + '</span><span class="ch-sub">' + esc(c.sub) + '</span></span><span class="ch-meta">' + (guideFor(c.id) ? '<span class="tag">Study guide</span>' : (c.concepts || []).length + " key ideas") + "</span></a></li>";
      });
      pendingChapters(p.id).forEach(function (c) {
        html += '<li class="locked"><a aria-disabled="true"><span class="ch-num">' + c[0] + '</span><span><span class="ch-title">' + esc(c[1]) + '</span></span><span class="ch-meta">Coming soon</span></a></li>';
      });
      html += "</ul></section>";
    });
    UPCOMING.forEach(function (u) {
      if (TR.parts[u.id]) return;
      html += '<section class="section"><h2>Part ' + u.numeral + " \u00A0" + esc(u.title) + '</h2><p class="muted">Coming next. These chapters will appear here when their study guides are added.</p><ul class="chapter-list">';
      u.chapters.forEach(function (c) {
        html += '<li class="locked"><a aria-disabled="true"><span class="ch-num">' + c[0] + '</span><span><span class="ch-title">' + esc(c[1]) + '</span></span><span class="ch-meta">Coming soon</span></a></li>';
      });
      html += "</ul></section>";
    });
    app.innerHTML = html;
  };

  /* ───────── Study guide helpers ───────── */
  function guideFor(id) { return (TR.guides || {})[id]; }

  var GLOSSARY = null;
  function glossaryIndex() {
    if (GLOSSARY) return GLOSSARY;
    GLOSSARY = {};
    chapters().forEach(function (c) {
      (c.glossary || []).forEach(function (g) { GLOSSARY[g.term.toLowerCase()] = { term: g.term, def: g.def, ch: c.num }; });
    });
    return GLOSSARY;
  }

  // Escapes text, then turns [[term]] or [[term|shown text]] into glossary buttons.
  function rich(text) {
    return esc(text).replace(/\[\[([^\]|]+)(?:\|([^\]]+))?\]\]/g, function (m, term, shown) {
      return '<button type="button" class="term" data-action="term" data-term="' + term + '" aria-haspopup="dialog" aria-expanded="false">' + (shown || term) + "</button>";
    });
  }

  var BOOKMARK_ICON = '<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><path d="M6 3h12a1 1 0 0 1 1 1v17l-7-4.5L5 21V4a1 1 0 0 1 1-1z"/></svg>';

  function guideLinkHref(l) {
    if (l.kind === "practice") {
      var item = allPractice().filter(function (it) { return it.id === l.id; })[0];
      return item ? "#/practice/" + item._ch.id + "/" + l.id : "#/practice/all";
    }
    if (l.kind === "sim") return "#/simulate/" + l.id;
    if (l.kind === "drill") return "#/drills/" + l.id;
    if (l.kind === "quiz") return "#/quiz/" + l.id;
    return "#/";
  }

  /* "Sa Tagalog" card: links a guide section to the matching section of Usap Tayo (content/tagalog.js). */
  function tagalogCard(chId, secId) {
    var T = window.TRAINER.tagalog, l = T && T.links && T.links[chId + ":" + secId];
    if (!l) return "";
    var href = l.href || (T.base + l.s), title = l.title || T.sections[l.s] || l.s;
    return '<aside class="tl-card"><div class="tl-head"><span class="tl-tag">Sa Tagalog</span><span class="small muted">' + esc(T.status) + "</span></div>" +
      '<p class="tl-why">' + esc(l.why) + "</p>" +
      (l.tl ? '<p class="tl-phrase"><span class="tl-en">' + esc(l.en) + '</span><span class="tl-tl" lang="tl">' + esc(l.tl) + "</span></p>" : "") +
      '<a class="chip tl-link" href="' + esc(href) + '" target="_blank" rel="noopener">Open in ' + esc(T.app) + ": " + esc(title) + "</a></aside>";
  }

  function renderBlock(b) {
    switch (b.type) {
      case "p": return "<p>" + rich(b.text) + "</p>";
      case "list": return '<ul class="g-list">' + b.items.map(function (x) { return "<li>" + rich(x) + "</li>"; }).join("") + "</ul>";
      case "steps": return '<ol class="g-steps">' + b.items.map(function (x) { return "<li>" + rich(x) + "</li>"; }).join("") + "</ol>";
      case "table":
        return '<div class="table-wrap"><table class="g-table"><thead><tr>' + b.head.map(function (h) { return '<th scope="col">' + esc(h) + "</th>"; }).join("") +
          "</tr></thead><tbody>" + b.rows.map(function (r) { return "<tr>" + r.map(function (cell, k) { return (k === 0 ? '<th scope="row">' : "<td>") + rich(cell) + (k === 0 ? "</th>" : "</td>"); }).join("") + "</tr>"; }).join("") + "</tbody></table></div>";
      case "compare":
        return '<div class="g-compare">' + [b.a, b.b].map(function (side) {
          return "<div><h4>" + esc(side.title) + "</h4><ul>" + side.items.map(function (x) { return "<li>" + rich(x) + "</li>"; }).join("") + "</ul></div>";
        }).join("") + "</div>";
      case "case":
        return '<div class="g-case"><h4>' + esc(b.title) + "</h4><p>" + rich(b.text) + '</p><p class="g-source">Case from the chapter, summarized.</p></div>';
      case "exchange":
        return '<figure class="g-exchange">' + (b.title ? "<figcaption>" + esc(b.title) + "</figcaption>" : "") +
          b.lines.map(function (ln) {
            return '<div class="ex-line"><span class="ex-who">' + esc(ln.who) + '</span><span class="ex-t">' + rich(ln.t) + (ln.tag ? ' <span class="ex-tag">' + esc(ln.tag) + "</span>" : "") + "</span></div>";
          }).join("") + (b.note ? '<p class="ex-note">' + rich(b.note) + "</p>" : "") + "</figure>";
      case "pearl": return '<aside class="g-pearl"><h4>' + esc(b.title) + "</h4><p>" + rich(b.text) + "</p></aside>";
    }
    return "";
  }

  /* Glossary popover */
  var termPop = null, termBtn = null;
  function closeTerm() {
    if (termPop) { termPop.remove(); termPop = null; }
    if (termBtn) { termBtn.setAttribute("aria-expanded", "false"); termBtn = null; }
  }
  function openTerm(btn) {
    var same = termBtn === btn;
    closeTerm();
    if (same) return;
    var g = glossaryIndex()[btn.getAttribute("data-term").toLowerCase()];
    if (!g) return;
    termBtn = btn; btn.setAttribute("aria-expanded", "true");
    termPop = document.createElement("div");
    termPop.className = "term-pop"; termPop.setAttribute("role", "dialog"); termPop.setAttribute("aria-label", g.term);
    termPop.innerHTML = '<div class="row"><strong>' + esc(g.term) + '</strong><span class="spacer"></span><button type="button" class="term-close" aria-label="Close definition">×</button></div>' +
      "<p>" + esc(g.def) + '</p><a class="small" href="#/cards/' + chapterByNum(g.ch).id + '">Chapter ' + g.ch + " flashcards</a>";
    document.body.appendChild(termPop);
    var r = btn.getBoundingClientRect(), w = termPop.offsetWidth, h = termPop.offsetHeight;
    var left = Math.max(12, Math.min(window.innerWidth - w - 12, r.left));
    var top = r.bottom + 8;
    if (top + h > window.innerHeight - 12 && r.top - h - 8 > 12) top = r.top - h - 8;
    termPop.style.left = (left + window.scrollX) + "px";
    termPop.style.top = (top + window.scrollY) + "px";
    termPop.querySelector(".term-close").addEventListener("click", function () { var b = termBtn; closeTerm(); if (b) b.focus(); });
  }
  document.addEventListener("click", function (e) {
    if (termPop && !termPop.contains(e.target) && !e.target.closest(".term")) closeTerm();
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && termPop) { var b = termBtn; closeTerm(); if (b) b.focus(); }
  });
  window.addEventListener("resize", closeTerm);

  function bookmarkTeaser() {
    var n = Object.keys(store.bookmarks || {}).length;
    return n ? '<p><a href="#/bookmarks">Your bookmarks (' + n + ")</a></p>" : "";
  }

  /* Chapter page: study guide, or quick review */
  views.chapter = function (id, sub) {
    setNav("learn");
    var c = chapterById(id);
    if (!c) return notFound();
    var guide = guideFor(id);
    var mode = guide && sub !== "review" ? "guide" : "review";
    var prev = chapterByNum(c.num - 1), next = chapterByNum(c.num + 1);

    var head = '<header class="learn-head"><div class="ch-num">Part ' + esc(c._part.numeral) + ", Chapter " + c.num + "</div><h1>" + esc(c.title) + '</h1><p class="lede">' + esc(c.summary) + "</p>" +
      (guide ? '<nav class="seg" aria-label="Chapter view"><a href="#/learn/' + c.id + '"' + (mode === "guide" ? ' aria-current="page"' : "") + '>Study guide</a><a href="#/learn/' + c.id + '/review"' + (mode === "review" ? ' aria-current="page"' : "") + ">Quick review</a></nav>" : "") +
      "</header>";
    var pager = '<div class="row section">' + (prev ? '<a class="btn secondary" href="#/learn/' + prev.id + '">Chapter ' + prev.num + ": " + esc(prev.title) + "</a>" : "") + '<span class="spacer"></span>' +
      (next ? '<a class="btn secondary" href="#/learn/' + next.id + '">Chapter ' + next.num + ": " + esc(next.title) + "</a>" : "") + "</div>";

    if (mode === "review") {
      var sims = simulations().filter(function (s) { return s.chapters.indexOf(c.num) > -1; });
      var concepts = c.concepts.map(function (k) { return '<div class="concept"><h3>' + esc(k.h) + "</h3><p>" + esc(k.b) + "</p></div>"; }).join("");
      var pearls = "<ul>" + c.pearls.map(function (p) { return "<li>" + esc(p) + "</li>"; }).join("") + "</ul>";
      var gloss = '<dl class="glossary">' + c.glossary.map(function (g) { return "<dt>" + esc(g.term) + "</dt><dd>" + esc(g.def) + "</dd>"; }).join("") + "</dl>";
      var simLinks = sims.map(function (s) { return '<a class="btn secondary" href="#/simulate/' + s.id + '">Interview: ' + esc(s.title) + "</a>"; }).join("");
      app.innerHTML = head +
        '<div class="learn-grid"><div>' + concepts +
          '<section class="section"><h2>Vocabulary</h2>' + gloss + "</section>" + pager +
        "</div><aside><div class=\"aside-box\"><h3>Pocket card</h3>" + pearls + "</div>" +
          '<div class="aside-actions">' + ((c.practice || []).length ? '<a class="btn" href="#/practice/' + c.id + '">Practice responses</a>' : "") + ((c.quiz || []).length ? '<a class="btn' + ((c.practice || []).length ? " secondary" : "") + '" href="#/quiz/' + c.id + '">Take the chapter quiz</a>' : "") +
          '<a class="btn secondary" href="#/cards/' + c.id + '">Flashcards</a>' + simLinks + "</div></aside></div>";
      return;
    }

    var hy = guide.highYield;
    var toc = '<li><a href="#/learn/' + c.id + '/high-yield" data-toc="high-yield">High-yield</a></li>' +
      guide.sections.map(function (sec) {
        var marked = store.bookmarks[c.id + ":" + sec.id] ? " marked" : "";
        return '<li><a href="#/learn/' + c.id + "/" + sec.id + '" data-toc="' + sec.id + '" class="' + marked.trim() + '">' + esc(sec.title) + "</a></li>";
      }).join("") +
      '<li><a href="#/learn/' + c.id + '/deeper" data-toc="deeper">Go deeper in the book</a></li>';
    var wide = window.matchMedia("(min-width: 901px)").matches;

    var hyHtml = '<section class="hy guide-sec" id="sec-high-yield" aria-labelledby="hy-h"><h2 id="hy-h">High-yield</h2>' +
      '<div class="hy-block"><h3>Must know</h3><ul>' + hy.mustKnow.map(function (x) { return "<li>" + rich(x) + "</li>"; }).join("") + "</ul></div>" +
      '<div class="hy-block"><h3>Common pitfalls</h3><ul class="hy-pitfalls">' + hy.pitfalls.map(function (x) { return "<li>" + rich(x) + "</li>"; }).join("") + "</ul></div>" +
      '<div class="hy-block"><h3>Words to use</h3><dl class="hy-phrases">' + hy.phrases.map(function (x) { return "<dt>“" + esc(x.say) + "”</dt><dd>" + rich(x.when) + "</dd>"; }).join("") + "</dl></div></section>";

    var secs = guide.sections.map(function (sec) {
      var key = c.id + ":" + sec.id, on = !!store.bookmarks[key];
      var links = (sec.practice || []).map(function (l) { return '<a class="chip" href="' + guideLinkHref(l) + '">' + esc(l.label) + "</a>"; }).join("");
      return '<section class="guide-sec" id="sec-' + sec.id + '" aria-labelledby="h-' + sec.id + '">' +
        '<div class="sec-head"><h2 id="h-' + sec.id + '">' + esc(sec.title) + '</h2><button type="button" class="bm" data-action="bookmark" data-key="' + key + '" data-ch="' + c.id + '" data-sec="' + sec.id + '" data-title="' + esc(sec.title) + '" aria-pressed="' + on + '">' +
          BOOKMARK_ICON + '<span class="bm-label">' + (on ? "Bookmarked" : "Bookmark") + "</span></button></div>" +
        (sec.lede ? '<p class="sec-lede">' + rich(sec.lede) + "</p>" : "") +
        sec.blocks.map(renderBlock).join("") +
        (links ? '<div class="practice-links"><span class="small muted">Practice this</span><div class="chips">' + links + "</div></div>" : "") +
        tagalogCard(c.id, sec.id) +
        "</section>";
    }).join("");

    var deeper = '<section class="guide-sec deeper" id="sec-deeper"><h2>Go deeper in the book</h2><p class="muted">This guide is a companion to Shea’s chapter, not a replacement for it.</p><ul>' +
      guide.deeper.map(function (d) { return "<li><strong>" + esc(d.title) + ".</strong> " + rich(d.text) + "</li>"; }).join("") + "</ul></section>";

    app.innerHTML = head +
      '<div class="guide-grid">' +
        '<div class="guide-side"><details class="toc"' + (wide ? " open" : "") + '><summary>Contents</summary><ol>' + toc + "</ol>" +
          '<p class="small"><a href="#/bookmarks">All bookmarks</a></p></details></div>' +
        '<article class="guide-main"><p class="guide-intro">' + rich(guide.intro) + "</p>" + hyHtml + secs + deeper + pager + "</article>" +
      "</div>";
  };

  /* Bookmarks */
  views.bookmarks = function () {
    setNav("bookmarks");
    var list = Object.keys(store.bookmarks).map(function (k) { var b = store.bookmarks[k]; b.key = k; return b; })
      .filter(function (b) { return chapterById(b.ch); })
      .sort(function (a, b) {
        var ca = chapterById(a.ch).num, cb = chapterById(b.ch).num;
        if (ca !== cb) return ca - cb;
        var g = guideFor(a.ch); var order = g ? g.sections.map(function (s) { return s.id; }) : [];
        return order.indexOf(a.sec) - order.indexOf(b.sec);
      });
    var html = '<div class="narrow"><h1>Bookmarks</h1><p class="lede">Sections you have saved from the study guides. Saved in this browser only.</p>';
    if (!list.length) {
      var first = chapters().filter(function (c) { return guideFor(c.id); })[0];
      html += '<div class="empty">Use the Bookmark button beside any study guide heading to save it here.' + (first ? '<p style="margin-top:1rem"><a class="btn" href="#/learn/' + first.id + '">Open the Chapter ' + first.num + " study guide</a></p>" : "") + "</div></div>";
      app.innerHTML = html; return;
    }
    var lastCh = null;
    html += '<ul class="bm-list">';
    list.forEach(function (b) {
      var c = chapterById(b.ch);
      if (b.ch !== lastCh) { html += '<li class="bm-ch">Chapter ' + c.num + ": " + esc(c.title) + "</li>"; lastCh = b.ch; }
      html += '<li class="bm-item"><a href="#/learn/' + b.ch + "/" + b.sec + '">' + esc(b.title) + '</a><button type="button" class="btn secondary" data-action="unbookmark" data-key="' + esc(b.key) + '">Remove</button></li>';
    });
    app.innerHTML = html + "</ul></div>";
  };

  /* Response practice */
  views.practice = function (arg, itemId) {
    setNav("practice");
    arg = arg || "all";
    var items = arg === "all" ? allPractice() : (chapterById(arg) || {}).practice;
    if (!items) return notFound();
    if (arg !== "all") items.forEach(function (it) { it._ch = chapterById(arg); });
    if (!session.practice || session.practice.key !== arg || itemId) {
      var list = arg === "all" ? shuffle(items) : items.slice();
      var start = 0;
      if (itemId) { list.forEach(function (it, k) { if (it.id === itemId) start = k; }); }
      session.practice = { key: arg, list: list, idx: start, answered: null, score: { best: 0, n: 0 } };
    }
    renderPractice();
  };
  function renderPractice() {
    var s = session.practice;
    var head = "<h1>Response practice</h1><p class=\"lede\">Read the moment, then choose what you would say. Every option is explained after you choose.</p>" + chapterChips(s.key, "practice");
    if (s.idx >= s.list.length) {
      app.innerHTML = head + '<div class="panel section"><h2>Set complete</h2><p>You chose the best response ' + s.score.best + " of " + s.score.n + ' times.</p><div class="row"><button class="btn" data-action="practice-restart">Practice again</button><a class="btn secondary" href="#/progress">See progress</a></div></div>';
      return;
    }
    var it = s.list[s.idx];
    if (!s.opts) s.opts = shuffle(it.opts);
    var html = head + '<div class="panel section" aria-live="polite"><div class="row"><div class="skill">' + esc(it.skill) + '</div><span class="spacer"></span><span class="counter">Chapter ' + it._ch.num + ", item " + (s.idx + 1) + " of " + s.list.length + "</span></div>" +
      '<p class="context">' + esc(it.ctx) + "</p>" + speech(it.p) + cue(it.cue) + '<p class="prompt">What do you say?</p><div class="options">' +
      s.opts.map(function (o, i) { return optionHTML(o, i, s.answered); }).join("") + "</div>";
    if (s.answered) html += '<div class="row" style="margin-top:1.25rem"><button class="btn" data-action="practice-next">' + (s.idx + 1 < s.list.length ? "Next moment" : "Finish set") + "</button></div>";
    app.innerHTML = html + "</div>";
  }

  /* Quiz */
  views.quiz = function (arg) {
    setNav("practice");
    var c = chapterById(arg);
    if (!c) return notFound();
    if (!session.quiz || session.quiz.key !== arg) {
      session.quiz = { key: arg, ch: c, idx: 0, correct: 0, answered: null, order: null };
    }
    renderQuiz();
  };
  function renderQuiz() {
    var s = session.quiz, c = s.ch;
    var head = '<div class="narrow"><h1>Chapter ' + c.num + " quiz</h1><p class=\"lede\">" + esc(c.title) + ": " + esc(c.sub) + "</p>";
    if (s.idx >= c.quiz.length) {
      var pct = Math.round((s.correct / c.quiz.length) * 100);
      store.quiz[c.id] = Math.max(store.quiz[c.id] || 0, pct); save();
      app.innerHTML = head + '<div class="panel"><h2>' + s.correct + " of " + c.quiz.length + " correct</h2><p>Best so far: " + store.quiz[c.id] + '%.</p><div class="row"><button class="btn" data-action="quiz-restart">Retake</button><a class="btn secondary" href="#/learn/' + c.id + '">Review the chapter</a></div></div></div>';
      return;
    }
    var q = c.quiz[s.idx];
    if (!s.order) s.order = shuffle(q.opts.map(function (_, i) { return i; }));
    var opts = s.order.map(function (oi, pos) {
      if (s.answered === null) return '<button class="option" data-action="quiz-pick" data-i="' + oi + '">' + esc(q.opts[oi]) + "</button>";
      var right = oi === q.a, chosen = oi === s.answered;
      var cls = "option " + (right ? "best" : chosen ? "poor" : "dim") + (chosen ? " chosen" : "");
      return '<button class="' + cls + '" disabled>' + esc(q.opts[oi]) + (right ? '<span class="verdict">Correct answer</span>' : chosen ? '<span class="verdict">Your answer</span>' : "") + "</button>";
    }).join("");
    var html = head + '<div class="panel" aria-live="polite"><div class="row"><span class="counter">Question ' + (s.idx + 1) + " of " + c.quiz.length + '</span></div><h2 style="margin-top:.5rem">' + esc(q.q) + '</h2><div class="options">' + opts + "</div>";
    if (s.answered !== null) {
      html += '<div class="result ' + (s.answered === q.a ? "best" : "poor") + '"><b>' + (s.answered === q.a ? "Correct." : "Not quite.") + "</b> " + esc(q.w) + "</div>" +
        '<div class="row" style="margin-top:1rem"><button class="btn" data-action="quiz-next">' + (s.idx + 1 < c.quiz.length ? "Next question" : "See results") + "</button></div>";
    }
    app.innerHTML = html + "</div></div>";
  }

  /* Simulations */
  views.simulate = function (arg) {
    setNav("simulate");
    if (arg) return startSim(arg);
    var cards = simulations().map(function (s) {
      var rec = store.sims[s.id];
      return '<a class="sim-card" href="#/simulate/' + s.id + '"><h3>' + esc(s.title) + '</h3><span class="muted small">Chapter' + (s.chapters.length > 1 ? "s " : " ") + s.chapters.join(" and ") + ". " + esc(s.setting) + "</span><span>" + esc(s.goal) + "</span>" +
        (rec ? '<span class="done">Completed. Best blending ' + rec.best + "</span>" : "") + "</a>";
    }).join("");
    app.innerHTML = "<h1>Simulated interviews</h1><p class=\"lede\">Branching cases with coaching after each choice. Blending tracks engagement; the database tracks how much valid, useful information you have gathered. Good interviews grow both.</p>" +
      '<div class="notice">Cases are composed for teaching and simplified. In real practice, risk assessment, safety planning, and legal obligations follow your supervisor, institution, and local law.</div>' +
      '<div class="sim-grid section">' + cards + "</div>";
  };
  function startSim(id) {
    var sim = simulations().filter(function (s) { return s.id === id; })[0];
    if (!sim) return notFound();
    if (!session.sim || session.sim.sim.id !== id) {
      session.sim = { sim: sim, node: sim.start, b: sim.startB, d: 0, log: [] };
    }
    renderSim();
  }
  function renderSim(scroll) {
    var s = session.sim, sim = s.sim, node = sim.nodes[s.node];
    var transcript = s.log.map(function (l) {
      var db = l.db ? '<span class="delta ' + (l.db > 0 ? "up" : "down") + '">Blending ' + (l.db > 0 ? "+" : "") + l.db + "</span>" : "";
      return "<div>" + speech(l.p) + cue(l.cue) + "</div>" +
        '<div class="turn-you"><span class="speech-who">You</span>' + esc(l.t) + '<div class="coach">' + db + " " + esc(l.fb) + "</div></div>";
    }).join("");

    var current = "";
    if (node.end) {
      var rating = s.b >= 70 ? "Strong engagement" : s.b >= 45 ? "Engagement held, with some strain" : "Engagement was damaged";
      var rec = store.sims[sim.id] || { best: 0, runs: 0 };
      rec.best = Math.max(rec.best, s.b); rec.runs = (rec.runs || 0) + (s.saved ? 0 : 1); rec.done = true;
      store.sims[sim.id] = rec; s.saved = true; save();
      current = (node.p ? "<div>" + speech(node.p) + cue(node.cue) + "</div>" : "") +
        '<div class="panel debrief"><h2>Debrief</h2><p><b>' + rating + ".</b> Final blending " + s.b + ", database " + s.d + ".</p><p>" + esc(node.debrief) + "</p>" +
        '<div class="row"><button class="btn" data-action="sim-restart">Try a different path</button><a class="btn secondary" href="#/simulate">All interviews</a></div></div>';
    } else {
      current = "<div>" + speech(node.p) + cue(node.cue) + '</div><p class="prompt">What do you say or do?</p><div class="options">' +
        shuffleStable(node.choices, s.node).map(function (ch) {
          return '<button class="option" data-action="sim-pick" data-i="' + node.choices.indexOf(ch) + '">' + esc(ch.t) + "</button>";
        }).join("") + "</div>";
    }

    app.innerHTML =
      '<div class="row"><a href="#/simulate" class="small">All interviews</a></div>' +
      "<h1>" + esc(sim.title) + '</h1><p class="lede">' + esc(sim.who) + "</p><p class=\"muted small\">" + esc(sim.setting) + " Goal: " + esc(sim.goal) + "</p>" +
      '<div class="sim-layout section"><div><div class="transcript" aria-live="polite">' + transcript + current + "</div></div>" +
      '<aside class="sim-side">' + flowerSVG(s.b) +
        '<div class="meters"><div><div class="meter-label"><span>Blending</span><b>' + s.b + '</b></div><div class="bar"><i style="width:' + s.b + '%"></i></div></div>' +
        '<div><div class="meter-label"><span>Database</span><b>' + s.d + '</b></div><div class="bar data"><i style="width:' + s.d + '%"></i></div></div>' +
        '<p class="side-note small muted">Engagement and data gathering pull against the clock. The art is growing both.</p></div></aside></div>';
    setFlower(app.querySelector("[data-flower]"), s.b);
    if (scroll) {
      var turns = app.querySelectorAll(".turn-you");
      var last = turns[turns.length - 1];
      if (last) last.scrollIntoView({ behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth", block: "start" });
    }
  }
  var stableOrders = {};
  function shuffleStable(list, key) {
    var k = session.sim.sim.id + ":" + key + ":" + session.sim.log.length;
    if (!stableOrders[k]) stableOrders[k] = shuffle(list);
    return stableOrders[k];
  }

  /* Drills */
  views.drills = function (arg) {
    setNav("drills");
    if (!arg) {
      var cards = drills().map(function (d) {
        var best = store.drills[d.id];
        return '<a class="sim-card" href="#/drills/' + d.id + '"><h3>' + esc(d.title) + '</h3><span class="muted small">Chapter ' + d.chapter + ", " + d.items.length + " items</span><span>" + esc(d.about) + "</span>" + (best != null ? '<span class="done">Best ' + best + "%</span>" : "") + "</a>";
      }).join("");
      app.innerHTML = "<h1>Technique drills</h1><p class=\"lede\">Naming what you do is the first step toward doing it on purpose. Identify the technique in each line.</p><div class=\"sim-grid section\">" + cards + "</div>";
      return;
    }
    var set = drills().filter(function (d) { return d.id === arg; })[0];
    if (!set) return notFound();
    if (!session.drill || session.drill.set.id !== arg) {
      session.drill = { set: set, list: shuffle(set.items), idx: 0, correct: 0, answered: null, opts: null };
    }
    renderDrill();
  };
  function renderDrill() {
    var s = session.drill, set = s.set;
    var head = '<div class="narrow"><div class="row"><a href="#/drills" class="small">All drills</a></div><h1>' + esc(set.title) + '</h1><p class="lede">' + esc(set.about) + "</p>";
    if (s.idx >= s.list.length) {
      var pct = Math.round((s.correct / s.list.length) * 100);
      store.drills[set.id] = Math.max(store.drills[set.id] || 0, pct); save();
      app.innerHTML = head + '<div class="panel"><h2>' + s.correct + " of " + s.list.length + ' correct</h2><div class="row"><button class="btn" data-action="drill-restart">Run it again</button><a class="btn secondary" href="#/drills">Other drills</a></div></div></div>';
      return;
    }
    var it = s.list[s.idx];
    if (!s.opts) {
      if (it.opts) { s.opts = shuffle(it.opts.slice()); }
      else {
        var others = shuffle(set.categories.filter(function (c) { return c !== it.a; })).slice(0, 3);
        s.opts = shuffle(others.concat([it.a]));
      }
    }
    var opts = s.opts.map(function (o) {
      if (s.answered === null) return '<button class="option" data-action="drill-pick" data-v="' + esc(o) + '">' + esc(o) + "</button>";
      var right = o === it.a, chosen = o === s.answered;
      return '<button class="option ' + (right ? "best" : chosen ? "poor" : "dim") + (chosen ? " chosen" : "") + '" disabled>' + esc(o) + "</button>";
    }).join("");
    var html = head + '<div class="panel" aria-live="polite"><div class="row"><span class="counter">' + (s.idx + 1) + " of " + s.list.length + '</span><span class="spacer"></span><span class="counter">' + s.correct + " correct</span></div>" +
      (it.ctx ? '<p class="context" style="margin-top:.75rem">' + esc(it.ctx) + "</p>" : '<div style="height:.75rem"></div>') +
      (set.speaker === "" ? '<p class="drill-case">' + esc(it.say) + "</p>" : speech(it.say, set.speaker || "Clinician")) +
      '<p class="prompt">' + esc(set.prompt || "Which technique is this?") + '</p><div class="options">' + opts + "</div>";
    if (s.answered !== null) {
      html += '<div class="result ' + (s.answered === it.a ? "best" : "poor") + '"><b>' + (s.answered === it.a ? "Correct." : "It's " + esc(it.a) + ".") + "</b> " + esc(it.w) + "</div>" +
        '<div class="row" style="margin-top:1rem"><button class="btn" data-action="drill-next">' + (s.idx + 1 < s.list.length ? "Next" : "See results") + "</button></div>";
    }
    app.innerHTML = html + "</div></div>";
  }

  /* Flashcards (spaced repetition) */
  views.cards = function (arg) {
    setNav("cards");
    arg = arg || "all";
    if (!session.cards || session.cards.key !== arg || !session.cards.queue.length) {
      var deck = cardDeck(arg);
      if (!deck.length) return notFound();
      startCards(arg, deck, false);
    }
    renderCards();
  };
  function startCards(key, deck, ahead) {
    var now = Date.now();
    var queue = ahead ? shuffle(deck) : shuffle(deck.filter(function (c) { return isDue(c.key, now); }));
    session.cards = { key: key, deck: deck, queue: queue, total: queue.length, ahead: ahead, flipped: false, tally: { again: 0, good: 0, easy: 0 }, answered: 0 };
  }
  var SRS_LEGEND = "Again: see it later in this session. Good: up one box. Easy: up two boxes. Boxes 1 to 5 come back after 1, 3, 7, 14, and 30 days.";
  function renderCards() {
    var s = session.cards;
    var head = "<h1>Flashcards</h1><p class=\"lede\">Tap a card to flip it, then rate how well you knew it. Cards you know well come back less often.</p>" + chapterChips(s.key, "cards");
    if (!s.queue.length) {
      var now = Date.now(), scheduled = 0, next = null, tomorrow = 0, endTomorrow = endOfDay(1);
      s.deck.forEach(function (c) {
        var e = cardEntry(c.key);
        if (!e) return;
        scheduled++;
        if (e.due > now && (next === null || e.due < next)) next = e.due;
        if (e.due <= endTomorrow) tomorrow++;
      });
      if (s.answered) {
        var t = s.tally;
        app.innerHTML = head + '<div class="panel section narrow"><h2>Session complete</h2><p>You reviewed ' + s.total + " card" + (s.total === 1 ? "" : "s") + (s.ahead ? " ahead of schedule" : "") + ".</p>" +
          '<div class="srs-stats"><div><b>' + t.again + "</b><span>Again</span></div><div><b>" + t.good + "</b><span>Good</span></div><div><b>" + t.easy + "</b><span>Easy</span></div><div><b>" + tomorrow + "</b><span>Due by tomorrow</span></div></div>" +
          '<div class="row"><a class="btn" href="#/progress">See progress</a><button class="btn secondary" data-action="cards-ahead">Review anyway</button></div></div>';
        return;
      }
      app.innerHTML = head + '<div class="panel section narrow"><h2>All caught up</h2><p>' + scheduled + " card" + (scheduled === 1 ? " is" : "s are") + " scheduled" +
        (next !== null ? ". The next review is due " + esc(fmtDay(next)) + "." : ".") + "</p>" +
        '<p class="muted small">Reviewing ahead only changes a card\'s schedule if you answer it.</p><button class="btn" data-action="cards-ahead">Review anyway</button></div>';
      return;
    }
    var c = s.queue[0], e = cardEntry(c.key);
    var badge = e ? '<span class="box-badge">Box ' + e.box + " of 5</span>" : '<span class="box-badge new">New</span>';
    app.innerHTML = head + '<div class="narrow section"><div class="row"><span class="counter">' + s.queue.length + " left in this session" + (s.ahead ? " (reviewing ahead)" : "") + '</span><span class="spacer"></span>' + badge + '<span class="counter">Chapter ' + c.ch + "</span></div>" +
      '<button class="flash' + (s.flipped ? " flipped" : "") + '" data-action="flip" aria-label="Flip card" style="margin-top:.75rem"><div class="flash-inner">' +
      '<div class="flash-face front"><span class="flash-term">' + esc(c.term) + '</span><span class="muted small">Tap to see the definition</span></div>' +
      '<div class="flash-face back"><span class="muted small">' + esc(c.term) + '</span><span class="flash-def">' + esc(c.def) + "</span></div></div></button>" +
      '<div class="row srs-answers" id="srs-answers"' + (s.flipped ? "" : " hidden") + '><button class="btn secondary" data-action="card-grade" data-grade="again">Again</button><button class="btn" data-action="card-grade" data-grade="good">Good</button><button class="btn secondary" data-action="card-grade" data-grade="easy">Easy</button></div>' +
      '<p class="srs-legend">' + esc(SRS_LEGEND) + "</p></div>";
  }

  /* Progress */
  var progressNote = null; // { ok: bool, text } shown once after an import
  views.progress = function () {
    setNav("progress");
    var now = Date.now(), eod = endOfDay(0), allLearned = 0, allCards = 0, dueToday = 0;
    var rows = chapters().map(function (c) {
      var gl = c.glossary || [], learned = 0;
      gl.forEach(function (g) {
        var e = cardEntry(c.id + ":" + g.term);
        if (e && e.box >= 3) learned++;
        if (!e || e.due <= eod) dueToday++;
      });
      allLearned += learned; allCards += gl.length;
      var items = c.practice || [];
      var answered = items.filter(function (p) { return store.practice[p.id]; });
      var best = answered.filter(function (p) { return store.practice[p.id] === "best"; }).length;
      var sims = simulations().filter(function (s) { return s.chapters[0] === c.num; });
      var simDone = sims.filter(function (s) { return store.sims[s.id]; }).length;
      return "<tr><td><a href=\"#/learn/" + c.id + '">' + c.num + ". " + esc(c.title) + "</a></td><td>" + (items.length ? answered.length + "/" + items.length : "\u2014") + "</td><td>" + (answered.length ? best + "/" + answered.length : "\u2014") +
        "</td><td>" + (store.quiz[c.id] != null ? store.quiz[c.id] + "%" : "\u2014") + "</td><td>" + (sims.length ? simDone + "/" + sims.length : "\u2014") + "</td><td>" + (gl.length ? learned + "/" + gl.length : "\u2014") + "</td></tr>";
    }).join("");
    var drillRows = drills().map(function (d) { return "<tr><td>" + esc(d.title) + "</td><td>" + (store.drills[d.id] != null ? store.drills[d.id] + "%" : "\u2014") + "</td></tr>"; }).join("");
    var theme = getTheme();
    var seg = '<div class="seg" role="group" aria-label="Theme">' + ["auto", "light", "dark"].map(function (t) {
      return '<button type="button" data-action="theme" data-theme-opt="' + t + '" aria-pressed="' + (t === theme) + '">' + THEME_NAMES[t] + "</button>";
    }).join("") + "</div>";
    var note = progressNote ? '<p class="backup-msg ' + (progressNote.ok ? "ok" : "err") + '" role="status">' + esc(progressNote.text) + "</p>" : '<p class="backup-msg" role="status"></p>';
    progressNote = null;
    app.innerHTML = "<h1>Your progress</h1><p class=\"lede\">Saved in this browser only. Clearing your browser data or switching devices starts fresh, unless you export a backup below.</p>" +
      '<p class="section">Flashcards: <b>' + allLearned + " of " + allCards + "</b> learned (box 3 or higher). <b>" + dueToday + "</b> due today, including new cards" +
        (dueToday ? '. <a href="#/cards/all">Review now</a>' : ".") + "</p>" +
      '<div class="table-wrap"><table class="progress"><thead><tr><th>Chapter</th><th>Practiced</th><th>Best responses</th><th>Quiz best</th><th>Interviews</th><th>Cards learned</th></tr></thead><tbody>' + rows + "</tbody></table></div>" +
      '<div class="table-wrap section"><table class="progress"><thead><tr><th>Drill</th><th>Best score</th></tr></thead><tbody>' + drillRows + "</tbody></table></div>" +
      '<section class="section"><h2>Settings</h2><div class="settings-row"><span>Theme</span>' + seg + '</div><p class="muted small" style="margin-top:.5rem">Saved on this device. You can also use the theme button in the top bar.</p></section>' +
      '<section class="section"><h2>Backup</h2><p class="muted">Save your progress, bookmarks, and flashcard schedule to a file, then import it in another browser or on another device.</p>' +
        '<div class="row"><button class="btn" data-action="export">Export backup</button><button class="btn secondary" data-action="import">Import backup</button>' +
        '<input type="file" id="backup-file" accept=".json,application/json" hidden></div>' + note + "</section>" +
      '<div class="section"><button class="btn secondary" data-action="reset">Reset all progress</button></div>';
  };

  /* Backup export / import */
  function localISODate() {
    var d = new Date();
    return d.getFullYear() + "-" + ("0" + (d.getMonth() + 1)).slice(-2) + "-" + ("0" + d.getDate()).slice(-2);
  }
  function storedTheme() {
    try { return window.localStorage.getItem(THEME_KEY); } catch (e) { return null; }
  }
  function exportBackup() {
    var data = { app: "sheatrainer", version: 1, exported: new Date().toISOString(), theme: storedTheme(), store: store };
    var blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
    var url = URL.createObjectURL(blob);
    var a = document.createElement("a");
    a.href = url; a.download = "sheatrainer-backup-" + localISODate() + ".json";
    document.body.appendChild(a); a.click(); a.remove();
    setTimeout(function () { URL.revokeObjectURL(url); }, 2000);
  }
  function parseBackup(text) {
    var d;
    try { d = JSON.parse(text); } catch (e) { throw new Error("This file could not be read. Choose a .json backup exported from this trainer."); }
    if (!d || typeof d !== "object" || d.app !== "sheatrainer") throw new Error("This file is not a backup from the Psychiatric Interviewing Trainer.");
    if (!d.store || typeof d.store !== "object" || Array.isArray(d.store)) throw new Error("This backup does not contain any saved progress.");
    var out = emptyStore();
    STORE_KEYS.forEach(function (k) {
      var v = d.store[k];
      if (v == null) return;
      if (typeof v !== "object" || Array.isArray(v)) throw new Error("The \u201C" + k + "\u201D section of this backup is not in the expected format.");
      out[k] = v;
    });
    normalizeCards(out.cards);
    var theme = Object.prototype.hasOwnProperty.call(d, "theme") ? (d.theme === "light" || d.theme === "dark" ? d.theme : "auto") : null;
    return { store: out, theme: theme };
  }
  function importBackupFile(file) {
    if (!file) return;
    var reader = new FileReader();
    reader.onload = function () {
      try {
        var b = parseBackup(String(reader.result || ""));
        if (!window.confirm("Replace the progress saved in this browser with this backup?")) return;
        store = b.store; save();
        if (b.theme) setTheme(b.theme);
        session.cards = null;
        progressNote = { ok: true, text: "Backup imported. Your progress has been replaced." };
      } catch (err) {
        progressNote = { ok: false, text: (err && err.message) || "This file could not be imported." };
      }
      views.progress();
    };
    reader.onerror = function () { progressNote = { ok: false, text: "The file could not be read. Try again." }; views.progress(); };
    reader.readAsText(file);
  }
  app.addEventListener("change", function (e) {
    if (e.target && e.target.id === "backup-file") importBackupFile(e.target.files && e.target.files[0]);
  });

  /* What's new */
  views["whats-new"] = function () {
    setNav("whats-new");
    app.innerHTML = '<div class="narrow"><h1>What\'s new</h1><p class="lede">Recent changes to the trainer, newest first.</p><ol class="wn-list">' +
      whatsNewSorted().map(function (w) {
        return '<li class="wn-entry"><time datetime="' + esc(w.date) + '">' + esc(fmtDate(w.date)) + "</time><h2>" + esc(w.title) + "</h2><ul>" +
          w.items.map(function (x) { return "<li>" + esc(x) + "</li>"; }).join("") + "</ul></li>";
      }).join("") + "</ol></div>";
  };

  /* About */
  views.about = function () {
    setNav("about");
    app.innerHTML = '<div class="narrow"><h1>About this trainer</h1>' +
      "<p class=\"lede\">A practice space for psychiatry residents learning to interview patients sensitively and with compassion.</p>" +
      "<h2>How to use it</h2><p>Start with a chapter in Learn, then practice its responses, take the quiz, and run the related simulated interview. Drills sharpen the vocabulary you will use in supervision. Revisit the simulated interviews and try different paths: the debriefs teach as much from a misstep as from a good choice.</p>" +
      "<h2>Source</h2><p>Content is drawn from study guides based on Shawn Christopher Shea, <i>Psychiatric Interviewing: The Art of Understanding</i>, 3rd edition. All patient statements, cases, and names are composed for teaching; they are not transcripts from the book. Read the book itself for the full discussion, video modules, and annotated interviews.</p>" +
      "<h2>A note on clinical use</h2><p>This is an educational tool, not clinical guidance. Confidentiality limits, mandated reporting, duty-to-protect obligations, and risk assessment procedures vary by institution and jurisdiction. Follow your supervisor and local policy.</p>" +
      "<h2>What's next</h2><p>Study guides for Parts I and III are complete. Study guides for the Part II chapters (9 to 15) will be added chapter by chapter.</p>" +
      '<p><a href="#/whats-new">What\'s new</a>: see the latest changes to the trainer.</p>' +
      '<div class="notice section">This app was created by Isabella Navarro, MD. Last updated October 2026. <a href="mailto:isaymotion@gmail.com">isaymotion@gmail.com</a></div></div>';
  };

  function notFound() {
    app.innerHTML = '<div class="empty"><h2>That page doesn\'t exist</h2><p>Check the link, or go back to the start.</p><a class="btn" href="#/">Go to the home page</a></div>';
  }

  /* ───────── Events ───────── */
  app.addEventListener("click", function (e) {
    var el = e.target.closest("[data-action]");
    if (!el) return;
    var a = el.getAttribute("data-action");

    if (a === "pick" && session.hero && el.closest("#hero-item")) {
      var h = session.hero, i = +el.getAttribute("data-i"), o = h.opts[i];
      h.answered = { chosen: i };
      store.practice[h.item.id] = o.v; save();
      renderHero();
      setFlower(app.querySelector(".hero-flower [data-flower]"), o.v === "best" ? 88 : o.v === "ok" ? 60 : 18);
      return;
    }
    if (a === "hero-next") { views.home(); return; }

    if (a === "pick" && session.practice) {
      var s = session.practice, idx = +el.getAttribute("data-i"), opt = s.opts[idx];
      s.answered = { chosen: idx }; s.score.n++; if (opt.v === "best") s.score.best++;
      store.practice[s.list[s.idx].id] = opt.v; save();
      renderPractice(); return;
    }
    if (a === "practice-next") { var p = session.practice; p.idx++; p.answered = null; p.opts = null; renderPractice(); window.scrollTo(0, 0); return; }
    if (a === "practice-restart") { var key = session.practice.key; session.practice = null; views.practice(key); return; }

    if (a === "quiz-pick") { session.quiz.answered = +el.getAttribute("data-i"); if (session.quiz.answered === session.quiz.ch.quiz[session.quiz.idx].a) session.quiz.correct++; renderQuiz(); return; }
    if (a === "quiz-next") { var q = session.quiz; q.idx++; q.answered = null; q.order = null; renderQuiz(); window.scrollTo(0, 0); return; }
    if (a === "quiz-restart") { var qk = session.quiz.key; session.quiz = null; views.quiz(qk); return; }

    if (a === "sim-pick") {
      var ss = session.sim, node = ss.sim.nodes[ss.node], ch = node.choices[+el.getAttribute("data-i")];
      var nb = clamp(ss.b + (ch.b || 0)), nd = clamp(ss.d + (ch.d || 0));
      ss.log.push({ p: node.p, cue: node.cue, t: ch.t, fb: ch.fb, db: nb - ss.b });
      ss.b = nb; ss.d = nd; ss.node = ch.next;
      renderSim(true); return;
    }
    if (a === "sim-restart") { var sid = session.sim.sim.id; session.sim = null; stableOrders = {}; startSim(sid); window.scrollTo(0, 0); return; }

    if (a === "drill-pick") { var d = session.drill; d.answered = el.getAttribute("data-v"); if (d.answered === d.list[d.idx].a) d.correct++; renderDrill(); return; }
    if (a === "drill-next") { var dd = session.drill; dd.idx++; dd.answered = null; dd.opts = null; renderDrill(); return; }
    if (a === "drill-restart") { var did = session.drill.set.id; session.drill = null; views.drills(did); return; }

    if (a === "flip") {
      session.cards.flipped = !session.cards.flipped; el.classList.toggle("flipped", session.cards.flipped);
      var ans = document.getElementById("srs-answers"); if (ans) ans.hidden = !session.cards.flipped;
      return;
    }
    if (a === "card-grade") {
      var c = session.cards, card = c.queue.shift(), grade = el.getAttribute("data-grade");
      gradeCard(card.key, grade);
      c.tally[grade]++; c.answered++; c.flipped = false;
      if (grade === "again") c.queue.push(card);
      renderCards(); return;
    }
    if (a === "cards-ahead") { var ck = session.cards.key; startCards(ck, session.cards.deck, true); renderCards(); window.scrollTo(0, 0); return; }

    if (a === "theme") { setTheme(el.getAttribute("data-theme-opt")); return; }
    if (a === "export") { exportBackup(); return; }
    if (a === "import") { var fi = document.getElementById("backup-file"); if (fi) { fi.value = ""; fi.click(); } return; }

    if (a === "term") { e.preventDefault(); openTerm(el); return; }
    if (a === "bookmark") {
      var bkey = el.getAttribute("data-key");
      if (store.bookmarks[bkey]) delete store.bookmarks[bkey];
      else store.bookmarks[bkey] = { ch: el.getAttribute("data-ch"), sec: el.getAttribute("data-sec"), title: el.getAttribute("data-title"), at: Date.now() };
      save();
      var on = !!store.bookmarks[bkey];
      el.setAttribute("aria-pressed", on ? "true" : "false");
      el.querySelector(".bm-label").textContent = on ? "Bookmarked" : "Bookmark";
      var tocItem = document.querySelector('[data-toc="' + el.getAttribute("data-sec") + '"]');
      if (tocItem) tocItem.classList.toggle("marked", on);
      return;
    }
    if (a === "unbookmark") { delete store.bookmarks[el.getAttribute("data-key")]; save(); views.bookmarks(); return; }
    if (a === "reset") {
      if (window.confirm("Reset all saved progress in this browser?")) {
        store = emptyStore(); save(); session.cards = null; views.progress();
      }
    }
  });

  /* ───────── Scroll restoration ─────────
     Remember each page's scroll position (in memory). Back/forward returns to it; ordinary navigation starts at the top.
     Entries this app has rendered carry a history.state marker, so popstate can tell a back/forward visit
     from the popstate some browsers also fire when a link changes the hash. */
  var scrollMemo = {}, scrollKey = location.hash || "#/", fromHistory = false, scrollPending = false;
  if ("scrollRestoration" in history) history.scrollRestoration = "manual";
  window.addEventListener("scroll", function () {
    if (scrollPending) return;
    scrollPending = true;
    setTimeout(function () { scrollPending = false; scrollMemo[scrollKey] = window.scrollY; }, 120);
  }, { passive: true });
  window.addEventListener("popstate", function (e) { fromHistory = !!(e.state && e.state.sheatrainer); });

  /* ───────── Router ───────── */
  function route() {
    var parts = (location.hash.replace(/^#\/?/, "") || "").split("/");
    var name = parts[0] || "home", arg = parts[1], sub = parts[2];
    var fn = views[name];
    scrollMemo[scrollKey] = window.scrollY; // the page we are leaving
    scrollKey = location.hash || "#/";
    var restoreY = fromHistory && scrollMemo.hasOwnProperty(scrollKey) ? scrollMemo[scrollKey] : null;
    fromHistory = false;
    try { if (!history.state || !history.state.sheatrainer) history.replaceState({ sheatrainer: 1 }, ""); } catch (e) { /* ignore */ }
    closeTerm();
    if (fn) fn(arg, sub); else notFound();
    app.focus({ preventScroll: true });
    if (restoreY !== null) {
      window.requestAnimationFrame(function () { window.scrollTo(0, restoreY); });
      return;
    }
    if (name === "learn" && sub && sub !== "review") {
      var target = document.getElementById("sec-" + sub);
      if (target) { target.scrollIntoView({ block: "start" }); return; }
    }
    if (name !== "simulate" || !arg) window.scrollTo(0, 0);
  }
  window.addEventListener("hashchange", function () {
    // Re-entering a simulation from the list starts it over.
    var p = location.hash.replace(/^#\/?/, "").split("/");
    if (p[0] === "simulate" && p[1] && session.sim && session.sim.sim.id === p[1] && session.sim.sim.nodes[session.sim.node].end) { session.sim = null; stableOrders = {}; }
    route();
  });

  /* ───────── Navigation chrome: menu drawer, history buttons, search ───────── */
  var chrome = (function () {
    var body = document.body;
    var menuBtn = document.getElementById("menu-btn"), drawer = document.getElementById("drawer"), scrim = document.getElementById("scrim");
    var backBtn = document.getElementById("hist-back"), fwdBtn = document.getElementById("hist-fwd");
    var searchBtns = document.querySelectorAll("[data-open-search]");
    var panel = document.getElementById("search-panel"), input = document.getElementById("search-input"), resultsEl = document.getElementById("search-results");
    var lastFocus = null;

    /* Drawer */
    function buildDrawer() {
      var h = '<div class="drawer-head"><span>Contents</span><button type="button" class="icon-btn" id="drawer-close" aria-label="Close menu">&times;</button></div><nav aria-label="Chapters" class="drawer-body">';
      h += '<ul class="drawer-links">' +
        [["#/", "Home"], ["#/learn", "All chapters"], ["#/practice/all", "Practice"], ["#/simulate", "Interviews"], ["#/drills", "Drills"], ["#/cards/all", "Flashcards"], ["#/bookmarks", "Bookmarks"], ["#/progress", "Progress"], ["#/about", "About"], ["#/whats-new", "What's new"]]
          .map(function (l) { return '<li><a href="' + l[0] + '">' + l[1] + "</a></li>"; }).join("") + "</ul>";
      parts().forEach(function (p) {
        h += '<h2 class="drawer-part">Part ' + esc(p.numeral) + "<span>" + esc(p.title) + "</span></h2><ul class=\"drawer-ch\">";
        p.chapters.forEach(function (c) {
          h += '<li><a href="#/learn/' + c.id + '" data-ch="' + c.id + '"><b>' + c.num + "</b><span>" + esc(c.title) + "</span>" + (guideFor(c.id) ? '<i class="tag">Guide</i>' : "") + "</a></li>";
        });
        pendingChapters(p.id).forEach(function (c) { h += '<li class="soon"><span class="soon-row"><b>' + c[0] + "</b><span>" + esc(c[1]) + '</span><i class="tag">Soon</i></span></li>'; });
        h += "</ul>";
      });
      UPCOMING.forEach(function (u) {
        if (parts().some(function (p) { return p.id === u.id; })) return;
        h += '<h2 class="drawer-part soon">Part ' + u.numeral + "<span>" + esc(u.title) + '</span></h2><ul class="drawer-ch">';
        u.chapters.forEach(function (c) { h += '<li class="soon"><span class="soon-row"><b>' + c[0] + "</b><span>" + esc(c[1]) + '</span><i class="tag">Soon</i></span></li>'; });
        h += "</ul>";
      });
      drawer.innerHTML = h + "</nav>";
    }
    function markDrawer() {
      var m = location.hash.match(/^#\/(?:learn|practice|quiz)\/(ch\d+)/) || location.hash.match(/^#\/cards\/(ch\d+)/);
      var cur = m && m[1];
      Array.prototype.forEach.call(drawer.querySelectorAll("[data-ch]"), function (a) {
        if (a.getAttribute("data-ch") === cur) a.setAttribute("aria-current", "page"); else a.removeAttribute("aria-current");
      });
    }
    function openDrawer() {
      closeSearch(true); buildDrawer(); markDrawer();
      lastFocus = document.activeElement;
      body.classList.add("drawer-open"); drawer.hidden = false; scrim.hidden = false;
      menuBtn.setAttribute("aria-expanded", "true");
      var cur = drawer.querySelector("[aria-current]") || drawer.querySelector("a");
      cur.focus({ preventScroll: true }); if (cur.scrollIntoView) cur.scrollIntoView({ block: "center" });
    }
    function closeDrawer(noFocus) {
      if (drawer.hidden) return;
      body.classList.remove("drawer-open"); drawer.hidden = true; scrim.hidden = true;
      menuBtn.setAttribute("aria-expanded", "false");
      if (!noFocus && lastFocus && lastFocus.focus) lastFocus.focus();
    }
    menuBtn.addEventListener("click", function () { drawer.hidden ? openDrawer() : closeDrawer(); });
    scrim.addEventListener("click", function () { closeDrawer(); });
    drawer.addEventListener("click", function (e) {
      if (e.target.closest("#drawer-close")) { closeDrawer(); return; }
      if (e.target.closest("a")) closeDrawer(true);
    });

    /* History buttons: an in-app stack so the buttons can show when there is nowhere to go. */
    var stack = [location.hash || "#/"], ptr = 0;
    function track() {
      var h = location.hash || "#/";
      if (stack[ptr] === h) { /* same page */ }
      else if (ptr > 0 && stack[ptr - 1] === h) ptr--;
      else if (ptr < stack.length - 1 && stack[ptr + 1] === h) ptr++;
      else { stack = stack.slice(0, ptr + 1); stack.push(h); ptr = stack.length - 1; }
      backBtn.disabled = ptr === 0; fwdBtn.disabled = ptr >= stack.length - 1;
    }
    backBtn.addEventListener("click", function () { history.back(); });
    fwdBtn.addEventListener("click", function () { history.forward(); });

    /* Search index (built on first use) */
    var INDEX = null;
    function plain(s) { return String(s || "").replace(/\[\[([^\]|]+)(?:\|([^\]]+))?\]\]/g, function (m, t, sh) { return sh || t; }); }
    function blockText(b) {
      var t = [];
      if (b.text) t.push(b.text);
      if (b.title) t.push(b.title);
      (b.items || []).forEach(function (i) { t.push(i); });
      (b.head || []).forEach(function (i) { t.push(i); });
      (b.rows || []).forEach(function (r) { t.push(r.join(" ")); });
      ["a", "b"].forEach(function (k) { if (b[k]) { t.push(b[k].title || ""); (b[k].items || []).forEach(function (i) { t.push(i); }); } });
      (b.lines || []).forEach(function (l) { t.push(l.t); });
      return t.join(" ");
    }
    function buildIndex() {
      var out = [];
      function add(kind, title, where, text, href, weight) {
        text = plain(text);
        out.push({ kind: kind, title: plain(title), where: where, text: text, href: href, tl: plain(title).toLowerCase(), xl: text.toLowerCase(), w: weight || 0 });
      }
      chapters().forEach(function (c) {
        var cw = "Chapter " + c.num;
        add("Chapter", "Ch " + c.num + ": " + c.title, c._part ? "Part " + c._part.numeral : "", (c.sub || "") + " " + (c.summary || ""), "#/learn/" + c.id, 3);
        (c.concepts || []).forEach(function (k) { add("Concept", k.h, cw, k.b, "#/learn/" + c.id + "/review", 1); });
        (c.glossary || []).forEach(function (g) { add("Glossary", g.term, cw, g.def, "#/learn/" + c.id + "/review", 2); });
        (c.practice || []).forEach(function (p) { add("Practice", p.skill, cw, p.ctx, "#/practice/" + c.id + "/" + p.id, 0); });
        var g = guideFor(c.id);
        if (g) {
          (g.sections || []).forEach(function (s) {
            var tx = [s.lede || ""]; (s.blocks || []).forEach(function (b) { tx.push(blockText(b)); });
            add("Study guide", s.title, cw, tx.join(" "), "#/learn/" + c.id + "/" + s.id, 2);
          });
          var hy = g.highYield || {}, hx = [];
          (hy.mustKnow || []).concat(hy.pitfalls || []).forEach(function (i) { hx.push(i); });
          (hy.phrases || []).forEach(function (p) { hx.push(p.say + " " + p.when); });
          add("High yield", "High-yield: " + c.title, cw, hx.join(" "), "#/learn/" + c.id + "/high-yield", 2);
        }
      });
      simulations().forEach(function (s) { add("Interview", s.title, "Simulated interview", (s.setting || "") + " " + (s.who || "") + " " + (s.goal || ""), "#/simulate/" + s.id, 1); });
      drills().forEach(function (d) { add("Drill", d.title, "Chapter " + d.chapter, d.about, "#/drills/" + d.id, 1); });
      add("Page", "What's new", "Updates", WHATS_NEW.map(function (w) { return w.title + " " + w.items.join(" "); }).join(" "), "#/whats-new", 0);
      return out;
    }
    function snippet(text, terms) {
      var low = text.toLowerCase(), at = -1, i;
      for (i = 0; i < terms.length; i++) { at = low.indexOf(terms[i]); if (at >= 0) break; }
      if (at < 0) return esc(text.slice(0, 110)) + (text.length > 110 ? "…" : "");
      var s = Math.max(0, at - 45), e = Math.min(text.length, at + 90);
      var out = esc(text.slice(s, e));
      terms.forEach(function (t) { out = out.replace(new RegExp("(" + t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + ")", "ig"), "<mark>$1</mark>"); });
      return (s > 0 ? "…" : "") + out + (e < text.length ? "…" : "");
    }
    function search(q) {
      var terms = q.toLowerCase().split(/\s+/).filter(Boolean);
      if (!terms.length) return [];
      if (!INDEX) INDEX = buildIndex();
      var hits = [];
      INDEX.forEach(function (it) {
        var score = it.w;
        for (var i = 0; i < terms.length; i++) {
          var t = terms[i], inT = it.tl.indexOf(t), inX = it.xl.indexOf(t);
          if (inT < 0 && inX < 0) return;
          score += inT === 0 ? 12 : inT > 0 ? 8 : 0;
          if (inX >= 0) score += 2;
        }
        hits.push({ it: it, score: score });
      });
      hits.sort(function (a, b) { return b.score - a.score; });
      return hits.slice(0, 30).map(function (h) { return h.it; });
    }
    var active = -1;
    function render(q) {
      var res = search(q.trim()), terms = q.toLowerCase().split(/\s+/).filter(Boolean);
      active = -1;
      if (!q.trim()) { resultsEl.innerHTML = '<p class="search-hint">Search chapters, study-guide sections, glossary terms, practice cases, interviews and drills.</p>'; return; }
      if (!res.length) { resultsEl.innerHTML = '<p class="search-hint">No matches for “' + esc(q) + '”. Try a shorter word.</p>'; return; }
      resultsEl.innerHTML = '<ul role="listbox" aria-label="Search results">' + res.map(function (r, i) {
        return '<li role="option" id="sr-' + i + '"><a href="' + r.href + '"><span class="sr-kind">' + esc(r.kind) + "</span><span class=\"sr-title\">" + esc(r.title) + (r.where ? '<small>' + esc(r.where) + "</small>" : "") + '</span><span class="sr-snip">' + snippet(r.xl && r.kind !== "Chapter" ? r.text : r.text, terms) + "</span></a></li>";
      }).join("") + "</ul>";
    }
    function move(d) {
      var links = resultsEl.querySelectorAll("li");
      if (!links.length) return;
      if (active >= 0) links[active].removeAttribute("aria-selected"), links[active].classList.remove("on");
      active = (active + d + links.length) % links.length;
      links[active].setAttribute("aria-selected", "true"); links[active].classList.add("on");
      input.setAttribute("aria-activedescendant", links[active].id);
      links[active].scrollIntoView({ block: "nearest" });
    }
    function openSearch() {
      closeDrawer(true);
      lastFocus = document.activeElement;
      panel.hidden = false; body.classList.add("search-open");
      render(input.value); input.focus(); input.select();
    }
    function closeSearch(noFocus) {
      if (panel.hidden) return;
      panel.hidden = true; body.classList.remove("search-open");
      if (!noFocus && lastFocus && lastFocus.focus) lastFocus.focus();
    }
    Array.prototype.forEach.call(searchBtns, function (b) { b.addEventListener("click", openSearch); });
    input.addEventListener("input", function () { render(input.value); });
    input.addEventListener("keydown", function (e) {
      if (e.key === "ArrowDown") { e.preventDefault(); move(1); }
      else if (e.key === "ArrowUp") { e.preventDefault(); move(-1); }
      else if (e.key === "Enter") {
        var li = resultsEl.querySelector("li.on") || resultsEl.querySelector("li");
        if (li) { e.preventDefault(); li.querySelector("a").click(); }
      }
    });
    panel.addEventListener("click", function (e) {
      if (e.target.closest("a")) { closeSearch(true); return; }
      if (e.target.closest("[data-close-search]") || e.target === panel) closeSearch();
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") { if (!panel.hidden) closeSearch(); else if (!drawer.hidden) closeDrawer(); return; }
      var tag = (e.target.tagName || "").toLowerCase();
      var typing = tag === "input" || tag === "textarea" || tag === "select" || e.target.isContentEditable;
      if (e.altKey && !typing && !e.ctrlKey && !e.metaKey && !e.shiftKey && (e.key === "ArrowLeft" || e.key === "ArrowRight")) {
        e.preventDefault();
        if (e.key === "ArrowLeft") history.back(); else history.forward();
        return;
      }
      if ((e.key === "/" && !typing && !e.metaKey && !e.ctrlKey) || ((e.key === "k" || e.key === "K") && (e.metaKey || e.ctrlKey))) { e.preventDefault(); openSearch(); }
      if (e.key === "Tab" && !drawer.hidden) {
        var f = drawer.querySelectorAll("a[href], button"); if (!f.length) return;
        var first = f[0], last = f[f.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    });
    return { onRoute: function () { track(); markDrawer(); } };
  })();
  window.addEventListener("hashchange", chrome.onRoute);
  route();
})();
