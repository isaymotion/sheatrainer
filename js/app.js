/* Shea Trainer (Psychiatric Interviewing Trainer) - app shell and screens.
   Shell (router, menu, search, theme, text size, language, backup, What's new) comes from the shared isaymotion starter;
   the screens, Leitner flashcards, bookmarks, practice, quizzes, interviews, drills and Tagalog switches are Shea v10's,
   ported unchanged in behaviour. Plain ES5 in one IIFE, no build step. Content lives in content/*.js on window.TRAINER. */
(function () {
  'use strict';

  /* ===== Storage (try/catch so the app works with storage blocked) ===== */
  var PREFIX = 'sheatrainer:v1:';
  var store = {
    get: function (k, d) {
      try { var v = localStorage.getItem(PREFIX + k); return v == null ? d : JSON.parse(v); } catch (e) { return d; }
    },
    set: function (k, v) {
      try { localStorage.setItem(PREFIX + k, JSON.stringify(v)); } catch (e) { /* storage unavailable */ }
    },
    del: function (k) { try { localStorage.removeItem(PREFIX + k); } catch (e) {} }
  };

  /* ===== Key migration (for restyled apps whose storage PREFIX changed, so saved progress survives).
     map = { 'old:prefix:': 'sub-prefix' | function (rest, oldKey) { return 'new-suffix'; } }.
     Every localStorage key starting with an old prefix is copied under PREFIX, then the old key is removed.
     A string value is put in front of the rest of the key ('' just swaps the prefix); a function returns the new
     suffix (a falsy result skips that key). An existing key under PREFIX is never overwritten. ===== */
  function migrateKeys(map) {
    try {
      if (!map || typeof map !== 'object') return;
      var keys = [], i;
      for (i = 0; i < localStorage.length; i++) { var k0 = localStorage.key(i); if (k0) keys.push(k0); }
      Object.keys(map).forEach(function (oldP) {
        if (!oldP) return;
        var to = map[oldP], growing = PREFIX.indexOf(oldP) === 0;   // new prefix extends the old one: do not re-migrate
        keys.forEach(function (k) {
          if (k.indexOf(oldP) !== 0) return;
          if (growing && k.indexOf(PREFIX) === 0) return;
          var rest = k.slice(oldP.length), suffix = typeof to === 'function' ? to(rest, k) : (typeof to === 'string' ? to + rest : null);
          if (typeof suffix !== 'string' || !suffix) return;
          var nk = PREFIX + suffix;
          if (nk === k) return;
          try {
            if (localStorage.getItem(nk) == null) localStorage.setItem(nk, localStorage.getItem(k));
            localStorage.removeItem(k);
          } catch (e) { /* leave the old key in place */ }
        });
      });
    } catch (e) { /* storage unavailable */ }
  }
  if (window.MIGRATE_KEYS) migrateKeys(window.MIGRATE_KEYS);

  /* v10 kept theme and text size as raw strings under "sheatrainer.theme" / "sheatrainer.textSize".
     If the new keys are empty, take the old value once, store it under PREFIX, and drop the old key. */
  (function legacyPrefs() {
    try {
      var oldT = localStorage.getItem('sheatrainer.theme');
      if (oldT != null) {
        if (localStorage.getItem(PREFIX + 'theme') == null && (oldT === 'light' || oldT === 'dark')) store.set('theme', oldT);
        localStorage.removeItem('sheatrainer.theme');
      }
      var oldZ = localStorage.getItem('sheatrainer.textSize');
      if (oldZ != null) {
        if (localStorage.getItem(PREFIX + 'textSize') == null && (oldZ === '90' || oldZ === '112.5' || oldZ === '125')) store.set('textSize', oldZ);
        localStorage.removeItem('sheatrainer.textSize');
      }
    } catch (e) { /* storage unavailable */ }
  })();

  var META = window.APP_META || {};
  var CHANGELOG = window.APP_CHANGELOG || [];
  var ATTRIBUTION = META.attribution || '';
  var APP_NAME = META.name || document.title;
  var APP_LINKS = window.APP_LINKS || [];

  /* ===== Language: 'en' (default) or 'tl' (Tagalog). Shell UI strings live in data/strings.js. ===== */
  var STRINGS = window.STRINGS || {};
  var lang = store.get('lang', 'en') === 'tl' ? 'tl' : 'en';
  function has(o, k) { return Object.prototype.hasOwnProperty.call(o, k); }
  function t(key) {
    var s = STRINGS[lang] && has(STRINGS[lang], key) ? STRINGS[lang][key] : null;
    if (typeof s !== 'string' || !s) s = STRINGS.en && has(STRINGS.en, key) ? STRINGS.en[key] : null;
    return typeof s === 'string' && s ? s : key;
  }
  function tf(key, vars) { return t(key).replace(/\{(\w+)\}/g, function (m, k) { return vars && has(vars, k) ? String(vars[k]) : m; }); }
  function rich(s) { return esc(s).replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>').replace(/\[\[(.+?)\]\]/g, '<kbd>$1</kbd>'); }   // **bold** and [[key]] in strings
  function locale() { return lang === 'tl' ? 'fil' : undefined; }

  /* ===== Helpers ===== */
  function esc(s) { return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); }
  function shuffle(a) { a = a.slice(); for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t; } return a; }
  function escRe(s) { return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); }
  function pad2(n) { return String(n).padStart(2, '0'); }
  function fmtDate(iso) {
    var m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(String(iso));
    if (!m) return String(iso);
    return new Date(+m[1], +m[2] - 1, +m[3]).toLocaleDateString(locale(), { month: 'long', day: 'numeric', year: 'numeric' });
  }

  var main = document.getElementById('main');
  var sidenav = document.getElementById('sidenav');
  var backdrop = document.getElementById('nav-backdrop');
  var menuBtn = document.getElementById('menu-btn');
  var tabMenu = document.getElementById('tab-menu');
  var qInput = document.getElementById('q');
  var suggestBox = document.getElementById('suggest');

  /* ===== Icons (inline SVG, 24x24, stroke = currentColor). NAV items refer to these by key. ===== */
  var ICONS = {
    home: '<path d="M4 11l8-7 8 7v8a1 1 0 0 1-1 1h-4v-6H9v6H5a1 1 0 0 1-1-1z"/>',
    news: '<path d="M6 3h9l4 4v14H6zM14 3v5h5M9 12h6M9 16h6"/>',
    info: '<circle cx="12" cy="12" r="9"/><path d="M12 11v6M12 7.5v.5"/>',
    star: '<path d="M12 3l2.6 5.6 6.1.7-4.5 4.2 1.2 6L12 16.5 6.6 19.5l1.2-6L3.3 9.3l6.1-.7z"/>',
    book: '<path d="M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2zM4 19V5M8 7h7"/>',
    list: '<path d="M8 6h12M8 12h12M8 18h12M4 6h.01M4 12h.01M4 18h.01"/>',
    users: '<circle cx="9" cy="8" r="3.5"/><path d="M2.5 20a6.5 6.5 0 0 1 13 0M16 4.8a3.5 3.5 0 0 1 0 6.4M18 14.2a6.5 6.5 0 0 1 3.5 5.8"/>',
    calendar: '<rect x="3.5" y="5" width="17" height="15" rx="3"/><path d="M8 3v4M16 3v4M3.5 10h17"/>',
    external: '<path d="M14 4h6v6M20 4l-9 9M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5"/>',
    chat: '<path d="M5 5h14a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1h-7l-4 3.5V16H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1z"/>',
    quiz: '<circle cx="12" cy="12" r="9"/><path d="M9.6 9.3a2.5 2.5 0 1 1 3.4 2.3c-.6.3-1 .8-1 1.5v.4M12 16.6v.4"/>',
    target: '<circle cx="12" cy="12" r="8.5"/><circle cx="12" cy="12" r="4.5"/><circle cx="12" cy="12" r=".6"/>',
    cards: '<rect x="3.5" y="6.5" width="13" height="13" rx="2"/><path d="M8 3.5h10.5a2 2 0 0 1 2 2V16"/>',
    bookmark: '<path d="M6 3h12a1 1 0 0 1 1 1v17l-7-4.5L5 21V4a1 1 0 0 1 1-1z"/>',
    chart: '<path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/>',
    lang: '<path d="M4 5h9M8.5 3v2M6 5c.6 3.4 2.6 6 6 7.5M11 5c-.8 3.6-3.2 6.6-7 8.5M13 21l4-9 4 9M14.4 18h5.2"/>'
  };
  function icon(name, cls) {
    return '<svg class="' + (cls || 'nav-ico') + '" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">' + (ICONS[name] || ICONS.star) + '</svg>';
  }

  /* ===== NAV: one entry per screen. Builds the sidenav (grouped by `group`) and the home tiles.
     {label, href, icon, group}  Optional: tile:false (keep off the home grid), badge:'news' (unseen What's new count),
     tkey:'nav.x' (label comes from data/strings.js). The "Other apps" group is added after these from window.APP_LINKS. ===== */
  /* NAV is built after the content has loaded (buildNavList below): one entry per screen.
     {label, href, icon, group}  Optional: tkey (label from data/strings.js), badge:'news', match (RegExp for the active state),
     sub:true (indented chapter link with num), head:true (a non-link sub-heading such as "Part I"). */
  var NAV = [];
  var NAV_GROUPS = { Start: 'nav.start', Learn: 'nav.learn', Practice: 'nav.practice', Tagalog: 'nav.tagalog', App: 'nav.app' };   // group name -> strings key
  function navLabel(n) { return n.tkey ? t(n.tkey) : n.label; }

  /* ===== Search index: fill with {title, text, href, kind}. Rebuild it from your own data if you like.
     The shell's own entries (What's new, About) are added by shellIndex() so they follow the language. ===== */
  var SEARCH_INDEX = null;   // built on first search by searchIndex() (Shea's index: chapters, study guides, glossary, cases, interviews, drills)
  function searchIndex() { if (!SEARCH_INDEX) SEARCH_INDEX = buildSearchIndex(); return SEARCH_INDEX; }
  function shellIndex() {
    return [
      { title: t('nav.whatsNew'), text: t('search.newsText') + ' ' + CHANGELOG.map(function (w) { return w.title; }).join('. '), href: '#/whats-new', kind: t('nav.app') },
      { title: t('nav.about'), text: t('search.aboutText'), href: '#/about', kind: t('nav.app') }
    ];
  }

  /* ===== Theme: auto (match device) / light / dark. No data-theme attribute = match device. ===== */
  var THEME_ICONS = {
    auto: '<svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true"><circle cx="12" cy="12" r="8" fill="none" stroke="currentColor" stroke-width="2"/><path d="M12 4a8 8 0 0 1 0 16z" fill="currentColor"/></svg>',
    dark: '<svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true"><path d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5z" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/></svg>',
    light: '<svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true"><circle cx="12" cy="12" r="4.2" fill="none" stroke="currentColor" stroke-width="2"/><path d="M12 2.5v2.2M12 19.3v2.2M2.5 12h2.2M19.3 12h2.2M5.3 5.3l1.6 1.6M17.1 17.1l1.6 1.6M5.3 18.7l1.6-1.6M17.1 6.9l1.6-1.6" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>'
  };
  var darkMQ = window.matchMedia ? window.matchMedia('(prefers-color-scheme: dark)') : null;
  function getTheme() {
    var cur = store.get('theme', 'auto');
    return cur === 'light' || cur === 'dark' ? cur : 'auto';
  }
  function applyTheme(mode) {
    var root = document.documentElement;
    if (mode === 'light' || mode === 'dark') root.setAttribute('data-theme', mode); else root.removeAttribute('data-theme');
    var dark = mode === 'dark' || (mode !== 'light' && darkMQ && darkMQ.matches);
    var meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute('content', dark ? '#0E2017' : '#1C6E45');
    var btn = document.getElementById('theme-btn');
    if (btn) {
      var label = tf('theme.label', { name: t('theme.' + mode) });
      btn.innerHTML = THEME_ICONS[mode];
      btn.setAttribute('aria-label', label);
      btn.setAttribute('title', label);
    }
    var opts = document.querySelectorAll('[data-theme-opt]');
    for (var i = 0; i < opts.length; i++) opts[i].setAttribute('aria-pressed', opts[i].getAttribute('data-theme-opt') === mode ? 'true' : 'false');
    var radios = document.querySelectorAll('input[name="theme"]');   // the Theme segment on the About page
    for (var j = 0; j < radios.length; j++) radios[j].checked = radios[j].value === mode;
  }
  function setTheme(mode) {
    if (mode !== 'light' && mode !== 'dark') mode = 'auto';
    if (mode === 'auto') store.del('theme'); else store.set('theme', mode);
    applyTheme(mode);
  }
  applyTheme(getTheme());
  (function () {
    var btn = document.getElementById('theme-btn');
    if (btn) btn.addEventListener('click', function () {
      var cur = document.documentElement.getAttribute('data-theme') || 'auto';
      setTheme({ auto: 'light', light: 'dark', dark: 'auto' }[cur]);
    });
    function onDeviceChange() { applyTheme(document.documentElement.getAttribute('data-theme') || 'auto'); }
    if (darkMQ) { if (darkMQ.addEventListener) darkMQ.addEventListener('change', onDeviceChange); else if (darkMQ.addListener) darkMQ.addListener(onDeviceChange); }
  })();

  /* ===== Header height -> --top ===== */
  function headerH() { var t = document.querySelector('.topbar'); return t ? t.offsetHeight : 64; }
  function setTopVar() { document.documentElement.style.setProperty('--top', headerH() + 'px'); }
  window.addEventListener('resize', setTopVar);
  setTopVar();
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(setTopVar);

  /* ===== Text size (Aa panel) ===== */
  var TEXT_SIZES = [['90', 'textsize.smaller'], ['100', 'textsize.default'], ['112.5', 'textsize.larger'], ['125', 'textsize.largest']];   // [value, strings key]
  function syncSizeRadios(v) {   // the text-size segment on the About page
    var radios = document.querySelectorAll('input[name="aboutTextSize"]');
    for (var i = 0; i < radios.length; i++) radios[i].checked = radios[i].value === v;
  }
  function applyTextSize(v) {
    var ok = TEXT_SIZES.some(function (z) { return z[0] === v; });
    document.documentElement.style.fontSize = ok && v !== '100' ? v + '%' : '';
    setTopVar();
  }
  (function () {
    var btn = document.getElementById('textSizeBtn');
    if (!btn) return;
    var panel = document.createElement('div');
    panel.className = 'text-size-panel'; panel.id = 'textSizePanel'; panel.hidden = true;
    panel.setAttribute('role', 'dialog'); panel.setAttribute('aria-label', t('textsize.title'));
    document.body.appendChild(panel);
    function build() {
      var cur = String(store.get('textSize', '100'));
      panel.setAttribute('aria-label', t('textsize.title'));
      panel.innerHTML = '<p class="text-size-panel__title">' + esc(t('textsize.title')) + '</p><div class="seg">' + TEXT_SIZES.map(function (z, i) {
        return '<label><input type="radio" name="textSize" value="' + z[0] + '"' + (cur === z[0] ? ' checked' : '') + '><span style="font-size:' + (0.82 + i * 0.1).toFixed(2) + 'rem">' + esc(t(z[1])) + '</span></label>';
      }).join('') + '</div>';
    }
    function open() { build(); panel.hidden = false; btn.setAttribute('aria-expanded', 'true'); var f = panel.querySelector('input:checked'); if (f) f.focus(); }
    function close() { if (panel.hidden) return; panel.hidden = true; btn.setAttribute('aria-expanded', 'false'); }
    btn.addEventListener('click', function (e) { e.stopPropagation(); if (panel.hidden) open(); else close(); });
    panel.addEventListener('change', function (e) {
      if (e.target.name === 'textSize') { store.set('textSize', e.target.value); applyTextSize(e.target.value); syncSizeRadios(e.target.value); }
    });
    document.addEventListener('click', function (e) { if (!panel.hidden && !panel.contains(e.target) && e.target !== btn && !btn.contains(e.target)) close(); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && !panel.hidden) { close(); btn.focus(); } });
    window.addEventListener('hashchange', close);
  })();

  /* ===== In-app back/forward buttons (index-stamped history) ===== */
  var HIST_KEY = PREFIX + 'hist';
  var hist = (function () { try { return JSON.parse(sessionStorage.getItem(HIST_KEY)) || { cur: 0, max: 0 }; } catch (e) { return { cur: 0, max: 0 }; } })();
  function saveHist() { try { sessionStorage.setItem(HIST_KEY, JSON.stringify(hist)); } catch (e) {} }
  function stamp(i) { try { history.replaceState({ spIdx: i }, ''); } catch (e) {} }
  function syncHist() {
    var st = history.state;
    if (st && typeof st.spIdx === 'number') {
      hist.cur = st.spIdx;
      if (hist.cur > hist.max) hist.max = hist.cur;
    } else {
      hist.cur = hist.cur + 1;     // a new page: anything that was ahead is discarded
      hist.max = hist.cur;
      stamp(hist.cur);
    }
    saveHist(); paintHist();
  }
  function paintHist() {
    var b = document.getElementById('nav-back'), f = document.getElementById('nav-fwd');
    if (b) b.disabled = hist.cur <= 0;
    if (f) f.disabled = hist.cur >= hist.max;
  }
  (function initHist() {
    var st = history.state;
    if (st && typeof st.spIdx === 'number') { hist.cur = st.spIdx; if (hist.max < hist.cur) hist.max = hist.cur; }
    else { hist = { cur: 0, max: 0 }; stamp(0); }
    saveHist(); paintHist();
    var b = document.getElementById('nav-back'), f = document.getElementById('nav-fwd');
    if (b) b.addEventListener('click', function () { if (!b.disabled) history.back(); });
    if (f) f.addEventListener('click', function () { if (!f.disabled) history.forward(); });
  })();

  /* Alt+Left / Alt+Right (ignores typing in fields and other modifiers) */
  document.addEventListener('keydown', function (e) {
    var tag = (e.target.tagName || '').toLowerCase();
    var typing = tag === 'input' || tag === 'textarea' || tag === 'select' || e.target.isContentEditable;
    if (e.altKey && !typing && !e.ctrlKey && !e.metaKey && !e.shiftKey && (e.key === 'ArrowLeft' || e.key === 'ArrowRight')) {
      e.preventDefault();
      if (e.key === 'ArrowLeft') history.back(); else history.forward();
    }
  });

  /* ===== Scroll restoration (only on back/forward, not on ordinary link clicks) ===== */
  var scrollMemo = {}, scrollKey = location.hash || '#/', fromHistory = false, scrollPending = false;
  if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
  window.addEventListener('scroll', function () {
    if (scrollPending) return;
    scrollPending = true;
    setTimeout(function () { scrollPending = false; scrollMemo[scrollKey] = window.scrollY; }, 120);
  }, { passive: true });
  window.addEventListener('popstate', function (e) { fromHistory = !!(e.state && typeof e.state.spIdx === 'number'); });

  /* ===== Menu: docked sidebar on desktop, drawer on phones/tablets ===== */
  function isDrawerMode() { return window.matchMedia('(max-width: 1099px)').matches; }
  function setMenuExpanded(v) { [menuBtn, tabMenu].forEach(function (b) { if (b) b.setAttribute('aria-expanded', v ? 'true' : 'false'); }); }
  function openDrawer() {
    if (!isDrawerMode()) return;
    document.body.classList.add('drawer-open');
    backdrop.hidden = false;
    setMenuExpanded(true);
    var target = sidenav.querySelector('.sidenav__close');
    setTimeout(function () { if (target) target.focus(); }, 60);
  }
  function closeDrawer() {
    if (!document.body.classList.contains('drawer-open')) return;
    document.body.classList.remove('drawer-open');
    backdrop.hidden = true;
    setMenuExpanded(false);
  }
  if (menuBtn) menuBtn.addEventListener('click', function () { openDrawer(); });
  if (tabMenu) tabMenu.addEventListener('click', function () { if (document.body.classList.contains('drawer-open')) closeDrawer(); else openDrawer(); });
  document.getElementById('nav-close').addEventListener('click', function () { closeDrawer(); if (menuBtn) menuBtn.focus(); });
  backdrop.addEventListener('click', closeDrawer);
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && document.body.classList.contains('drawer-open')) { closeDrawer(); if (menuBtn) menuBtn.focus(); } });
  sidenav.addEventListener('click', function (e) { var a = e.target.closest('a'); if (a && a.getAttribute('href') === location.hash) closeDrawer(); });
  var collapseBtn = document.getElementById('collapse-btn');   // desktop: hide/show the docked sidebar
  function labelCollapse() {
    var c = document.documentElement.classList.contains('nav-collapsed');
    collapseBtn.setAttribute('aria-label', t(c ? 'sidebar.show' : 'sidebar.hide'));
    collapseBtn.setAttribute('title', t(c ? 'sidebar.show' : 'sidebar.hide'));
  }
  collapseBtn.addEventListener('click', function () {
    var c = !document.documentElement.classList.contains('nav-collapsed');
    document.documentElement.classList.toggle('nav-collapsed', c);
    store.set('navCollapsed', c); labelCollapse(); setTopVar();
  });
  labelCollapse();

  /* APP_LINKS minus this app's own entry (matched on the repo slug at the end of the URL). Menu only: never tiles, search or tabs. */
  function otherApps() {
    if (!window.SHOW_OTHER_APPS) return [];   // off until she is ready to interlink the apps (data/app-meta.js)
    var me = String(META.repo || '').toLowerCase();
    return APP_LINKS.filter(function (a) {
      if (!a || !a.name || !/^https?:\/\//i.test(String(a.href || ''))) return false;
      var slug = String(a.href).replace(/[?#].*$/, '').replace(/\/+$/, '').split('/').pop().toLowerCase();
      return !me || slug !== me;
    });
  }
  function currentKey() { var p = parts(); return p.length ? p[0] : 'home'; }
  var TAB_OF = { quiz: 'practice', simulate: 'practice', drills: 'practice', cards: 'practice', tagalog: 'practice', bookmarks: 'progress' };   // routes that light up a tab-bar item
  function buildNav() {
    var cur = location.hash || '#/';
    if (cur === '#') cur = '#/';
    var groups = [], byName = {};
    NAV.forEach(function (n) {
      var g = n.group || 'Menu';
      if (!byName[g]) { byName[g] = { label: g, items: [] }; groups.push(byName[g]); }
      byName[g].items.push(n);
    });
    var html = groups.map(function (g) {
      return '<div class="nav-group"><div class="nav-label">' + esc(NAV_GROUPS[g.label] ? t(NAV_GROUPS[g.label]) : g.label) + '</div><ul>' + g.items.map(function (n) {
        if (n.head) return '<li class="nav-subhead"><span class="nav-subhead__num">' + esc(n.num) + '</span>' + esc(n.label) + '</li>';
        var active = n.match ? n.match.test(cur) : n.href === cur;
        if (n.sub) return '<li><a class="nav-item nav-item--sub' + (active ? ' is-active' : '') + '" href="' + esc(n.href) + '"' + (active ? ' aria-current="page"' : '') + '><span class="nav-num">' + esc(n.num) + '</span><span>' + esc(n.label) + '</span>' + (n.tag ? '<span class="nav-tag">' + esc(n.tag) + '</span>' : '') + '</a></li>';
        return '<li><a class="nav-item' + (active ? ' is-active' : '') + '" href="' + esc(n.href) + '"' + (active ? ' aria-current="page"' : '') + '>' + icon(n.icon) + '<span>' + esc(navLabel(n)) + '</span>' +
          (n.badge ? '<span class="badge" data-badge="' + esc(n.badge) + '" hidden></span>' : '') + '</a></li>';
      }).join('') + '</ul></div>';
    }).join('');
    var others = otherApps();
    if (others.length) {
      html += '<div class="nav-group"><div class="nav-label">' + esc(t('nav.otherApps')) + '</div><ul>' + others.map(function (a) {
        return '<li><a class="nav-item" href="' + esc(a.href) + '" target="_blank" rel="noopener">' + icon('external') + '<span>' + esc(a.name) + '</span><span class="sr-only"> ' + esc(t('nav.newTab')) + '</span></a></li>';
      }).join('') + '</ul></div>';
    }
    document.getElementById('sidenav-body').innerHTML = html;
    var tabs = document.querySelectorAll('.tabbar [data-tab]');
    var key = currentKey();
    if (TAB_OF[key]) key = TAB_OF[key];
    for (var i = 0; i < tabs.length; i++) {
      var on = tabs[i].getAttribute('data-tab') === key;
      if (tabs[i].tagName === 'A') { tabs[i].classList.toggle('is-active', on); if (on) tabs[i].setAttribute('aria-current', 'page'); else tabs[i].removeAttribute('aria-current'); }
    }
  }

  /* ===== What's new: unseen badge keyed on the version string ===== */
  function latestNewsVersion() { return CHANGELOG.length ? String(CHANGELOG[0].version) : ''; }
  function seenNewsVersion() {
    var s = store.get('seenNews', null);
    if (s == null) { s = rawGet(PROG_KEY) ? '10.0.0' : latestNewsVersion(); store.set('seenNews', s); }   // brand-new visitors start up to date; v10 users see what changed since v10
    return s;
  }
  function unseenNews() {
    var seen = seenNewsVersion(), out = [];
    for (var i = 0; i < CHANGELOG.length; i++) {
      if (String(CHANGELOG[i].version) === seen) return out;
      out.push(CHANGELOG[i]);
    }
    return out;
  }
  function updateNavBadges() {
    var n = unseenNews().length;
    var els = document.querySelectorAll('[data-badge="news"]');
    for (var i = 0; i < els.length; i++) { els[i].textContent = n; els[i].hidden = !n; }
  }

  /* ===== Search ===== */
  var sugIndex = -1, sugTimer = null, searchKind = '';
  function terms(q) { return String(q).toLowerCase().replace(/[^\p{L}\p{N}\-\s.]/gu, ' ').split(/\s+/).filter(function (t) { return t.length > 0; }); }
  function runSearch(q) {
    var ts = terms(q);
    if (!ts.length) return [];
    var out = [];
    shellIndex().concat(searchIndex()).forEach(function (e) {
      var t = String(e.title || '').toLowerCase(), x = String(e.text || '').toLowerCase(), score = e.w || 0, ok = true;
      ts.forEach(function (w) {
        var iT = t.indexOf(w), iX = x.indexOf(w);
        if (iT < 0 && iX < 0) { ok = false; return; }
        if (iT >= 0) score += iT === 0 ? 12 : 8;
        if (iX >= 0) score += 2;
      });
      if (ok) out.push({ e: e, score: score });
    });
    out.sort(function (a, b) { return b.score - a.score; });
    return out.map(function (r) { return r.e; });
  }
  function highlight(text, ts) {
    text = String(text == null ? '' : text);
    if (!ts.length) return esc(text);
    var re = new RegExp('(' + ts.map(escRe).join('|') + ')', 'gi');
    return text.split(re).map(function (seg, i) { return i % 2 ? '<mark>' + esc(seg) + '</mark>' : esc(seg); }).join('');
  }
  function snippet(text, ts, len) {
    text = String(text || '');
    if (text.length <= len) return text;
    var low = text.toLowerCase(), at = -1;
    for (var i = 0; i < ts.length && at < 0; i++) at = low.indexOf(ts[i]);
    var start = Math.max(0, (at < 0 ? 0 : at) - 40);
    return (start > 0 ? '…' : '') + text.slice(start, start + len) + (start + len < text.length ? '…' : '');
  }
  function openSuggest(q) {
    q = String(q || '').trim();
    if (!q) { closeSuggest(); return; }
    var ts = terms(q), res = runSearch(q), shown = res.slice(0, 6);
    sugIndex = -1;
    qInput.removeAttribute('aria-activedescendant');
    if (!shown.length) {
      suggestBox.innerHTML = '<div class="suggest__empty">' + esc(tf('search.noMatches', { q: q })) + '</div>';
    } else {
      suggestBox.innerHTML = shown.map(function (e, i) {
        return '<a class="suggest__item" role="option" id="sug-' + i + '" href="' + esc(e.href) + '" aria-selected="false"><span class="suggest__meta"><span class="kind">' + esc(e.kind || '') + '</span>' + (e.where ? '<span>' + esc(e.where) + '</span>' : '') + '</span><span class="suggest__title">' + highlight(e.title, ts) + '</span><span class="suggest__text">' + highlight(snippet(e.text, ts, 140), ts) + '</span></a>';
      }).join('') + '<a class="suggest__item suggest__all" role="option" id="sug-all" href="#/search/' + encodeURIComponent(q) + '" aria-selected="false">' + esc(tf(res.length === 1 ? 'search.seeAll1' : 'search.seeAllN', { n: res.length })) + '</a>';
    }
    suggestBox.hidden = false;
    qInput.setAttribute('aria-expanded', 'true');
  }
  function closeSuggest() {
    if (!suggestBox) return;
    suggestBox.hidden = true; sugIndex = -1;
    qInput.setAttribute('aria-expanded', 'false');
    qInput.removeAttribute('aria-activedescendant');
  }
  function moveSug(d) {
    var items = suggestBox.querySelectorAll('.suggest__item');
    if (!items.length) return;
    sugIndex = (sugIndex + d + items.length) % items.length;
    items.forEach(function (it, i) { it.setAttribute('aria-selected', String(i === sugIndex)); });
    qInput.setAttribute('aria-activedescendant', items[sugIndex].id);
    items[sugIndex].scrollIntoView({ block: 'nearest' });
  }
  qInput.addEventListener('input', function () {
    clearTimeout(sugTimer);
    sugTimer = setTimeout(function () { openSuggest(qInput.value); }, 110);
  });
  qInput.addEventListener('focus', function () { if (qInput.value.trim()) openSuggest(qInput.value); });
  qInput.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowDown') { e.preventDefault(); if (suggestBox.hidden) openSuggest(qInput.value); moveSug(1); }
    else if (e.key === 'ArrowUp') { e.preventDefault(); moveSug(-1); }
    else if (e.key === 'Escape') { closeSuggest(); qInput.blur(); }
    else if (e.key === 'Enter') {
      e.preventDefault();
      var items = suggestBox.querySelectorAll('.suggest__item');
      var target = sugIndex > -1 && items[sugIndex] ? items[sugIndex].getAttribute('href') : (qInput.value.trim() ? '#/search/' + encodeURIComponent(qInput.value.trim()) : null);
      closeSuggest();
      if (target) { if (location.hash === target) route(); else location.hash = target; qInput.blur(); }
    }
  });
  suggestBox.addEventListener('mousedown', function (e) { e.preventDefault(); });
  qInput.addEventListener('blur', function () { setTimeout(closeSuggest, 120); });
  document.addEventListener('keydown', function (e) {
    var inField = !!(e.target.matches && e.target.matches('input, textarea, select'));
    if ((e.key === '/' && !e.ctrlKey && !e.metaKey && !e.altKey && !inField) || ((e.key === 'k' || e.key === 'K') && (e.ctrlKey || e.metaKey) && !e.altKey)) { e.preventDefault(); closeDrawer(); qInput.focus(); qInput.select(); }
  });

  /* ===== Views ===== */
  var VIEWS = {};
  var AFTER = {};      // optional: AFTER.myScreen = function (arg) { ...wire events after render... }
  var TITLES = { home: '' };   // key -> page title (the shell's own titles come from SHELL_TITLES)
  var SHELL_TITLES = { 'whats-new': 'nav.whatsNew', about: 'nav.about', search: 'search.title' };

  VIEWS['whats-new'] = function () {
    var unseen = {};
    unseenNews().forEach(function (e) { unseen[String(e.version)] = true; });
    var html = '<div class="wrap page news"><header class="page__head"><h1>' + esc(t('nav.whatsNew')) + '</h1><p>' + esc(t('news.intro1')) + '<span class="news__new">' + esc(t('news.new')) + '</span>' + esc(t('news.intro2')) + '</p></header>' +
      CHANGELOG.map(function (e) {
        var isNew = !!unseen[String(e.version)];
        return '<article class="news__entry' + (isNew ? ' is-new' : '') + '"><div class="news__date"><time datetime="' + esc(e.date) + '">' + esc(fmtDate(e.date)) + '</time><span class="news__ver">' + esc(tf('news.version', { v: e.version })) + '</span>' + (isNew ? '<span class="news__new">' + esc(t('news.new')) + '</span>' : '') + '</div>' +
          '<div class="news__body"><h2>' + esc(e.title) + '</h2>' + (e.summary ? '<p>' + esc(e.summary) + '</p>' : '') + '<ul>' +
          (e.items || []).map(function (it) {
            var ty = String(it.type || 'feature'), tyLabel = t('news.type.' + ty);
            if (tyLabel === 'news.type.' + ty) tyLabel = ty.charAt(0).toUpperCase() + ty.slice(1);
            return '<li><span class="news__type news__type--' + esc(ty) + '">' + esc(tyLabel) + '</span><span class="news__text">' + esc(it.text) + (it.href ? ' <a href="' + esc(it.href) + '">' + esc(t('news.open')) + '</a>' : '') + '</span></li>';
          }).join('') + '</ul></div></article>';
      }).join('') +
      '<p class="news__note">' + esc(t('news.note')) + '<a href="mailto:isaymotion@gmail.com">isaymotion@gmail.com</a>.</p></div>';
    store.set('seenNews', latestNewsVersion());   // opening the page marks everything as seen
    return html;
  };

  function segGroup(name, label, opts, cur) {   // opts: [[value, label], ...]; radios inside the shared .seg control
    return '<fieldset class="setting"><legend>' + esc(label) + '</legend><div class="seg">' + opts.map(function (o) {
      return '<label><input type="radio" name="' + esc(name) + '" value="' + esc(o[0]) + '"' + (cur === o[0] ? ' checked' : '') + '><span>' + esc(o[1]) + '</span></label>';
    }).join('') + '</div></fieldset>';
  }
  VIEWS.search = function (q) {
    q = String(q || '');
    var ts = terms(q), res = runSearch(q);
    var kinds = [];
    res.forEach(function (e) { var k = e.kind || ''; if (k && kinds.indexOf(k) < 0) kinds.push(k); });
    if (searchKind && kinds.indexOf(searchKind) < 0) searchKind = '';
    var shown = searchKind ? res.filter(function (e) { return e.kind === searchKind; }) : res;
    return '<div class="wrap page search-page"><header class="page__head"><h1>' + esc(t('search.title')) + '</h1><p>' +
        esc(q ? tf(shown.length === 1 ? 'search.count1' : 'search.countN', { n: shown.length, q: q }) : t('search.prompt')) + '</p></header>' +
      (kinds.length > 1 ? '<div class="filters" role="group" aria-label="' + esc(t('search.filterBy')) + '"><button type="button" class="filter" data-kind="" aria-pressed="' + (!searchKind) + '">' + esc(t('search.all')) + '</button>' +
        kinds.map(function (k) { return '<button type="button" class="filter" data-kind="' + esc(k) + '" aria-pressed="' + (searchKind === k) + '">' + esc(k) + '</button>'; }).join('') + '</div>' : '') +
      (shown.length
        ? '<div class="results">' + shown.map(function (e) {
            return '<div class="result"><a href="' + esc(e.href) + '"><span class="result__meta"><span class="kind">' + esc(e.kind || '') + '</span>' + (e.where ? '<span>' + esc(e.where) + '</span>' : '') + '</span><span class="result__title">' + highlight(e.title, ts) + '</span><span class="result__text">' + highlight(snippet(e.text, ts, 220), ts) + '</span></a></div>';
          }).join('') + '</div>'
        : (q ? '<div class="empty"><h2>' + esc(t('search.noneTitle')) + '</h2><p>' + esc(t('search.noneText')) + '</p></div>' : ''))
      + '</div>';
  };
  AFTER.search = function (q) { if (qInput && document.activeElement !== qInput) qInput.value = q || ''; };

  function missingView() {
    return '<div class="wrap page"><div class="empty"><h2>' + esc(t('notfound.title')) + '</h2><p>' + esc(t('notfound.text')) + '</p><p><a class="btn btn--solid" href="#/">' + esc(t('notfound.home')) + '</a></p></div></div>';
  }


  /* ===== Shea content registry: content/*.js registers itself on window.TRAINER ===== */
  var TR = window.TRAINER || { parts: {} };
  var PART_ORDER = ['part1', 'part2', 'part3', 'part4'];
  // Shown in Learn and the menu until each part's content file is added.
  var UPCOMING = [
    { id: 'part3', numeral: 'III', title: 'Mastering Complex Interviewing Tasks Demanded in Everyday Clinical Practice',
      chapters: [[16, 'The Mental Status'], [17, 'Exploring Suicidal Ideation'], [18, 'Exploring Violent and Homicidal Ideation']] },
    { id: 'part4', numeral: 'IV', title: 'Specialized Topics and Advanced Interviewing',
      chapters: [[19, 'Transforming Anger, Confrontation, and Other Points of Disengagement'], [20, 'Culturally Adaptive Interviewing'], [21, 'Vantage Points'],
        [22, 'Motivational Interviewing'], [23, 'Medication Interest Model']] }
  ];
  function bookParts() {
    return PART_ORDER.map(function (id) { return TR.parts[id]; }).filter(function (p) { return p && p.chapters && p.chapters.length; });
  }
  function chapters() {
    var out = [];
    bookParts().forEach(function (p) { p.chapters.forEach(function (c) { c._part = p; out.push(c); }); });
    return out;
  }
  // Chapters listed in UPCOMING that have no content file yet, for a given part id.
  function pendingChapters(partId) {
    var have = {};
    chapters().forEach(function (c) { have[c.num] = 1; });
    var u = UPCOMING.filter(function (x) { return x.id === partId; })[0];
    return u ? u.chapters.filter(function (c) { return !have[c[0]]; }) : [];
  }
  function chapterById(id) { return chapters().filter(function (c) { return c.id === id; })[0]; }
  function chapterByNum(n) { return chapters().filter(function (c) { return c.num === n; })[0]; }
  function simulations() {
    var out = [];
    bookParts().forEach(function (p) { (p.simulations || []).forEach(function (s) { out.push(s); }); });
    return out;
  }
  function drills() {
    var out = [];
    bookParts().forEach(function (p) { (p.drills || []).forEach(function (d) { out.push(d); }); });
    return out;
  }
  function allPractice() {
    var out = [];
    chapters().forEach(function (c) { (c.practice || []).forEach(function (it) { it._ch = c; out.push(it); }); });
    return out;
  }
  function guideFor(id) { return (TR.guides || {})[id]; }

  /* ===== Progress: kept EXACTLY where v10 saved it, so nobody loses anything =====
     One JSON blob under "pit.progress.v1" (practice, quiz, sims, cards, drills, bookmarks), and the two
     Tagalog switches as "1"/"0" under "sheatrainer.simTl" and "sheatrainer.practiceTl". These keys sit outside
     PREFIX on purpose; the backup panel includes them by name (LEGACY_KEYS). */
  var PROG_KEY = 'pit.progress.v1';
  var SIM_TL_KEY = 'sheatrainer.simTl';
  var PR_TL_KEY = 'sheatrainer.practiceTl';
  var LEGACY_KEYS = [PROG_KEY, SIM_TL_KEY, PR_TL_KEY];
  function rawGet(k) { try { return localStorage.getItem(k); } catch (e) { return null; } }
  function rawSet(k, v) { try { localStorage.setItem(k, v); } catch (e) { /* storage unavailable */ } }
  var STORE_KEYS = ['practice', 'quiz', 'sims', 'cards', 'drills', 'bookmarks'];
  function emptyStore() { var o = {}; STORE_KEYS.forEach(function (k) { o[k] = {}; }); return o; }
  var prog = emptyStore();
  try {
    var rawProg = localStorage.getItem(PROG_KEY);
    if (rawProg) {
      var parsedProg = JSON.parse(rawProg);
      Object.keys(prog).forEach(function (k) { if (parsedProg[k]) prog[k] = parsedProg[k]; });
    }
    // One-time migration (from v4): flashcards used to be stored as `true` ("Got it"); they are now Leitner box entries.
    if (normalizeCards(prog.cards)) saveProg();
  } catch (e) { /* storage unavailable: progress lives for this session only */ }
  function saveProg() {
    try { localStorage.setItem(PROG_KEY, JSON.stringify(prog)); } catch (e) { /* ignore */ }
  }
  var simTl = rawGet(SIM_TL_KEY) === '1';
  var practiceTl = rawGet(PR_TL_KEY) === '1';

  /* ===== Spaced repetition (Leitner boxes) =====
     prog.cards[key] = { box: 0..5, due: ms timestamp, reps: n }. A missing entry is a new card. */
  var SRS_DAYS = [0, 1, 3, 7, 14, 30];
  var DAY_MS = 86400000;
  function normalizeCards(cards) {
    var changed = false, now = Date.now();
    Object.keys(cards).forEach(function (k) {
      var v = cards[k];
      if (v === true) { cards[k] = { box: 2, due: now, reps: 1 }; changed = true; return; }
      if (!v || typeof v !== 'object' || typeof v.box !== 'number') { delete cards[k]; changed = true; return; }
      var box = Math.max(0, Math.min(5, Math.round(v.box)));
      if (box !== v.box || typeof v.due !== 'number' || typeof v.reps !== 'number') {
        cards[k] = { box: box, due: typeof v.due === 'number' ? v.due : now, reps: typeof v.reps === 'number' ? v.reps : 0 };
        changed = true;
      }
    });
    return changed;
  }
  function cardEntry(key) { var e = prog.cards[key]; return e && typeof e === 'object' ? e : null; }
  function isDue(key, now) { var e = cardEntry(key); return !e || e.due <= now; }
  function endOfDay(offsetDays) { var d = new Date(); d.setHours(23, 59, 59, 999); return d.getTime() + (offsetDays || 0) * DAY_MS; }
  function cardDeck(scope) {
    var deck = [];
    chapters().forEach(function (c) {
      if (scope === 'all' || c.id === scope) (c.glossary || []).forEach(function (g) { deck.push({ term: g.term, def: g.def, ch: c.num, key: c.id + ':' + g.term }); });
    });
    return deck;
  }
  function gradeCard(key, grade) {
    var e = cardEntry(key) || { box: 0, due: 0, reps: 0 }, now = Date.now();
    var box = grade === 'again' ? 0 : Math.min(5, e.box + (grade === 'easy' ? 2 : 1));
    prog.cards[key] = { box: box, due: now + SRS_DAYS[box] * DAY_MS, reps: (e.reps || 0) + 1 };
    saveProg();
  }
  function fmtDay(ms) {
    var d = new Date(ms);
    if (ms <= endOfDay(0)) return 'today';
    if (ms <= endOfDay(1)) return 'tomorrow';
    return d.toLocaleDateString(undefined, { weekday: 'short', month: 'short', day: 'numeric' });
  }

  /* ===== Shea Trainer screens (ported from v10; same content, data and behaviour, shared shell classes) =====
     Each VIEWS entry returns HTML. Screens that change in place (practice, quiz, interviews, drills, flashcards)
     rebuild their HTML with renderX() and paint it with paint(). pageTitle lets a view name the browser tab. */
  var pageTitle = null;
  function paint(html) { main.innerHTML = html; }
  function clamp(n) { return Math.max(0, Math.min(100, n)); }
  var VERDICT = { best: 'Best response', ok: 'Workable', poor: 'Likely to backfire' };
  var session = {};   // per-view working state
  function head(title, lede, extra) {
    return '<header class="page__head"><h1>' + title + '</h1>' + (lede ? '<p>' + lede + '</p>' : '') + (extra || '') + '</header>';
  }

  /* "Sa Tagalog" overlays (content/tagalog-sims.js, content/tagalog-practice.js) */
  function simOverlay(sim) { var o = TR.tagalogSims; return o && o[sim.id] ? o[sim.id] : null; }
  function tlNode(sim, nodeId) { var o = simOverlay(sim); return o && o.nodes ? o.nodes[nodeId] : null; }
  function tlOn(sim) { return !!sim.tl || (simTl && !!simOverlay(sim)); }
  function prOverlay(it) { var o = TR.tagalogPractice; return o && o[it.id] ? o[it.id] : null; }
  function gloss(en) { return '<span class="gloss">' + esc(en) + '</span>'; }
  function speechTl(sim, nodeId, en, who) {
    if (sim.tl) { /* Tagalog-first case: p is Tagalog, node.en is the gloss */
      var tn = sim.nodes[nodeId];
      return speech(en, who).replace(/<\/p>$/, (tn && tn.en ? gloss(tn.en) : '') + '</p>');
    }
    var n = tlOn(sim) ? tlNode(sim, nodeId) : null;
    if (!(n && n.p && en)) return speech(en, who);
    return speech(n.p, who).replace(/<\/p>$/, gloss(en) + '</p>');
  }
  function choiceTl(sim, nodeId, i, en) {
    if (sim.tl) { var c = sim.nodes[nodeId] && sim.nodes[nodeId].choices[i]; return esc(en) + (c && c.en ? gloss(c.en) : ''); }
    var n = tlOn(sim) ? tlNode(sim, nodeId) : null;
    var tt = n && n.t && n.t[i];
    return tt ? esc(tt) + gloss(en) : esc(en);
  }
  var TL_DRILLS = ['sabihin-tagalog', 'tagalog-idioms', 'tagalog-register', 'pakinggan'];
  function tagalogDrills() { return drills().filter(function (d) { return TL_DRILLS.indexOf(d.id) > -1; }); }

  /* Sunflower gauge: the flower turns toward the sun and opens as the patient engages. value: 0-100. */
  function flowerSVG(value, label) {
    var petals = '', n = 18, i;
    for (i = 0; i < n; i++) {
      var a = (360 / n) * i;
      petals += '<g transform="translate(100 96) rotate(' + a.toFixed(1) + ')"><path class="petal" d="M0,-21 C10,-31 8,-50 0,-60 C-8,-50 -10,-31 0,-21Z" fill="' + (i % 2 ? '#F6B819' : '#E9A20A') + '"/></g>';
    }
    var seeds = '', ga = Math.PI * (3 - Math.sqrt(5));
    for (var k = 1; k < 46; k++) {
      var r = 20 * Math.sqrt(k / 46), th = k * ga;
      seeds += '<circle cx="' + (100 + r * Math.cos(th)).toFixed(1) + '" cy="' + (96 + r * Math.sin(th)).toFixed(1) + '" r="' + (0.9 + r / 18).toFixed(2) + '" fill="#7A4E26"/>';
    }
    return '<svg class="flower" viewBox="0 0 200 230" role="img" aria-label="' + esc(label || 'Blending') + ': ' + Math.round(value) + ' out of 100" data-flower>' +
      '<g class="sunray" opacity="0.9"><circle cx="182" cy="18" r="11" fill="#EFAE1A"/>' +
      '<g stroke="#EFAE1A" stroke-width="3" stroke-linecap="round">' +
      '<line x1="182" y1="0" x2="182" y2="3"/><line x1="164" y1="18" x2="167" y2="18"/><line x1="169" y1="5" x2="171" y2="7"/><line x1="169" y1="31" x2="171" y2="29"/><line x1="195" y1="5" x2="193" y2="7"/></g></g>' +
      '<path class="stem" d="M100 120 C 98 160, 106 190, 100 228" stroke-width="6" fill="none" stroke-linecap="round"/>' +
      '<path class="leaf" d="M101 178 C 122 160, 146 166, 152 156 C 140 184, 118 186, 101 182Z"/>' +
      '<path class="leaf" d="M100 200 C 80 186, 60 192, 52 184 C 62 208, 86 208, 100 204Z" opacity="0.85"/>' +
      '<g class="head">' + petals +
      '<circle cx="100" cy="96" r="23" fill="#3E2614"/>' + seeds + '</g></svg>';
  }
  function setFlower(svg, value) {
    if (!svg) return;
    var v = clamp(value) / 100;
    var tilt = -42 + 56 * v;
    var hd = svg.querySelector('.head');
    hd.style.transformOrigin = '100px 120px';
    hd.style.transform = 'rotate(' + tilt.toFixed(1) + 'deg)';
    var s = 0.28 + 0.72 * v;
    var ps = svg.querySelectorAll('.petal');
    for (var i = 0; i < ps.length; i++) {
      var p = ps[i];
      p.style.transformBox = 'fill-box';
      p.style.transformOrigin = '50% 100%';
      p.style.transform = 'scale(' + (0.75 + 0.25 * v).toFixed(2) + ',' + s.toFixed(2) + ')';
      p.style.opacity = (0.45 + 0.55 * v).toFixed(2);
      p.style.filter = 'saturate(' + (0.45 + 0.55 * v).toFixed(2) + ')';
    }
    svg.setAttribute('aria-label', 'Blending: ' + Math.round(value) + ' out of 100');
  }

  /* Shared bits */
  function speech(p, who) {
    var inner = String(p == null ? '' : p).replace(/"([^"]*)"/g, '‘$1’');
    return '<p class="speech"><span class="speech-who">' + esc(who || 'Patient') + '</span>“' + esc(inner) + '”</p>';
  }
  function cue(c) { return c ? '<p class="cue">' + esc(c) + '</p>' : ''; }
  function chapterChips(active, base, extra) {
    var html = '<div class="filters" role="group" aria-label="Choose chapter">';
    html += '<a class="filter" href="#/' + base + '/all" aria-pressed="' + (active === 'all') + '">All chapters</a>';
    chapters().forEach(function (c) {
      if (base === 'practice' && !(c.practice || []).length) return;
      if (base === 'cards' && !(c.glossary || []).length) return;
      html += '<a class="filter" href="#/' + base + '/' + c.id + '" aria-pressed="' + (active === c.id) + '">Ch. ' + c.num + '</a>';
    });
    return html + (extra || '') + '</div>';
  }
  function optionHTML(o, idx, state, tl) {
    // state: undefined (unanswered) or { chosen }; tl: optional Tagalog wording (English becomes the gloss)
    var label = tl ? esc(tl) + gloss(o.t) : esc(o.t);
    if (!state) return '<button type="button" class="option" data-action="pick" data-i="' + idx + '">' + label + '</button>';
    var cls = 'option ' + o.v + (state.chosen === idx ? ' chosen' : '');
    return '<button type="button" class="' + cls + '" disabled>' + label +
      '<span class="verdict">' + (state.chosen === idx ? 'Your choice: ' : '') + VERDICT[o.v] + '</span><span class="why">' + esc(o.w) + '</span></button>';
  }
  function chapterRow(c, meta) {
    return '<li><a class="row" href="#/learn/' + c.id + '"><span class="row__num">' + c.num + '</span><span><h3>' + esc(c.title) + '</h3><p>' + esc(c.sub) + '</p></span><span class="row__meta">' + meta + '</span></a></li>';
  }
  function lockedRow(num, title) {
    return '<li><span class="row is-locked" aria-disabled="true"><span class="row__num">' + num + '</span><span><h3>' + esc(title) + '</h3></span><span class="row__meta">Coming soon</span></span></li>';
  }
  function notFound() { pageTitle = t('notfound.title'); return missingView(); }

  /* Home */
  TITLES.home = '';
  VIEWS.home = function () {
    var pool = allPractice();
    var item = pool[Math.floor(Math.random() * pool.length)];
    session.hero = { item: item, opts: shuffle(item.opts), answered: null };
    var progressCount = Object.keys(prog.practice).length;
    var partLists = bookParts().map(function (p) {
      var items = p.chapters.map(function (c) {
        var done = (c.practice || []).filter(function (it) { return prog.practice[it.id]; }).length;
        return chapterRow(c, (c.practice || []).length ? done + '/' + c.practice.length + ' practiced' : (guideFor(c.id) ? 'Study guide' : ''));
      }).join('');
      return '<h2 class="home__h home__part">Part ' + esc(p.numeral) + '  ' + esc(p.title) + '</h2><ul class="rows">' + items + '</ul>';
    }).join('');
    return '<section class="hero"><div class="wrap hero__inner hero--shea">' +
        '<div><h1>What would you say next?</h1>' +
        '<p class="hero__lead">Practice the moment-to-moment choices that help patients feel safe enough to tell you the truth. The sunflower turns toward you as the patient engages.</p>' +
        '<p><a class="btn btn--solid" href="#/practice/all">Response practice</a> <a class="btn" href="#/learn">Study guides</a></p></div>' +
        '<figure class="hero-flower">' + flowerSVG(45) + '<figcaption>Blending: how engaged this patient feels with you right now.</figcaption></figure>' +
      '</div></section>' +
      '<div class="wrap home">' + whatsNewTeaser() +
        '<div class="card moment" id="hero-item" aria-live="polite">' + heroHTML() + '</div>' +
        '<h2 class="home__h">Ways to practice</h2><div class="cards">' +
          '<a class="card tile" href="#/practice/all">' + icon('chat', 'tile__ico') + '<h3>Response practice</h3><p>One patient statement, three possible replies. Learn why each works or backfires.</p></a>' +
          '<a class="card tile" href="#/simulate">' + icon('users', 'tile__ico') + '<h3>Simulated interviews</h3><p>Branching cases where every choice moves engagement and the database you gather.</p></a>' +
          '<a class="card tile" href="#/drills">' + icon('target', 'tile__ico') + '<h3>Technique drills</h3><p>Name the technique, symptom, or pattern: question types, gates, validity techniques, delusions, first-rank symptoms, personality probes.</p></a>' +
          '<a class="card tile" href="#/cards/all">' + icon('cards', 'tile__ico') + '<h3>Flashcards</h3><p>Shea\'s vocabulary, chapter by chapter.</p></a>' +
        '</div>' +
        '<p class="muted home__count">' + progressCount + ' of ' + pool.length + ' practice items answered so far.</p>' + partLists +
      '</div>';
  };
  AFTER.home = function () { setFlower(main.querySelector('.hero-flower [data-flower]'), 45); };
  function whatsNewTeaser() {
    var w = CHANGELOG[0];
    if (!w) return '';
    return '<a class="card news-strip" href="#/whats-new"><span class="badge" data-badge="news" hidden></span><strong>' + esc(t('nav.whatsNew')) + '</strong>' +
      '<span class="muted">' + esc(w.teaser ? w.teaser : tf('home.latest', { title: w.title, version: w.version })) + '</span><span class="news-strip__more">See what\'s new</span></a>';
  }
  function heroHTML() {
    var h = session.hero, it = h.item;
    var html = '<div class="hrow"><div class="skill">' + esc(it.skill) + '</div><span class="spacer"></span><span class="counter">Chapter ' + it._ch.num + '</span></div>' +
      '<p class="context">' + esc(it.ctx) + '</p>' + speech(it.p) + cue(it.cue) +
      '<p class="prompt">Choose your response.</p><div class="options">' +
      h.opts.map(function (o, i) { return optionHTML(o, i, h.answered); }).join('') + '</div>';
    if (h.answered) {
      html += '<div class="hrow mt-1"><button type="button" class="btn btn--solid" data-action="hero-next">Try another moment</button><a class="btn" href="#/practice/' + it._ch.id + '">More from Chapter ' + it._ch.num + '</a></div>';
    }
    return html;
  }

  /* Learn index (and #/learn/<chapter>[/<section>|/review]) */
  TITLES.learn = 'Learn';
  VIEWS.learn = function (arg, sub) {
    if (arg) return VIEWS.chapter(arg, sub);
    var html = '<div class="wrap page">' + head('Learn', 'Read each chapter\'s study guide, or review its key ideas, pocket card, and vocabulary.') + bookmarkTeaser();
    bookParts().forEach(function (p) {
      html += '<section class="learn-part" id="' + esc(p.id) + '"><h2>Part ' + esc(p.numeral) + '  ' + esc(p.title) + '</h2><p class="muted">' + esc(p.blurb || '') + '</p><ul class="rows">';
      p.chapters.forEach(function (c) {
        html += chapterRow(c, guideFor(c.id) ? '<span class="tag">Study guide</span>' : (c.concepts || []).length + ' key ideas');
      });
      pendingChapters(p.id).forEach(function (c) { html += lockedRow(c[0], c[1]); });
      html += '</ul></section>';
    });
    UPCOMING.forEach(function (u) {
      if (TR.parts[u.id]) return;
      html += '<section class="learn-part"><h2>Part ' + u.numeral + '  ' + esc(u.title) + '</h2><p class="muted">Coming next. These chapters will appear here when their study guides are added.</p><ul class="rows">';
      u.chapters.forEach(function (c) { html += lockedRow(c[0], c[1]); });
      html += '</ul></section>';
    });
    return html + '</div>';
  };

  /* Glossary */
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
  function richG(text) {
    return esc(text).replace(/\[\[([^\]|]+)(?:\|([^\]]+))?\]\]/g, function (m, term, shown) {
      return '<button type="button" class="term" data-action="term" data-term="' + term + '" aria-haspopup="dialog" aria-expanded="false">' + (shown || term) + '</button>';
    });
  }
  var BOOKMARK_ICON = '<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><path d="M6 3h12a1 1 0 0 1 1 1v17l-7-4.5L5 21V4a1 1 0 0 1 1-1z"/></svg>';
  function guideLinkHref(l) {
    if (l.kind === 'practice') {
      var item = allPractice().filter(function (it) { return it.id === l.id; })[0];
      return item ? '#/practice/' + item._ch.id + '/' + l.id : '#/practice/all';
    }
    if (l.kind === 'sim') return '#/simulate/' + l.id;
    if (l.kind === 'drill') return '#/drills/' + l.id;
    if (l.kind === 'quiz') return '#/quiz/' + l.id;
    return '#/';
  }
  /* "Sa Tagalog" card: links a guide section to the matching section of Usap Tayo (content/tagalog.js). */
  function tagalogCard(chId, secId) {
    var T = TR.tagalog, l = T && T.links && T.links[chId + ':' + secId];
    if (!l) return '';
    var href = l.href || (T.base + l.s), title = l.title || T.sections[l.s] || l.s;
    return '<aside class="tl-card"><div class="tl-head"><span class="tl-tag">Sa Tagalog</span><span class="small muted">' + esc(T.status) + '</span></div>' +
      '<p class="tl-why">' + esc(l.why) + '</p>' +
      (l.tl ? '<p class="tl-phrase"><span class="tl-en">' + esc(l.en) + '</span><span class="tl-tl" lang="tl">' + esc(l.tl) + '</span></p>' : '') +
      '<a class="filter tl-link" href="' + esc(href) + '" target="_blank" rel="noopener">Open in ' + esc(T.app) + ': ' + esc(title) + '</a></aside>';
  }
  function renderBlock(b) {
    switch (b.type) {
      case 'p': return '<p>' + richG(b.text) + '</p>';
      case 'list': return '<ul class="g-list">' + b.items.map(function (x) { return '<li>' + richG(x) + '</li>'; }).join('') + '</ul>';
      case 'steps': return '<ol class="g-steps">' + b.items.map(function (x) { return '<li>' + richG(x) + '</li>'; }).join('') + '</ol>';
      case 'table':
        return '<div class="table-wrap"><table class="g-table"><thead><tr>' + b.head.map(function (h) { return '<th scope="col">' + esc(h) + '</th>'; }).join('') +
          '</tr></thead><tbody>' + b.rows.map(function (r) { return '<tr>' + r.map(function (cell, k) { return (k === 0 ? '<th scope="row">' : '<td>') + richG(cell) + (k === 0 ? '</th>' : '</td>'); }).join('') + '</tr>'; }).join('') + '</tbody></table></div>';
      case 'compare':
        return '<div class="g-compare">' + [b.a, b.b].map(function (side) {
          return '<div><h4>' + esc(side.title) + '</h4><ul>' + side.items.map(function (x) { return '<li>' + richG(x) + '</li>'; }).join('') + '</ul></div>';
        }).join('') + '</div>';
      case 'case':
        return '<div class="g-case"><h4>' + esc(b.title) + '</h4><p>' + richG(b.text) + '</p><p class="g-source">Case from the chapter, summarized.</p></div>';
      case 'exchange':
        return '<figure class="g-exchange">' + (b.title ? '<figcaption>' + esc(b.title) + '</figcaption>' : '') +
          b.lines.map(function (ln) {
            return '<div class="ex-line"><span class="ex-who">' + esc(ln.who) + '</span><span class="ex-t">' + richG(ln.t) + (ln.tag ? ' <span class="ex-tag">' + esc(ln.tag) + '</span>' : '') + '</span></div>';
          }).join('') + (b.note ? '<p class="ex-note">' + richG(b.note) + '</p>' : '') + '</figure>';
      case 'pearl': return '<aside class="callout g-pearl"><p class="callout__title">' + esc(b.title) + '</p><p>' + richG(b.text) + '</p></aside>';
    }
    return '';
  }

  /* Glossary popover */
  var termPop = null, termBtn = null;
  function closeTerm() {
    if (termPop) { termPop.remove(); termPop = null; }
    if (termBtn) { termBtn.setAttribute('aria-expanded', 'false'); termBtn = null; }
  }
  function openTerm(btn) {
    var same = termBtn === btn;
    closeTerm();
    if (same) return;
    var g = glossaryIndex()[btn.getAttribute('data-term').toLowerCase()];
    if (!g) return;
    termBtn = btn; btn.setAttribute('aria-expanded', 'true');
    termPop = document.createElement('div');
    termPop.className = 'term-pop'; termPop.setAttribute('role', 'dialog'); termPop.setAttribute('aria-label', g.term);
    termPop.innerHTML = '<div class="hrow"><strong>' + esc(g.term) + '</strong><span class="spacer"></span><button type="button" class="term-close" aria-label="Close definition">×</button></div>' +
      '<p>' + esc(g.def) + '</p><a class="small" href="#/cards/' + chapterByNum(g.ch).id + '">Chapter ' + g.ch + ' flashcards</a>';
    document.body.appendChild(termPop);
    var r = btn.getBoundingClientRect(), w = termPop.offsetWidth, h = termPop.offsetHeight;
    var left = Math.max(12, Math.min(window.innerWidth - w - 12, r.left));
    var top = r.bottom + 8;
    if (top + h > window.innerHeight - 12 && r.top - h - 8 > 12) top = r.top - h - 8;
    termPop.style.left = (left + window.scrollX) + 'px';
    termPop.style.top = (top + window.scrollY) + 'px';
    termPop.querySelector('.term-close').addEventListener('click', function () { var b = termBtn; closeTerm(); if (b) b.focus(); });
  }
  document.addEventListener('click', function (e) {
    if (termPop && !termPop.contains(e.target) && !e.target.closest('.term')) closeTerm();
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && termPop) { var b = termBtn; closeTerm(); if (b) b.focus(); }
  });
  window.addEventListener('resize', closeTerm);

  function bookmarkTeaser() {
    var n = Object.keys(prog.bookmarks || {}).length;
    return n ? '<p><a href="#/bookmarks">Your bookmarks (' + n + ')</a></p>' : '';
  }

  /* Chapter page: study guide, or quick review */
  VIEWS.chapter = function (id, sub) {
    var c = chapterById(id);
    if (!c) return notFound();
    pageTitle = 'Chapter ' + c.num + ': ' + c.title;
    var guide = guideFor(id);
    var mode = guide && sub !== 'review' ? 'guide' : 'review';
    var prev = chapterByNum(c.num - 1), next = chapterByNum(c.num + 1);
    var top = '<p class="crumb"><a href="#/learn">Learn</a> / Part ' + esc(c._part.numeral) + ', Chapter ' + c.num + '</p>' +
      head(esc(c.title), esc(c.summary),
        guide ? '<nav class="seg seg--links" aria-label="Chapter view"><a href="#/learn/' + c.id + '"' + (mode === 'guide' ? ' aria-current="page"' : '') + '>Study guide</a><a href="#/learn/' + c.id + '/review"' + (mode === 'review' ? ' aria-current="page"' : '') + '>Quick review</a></nav>' : '');
    var pager = '<div class="hrow pager">' + (prev ? '<a class="btn" href="#/learn/' + prev.id + '">Chapter ' + prev.num + ': ' + esc(prev.title) + '</a>' : '') + '<span class="spacer"></span>' +
      (next ? '<a class="btn" href="#/learn/' + next.id + '">Chapter ' + next.num + ': ' + esc(next.title) + '</a>' : '') + '</div>';

    if (mode === 'review') {
      var sims = simulations().filter(function (s) { return s.chapters.indexOf(c.num) > -1; });
      var concepts = c.concepts.map(function (k) { return '<div class="concept"><h3>' + esc(k.h) + '</h3><p>' + esc(k.b) + '</p></div>'; }).join('');
      var pearls = '<ul>' + c.pearls.map(function (p) { return '<li>' + esc(p) + '</li>'; }).join('') + '</ul>';
      var glossHtml = '<dl class="glossary">' + c.glossary.map(function (g) { return '<dt>' + esc(g.term) + '</dt><dd>' + esc(g.def) + '</dd>'; }).join('') + '</dl>';
      var simLinks = sims.map(function (s) { return '<a class="btn" href="#/simulate/' + s.id + '">Interview: ' + esc(s.title) + '</a>'; }).join('');
      return '<div class="wrap page">' + top +
        '<div class="learn-grid"><div>' + concepts +
          '<section><h2>Vocabulary</h2>' + glossHtml + '</section>' + pager +
        '</div><aside><div class="pocket"><h3>Pocket card</h3>' + pearls + '</div>' +
          '<div class="aside-actions">' + ((c.practice || []).length ? '<a class="btn btn--solid" href="#/practice/' + c.id + '">Practice responses</a>' : '') + ((c.quiz || []).length ? '<a class="btn' + ((c.practice || []).length ? '' : ' btn--solid') + '" href="#/quiz/' + c.id + '">Take the chapter quiz</a>' : '') +
          '<a class="btn" href="#/cards/' + c.id + '">Flashcards</a>' + simLinks + '</div></aside></div></div>';
    }

    var hy = guide.highYield;
    var toc = '<li><a href="#/learn/' + c.id + '/high-yield" data-toc="high-yield">High-yield</a></li>' +
      guide.sections.map(function (sec) {
        var marked = prog.bookmarks[c.id + ':' + sec.id] ? 'marked' : '';
        return '<li><a href="#/learn/' + c.id + '/' + sec.id + '" data-toc="' + sec.id + '" class="' + marked + '">' + esc(sec.title) + '</a></li>';
      }).join('') +
      '<li><a href="#/learn/' + c.id + '/deeper" data-toc="deeper">Go deeper in the book</a></li>';
    var wide = window.matchMedia('(min-width: 1241px)').matches;
    var hyHtml = '<section class="hy guide-sec" id="sec-high-yield" aria-labelledby="hy-h"><h2 id="hy-h">High-yield</h2>' +
      '<div class="hy-block"><h3>Must know</h3><ul>' + hy.mustKnow.map(function (x) { return '<li>' + richG(x) + '</li>'; }).join('') + '</ul></div>' +
      '<div class="hy-block"><h3>Common pitfalls</h3><ul class="hy-pitfalls">' + hy.pitfalls.map(function (x) { return '<li>' + richG(x) + '</li>'; }).join('') + '</ul></div>' +
      '<div class="hy-block"><h3>Words to use</h3><dl class="hy-phrases">' + hy.phrases.map(function (x) { return '<dt>“' + esc(x.say) + '”</dt><dd>' + richG(x.when) + '</dd>'; }).join('') + '</dl></div></section>';
    var secs = guide.sections.map(function (sec) {
      var key = c.id + ':' + sec.id, on = !!prog.bookmarks[key];
      var links = (sec.practice || []).map(function (l) { return '<a class="filter" href="' + guideLinkHref(l) + '">' + esc(l.label) + '</a>'; }).join('');
      return '<section class="guide-sec" id="sec-' + sec.id + '" aria-labelledby="h-' + sec.id + '">' +
        '<div class="sec-head"><h2 id="h-' + sec.id + '">' + esc(sec.title) + '</h2><button type="button" class="bm" data-action="bookmark" data-key="' + key + '" data-ch="' + c.id + '" data-sec="' + sec.id + '" data-title="' + esc(sec.title) + '" aria-pressed="' + on + '">' +
          BOOKMARK_ICON + '<span class="bm-label">' + (on ? 'Bookmarked' : 'Bookmark') + '</span></button></div>' +
        (sec.lede ? '<p class="sec-lede">' + richG(sec.lede) + '</p>' : '') +
        sec.blocks.map(renderBlock).join('') +
        (links ? '<div class="practice-links"><span class="small muted">Practice this</span><div class="filters">' + links + '</div></div>' : '') +
        tagalogCard(c.id, sec.id) +
        '</section>';
    }).join('');
    var deeper = '<section class="guide-sec deeper" id="sec-deeper"><h2>Go deeper in the book</h2><p class="muted">This guide is a companion to Shea’s chapter, not a replacement for it.</p><ul>' +
      guide.deeper.map(function (d) { return '<li><strong>' + esc(d.title) + '.</strong> ' + richG(d.text) + '</li>'; }).join('') + '</ul></section>';
    return '<div class="wrap page">' + top +
      '<div class="guide-grid">' +
        '<div class="guide-side"><details class="toc"' + (wide ? ' open' : '') + '><summary>Contents</summary><ol>' + toc + '</ol>' +
          '<p class="small"><a href="#/bookmarks">All bookmarks</a></p></details></div>' +
        '<article class="guide-main"><p class="guide-intro">' + richG(guide.intro) + '</p>' + hyHtml + secs + deeper + pager + '</article>' +
      '</div></div>';
  };

  /* Bookmarks */
  TITLES.bookmarks = 'Bookmarks';
  VIEWS.bookmarks = function () {
    var list = Object.keys(prog.bookmarks).map(function (k) { var b = prog.bookmarks[k]; b.key = k; return b; })
      .filter(function (b) { return chapterById(b.ch); })
      .sort(function (a, b) {
        var ca = chapterById(a.ch).num, cb = chapterById(b.ch).num;
        if (ca !== cb) return ca - cb;
        var g = guideFor(a.ch); var order = g ? g.sections.map(function (s) { return s.id; }) : [];
        return order.indexOf(a.sec) - order.indexOf(b.sec);
      });
    var html = '<div class="wrap page narrow">' + head('Bookmarks', 'Sections you have saved from the study guides. Saved in this browser only.');
    if (!list.length) {
      var first = chapters().filter(function (c) { return guideFor(c.id); })[0];
      return html + '<div class="empty"><p>Use the Bookmark button beside any study guide heading to save it here.</p>' + (first ? '<p><a class="btn btn--solid" href="#/learn/' + first.id + '">Open the Chapter ' + first.num + ' study guide</a></p>' : '') + '</div></div>';
    }
    var lastCh = null;
    html += '<ul class="bm-list">';
    list.forEach(function (b) {
      var c = chapterById(b.ch);
      if (b.ch !== lastCh) { html += '<li class="bm-ch">Chapter ' + c.num + ': ' + esc(c.title) + '</li>'; lastCh = b.ch; }
      html += '<li class="bm-item"><a href="#/learn/' + b.ch + '/' + b.sec + '">' + esc(b.title) + '</a><button type="button" class="btn" data-action="unbookmark" data-key="' + esc(b.key) + '">Remove</button></li>';
    });
    return html + '</ul></div>';
  };

  /* Response practice */
  TITLES.practice = 'Response practice';
  VIEWS.practice = function (arg, itemId) {
    arg = arg || 'all';
    var items = arg === 'all' ? allPractice() : (chapterById(arg) || {}).practice;
    if (!items) return notFound();
    if (arg !== 'all') items.forEach(function (it) { it._ch = chapterById(arg); });
    if (!session.practice || session.practice.key !== arg || itemId) {
      var list = arg === 'all' ? shuffle(items) : items.slice();
      var start = 0;
      if (itemId) { list.forEach(function (it, k) { if (it.id === itemId) start = k; }); }
      session.practice = { key: arg, list: list, idx: start, answered: null, score: { best: 0, n: 0 } };
    }
    return renderPractice();
  };
  function renderPractice() {
    var s = session.practice;
    var top = '<div class="wrap page">' + head('Response practice', 'Read the moment, then choose what you would say. Every option is explained after you choose.') + chapterChips(s.key, 'practice');
    if (s.idx >= s.list.length) {
      return top + '<div class="card mt-2"><h2>Set complete</h2><p>You chose the best response ' + s.score.best + ' of ' + s.score.n + ' times.</p><div class="hrow"><button type="button" class="btn btn--solid" data-action="practice-restart">Practice again</button><a class="btn" href="#/progress">See progress</a></div></div></div>';
    }
    var it = s.list[s.idx];
    if (!s.opts) s.opts = shuffle(it.opts);
    var anyTl = s.list.some(prOverlay), ov = practiceTl ? prOverlay(it) : null;
    var tlChip = anyTl ? '<div class="hrow"><button type="button" class="filter" data-action="practice-lang" aria-pressed="' + practiceTl + '" title="Show the patient\'s line and the options in Tagalog, with English underneath">Sagot sa Tagalog</button>' + (practiceTl && !ov ? '<span class="small muted">This item has no Tagalog version yet.</span>' : '') + '</div>' : '';
    var pHtml = ov && ov.p ? speech(ov.p).replace(/<\/p>$/, gloss(it.p) + '</p>') : speech(it.p);
    var html = top + tlChip + '<div class="card moment mt-2" aria-live="polite"><div class="hrow"><div class="skill">' + esc(it.skill) + '</div><span class="spacer"></span><span class="counter">Chapter ' + it._ch.num + ', item ' + (s.idx + 1) + ' of ' + s.list.length + '</span></div>' +
      '<p class="context">' + esc(it.ctx) + '</p>' + pHtml + cue(it.cue) + '<p class="prompt">' + (ov ? 'Ano ang sasabihin mo?' : 'What do you say?') + '</p><div class="options">' +
      s.opts.map(function (o, i) { var tl = ov && ov.opts ? ov.opts[it.opts.indexOf(o)] : null; return optionHTML(o, i, s.answered, tl); }).join('') + '</div>';
    if (s.answered) html += '<div class="hrow mt-1"><button type="button" class="btn btn--solid" data-action="practice-next">' + (s.idx + 1 < s.list.length ? 'Next moment' : 'Finish set') + '</button></div>';
    return html + '</div></div>';
  }

  /* Quiz (#/quiz lists the chapter quizzes; #/quiz/<chapter> runs one) */
  TITLES.quiz = 'Chapter quizzes';
  VIEWS.quiz = function (arg) {
    if (!arg) {
      var rows = chapters().filter(function (c) { return (c.quiz || []).length; }).map(function (c) {
        return '<li><a class="row" href="#/quiz/' + c.id + '"><span class="row__num">' + c.num + '</span><span><h3>' + esc(c.title) + '</h3><p>' + c.quiz.length + ' questions</p></span><span class="row__meta">' + (prog.quiz[c.id] != null ? 'Best ' + prog.quiz[c.id] + '%' : '') + '</span></a></li>';
      }).join('');
      return '<div class="wrap page">' + head('Chapter quizzes', 'Multiple-choice questions for each chapter. Your best score is saved.') + '<ul class="rows">' + rows + '</ul></div>';
    }
    var c = chapterById(arg);
    if (!c || !(c.quiz || []).length) return notFound();
    pageTitle = 'Chapter ' + c.num + ' quiz';
    if (!session.quiz || session.quiz.key !== arg) {
      session.quiz = { key: arg, ch: c, idx: 0, correct: 0, answered: null, order: null };
    }
    return renderQuiz();
  };
  function renderQuiz() {
    var s = session.quiz, c = s.ch;
    var top = '<div class="wrap page narrow"><p class="crumb"><a href="#/quiz">Quizzes</a></p>' + head('Chapter ' + c.num + ' quiz', esc(c.title) + ': ' + esc(c.sub));
    if (s.idx >= c.quiz.length) {
      var pct = Math.round((s.correct / c.quiz.length) * 100);
      prog.quiz[c.id] = Math.max(prog.quiz[c.id] || 0, pct); saveProg();
      return top + '<div class="card"><h2>' + s.correct + ' of ' + c.quiz.length + ' correct</h2><p>Best so far: ' + prog.quiz[c.id] + '%.</p><div class="hrow"><button type="button" class="btn btn--solid" data-action="quiz-restart">Retake</button><a class="btn" href="#/learn/' + c.id + '">Review the chapter</a></div></div></div>';
    }
    var q = c.quiz[s.idx];
    if (!s.order) s.order = shuffle(q.opts.map(function (_, i) { return i; }));
    var opts = s.order.map(function (oi) {
      if (s.answered === null) return '<button type="button" class="option" data-action="quiz-pick" data-i="' + oi + '">' + esc(q.opts[oi]) + '</button>';
      var right = oi === q.a, chosen = oi === s.answered;
      var cls = 'option ' + (right ? 'best' : chosen ? 'poor' : 'dim') + (chosen ? ' chosen' : '');
      return '<button type="button" class="' + cls + '" disabled>' + esc(q.opts[oi]) + (right ? '<span class="verdict">Correct answer</span>' : chosen ? '<span class="verdict">Your answer</span>' : '') + '</button>';
    }).join('');
    var html = top + '<div class="card" aria-live="polite"><div class="hrow"><span class="counter">Question ' + (s.idx + 1) + ' of ' + c.quiz.length + '</span></div><h2 class="q-text">' + esc(q.q) + '</h2><div class="options">' + opts + '</div>';
    if (s.answered !== null) {
      html += '<div class="feedback ' + (s.answered === q.a ? 'best' : 'poor') + '"><b>' + (s.answered === q.a ? 'Correct.' : 'Not quite.') + '</b> ' + esc(q.w) + '</div>' +
        '<div class="hrow mt-1"><button type="button" class="btn btn--solid" data-action="quiz-next">' + (s.idx + 1 < c.quiz.length ? 'Next question' : 'See results') + '</button></div>';
    }
    return html + '</div></div>';
  }

  /* Simulated interviews */
  TITLES.simulate = 'Simulated interviews';
  function simCard(s) {
    var rec = prog.sims[s.id];
    return '<a class="card tile sim-card" href="#/simulate/' + s.id + '"><h3>' + esc(s.title) + '</h3><span class="muted small">Chapter' + (s.chapters.length > 1 ? 's ' : ' ') + s.chapters.join(' and ') + '. ' + esc(s.setting) + '</span><span>' + esc(s.goal) + '</span>' +
      (s.tl ? '<span class="tag-tl">Tagalog</span>' : simOverlay(s) ? '<span class="tag-tl">Sa Tagalog</span>' : '') +
      (rec ? '<span class="done">Completed. Best blending ' + rec.best + '</span>' : '') + '</a>';
  }
  VIEWS.simulate = function (arg) {
    if (arg) return startSim(arg);
    return '<div class="wrap page">' + head('Simulated interviews', 'Branching cases with coaching after each choice. Blending tracks engagement; the database tracks how much valid, useful information you have gathered. Good interviews grow both.') +
      '<div class="callout">Cases are composed for teaching and simplified. In real practice, risk assessment, safety planning, and legal obligations follow your supervisor, institution, and local law.</div>' +
      '<p class="muted small">Interviews marked <b>Sa Tagalog</b> can be played in Filipino: the patient\'s lines and your choices switch to Tagalog with the English underneath, while the coaching stays in English. Interviews marked <b>Tagalog</b> are written in Filipino first, with the English underneath. Draft wording under review.</p>' +
      '<div class="cards mt-2">' + simulations().map(simCard).join('') + '</div></div>';
  };
  function startSim(id) {
    var sim = simulations().filter(function (s) { return s.id === id; })[0];
    if (!sim) return notFound();
    pageTitle = sim.title;
    if (!session.sim || session.sim.sim.id !== id) {
      session.sim = { sim: sim, node: sim.start, b: sim.startB, d: 0, log: [] };
    }
    return renderSim();
  }
  function renderSim() {
    var s = session.sim, sim = s.sim, node = sim.nodes[s.node];
    var transcript = s.log.map(function (l) {
      var db = l.db ? '<span class="delta ' + (l.db > 0 ? 'up' : 'down') + '">Blending ' + (l.db > 0 ? '+' : '') + l.db + '</span>' : '';
      return '<div>' + speechTl(sim, l.node, l.p) + cue(l.cue) + '</div>' +
        '<div class="turn-you"><span class="speech-who">You</span>' + (l.node != null ? choiceTl(sim, l.node, l.ci, l.t) : esc(l.t)) + '<div class="coach">' + db + ' ' + esc(l.fb) + '</div></div>';
    }).join('');
    var current = '';
    if (node.end) {
      var rating = s.b >= 70 ? 'Strong engagement' : s.b >= 45 ? 'Engagement held, with some strain' : 'Engagement was damaged';
      var rec = prog.sims[sim.id] || { best: 0, runs: 0 };
      rec.best = Math.max(rec.best, s.b); rec.runs = (rec.runs || 0) + (s.saved ? 0 : 1); rec.done = true;
      prog.sims[sim.id] = rec; s.saved = true; saveProg();
      current = (node.p ? '<div>' + speechTl(sim, s.node, node.p) + cue(node.cue) + '</div>' : '') +
        '<div class="card debrief"><h2>Debrief</h2><p><b>' + rating + '.</b> Final blending ' + s.b + ', database ' + s.d + '.</p><p>' + esc(node.debrief) + '</p>' +
        '<div class="hrow"><button type="button" class="btn btn--solid" data-action="sim-restart">Try a different path</button><a class="btn" href="#/simulate">All interviews</a></div></div>';
    } else {
      current = '<div>' + speechTl(sim, s.node, node.p) + cue(node.cue) + '</div><p class="prompt">' + (tlOn(sim) ? 'Ano ang sasabihin o gagawin mo?' : 'What do you say or do?') + '</p><div class="options">' +
        shuffleStable(node.choices, s.node).map(function (ch) {
          var ci = node.choices.indexOf(ch);
          return '<button type="button" class="option" data-action="sim-pick" data-i="' + ci + '">' + choiceTl(sim, s.node, ci, ch.t) + '</button>';
        }).join('') + '</div>';
    }
    var tlBtn = simOverlay(sim) ? '<span class="spacer"></span><button type="button" class="filter" data-action="sim-lang" aria-pressed="' + simTl + '" title="Show the patient\'s lines and your choices in Tagalog, with English underneath">Sa Tagalog</button>' : '';
    return '<div class="wrap page">' +
      '<div class="hrow crumb"><a href="#/simulate">All interviews</a>' + tlBtn + '</div>' +
      head(esc(sim.title), esc(sim.who)) + '<p class="muted small">' + esc(sim.setting) + ' Goal: ' + esc(sim.goal) + '</p>' +
      '<div class="sim-layout"><div><div class="transcript" aria-live="polite">' + transcript + current + '</div></div>' +
      '<aside class="sim-side">' + flowerSVG(s.b) +
        '<div class="meters"><div><div class="meter-label"><span>Blending</span><b>' + s.b + '</b></div><div class="bar"><i style="width:' + s.b + '%"></i></div></div>' +
        '<div><div class="meter-label"><span>Database</span><b>' + s.d + '</b></div><div class="bar data"><i style="width:' + s.d + '%"></i></div></div>' +
        '<p class="side-note small muted">Engagement and data gathering pull against the clock. The art is growing both.</p></div></aside></div></div>';
  }
  AFTER.simulate = function (arg) { if (arg && session.sim) setFlower(main.querySelector('[data-flower]'), session.sim.b); };
  function paintSim(scroll) {
    paint(renderSim());
    setFlower(main.querySelector('[data-flower]'), session.sim.b);
    if (scroll) {
      var turns = main.querySelectorAll('.turn-you');
      var last = turns[turns.length - 1];
      if (last) last.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth', block: 'start' });
    }
  }
  var stableOrders = {};
  function shuffleStable(list, key) {
    var k = session.sim.sim.id + ':' + key + ':' + session.sim.log.length;
    if (!stableOrders[k]) stableOrders[k] = shuffle(list);
    return stableOrders[k];
  }

  /* Technique drills */
  TITLES.drills = 'Technique drills';
  function drillCard(d) {
    var best = prog.drills[d.id];
    return '<a class="card tile sim-card" href="#/drills/' + d.id + '"><h3>' + esc(d.title) + '</h3><span class="muted small">Chapter ' + d.chapter + ', ' + d.items.length + ' items</span><span>' + esc(d.about) + '</span>' + (best != null ? '<span class="done">Best ' + best + '%</span>' : '') + '</a>';
  }
  VIEWS.drills = function (arg) {
    if (!arg) {
      return '<div class="wrap page">' + head('Technique drills', 'Naming what you do is the first step toward doing it on purpose. Identify the technique in each line.') +
        '<div class="cards">' + drills().map(drillCard).join('') + '</div></div>';
    }
    var set = drills().filter(function (d) { return d.id === arg; })[0];
    if (!set) return notFound();
    pageTitle = set.title;
    if (!session.drill || session.drill.set.id !== arg) {
      session.drill = { set: set, list: shuffle(set.items), idx: 0, correct: 0, answered: null, opts: null };
    }
    return renderDrill();
  };
  function renderDrill() {
    var s = session.drill, set = s.set;
    var top = '<div class="wrap page narrow"><p class="crumb"><a href="#/drills">All drills</a></p>' + head(esc(set.title), esc(set.about));
    if (s.idx >= s.list.length) {
      var pct = Math.round((s.correct / s.list.length) * 100);
      prog.drills[set.id] = Math.max(prog.drills[set.id] || 0, pct); saveProg();
      return top + '<div class="card"><h2>' + s.correct + ' of ' + s.list.length + ' correct</h2><div class="hrow"><button type="button" class="btn btn--solid" data-action="drill-restart">Run it again</button><a class="btn" href="#/drills">Other drills</a></div></div></div>';
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
      if (s.answered === null) return '<button type="button" class="option" data-action="drill-pick" data-v="' + esc(o) + '">' + esc(o) + '</button>';
      var right = o === it.a, chosen = o === s.answered;
      return '<button type="button" class="option ' + (right ? 'best' : chosen ? 'poor' : 'dim') + (chosen ? ' chosen' : '') + '" disabled>' + esc(o) + '</button>';
    }).join('');
    var html = top + '<div class="card" aria-live="polite"><div class="hrow"><span class="counter">' + (s.idx + 1) + ' of ' + s.list.length + '</span><span class="spacer"></span><span class="counter">' + s.correct + ' correct</span></div>' +
      (it.ctx ? '<p class="context mt-1">' + esc(it.ctx) + '</p>' : '<div class="mt-1"></div>') +
      (set.speaker === '' ? '<p class="drill-case">' + esc(it.say) + '</p>' : speech(it.say, set.speaker || 'Clinician')) +
      '<p class="prompt">' + esc(set.prompt || 'Which technique is this?') + '</p><div class="options">' + opts + '</div>';
    if (s.answered !== null) {
      html += '<div class="feedback ' + (s.answered === it.a ? 'best' : 'poor') + '"><b>' + (s.answered === it.a ? 'Correct.' : 'It\'s ' + esc(it.a) + '.') + '</b> ' + esc(it.w) + '</div>' +
        '<div class="hrow mt-1"><button type="button" class="btn btn--solid" data-action="drill-next">' + (s.idx + 1 < s.list.length ? 'Next' : 'See results') + '</button></div>';
    }
    return html + '</div></div>';
  }

  /* Flashcards (spaced repetition) */
  TITLES.cards = 'Flashcards';
  VIEWS.cards = function (arg) {
    arg = arg || 'all';
    if (!session.cards || session.cards.key !== arg || !session.cards.queue.length) {
      var deck = cardDeck(arg);
      if (!deck.length) return notFound();
      startCards(arg, deck, false);
    }
    return renderCards();
  };
  function startCards(key, deck, ahead) {
    var now = Date.now();
    var queue = ahead ? shuffle(deck) : shuffle(deck.filter(function (c) { return isDue(c.key, now); }));
    session.cards = { key: key, deck: deck, queue: queue, total: queue.length, ahead: ahead, flipped: false, tally: { again: 0, good: 0, easy: 0 }, answered: 0 };
  }
  var SRS_LEGEND = 'Again: see it later in this session. Good: up one box. Easy: up two boxes. Boxes 1 to 5 come back after 1, 3, 7, 14, and 30 days.';
  function renderCards() {
    var s = session.cards;
    var top = '<div class="wrap page">' + head('Flashcards', 'Tap a card to flip it, then rate how well you knew it. Cards you know well come back less often.') + chapterChips(s.key, 'cards');
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
        var tl = s.tally;
        return top + '<div class="card narrow mt-2"><h2>Session complete</h2><p>You reviewed ' + s.total + ' card' + (s.total === 1 ? '' : 's') + (s.ahead ? ' ahead of schedule' : '') + '.</p>' +
          '<div class="srs-stats"><div><b>' + tl.again + '</b><span>Again</span></div><div><b>' + tl.good + '</b><span>Good</span></div><div><b>' + tl.easy + '</b><span>Easy</span></div><div><b>' + tomorrow + '</b><span>Due by tomorrow</span></div></div>' +
          '<div class="hrow"><a class="btn btn--solid" href="#/progress">See progress</a><button type="button" class="btn" data-action="cards-ahead">Review anyway</button></div></div></div>';
      }
      return top + '<div class="card narrow mt-2"><h2>All caught up</h2><p>' + scheduled + ' card' + (scheduled === 1 ? ' is' : 's are') + ' scheduled' +
        (next !== null ? '. The next review is due ' + esc(fmtDay(next)) + '.' : '.') + '</p>' +
        '<p class="muted small">Reviewing ahead only changes a card\'s schedule if you answer it.</p><button type="button" class="btn btn--solid" data-action="cards-ahead">Review anyway</button></div></div>';
    }
    var c = s.queue[0], e = cardEntry(c.key);
    var badge = e ? '<span class="box-badge">Box ' + e.box + ' of 5</span>' : '<span class="box-badge new">New</span>';
    return top + '<div class="narrow mt-2"><div class="hrow"><span class="counter">' + s.queue.length + ' left in this session' + (s.ahead ? ' (reviewing ahead)' : '') + '</span><span class="spacer"></span>' + badge + '<span class="counter">Chapter ' + c.ch + '</span></div>' +
      '<button type="button" class="flash' + (s.flipped ? ' flipped' : '') + '" data-action="flip" aria-label="Flip card"><div class="flash-inner">' +
      '<div class="flash-face front"><span class="flash-term">' + esc(c.term) + '</span><span class="muted small">Tap to see the definition</span></div>' +
      '<div class="flash-face back"><span class="muted small">' + esc(c.term) + '</span><span class="flash-def">' + esc(c.def) + '</span></div></div></button>' +
      '<div class="hrow srs-answers" id="srs-answers"' + (s.flipped ? '' : ' hidden') + '><button type="button" class="btn" data-action="card-grade" data-grade="again">Again</button><button type="button" class="btn btn--solid" data-action="card-grade" data-grade="good">Good</button><button type="button" class="btn" data-action="card-grade" data-grade="easy">Easy</button></div>' +
      '<p class="srs-legend">' + esc(SRS_LEGEND) + '</p></div></div>';
  }

  /* Sa Tagalog: every Filipino path in the trainer on one page */
  TITLES.tagalog = 'Sa Tagalog';
  VIEWS.tagalog = function () {
    var first = simulations().filter(function (s) { return s.tl; });
    var overlay = simulations().filter(function (s) { return !s.tl && simOverlay(s); });
    var nPr = Object.keys(TR.tagalogPractice || {}).length;
    var T = TR.tagalog;
    return '<div class="wrap page">' + head('Sa Tagalog', 'Every Filipino path in the trainer. Tagalog wording is composed for training and is a draft under review; coaching and explanations stay in English.') +
      '<h2>Interviews written in Filipino</h2><div class="cards">' + first.map(simCard).join('') + '</div>' +
      '<h2>Interviews you can play Sa Tagalog</h2><p class="muted small">Open one and turn on the <b>Sa Tagalog</b> switch at the top.</p><div class="cards">' + overlay.map(simCard).join('') + '</div>' +
      '<h2>Tagalog drills</h2><div class="cards">' + tagalogDrills().map(drillCard).join('') + '</div>' +
      '<h2>Sagot sa Tagalog</h2><div class="card"><p>' + nPr + ' response-practice items can be shown in Tagalog, with the English underneath. Turn on <b>Sagot sa Tagalog</b> above the practice card.</p><p><a class="btn btn--solid" href="#/practice/all">Open response practice</a></p></div>' +
      (T ? '<h2>' + esc(T.app) + '</h2><div class="card"><p>Study-guide sections end with a <b>Sa Tagalog</b> card that links to the matching section of ' + esc(T.app) + ', the companion Tagalog app.</p><p><a class="btn" href="https://isaymotion.github.io/Tagalog/" target="_blank" rel="noopener">Open ' + esc(T.app) + '</a></p></div>' : '') +
      '</div>';
  };

  /* Progress */
  TITLES.progress = 'Your progress';
  VIEWS.progress = function () {
    var eod = endOfDay(0), allLearned = 0, allCards = 0, dueToday = 0;
    var rows = chapters().map(function (c) {
      var gl = c.glossary || [], learned = 0;
      gl.forEach(function (g) {
        var e = cardEntry(c.id + ':' + g.term);
        if (e && e.box >= 3) learned++;
        if (!e || e.due <= eod) dueToday++;
      });
      allLearned += learned; allCards += gl.length;
      var items = c.practice || [];
      var answered = items.filter(function (p) { return prog.practice[p.id]; });
      var best = answered.filter(function (p) { return prog.practice[p.id] === 'best'; }).length;
      var sims = simulations().filter(function (s) { return s.chapters[0] === c.num; });
      var simDone = sims.filter(function (s) { return prog.sims[s.id]; }).length;
      return '<tr><td><a href="#/learn/' + c.id + '">' + c.num + '. ' + esc(c.title) + '</a></td><td>' + (items.length ? answered.length + '/' + items.length : '—') + '</td><td>' + (answered.length ? best + '/' + answered.length : '—') +
        '</td><td>' + (prog.quiz[c.id] != null ? prog.quiz[c.id] + '%' : '—') + '</td><td>' + (sims.length ? simDone + '/' + sims.length : '—') + '</td><td>' + (gl.length ? learned + '/' + gl.length : '—') + '</td></tr>';
    }).join('');
    var drillRows = drills().map(function (d) { return '<tr><td>' + esc(d.title) + '</td><td>' + (prog.drills[d.id] != null ? prog.drills[d.id] + '%' : '—') + '</td></tr>'; }).join('');
    var boxes = [0, 0, 0, 0, 0, 0], nBoxed = 0;
    Object.keys(prog.cards).forEach(function (k) { var e = cardEntry(k); if (e) { boxes[e.box]++; nBoxed++; } });
    return '<div class="wrap page">' + head('Your progress', 'Saved in this browser only. Clearing your browser data or switching devices starts fresh, unless you export a backup below.') +
      '<p>Flashcards: <b>' + allLearned + ' of ' + allCards + '</b> learned (box 3 or higher). <b>' + dueToday + '</b> due today, including new cards' +
        (dueToday ? '. <a href="#/cards/all">Review now</a>' : '.') + '</p>' +
      (nBoxed ? '<div class="box-dist" aria-label="Flashcards by box">' + boxes.map(function (n, b) { return '<span class="box-badge' + (b ? '' : ' new') + '" data-box="' + b + '">Box ' + b + ': ' + n + '</span>'; }).join('') + '</div>' : '') +
      '<div class="table-wrap"><table class="progress"><thead><tr><th>Chapter</th><th>Practiced</th><th>Best responses</th><th>Quiz best</th><th>Interviews</th><th>Cards learned</th></tr></thead><tbody>' + rows + '</tbody></table></div>' +
      '<div class="table-wrap"><table class="progress"><thead><tr><th>Drill</th><th>Best score</th></tr></thead><tbody>' + drillRows + '</tbody></table></div>' +
      '<h2>Settings</h2><div class="card">' +
        segGroup('theme', t('theme.title'), [['auto', t('theme.auto')], ['light', t('theme.light')], ['dark', t('theme.dark')]], getTheme()) +
        '<p class="muted small">Saved on this device. You can also use the theme button in the top bar, and change text size and language on the <a href="#/about">About</a> page.</p></div>' +
      '<h2>Backup</h2><div class="card"><p class="muted">Save your progress, bookmarks, and flashcard schedule to a file, then import it in another browser or on another device. Backups made with the older version of the trainer still import.</p>' +
        '<div class="hrow"><button type="button" class="btn btn--solid" data-action="export">Export backup</button><button type="button" class="btn" data-action="import">Import backup</button><button type="button" class="link-btn" data-action="undo-import"' + (rawGet(BK_UNDO) ? '' : ' hidden') + '>Undo last import</button></div>' +
        '<p class="backup-msg" id="progress-bk-msg" role="status"></p></div>' +
      '<p class="mt-2"><button type="button" class="btn" data-action="reset">Reset all progress</button></p></div>';
  };

  /* About */
  VIEWS.about = function () {
    var sizes = TEXT_SIZES.map(function (z) { return [z[0], t(z[1])]; });
    return '<div class="wrap page narrow">' + head(esc(t('nav.about')), 'A practice space for psychiatry residents learning to interview patients sensitively and with compassion.') +
      '<div class="prose"><p><strong>' + esc(APP_NAME) + '</strong> · ' + esc(t('about.version')) + ' ' + esc(META.version || '') + '</p>' +
      '<h2>How to use it</h2><p>Start with a chapter in Learn, then practice its responses, take the quiz, and run the related simulated interview. Drills sharpen the vocabulary you will use in supervision. Revisit the simulated interviews and try different paths: the debriefs teach as much from a misstep as from a good choice.</p>' +
      '<h2>Source</h2><p>Content is drawn from study guides based on Shawn Christopher Shea, <i>Psychiatric Interviewing: The Art of Understanding</i>, 3rd edition. All patient statements, cases, and names are composed for teaching; they are not transcripts from the book. Read the book itself for the full discussion, video modules, and annotated interviews.</p>' +
      '<h2>A note on clinical use</h2><p>This is an educational tool, not clinical guidance. Confidentiality limits, mandated reporting, duty-to-protect obligations, and risk assessment procedures vary by institution and jurisdiction. Follow your supervisor and local policy.</p>' +
      '<h2>What\'s next</h2><p>Study guides for Parts I and III are complete. Study guides for the Part II chapters (9 to 15) will be added chapter by chapter.</p>' +
      '<p><a href="#/whats-new">What\'s new</a>: see the latest changes to the trainer.</p>' +
      '<p>' + esc(ATTRIBUTION) + '</p></div>' +
      '<h2>' + esc(t('about.settings')) + '</h2><div class="card">' +
        segGroup('lang', t('about.language'), [['en', t('about.langEn')], ['tl', t('about.langTl')]], lang) +
        segGroup('theme', t('theme.title'), [['auto', t('theme.auto')], ['light', t('theme.light')], ['dark', t('theme.dark')]], getTheme()) +
        segGroup('aboutTextSize', t('textsize.title'), sizes, String(store.get('textSize', '100'))) +
      '</div>' +
      '<h2>' + esc(t('about.tips')) + '</h2><div class="card"><ul class="prose" style="margin:0;padding-left:1.2em">' +
        [1, 2, 3, 4, 5].map(function (i) { return '<li>' + rich(t('about.tip' + i)) + '</li>'; }).join('') +
      '</ul></div></div>';
  };

  /* Screen events (delegated on <main>) */
  main.addEventListener('click', function (e) {
    var el = e.target.closest ? e.target.closest('[data-action]') : null;
    if (!el) return;
    var a = el.getAttribute('data-action');

    if (a === 'pick' && session.hero && el.closest('#hero-item')) {
      var h = session.hero, i = +el.getAttribute('data-i'), o = h.opts[i];
      h.answered = { chosen: i };
      prog.practice[h.item.id] = o.v; saveProg();
      document.getElementById('hero-item').innerHTML = heroHTML();
      setFlower(main.querySelector('.hero-flower [data-flower]'), o.v === 'best' ? 88 : o.v === 'ok' ? 60 : 18);
      return;
    }
    if (a === 'hero-next') { route({ keepScroll: true }); return; }

    if (a === 'pick' && session.practice) {
      var s = session.practice, idx = +el.getAttribute('data-i'), opt = s.opts[idx];
      s.answered = { chosen: idx }; s.score.n++; if (opt.v === 'best') s.score.best++;
      prog.practice[s.list[s.idx].id] = opt.v; saveProg();
      paint(renderPractice()); return;
    }
    if (a === 'practice-next') { var p = session.practice; p.idx++; p.answered = null; p.opts = null; paint(renderPractice()); window.scrollTo(0, 0); return; }
    if (a === 'practice-restart') { var key = session.practice.key; session.practice = null; paint(VIEWS.practice(key)); return; }

    if (a === 'quiz-pick') { session.quiz.answered = +el.getAttribute('data-i'); if (session.quiz.answered === session.quiz.ch.quiz[session.quiz.idx].a) session.quiz.correct++; paint(renderQuiz()); return; }
    if (a === 'quiz-next') { var q = session.quiz; q.idx++; q.answered = null; q.order = null; paint(renderQuiz()); window.scrollTo(0, 0); return; }
    if (a === 'quiz-restart') { var qk = session.quiz.key; session.quiz = null; paint(VIEWS.quiz(qk)); return; }

    if (a === 'sim-pick') {
      var ss = session.sim, node = ss.sim.nodes[ss.node], ch = node.choices[+el.getAttribute('data-i')];
      var nb = clamp(ss.b + (ch.b || 0)), nd = clamp(ss.d + (ch.d || 0));
      ss.log.push({ p: node.p, cue: node.cue, t: ch.t, fb: ch.fb, db: nb - ss.b, node: ss.node, ci: node.choices.indexOf(ch) });
      ss.b = nb; ss.d = nd; ss.node = ch.next;
      paintSim(true); return;
    }
    if (a === 'practice-lang') { practiceTl = !practiceTl; rawSet(PR_TL_KEY, practiceTl ? '1' : '0'); paint(renderPractice()); bkPaint(); return; }
    if (a === 'sim-lang') { simTl = !simTl; rawSet(SIM_TL_KEY, simTl ? '1' : '0'); paintSim(); bkPaint(); return; }
    if (a === 'sim-restart') { var sid = session.sim.sim.id; session.sim = null; stableOrders = {}; startSim(sid); paintSim(); window.scrollTo(0, 0); return; }

    if (a === 'drill-pick') { var d = session.drill; d.answered = el.getAttribute('data-v'); if (d.answered === d.list[d.idx].a) d.correct++; paint(renderDrill()); return; }
    if (a === 'drill-next') { var dd = session.drill; dd.idx++; dd.answered = null; dd.opts = null; paint(renderDrill()); return; }
    if (a === 'drill-restart') { var did = session.drill.set.id; session.drill = null; paint(VIEWS.drills(did)); return; }

    if (a === 'flip') {
      session.cards.flipped = !session.cards.flipped; el.classList.toggle('flipped', session.cards.flipped);
      var ans = document.getElementById('srs-answers'); if (ans) ans.hidden = !session.cards.flipped;
      return;
    }
    if (a === 'card-grade') {
      var cs = session.cards, card = cs.queue.shift(), grade = el.getAttribute('data-grade');
      gradeCard(card.key, grade);
      cs.tally[grade]++; cs.answered++; cs.flipped = false;
      if (grade === 'again') cs.queue.push(card);
      paint(renderCards()); return;
    }
    if (a === 'cards-ahead') { var ck = session.cards.key; startCards(ck, session.cards.deck, true); paint(renderCards()); window.scrollTo(0, 0); return; }

    if (a === 'export') { bkExport(); return; }
    if (a === 'import') { var fi = document.getElementById('bk-file'); if (fi) { fi.value = ''; fi.click(); } return; }
    if (a === 'undo-import') { bkUndo(); return; }

    if (a === 'term') { e.preventDefault(); openTerm(el); return; }
    if (a === 'bookmark') {
      var bkey = el.getAttribute('data-key');
      if (prog.bookmarks[bkey]) delete prog.bookmarks[bkey];
      else prog.bookmarks[bkey] = { ch: el.getAttribute('data-ch'), sec: el.getAttribute('data-sec'), title: el.getAttribute('data-title'), at: Date.now() };
      saveProg();
      var on = !!prog.bookmarks[bkey];
      el.setAttribute('aria-pressed', on ? 'true' : 'false');
      el.querySelector('.bm-label').textContent = on ? 'Bookmarked' : 'Bookmark';
      var tocItem = document.querySelector('[data-toc="' + el.getAttribute('data-sec') + '"]');
      if (tocItem) tocItem.classList.toggle('marked', on);
      return;
    }
    if (a === 'unbookmark') { delete prog.bookmarks[el.getAttribute('data-key')]; saveProg(); paint(VIEWS.bookmarks()); return; }
    if (a === 'reset') {
      if (window.confirm('Reset all saved progress in this browser?')) {
        prog = emptyStore(); saveProg(); session.cards = null; paint(VIEWS.progress()); bkPaint();
      }
    }
  });

  /* ===== NAV + search index (built from the loaded content) ===== */
  function buildNavList() {
    NAV = [
      { label: 'Home', tkey: 'nav.home', href: '#/', icon: 'home', group: 'Start' },
      { label: 'All chapters', tkey: 'nav.allChapters', href: '#/learn', icon: 'book', group: 'Learn' }
    ];
    bookParts().forEach(function (p) {
      NAV.push({ head: true, num: 'Part ' + p.numeral, label: p.title, group: 'Learn' });
      p.chapters.forEach(function (c) {
        NAV.push({ sub: true, num: String(c.num), label: c.title, href: '#/learn/' + c.id, group: 'Learn', tag: guideFor(c.id) ? 'Guide' : '',
          match: new RegExp('^#/(?:learn|practice|quiz|cards)/' + c.id + '(?:/|$)') });
      });
    });
    NAV.push(
      { label: 'Response practice', href: '#/practice/all', icon: 'chat', group: 'Practice', match: /^#\/practice(?:\/|$)/ },
      { label: 'Chapter quizzes', href: '#/quiz', icon: 'quiz', group: 'Practice', match: /^#\/quiz(?:\/|$)/ },
      { label: 'Simulated interviews', href: '#/simulate', icon: 'users', group: 'Practice', match: /^#\/simulate(?:\/|$)/ },
      { label: 'Technique drills', href: '#/drills', icon: 'target', group: 'Practice', match: /^#\/drills(?:\/|$)/ },
      { label: 'Flashcards', href: '#/cards/all', icon: 'cards', group: 'Practice', match: /^#\/cards(?:\/|$)/ }
    );
    if (TR.tagalogSims || TR.tagalogPractice || tagalogDrills().length) {
      NAV.push({ label: 'Sa Tagalog', href: '#/tagalog', icon: 'lang', group: 'Tagalog' });
      simulations().filter(function (s) { return s.tl; }).forEach(function (s) {
        NAV.push({ label: s.title, href: '#/simulate/' + s.id, icon: 'users', group: 'Tagalog' });
      });
      tagalogDrills().forEach(function (d) {
        NAV.push({ label: d.title.split(':')[0], href: '#/drills/' + d.id, icon: 'target', group: 'Tagalog' });
      });
    }
    NAV.push(
      { label: 'Bookmarks', tkey: 'nav.bookmarks', href: '#/bookmarks', icon: 'bookmark', group: 'App' },
      { label: 'Progress', tkey: 'nav.progress', href: '#/progress', icon: 'chart', group: 'App' },
      { label: 'What’s new', tkey: 'nav.whatsNew', href: '#/whats-new', icon: 'news', group: 'App', badge: 'news' },
      { label: 'About', tkey: 'nav.about', href: '#/about', icon: 'info', group: 'App' }
    );
  }

  /* Shea's search index (v10 buildIndex): chapters, key ideas, glossary, practice, study-guide sections,
     high-yield boxes, interviews and drills. Entry: {kind, title, where, text, href, w (rank weight)}. */
  function plainText(s) { return String(s || '').replace(/\[\[([^\]|]+)(?:\|([^\]]+))?\]\]/g, function (m, tt, sh) { return sh || tt; }); }
  function blockText(b) {
    var out = [];
    if (b.text) out.push(b.text);
    if (b.title) out.push(b.title);
    (b.items || []).forEach(function (i) { out.push(i); });
    (b.head || []).forEach(function (i) { out.push(i); });
    (b.rows || []).forEach(function (r) { out.push(r.join(' ')); });
    ['a', 'b'].forEach(function (k) { if (b[k]) { out.push(b[k].title || ''); (b[k].items || []).forEach(function (i) { out.push(i); }); } });
    (b.lines || []).forEach(function (l) { out.push(l.t); });
    return out.join(' ');
  }
  function buildSearchIndex() {
    var out = [];
    function add(kind, title, where, text, href, weight) {
      out.push({ kind: kind, title: plainText(title), where: where, text: plainText(text), href: href, w: weight || 0 });
    }
    chapters().forEach(function (c) {
      var cw = 'Chapter ' + c.num;
      add('Chapter', 'Ch ' + c.num + ': ' + c.title, c._part ? 'Part ' + c._part.numeral : '', (c.sub || '') + ' ' + (c.summary || ''), '#/learn/' + c.id, 3);
      (c.concepts || []).forEach(function (k) { add('Concept', k.h, cw, k.b, '#/learn/' + c.id + '/review', 1); });
      (c.glossary || []).forEach(function (g) { add('Glossary', g.term, cw, g.def, '#/learn/' + c.id + '/review', 2); });
      (c.practice || []).forEach(function (p) { add('Practice', p.skill, cw, p.ctx, '#/practice/' + c.id + '/' + p.id, 0); });
      var g = guideFor(c.id);
      if (g) {
        (g.sections || []).forEach(function (s) {
          var tx = [s.lede || '']; (s.blocks || []).forEach(function (b) { tx.push(blockText(b)); });
          add('Study guide', s.title, cw, tx.join(' '), '#/learn/' + c.id + '/' + s.id, 2);
        });
        var hy = g.highYield || {}, hx = [];
        (hy.mustKnow || []).concat(hy.pitfalls || []).forEach(function (i) { hx.push(i); });
        (hy.phrases || []).forEach(function (p) { hx.push(p.say + ' ' + p.when); });
        add('High yield', 'High-yield: ' + c.title, cw, hx.join(' '), '#/learn/' + c.id + '/high-yield', 2);
      }
    });
    simulations().forEach(function (s) { add('Interview', s.title, 'Simulated interview', (s.setting || '') + ' ' + (s.who || '') + ' ' + (s.goal || ''), '#/simulate/' + s.id, 1); });
    drills().forEach(function (d) { add('Drill', d.title, 'Chapter ' + d.chapter, d.about, '#/drills/' + d.id, 1); });
    return out;
  }

  /* ===== APP VIEWS: notes =====
     1. Add a function to VIEWS that returns an HTML string:   VIEWS.birthdays = function (arg) { return '<div class="wrap page">...</div>'; };
        (arg = the part of the hash after the screen name, e.g. #/birthdays/march -> 'march'.) Use esc() on all data.
     2. Add one entry to NAV above (label, href '#/birthdays', icon key from ICONS, group).
     3. Optional: add rows to SEARCH_INDEX, an entry to TITLES, and AFTER.birthdays = function () { ... } to wire events.
     The Example screen below shows the reusable classes from css/app.css. Delete it when you no longer need it. */
  /* ===== Router ===== */
  function parts() {
    var h = location.hash.replace(/^#\/?/, '');
    return h.split('/').filter(Boolean).map(function (p) { try { return decodeURIComponent(p); } catch (e) { return p; } });
  }
  function titleFor(key) {
    if (has(TITLES, key)) return TITLES[key];
    if (has(SHELL_TITLES, key)) return t(SHELL_TITLES[key]);
    for (var i = 0; i < NAV.length; i++) if (NAV[i].href === '#/' + key) return navLabel(NAV[i]);
    return key;
  }
  function setView(key, html, title) {
    main.innerHTML = html;
    document.title = title ? title + ' — ' + APP_NAME : APP_NAME;
    buildNav();
    updateNavBadges();
  }
  function route(opts) {
    opts = opts || {};
    closeSuggest(); closeDrawer();
    var p = parts(), key = p.length ? p[0] : 'home', restoreY = null;
    if (!opts.keepScroll) {
      scrollMemo[scrollKey] = window.scrollY;                 // the page we are leaving
      scrollKey = location.hash || '#/';
      restoreY = fromHistory && scrollMemo.hasOwnProperty(scrollKey) ? scrollMemo[scrollKey] : null;
      fromHistory = false;
    }
    var html, title, args = p.slice(1);
    closeTerm(); pageTitle = null;
    if (key !== 'missing' && Object.prototype.hasOwnProperty.call(VIEWS, key) && typeof VIEWS[key] === 'function') {
      html = VIEWS[key].apply(null, args); title = pageTitle || titleFor(key);
    } else {
      key = 'missing'; html = missingView(); title = t('notfound.title');
    }
    setView(key, html, title);
    if (AFTER[key]) AFTER[key].apply(null, args);
    if (opts.focus) main.focus({ preventScroll: true });
    if (opts.keepScroll) return;
    if (restoreY !== null) { window.requestAnimationFrame(function () { window.scrollTo(0, restoreY); }); return; }
    if (key === 'learn' && args[1] && args[1] !== 'review') {   // #/learn/<chapter>/<section>: open at that section
      var target = document.getElementById('sec-' + args[1]);
      if (target) { target.scrollIntoView({ block: 'start' }); return; }
    }
    window.scrollTo(0, 0);
  }
  window.addEventListener('hashchange', function () {
    // Re-entering a finished simulation from the list starts it over (as in v10).
    var hp = parts();
    if (hp[0] === 'simulate' && hp[1] && session.sim && session.sim.sim.id === hp[1] && session.sim.sim.nodes[session.sim.node].end) { session.sim = null; stableOrders = {}; }
    syncHist(); route({ focus: true });
  });
  main.addEventListener('change', function (e) {   // About > Settings
    var n = e.target && e.target.name, v = e.target && e.target.value;
    if (n === 'lang') { setLang(v); var again = main.querySelector('input[name="lang"]:checked'); if (again) again.focus(); }
    else if (n === 'theme') setTheme(v);
    else if (n === 'aboutTextSize') { store.set('textSize', v); applyTextSize(v); }
  });
  main.addEventListener('click', function (e) {
    var f = e.target.closest ? e.target.closest('.search-page .filter[data-kind]') : null;
    if (f) { searchKind = f.getAttribute('data-kind'); route({ keepScroll: true }); }
  });

  /* ===== Mobile tab bar: hides on scroll down, shows on scroll up ===== */
  (function initTabbar() {
    var lastY = window.scrollY, hold = 0, ticking = false;
    // Guard both: classList.add/remove rewrite the attribute even when nothing changes,
    // which would re-fire the MutationObserver below forever.
    function show() { if (document.body.classList.contains('tabbar-hidden')) document.body.classList.remove('tabbar-hidden'); }
    function hide() { if (!document.body.classList.contains('tabbar-hidden')) document.body.classList.add('tabbar-hidden'); }
    function update() {
      ticking = false;
      var y = window.scrollY, dy = y - lastY, max = document.documentElement.scrollHeight - window.innerHeight;
      var a = document.activeElement;
      var typing = !!(a && a.matches && a.matches('input, textarea, select'));
      if (Date.now() < hold || document.body.classList.contains('drawer-open') || typing || y < 80 || y > max - 80) { show(); lastY = y; }
      else if (dy > 10) { hide(); lastY = y; }
      else if (dy < -6) { show(); lastY = y; }
    }
    window.addEventListener('scroll', function () { if (!ticking) { ticking = true; window.requestAnimationFrame(update); } }, { passive: true });
    window.addEventListener('hashchange', function () { hold = Date.now() + 700; show(); });
    document.addEventListener('focusin', function (e) { if (e.target.matches && e.target.matches('input, textarea, select')) show(); });
    new MutationObserver(function () { if (document.body.classList.contains('drawer-open')) show(); }).observe(document.body, { attributes: true, attributeFilter: ['class'] });
  })();

  /* ===== Backup: export / import / undo (everything stored under PREFIX) ===== */
  var BK_APP = 'sheatrainer', BK_UNDO = BK_APP + ':undo-import';
  function bkCollect() {
    var data = {};
    try {
      for (var i = 0; i < localStorage.length; i++) {
        var k = localStorage.key(i);
        if (k && k.indexOf(PREFIX) === 0) data[k.slice(PREFIX.length)] = localStorage.getItem(k);
      }
      // Shea's progress blob and Tagalog switches live outside PREFIX (unchanged since v10): include them by exact name.
      LEGACY_KEYS.forEach(function (k) { var v = localStorage.getItem(k); if (v != null) data[k] = v; });
    } catch (e) {}
    return data;
  }
  function bkReplace(data) {
    var keys = [];
    for (var i = 0; i < localStorage.length; i++) { var k = localStorage.key(i); if (k && (k.indexOf(PREFIX) === 0 || LEGACY_KEYS.indexOf(k) > -1)) keys.push(k); }
    keys.forEach(function (k) { localStorage.removeItem(k); });
    Object.keys(data).forEach(function (k) { localStorage.setItem(LEGACY_KEYS.indexOf(k) > -1 ? k : PREFIX + k, data[k]); });
  }
  function bkSummary(data) {
    var pr = null;
    try { pr = data && data[PROG_KEY] ? JSON.parse(data[PROG_KEY]) : null; } catch (e) { pr = null; }
    if (pr && typeof pr === 'object') {
      var cnt = function (o) { return o && typeof o === 'object' ? Object.keys(o).length : 0; };
      var n0 = cnt(pr.practice) + cnt(pr.quiz) + cnt(pr.sims) + cnt(pr.cards) + cnt(pr.drills) + cnt(pr.bookmarks);
      if (n0) return tf('backup.progress', { practice: cnt(pr.practice), cards: cnt(pr.cards), bookmarks: cnt(pr.bookmarks) });
    }
    var n = Object.keys(data || {}).filter(function (k) { return k !== 'lastBackup' && k !== 'seenNews' && k !== 'navCollapsed'; }).length;
    return n ? tf(n === 1 ? 'backup.item1' : 'backup.itemN', { n: n }) : t('backup.nothing');
  }
  /* Backup files made by Shea v10 ({app:"sheatrainer", version:1, store, theme, textSize}): validated as v10 did,
     then turned into the current data map. Keys a v10 backup does not carry (Tagalog switches, language) keep
     this device's values, exactly as a v10 import left them alone. Returns null if the file is not a usable v10 backup. */
  function bkFromV10(p) {
    if (!p || p.app !== 'sheatrainer' || !p.store || typeof p.store !== 'object' || Array.isArray(p.store)) return null;
    var out = emptyStore(), bad = false;
    STORE_KEYS.forEach(function (k) {
      var v = p.store[k];
      if (v == null) return;
      if (typeof v !== 'object' || Array.isArray(v)) { bad = true; return; }
      out[k] = v;
    });
    if (bad) return null;
    normalizeCards(out.cards);
    var data = bkCollect();
    delete data.lastBackup;
    data[PROG_KEY] = JSON.stringify(out);
    if (has(p, 'theme')) { if (p.theme === 'light' || p.theme === 'dark') data.theme = JSON.stringify(p.theme); else delete data.theme; }
    if (has(p, 'textSize')) { if (p.textSize === '90' || p.textSize === '112.5' || p.textSize === '125') data.textSize = JSON.stringify(p.textSize); else delete data.textSize; }
    return data;
  }
  function bkDate(iso) {
    var d = new Date(iso);
    if (isNaN(d.getTime())) return '';
    return d.toLocaleDateString(locale(), { year: 'numeric', month: 'short', day: 'numeric' }) + ', ' + d.toLocaleTimeString(locale(), { hour: 'numeric', minute: '2-digit' });
  }
  function bkStatus(msg, isErr) {
    var el = document.getElementById('bk-status');
    if (!el) return;
    el.textContent = msg || '';
    el.classList.toggle('is-error', !!isErr);
    var mirror = document.getElementById('progress-bk-msg');   // the Backup card on the Progress page
    if (mirror) { mirror.textContent = msg || ''; mirror.classList.toggle('err', !!isErr); mirror.classList.toggle('ok', !isErr && !!msg); }
  }
  function bkPaint() {
    var meta = document.getElementById('bk-meta'), un = document.getElementById('bk-undo');
    var last = store.get('lastBackup', null);
    if (meta) meta.textContent = tf('backup.onDevice', { summary: bkSummary(bkCollect()) }) + ' ' + (last && bkDate(last) ? tf('backup.lastExported', { date: bkDate(last) }) : t('backup.notExported'));
    var has = false;
    try { has = !!localStorage.getItem(BK_UNDO); } catch (e) {}
    if (un) un.hidden = !has;
  }
  function bkExport() {
    var now = new Date();
    store.set('lastBackup', now.toISOString());
    var data = bkCollect();
    var payload = { app: BK_APP, format: 1, exported: now.toISOString(), attribution: ATTRIBUTION, summary: bkSummary(data), data: data };
    var name = BK_APP + '-backup-' + now.getFullYear() + '-' + pad2(now.getMonth() + 1) + '-' + pad2(now.getDate()) + '.json';
    var json = JSON.stringify(payload, null, 1);
    var standalone = (window.matchMedia && window.matchMedia('(display-mode: standalone)').matches) || navigator.standalone;
    var file = null;
    try { file = new File([json], name, { type: 'application/json' }); } catch (e) {}
    if (standalone && file && navigator.canShare && navigator.canShare({ files: [file] })) {
      // Installed apps on phones cannot always download files; the share sheet can save to Files or send it on.
      navigator.share({ files: [file], title: tf('backup.shareTitle', { app: APP_NAME }) }).then(function () {
        bkStatus(t('backup.shared')); bkPaint();
      }).catch(function () { bkStatus(t('backup.exportCancelled')); });
      return;
    }
    var url = URL.createObjectURL(new Blob([json], { type: 'application/json' }));
    var a = document.createElement('a');
    a.href = url; a.download = name; a.rel = 'noopener';
    document.body.appendChild(a); a.click(); a.remove();
    setTimeout(function () { URL.revokeObjectURL(url); }, 4000);
    bkStatus(tf('backup.saved', { name: name }));
    bkPaint();
  }
  function bkImport(file) {
    if (!file) return;
    var reader = new FileReader();
    var bad = tf('backup.notBackup', { app: APP_NAME });
    reader.onerror = function () { bkStatus(t('backup.unreadable'), true); };
    reader.onload = function () {
      var p;
      try { p = JSON.parse(reader.result); } catch (e) { bkStatus(bad, true); return; }
      if (p && p.app === BK_APP && !p.data && p.store) {   // a backup file from Shea v10
        var conv = bkFromV10(p);
        if (!conv) { bkStatus(bad, true); return; }
        p = { app: BK_APP, exported: p.exported, data: conv };
      }
      var ok = p && p.app === BK_APP && p.data && typeof p.data === 'object' && !Array.isArray(p.data) &&
        Object.keys(p.data).every(function (k) { return typeof p.data[k] === 'string' && k.length < 80; });
      if (ok) Object.keys(p.data).forEach(function (k) { try { JSON.parse(p.data[k]); } catch (e) { ok = false; } });
      if (!ok) { bkStatus(bad, true); return; }
      var msg = tf('backup.confirmImport', { date: bkDate(p.exported) || t('backup.unknownDate'), backup: bkSummary(p.data), device: bkSummary(bkCollect()) });
      if (!window.confirm(msg)) { bkStatus(t('backup.importCancelled')); return; }
      try {
        localStorage.setItem(BK_UNDO, JSON.stringify({ saved: new Date().toISOString(), data: bkCollect() }));
        bkReplace(p.data);
      } catch (e) { bkStatus(t('backup.importFailed'), true); return; }
      bkStatus(t('backup.imported'));
      setTimeout(function () { location.reload(); }, 700);
    };
    reader.readAsText(file);
  }
  function bkUndo() {
    var snap; try { snap = JSON.parse(localStorage.getItem(BK_UNDO)); } catch (e) {}
    if (!snap || !snap.data) { bkPaint(); return; }
    if (!window.confirm(tf('backup.confirmUndo', { summary: bkSummary(snap.data) }))) return;
    try { bkReplace(snap.data); localStorage.removeItem(BK_UNDO); } catch (e) { bkStatus(t('backup.undoFailed'), true); return; }
    bkStatus(t('backup.restored'));
    setTimeout(function () { location.reload(); }, 700);
  }
  (function initBackup() {
    var ex = document.getElementById('bk-export'), fi = document.getElementById('bk-file'), un = document.getElementById('bk-undo');
    if (!ex || !fi) return;
    ex.addEventListener('click', bkExport);
    fi.addEventListener('change', function () { bkImport(fi.files && fi.files[0]); fi.value = ''; });
    if (un) un.addEventListener('click', bkUndo);
    bkPaint();
  })();

  /* ===== Language switching: static markup (data-i18n / data-i18n-attr in index.html), then re-render ===== */
  function applyStatic() {
    document.documentElement.setAttribute('lang', lang);
    var els = document.querySelectorAll('[data-i18n]'), i, v;
    for (i = 0; i < els.length; i++) { v = t(els[i].getAttribute('data-i18n')); if (v !== els[i].getAttribute('data-i18n')) els[i].textContent = v; }
    els = document.querySelectorAll('[data-i18n-attr]');
    for (i = 0; i < els.length; i++) {
      var pairs = els[i].getAttribute('data-i18n-attr').split(';');
      for (var j = 0; j < pairs.length; j++) {
        var at = pairs[j].indexOf(':'), key = pairs[j].slice(at + 1);
        if (at > 0 && t(key) !== key) els[i].setAttribute(pairs[j].slice(0, at), t(key));
      }
    }
    var brand = document.querySelector('.brand');
    if (brand) brand.setAttribute('aria-label', tf('brand.home', { name: APP_NAME }));
    var panel = document.getElementById('textSizePanel');
    if (panel) panel.setAttribute('aria-label', t('textsize.title'));
    labelCollapse();
    applyTheme(getTheme());
  }
  function setLang(l) {
    lang = l === 'tl' ? 'tl' : 'en';
    store.set('lang', lang);
    applyStatic();
    bkPaint();
    var panel = document.getElementById('textSizePanel');
    if (panel && !panel.hidden) { panel.hidden = true; var tb = document.getElementById('textSizeBtn'); if (tb) tb.setAttribute('aria-expanded', 'false'); }
    route({ keepScroll: true });   // re-render the current view and the menu in the new language
  }

  window.__sheaBackup = { collect: bkCollect };   // read-only hook for QA scripts

  /* ===== Start ===== */
  buildNavList();
  applyStatic();
  route();

  /* ===== Service worker (https or localhost only) ===== */
  if ('serviceWorker' in navigator && /^https?:$/.test(location.protocol)) {
    window.addEventListener('load', function () { navigator.serviceWorker.register('sw.js').catch(function () {}); });
  }
})();
