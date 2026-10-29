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
fs.writeFileSync(out, md);
console.log(`${out}: ${sec.phrases.length} phrases, ${d.items.length} drill items, ${extra.reduce((n, x) => n + x.items.length, 0)} extra drill items, ${md.length} chars`);
