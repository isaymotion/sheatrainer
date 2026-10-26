#!/usr/bin/env node
/*
  Content validator for the Psychiatric Interviewing Trainer.
  Usage (from anywhere):  node tools/validate.js /path/to/sheatrainer
  Loads every content script listed in index.html (in order) and checks:
    - glossary terms are unique across all chapters
    - every [[term]] / [[term|shown]] in guides AND chapter text resolves to a glossary term
    - guide section ids are unique per guide; guide practice links point to real ids
    - quiz answer indexes are in range
    - practice/sim/drill ids are unique; simulation branches all point to existing nodes and every node is reachable
  Prints a summary; exits 1 on any error.
*/
const fs = require("fs"), path = require("path");
const root = path.resolve(process.argv[2] || ".");
const html = fs.readFileSync(path.join(root, "index.html"), "utf8");
const scripts = [...html.matchAll(/<script src="(content\/[^"?]+)"/g)].map(m => m[1]);
global.window = {};
scripts.forEach(s => require(path.join(root, s)));
const T = window.TRAINER;
const errors = [];
const err = m => errors.push(m);

const chapters = [];
Object.values(T.parts).forEach(p => (p.chapters || []).forEach(c => { c._part = p; chapters.push(c); }));
const G = {};
chapters.forEach(c => (c.glossary || []).forEach(g => {
  const k = g.term.toLowerCase();
  if (G[k]) err(`duplicate glossary term "${g.term}" (ch${G[k]} and ch${c.num})`);
  G[k] = c.num;
}));

function refs(str, where) {
  for (const m of String(str).matchAll(/\[\[([^\]|]+)(?:\|[^\]]+)?\]\]/g))
    if (!G[m[1].toLowerCase()]) err(`${where}: unknown glossary ref [[${m[1]}]]`);
}
function walk(v, where) {
  if (typeof v === "string") refs(v, where);
  else if (Array.isArray(v)) v.forEach(x => walk(x, where));
  else if (v && typeof v === "object") Object.keys(v).forEach(k => k[0] !== "_" && walk(v[k], where));
}

const ids = {};
function uniq(id, kind) { if (ids[id]) err(`duplicate ${kind} id ${id}`); ids[id] = kind; }
chapters.forEach(c => {
  (c.practice || []).forEach(p => {
    uniq(p.id, "practice");
    if (!p.opts || !p.opts.some(o => o.v === "best")) err(`${p.id}: no "best" option`);
  });
  (c.quiz || []).forEach((q, i) => { if (!(q.a >= 0 && q.a < q.opts.length)) err(`ch${c.num} quiz ${i}: answer index out of range`); });
});
const sims = [], drills = [];
Object.values(T.parts).forEach(p => { (p.simulations || []).forEach(s => sims.push(s)); (p.drills || []).forEach(d => drills.push(d)); });
sims.forEach(s => {
  uniq(s.id, "sim");
  const nodes = s.nodes || {};
  const start = s.start || Object.keys(nodes)[0];
  const seen = new Set([start]), q = [start];
  while (q.length) {
    const n = nodes[q.shift()];
    if (!n) continue;
    (n.opts || n.choices || []).forEach(o => {
      const nx = o.next || o.to;
      if (nx && !nodes[nx]) err(`${s.id}: branch to missing node "${nx}"`);
      if (nx && !seen.has(nx)) { seen.add(nx); q.push(nx); }
    });
  }
  Object.keys(nodes).forEach(k => { if (!seen.has(k)) err(`${s.id}: node "${k}" unreachable`); });
});
drills.forEach(d => uniq(d.id, "drill"));

const guides = T.guides || {};
Object.keys(guides).forEach(gid => {
  const g = guides[gid];
  if (!chapters.some(c => c.id === gid)) err(`guide ${gid} has no chapter entry in a parts file (it will 404)`);
  walk(g, `guide ${gid}`);
  const secIds = g.sections.map(s => s.id);
  if (new Set(secIds).size !== secIds.length) err(`guide ${gid}: duplicate section ids`);
  ["high-yield", "deeper", "review"].forEach(r => { if (secIds.includes(r)) err(`guide ${gid}: section id "${r}" is reserved`); });
  g.sections.forEach(s => (s.practice || []).forEach(l => {
    if (l.kind === "practice" && ids[l.id] !== "practice") err(`guide ${gid}/${s.id}: practice link ${l.id} not found`);
    if (l.kind === "sim" && ids[l.id] !== "sim") err(`guide ${gid}/${s.id}: sim link ${l.id} not found`);
    if (l.kind === "drill" && ids[l.id] !== "drill") err(`guide ${gid}/${s.id}: drill link ${l.id} not found`);
    if (l.kind === "quiz" && !chapters.some(c => c.id === l.id && (c.quiz || []).length)) err(`guide ${gid}/${s.id}: quiz link ${l.id} has no quiz`);
  }));
});
chapters.forEach(c => walk({ concepts: c.concepts, pearls: c.pearls }, `ch${c.num}`));

const count = k => chapters.reduce((n, c) => n + (c[k] || []).length, 0);
console.log(`scripts: ${scripts.length}  chapters: ${chapters.length}  guides: ${Object.keys(guides).sort().join(",")}`);
console.log(`practice: ${count("practice")}  quiz: ${count("quiz")}  glossary: ${count("glossary")}  sims: ${sims.length}  drills: ${drills.length}`);
if (errors.length) { console.log(`\n${errors.length} ERROR(S):\n` + errors.map(e => "  - " + e).join("\n")); process.exit(1); }
console.log("OK: no errors");
