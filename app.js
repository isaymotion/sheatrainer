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
  var store = { practice: {}, quiz: {}, sims: {}, cards: {}, drills: {}, bookmarks: {} };
  try {
    var raw = window.localStorage.getItem(KEY);
    if (raw) {
      var parsed = JSON.parse(raw);
      Object.keys(store).forEach(function (k) { if (parsed[k]) store[k] = parsed[k]; });
    }
  } catch (e) { /* storage unavailable: progress lives for this session only */ }
  function save() {
    try { window.localStorage.setItem(KEY, JSON.stringify(store)); } catch (e) { /* ignore */ }
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
          '</span><span class="ch-sub">' + esc(c.sub) + '</span></span><span class="ch-meta">' + done + "/" + (c.practice || []).length + " practiced</span></a></li>";
      }).join("");
      return '<section class="section"><h2>Part ' + esc(p.numeral) + " \u00A0" + esc(p.title) + '</h2><ul class="chapter-list">' + items + "</ul></section>";
    }).join("");

    app.innerHTML =
      '<section class="hero">' +
        '<div class="hero-intro">' +
          "<h1>What would you say next?</h1>" +
          '<p class="lede">Practice the moment-to-moment choices that help patients feel safe enough to tell you the truth. The sunflower turns toward you as the patient engages.</p>' +
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
          '<div class="aside-actions"><a class="btn" href="#/practice/' + c.id + '">Practice responses</a><a class="btn secondary" href="#/quiz/' + c.id + '">Take the chapter quiz</a>' +
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
      var others = shuffle(set.categories.filter(function (c) { return c !== it.a; })).slice(0, 3);
      s.opts = shuffle(others.concat([it.a]));
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

  /* Flashcards */
  views.cards = function (arg) {
    setNav("cards");
    arg = arg || "all";
    if (!session.cards || session.cards.key !== arg) {
      var deck = [];
      chapters().forEach(function (c) {
        if (arg === "all" || c.id === arg) c.glossary.forEach(function (g) { deck.push({ term: g.term, def: g.def, ch: c.num, key: c.id + ":" + g.term }); });
      });
      if (!deck.length) return notFound();
      session.cards = { key: arg, queue: shuffle(deck), total: deck.length, known: 0, flipped: false };
    }
    renderCards();
  };
  function renderCards() {
    var s = session.cards;
    var head = "<h1>Flashcards</h1><p class=\"lede\">Tap a card to flip it. Mark the ones you know; the rest come back around.</p>" + chapterChips(s.key, "cards");
    if (!s.queue.length) {
      app.innerHTML = head + '<div class="panel section narrow"><h2>Deck complete</h2><p>All ' + s.total + ' cards marked as known.</p><button class="btn" data-action="cards-restart">Shuffle and start over</button></div>';
      return;
    }
    var c = s.queue[0];
    app.innerHTML = head + '<div class="narrow section"><div class="row"><span class="counter">' + s.known + " of " + s.total + ' known</span><span class="spacer"></span><span class="counter">Chapter ' + c.ch + "</span></div>" +
      '<button class="flash' + (s.flipped ? " flipped" : "") + '" data-action="flip" aria-label="Flip card" style="margin-top:.75rem"><div class="flash-inner">' +
      '<div class="flash-face front"><span class="flash-term">' + esc(c.term) + '</span><span class="muted small">Tap to see the definition</span></div>' +
      '<div class="flash-face back"><span class="muted small">' + esc(c.term) + '</span><span class="flash-def">' + esc(c.def) + "</span></div></div></button>" +
      '<div class="row" style="margin-top:1rem;justify-content:center"><button class="btn secondary" data-action="card-again">Still learning</button><button class="btn" data-action="card-know">Got it</button></div></div>';
  }

  /* Progress */
  views.progress = function () {
    setNav("progress");
    var rows = chapters().map(function (c) {
      var items = c.practice || [];
      var answered = items.filter(function (p) { return store.practice[p.id]; });
      var best = answered.filter(function (p) { return store.practice[p.id] === "best"; }).length;
      var sims = simulations().filter(function (s) { return s.chapters[0] === c.num; });
      var simDone = sims.filter(function (s) { return store.sims[s.id]; }).length;
      return "<tr><td><a href=\"#/learn/" + c.id + '">' + c.num + ". " + esc(c.title) + "</a></td><td>" + answered.length + "/" + items.length + "</td><td>" + (answered.length ? best + "/" + answered.length : "\u2014") +
        "</td><td>" + (store.quiz[c.id] != null ? store.quiz[c.id] + "%" : "\u2014") + "</td><td>" + (sims.length ? simDone + "/" + sims.length : "\u2014") + "</td></tr>";
    }).join("");
    var drillRows = drills().map(function (d) { return "<tr><td>" + esc(d.title) + "</td><td>" + (store.drills[d.id] != null ? store.drills[d.id] + "%" : "\u2014") + "</td></tr>"; }).join("");
    app.innerHTML = "<h1>Your progress</h1><p class=\"lede\">Saved in this browser only. Clearing your browser data or switching devices starts fresh.</p>" +
      '<div class="table-wrap section"><table class="progress"><thead><tr><th>Chapter</th><th>Practiced</th><th>Best responses</th><th>Quiz best</th><th>Interviews</th></tr></thead><tbody>' + rows + "</tbody></table></div>" +
      '<div class="table-wrap section"><table class="progress"><thead><tr><th>Drill</th><th>Best score</th></tr></thead><tbody>' + drillRows + "</tbody></table></div>" +
      '<div class="section"><button class="btn secondary" data-action="reset">Reset all progress</button></div>';
  };

  /* About */
  views.about = function () {
    setNav("about");
    app.innerHTML = '<div class="narrow"><h1>About this trainer</h1>' +
      "<p class=\"lede\">A practice space for psychiatry residents learning to interview patients sensitively and with compassion.</p>" +
      "<h2>How to use it</h2><p>Start with a chapter in Learn, then practice its responses, take the quiz, and run the related simulated interview. Drills sharpen the vocabulary you will use in supervision. Revisit the simulated interviews and try different paths: the debriefs teach as much from a misstep as from a good choice.</p>" +
      "<h2>Source</h2><p>Content is drawn from study guides based on Shawn Christopher Shea, <i>Psychiatric Interviewing: The Art of Understanding</i>, 3rd edition. All patient statements, cases, and names are composed for teaching; they are not transcripts from the book. Read the book itself for the full discussion, video modules, and annotated interviews.</p>" +
      "<h2>A note on clinical use</h2><p>This is an educational tool, not clinical guidance. Confidentiality limits, mandated reporting, duty-to-protect obligations, and risk assessment procedures vary by institution and jurisdiction. Follow your supervisor and local policy.</p>" +
      "<h2>What's next</h2><p>Part III, Mastering Complex Interviewing Tasks, will be added chapter by chapter.</p>" +
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

    if (a === "flip") { session.cards.flipped = !session.cards.flipped; el.classList.toggle("flipped", session.cards.flipped); return; }
    if (a === "card-know") { var c = session.cards; var card = c.queue.shift(); store.cards[card.key] = true; save(); c.known++; c.flipped = false; renderCards(); return; }
    if (a === "card-again") { var cc = session.cards; cc.queue.push(cc.queue.shift()); cc.flipped = false; renderCards(); return; }
    if (a === "cards-restart") { var ck = session.cards.key; session.cards = null; views.cards(ck); return; }

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
        store = { practice: {}, quiz: {}, sims: {}, cards: {}, drills: {}, bookmarks: {} }; save(); views.progress();
      }
    }
  });

  /* ───────── Router ───────── */
  function route() {
    var parts = (location.hash.replace(/^#\/?/, "") || "").split("/");
    var name = parts[0] || "home", arg = parts[1], sub = parts[2];
    var fn = views[name];
    closeTerm();
    if (fn) fn(arg, sub); else notFound();
    if (name === "learn" && sub && sub !== "review") {
      var target = document.getElementById("sec-" + sub);
      if (target) { target.scrollIntoView({ block: "start" }); app.focus({ preventScroll: true }); return; }
    }
    if (name !== "simulate" || !arg) window.scrollTo(0, 0);
    app.focus({ preventScroll: true });
  }
  window.addEventListener("hashchange", function () {
    // Re-entering a simulation from the list starts it over.
    var p = location.hash.replace(/^#\/?/, "").split("/");
    if (p[0] === "simulate" && p[1] && session.sim && session.sim.sim.id === p[1] && session.sim.sim.nodes[session.sim.node].end) { session.sim = null; stableOrders = {}; }
    route();
  });
  route();
})();
