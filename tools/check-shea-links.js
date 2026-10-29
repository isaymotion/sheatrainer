#!/usr/bin/env node
/* Verify that every Usap Tayo SHEA_LINKS entry (one link or an array) points to a real
   Usap Tayo section and to an existing section of a trainer study guide.
   Usage: node tools/check-shea-links.js <sheatrainer dir> <Tagalog dir>
   Passing output ends with "N links, all resolve". */
const fs = require('fs'), path = require('path');
const [st, ut] = process.argv.slice(2);
if (!st || !ut) { console.error('usage: node check-shea-links.js <sheatrainer dir> <Tagalog dir>'); process.exit(2); }
global.window = globalThis; window.TRAINER = { parts: {}, guides: {} }; global.document = {};
const cdir = path.join(st, 'content');
for (const f of fs.readdirSync(cdir).filter((f) => /^guide-ch\d+\.js$/.test(f))) (0, eval)(fs.readFileSync(path.join(cdir, f), 'utf8'));
// drills (for { href: '#/drills/<id>' } links): load the parts and tagalog files in index.html order
const tOrder = fs.readFileSync(path.join(st, 'index.html'), 'utf8').match(/src="(content\/[^"]+)"/g).map((s) => s.slice(5, -1));
for (const f of tOrder) if (!/guide-ch/.test(f)) (0, eval)(fs.readFileSync(path.join(st, f), 'utf8'));
const drillIds = new Set([].concat(...Object.values(TRAINER.parts).map((p) => (p.drills || []).map((d) => d.id))));
const simIds = new Set([].concat(...Object.values(TRAINER.parts).map((p) => (p.simulations || []).map((d) => d.id))));
// load Usap Tayo data files in index.html order so PSYCH_SECTIONS is complete
const order = fs.readFileSync(path.join(ut, 'index.html'), 'utf8').match(/src="(js\/data\/[^"]+)"/g).map((s) => s.slice(5, -1));
for (const f of order) { try { (0, eval)(fs.readFileSync(path.join(ut, f), 'utf8')); } catch (e) { /* non-phrase data files may need browser globals */ } }
const ids = new Set(PSYCH_SECTIONS.map((s) => s.id));
let n = 0, bad = 0;
for (const [k, v] of Object.entries(SHEA_LINKS)) {
  if (!ids.has(k)) { bad++; console.log('UNKNOWN USAP TAYO SECTION', k); }
  for (const l of [].concat(v)) {
    n++;
    if (l.href) {
      const m = /^#\/(drills|simulate|practice)\/([\w-]+)$/.exec(l.href);
      const chIds = new Set([].concat(...Object.values(TRAINER.parts).map((p) => (p.chapters || []).map((c) => c.id))));
      if (!(m && (m[1] === 'drills' ? drillIds : m[1] === 'simulate' ? simIds : chIds).has(m[2]))) { bad++; console.log('MISSING TRAINER ROUTE', k, '->', l.href); }
      continue;
    }
    const g = TRAINER.guides[l.ch];
    if (!(g && g.sections.some((s) => s.id === l.sec))) { bad++; console.log('MISSING TRAINER SECTION', k, '->', l.ch + '/' + l.sec); }
  }
}
// trainer side: every card's Usap Tayo section must exist and be named in tagalog.js sections map
const T = window.TRAINER.tagalog;
for (const [key, l] of Object.entries(T.links)) {
  if (l.href) continue;
  if (!ids.has(l.s)) { bad++; console.log('CARD -> UNKNOWN USAP TAYO SECTION', key, l.s); }
  if (!T.sections[l.s]) { bad++; console.log('CARD SECTION MISSING FROM tagalog.js sections MAP', key, l.s); }
}
console.log(Object.keys(SHEA_LINKS).length + ' sections, ' + n + ' links, ' + Object.keys(T.links).length + ' trainer cards: ' + (bad ? bad + ' problems' : 'all resolve'));
process.exit(bad ? 1 : 0);
