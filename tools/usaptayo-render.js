#!/usr/bin/env node
/* Render check for Usap Tayo phrase sections: serves the Tagalog repo locally, opens the given
   sections at desktop (1280) and phone (390) widths, prints the "Technique notes" text,
   reports horizontal overflow and JS errors, and saves screenshots.
   Usage: node tools/usaptayo-render.js <Tagalog dir> <out dir> [sectionId ...]
   Example: node tools/usaptayo-render.js ~/tagalog /scratch/shots hallucinations meds social
   Needs Playwright with its Chromium (pre-installed in the sandbox; do not run playwright install).
   The two "Failed to load resource" errors per page are the Google Fonts requests this script blocks. */
const http = require('http'), fs = require('fs'), path = require('path');
const { chromium } = require('playwright');
const [root, out, ...secs] = process.argv.slice(2);
if (!root || !out) { console.error('usage: node usaptayo-render.js <Tagalog dir> <out dir> [sectionId ...]'); process.exit(2); }
const sections = secs.length ? secs : ['hallucinations', 'meds'];
const types = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.json': 'application/json', '.png': 'image/png', '.svg': 'image/svg+xml', '.webmanifest': 'application/manifest+json', '.mp3': 'audio/mpeg' };
const server = http.createServer((req, res) => {
  const p = path.join(root, decodeURIComponent(req.url.split('?')[0]).replace(/^\/$/, '/index.html'));
  fs.readFile(p, (e, d) => { if (e) { res.writeHead(404); res.end(); } else { res.writeHead(200, { 'Content-Type': types[path.extname(p)] || 'application/octet-stream' }); res.end(d); } });
}).listen(0, async () => {
  const base = 'http://localhost:' + server.address().port + '/';
  fs.mkdirSync(out, { recursive: true });
  const b = await chromium.launch(); const errs = []; let overflow = 0;
  for (const [name, vp] of [['desk', { width: 1280, height: 900 }], ['phone', { width: 390, height: 844 }]]) {
    const p = await b.newPage({ viewport: vp });
    p.on('pageerror', (e) => errs.push(e.message));
    p.on('console', (m) => { if (m.type() === 'error' && !/Failed to load resource/.test(m.text())) errs.push(m.text()); });
    await p.route('**/fonts.*/**', (r) => r.abort());
    for (const id of sections) {
      await p.goto(base + '#/psych/s/' + id); await p.waitForTimeout(800);
      const txt = await p.evaluate(() => { const x = [...document.querySelectorAll('b')].find((e) => /Technique notes/.test(e.textContent)); return x ? x.parentElement.innerText : 'NONE'; });
      console.log(name, id, '->', txt.replace(/\n/g, ' | '));
      const ow = await p.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
      if (ow > 0) { overflow++; console.log('OVERFLOW', name, id, ow + 'px'); }
      await p.screenshot({ path: path.join(out, 'ut-' + name + '-' + id + '.png') });
    }
  }
  await b.close(); server.close();
  console.log('JS errors: ' + (errs.length ? errs.join(' / ') : 'none'));
  console.log(errs.length || overflow ? 'FAIL' : 'PASS');
  process.exit(errs.length || overflow ? 1 : 0);
});
