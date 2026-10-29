#!/usr/bin/env node
/* Regenerate the Tagalog phrase review list from the two data files.
   Usage: node tools/tagalog-review-list.js <sheatrainer repo> <Tagalog repo> <out.md>
   Example: node ../dev-tools-wt/tools/tagalog-review-list.js . ../tagalog /home/claude/tagalog-phrase-review.md
   Then upload the output to the project as claude/tagalog-phrase-review.md. */
const fs = require("fs"), path = require("path");
const [trainer, tagalog, out] = process.argv.slice(2);
if (!out) { console.error("usage: tagalog-review-list.js <sheatrainer> <Tagalog> <out.md>"); process.exit(1); }
const win = { PSYCH_SECTIONS: [] };
new Function("window", fs.readFileSync(path.join(tagalog, "js/data/psych-shea.js"), "utf8"))(win);
const sec = win.PSYCH_SECTIONS[0];
const w = { TRAINER: { parts: { part1: { drills: [] } } } };
new Function("window", fs.readFileSync(path.join(trainer, "content/tagalog.js"), "utf8"))(w);
const extraFile = path.join(trainer, "content/tagalog-drills.js");
if (fs.existsSync(extraFile)) new Function("window", fs.readFileSync(extraFile, "utf8"))(w);
const T = w.TRAINER.tagalog, d = w.TRAINER.parts.part1.drills[0], extra = w.TRAINER.parts.part1.drills.slice(1);
const today = new Date().toISOString().slice(0, 10);
let md = `# Tagalog phrase review list (draft, ${today})\n\nAll Tagalog below is new, original wording written for training. Please mark each line keep / edit / drop. When done, set \`REVIEWED = true\` in Usap Tayo \`js/data/psych-shea.js\` (removes the draft notice) and tell Claude which lines changed so \`content/tagalog.js\` in the trainer is kept in sync.\n\n## A. Usap Tayo, section "${sec.title}" (\`#/psych/s/shea-techniques\`), ${sec.phrases.length} phrases\n\n`;
sec.phrases.forEach((p, i) => { md += `### A${i + 1}. ${p.en}\n- **Po:** ${p.f}\n- **Everyday:** ${p.c}\n- *Technique:* ${p.n}\n\n`; });
md += `## B. Shea trainer drill "${d.title}" (\`#/drills/${d.id}\`), ${d.items.length} items\n\nEach item: the correct option first, then the three distractors (meant to be wrong: leading, closed, rude, or technique lost). Check that the correct line is natural and that the distractors are clearly worse, not merely different.\n\n`;
d.items.forEach((it, i) => { md += `### B${i + 1}. ${it.ctx}\n*English:* ${it.say}\n- **Correct:** ${it.a}\n`; it.opts.filter((o) => o !== it.a).forEach((o) => (md += `- Distractor: ${o}\n`)); md += `- *Why:* ${it.w}\n\n`; });
md += `## C. Teaser lines on the trainer's "Sa Tagalog" cards not already listed above\n\n`;
const seen = new Set(sec.phrases.map((p) => p.f));
Object.entries(T.links).forEach(([k, l]) => { if (l.tl && !seen.has(l.tl)) { seen.add(l.tl); md += `- **${k}** — ${l.en}\n  - ${l.tl}\n`; } });
if (extra.length) {
  md += `## D. Tagalog clinical drills (\`content/tagalog-drills.js\`)\n\nThree drills added 2026-10-30. For each item: the Tagalog line the resident hears or the scenario, then the correct option and the distractors. Tagalog inside the options is composed clinician wording; please check both the patient lines and the clinician replies. English-only distractors are listed for context only.\n\n`;
  extra.forEach((set, si) => {
    const letter = "D" + (si + 1);
    md += `### ${letter}. ${set.title} (\`#/drills/${set.id}\`), ${set.items.length} items\n\n`;
    set.items.forEach((it, i) => {
      md += `#### ${letter}.${i + 1}. ${it.ctx || "Scenario"}\n`;
      if (set.speaker === "") md += `*Scenario:* ${it.say}\n`; else md += `*Patient says:* ${it.say}\n`;
      md += `- **Correct:** ${it.a}\n`;
      it.opts.filter((o) => o !== it.a).forEach((o) => (md += `- Distractor: ${o}\n`));
      md += `- *Why:* ${it.w}\n\n`;
    });
  });
}
// E. Sa Tagalog overlay for English simulations; F. Tagalog-first cases
const simFiles = ["content/part1-practice.js", "content/part2-practice.js"].map((f) => path.join(trainer, f)).filter(fs.existsSync);
const w2 = { TRAINER: { parts: {} } };
for (const f of ["content/part1-chapters.js", "content/part2-chapters.js"].map((f) => path.join(trainer, f)).filter(fs.existsSync).concat(simFiles)) new Function("window", fs.readFileSync(f, "utf8"))(w2);
const sims = [].concat(...Object.values(w2.TRAINER.parts).map((p) => p.simulations || []));
const ovFile = path.join(trainer, "content/tagalog-sims.js");
if (fs.existsSync(ovFile)) {
  const w3 = { TRAINER: { parts: {} } }; new Function("window", fs.readFileSync(ovFile, "utf8"))(w3);
  const ov = w3.TRAINER.tagalogSims || {};
  md += `## E. Sa Tagalog overlay for English interviews (\`content/tagalog-sims.js\`)\n\nPatient lines and clinician choices shown when the Sa Tagalog switch is on. The English is the original line.\n\n`;
  Object.keys(ov).forEach((sid, si) => {
    const sim = sims.find((s) => s.id === sid); if (!sim) return;
    md += `### E${si + 1}. ${sim.title} (\`#/simulate/${sid}\`)\n\n`;
    Object.entries(ov[sid].nodes || {}).forEach(([nid, n]) => {
      const node = sim.nodes[nid]; if (!node) return;
      if (n.p) md += `- **${nid}, patient:** ${n.p}\n  - ${node.p}\n`;
      (n.t || []).forEach((t, i) => { if (t) md += `- **${nid}, you (${i + 1}):** ${t}\n  - ${node.choices[i].t}\n`; });
    });
    md += "\n";
  });
}
const caseFile = path.join(trainer, "content/tagalog-cases.js");
if (fs.existsSync(caseFile)) {
  const w4 = { TRAINER: { parts: { part1: { simulations: [] } } } }; new Function("window", fs.readFileSync(caseFile, "utf8"))(w4);
  const cases = w4.TRAINER.parts.part1.simulations;
  md += `## F. Interviews written in Tagalog first (\`content/tagalog-cases.js\`)\n\nEach patient line and clinician choice, with the English gloss shown in the app underneath. Please check register (po/kayo vs ikaw), naturalness, and that the gloss matches.\n\n`;
  cases.forEach((sim, si) => {
    md += `### F${si + 1}. ${sim.title} (\`#/simulate/${sim.id}\`)\n\n`;
    Object.entries(sim.nodes).forEach(([nid, n]) => {
      if (n.p) md += `- **${nid}, patient:** ${n.p}\n  - ${n.en || ""}\n`;
      (n.choices || []).forEach((c, i) => { md += `- **${nid}, you (${i + 1}):** ${c.t}\n  - ${c.en || ""}\n`; });
    });
    md += "\n";
  });
}
const prFile = path.join(trainer, "content/tagalog-practice.js");
if (fs.existsSync(prFile)) {
  const w5 = { TRAINER: { parts: {} } }; new Function("window", fs.readFileSync(prFile, "utf8"))(w5);
  const pr = w5.TRAINER.tagalogPractice || {};
  const items = {}; Object.values(w2.TRAINER.parts).forEach((p) => (p.chapters || []).forEach((c) => (c.practice || []).forEach((it) => (items[it.id] = it))));
  md += `## G. Sagot sa Tagalog overlay for response practice (\`content/tagalog-practice.js\`)\n\nPatient line and the three options (best, workable, poor as in the English item). The English is the original.\n\n`;
  Object.entries(pr).forEach(([id, o]) => {
    const it = items[id]; if (!it) return;
    md += `### ${id}. ${it.skill}\n- **Patient:** ${o.p}\n  - ${it.p}\n`;
    (o.opts || []).forEach((t, i) => { if (t) md += `- **Option ${i + 1} (${it.opts[i].v}):** ${t}\n  - ${it.opts[i].t}\n`; });
    md += "\n";
  });
}
fs.writeFileSync(out, md);
console.log(`${out}: ${sec.phrases.length} phrases, ${d.items.length} drill items, ${extra.reduce((n, x) => n + x.items.length, 0)} extra drill items, ${md.length} chars`);
