#!/usr/bin/env python3
"""
Browser smoke test for the Psychiatric Interviewing Trainer (Playwright + local static server).

Usage:
  python3 tools/check.py /path/to/sheatrainer [--chapter ch17] [--out /some/dir] [--port 8790]

What it does, at desktop (1280x900) and phone (390x844) widths:
  - loads the main routes plus the chosen chapter's guide, every guide section, review page, quiz
  - reports horizontal overflow (must be 0) and any JavaScript page errors (must be none)
  - exercises the menu drawer, back/forward buttons and search
  - saves screenshots of the chapter guide (top, middle section, last section, drawer, search) to --out

Passing result: every line shows "overflow 0", the final line says "PASS".
Chromium path: /opt/pw-browsers/chromium-1194/chrome-linux/chrome (override with env CHROME).
Google Fonts requests are aborted (the sandbox proxy blocks them and they would stall loading).
"""
import argparse, asyncio, functools, http.server, os, sys, threading

ap = argparse.ArgumentParser()
ap.add_argument("repo")
ap.add_argument("--chapter", default="ch16")
ap.add_argument("--out", default=os.path.join(os.getcwd(), "shots"))
ap.add_argument("--port", type=int, default=8790)
a = ap.parse_args()
os.makedirs(a.out, exist_ok=True)
CHROME = os.environ.get("CHROME", "/opt/pw-browsers/chromium-1194/chrome-linux/chrome")

class Quiet(http.server.SimpleHTTPRequestHandler):
    def log_message(self, *x): pass

srv = http.server.ThreadingHTTPServer(("127.0.0.1", a.port), functools.partial(Quiet, directory=os.path.abspath(a.repo)))
threading.Thread(target=srv.serve_forever, daemon=True).start()
U = f"http://127.0.0.1:{a.port}/index.html"

from playwright.async_api import async_playwright

async def main():
    bad = 0
    async with async_playwright() as p:
        b = await p.chromium.launch(executable_path=CHROME)
        for name, w, h in [("desktop", 1280, 900), ("phone", 390, 844)]:
            pg = await b.new_page(viewport={"width": w, "height": h})
            errs = []
            pg.on("pageerror", lambda e: errs.append(str(e)))
            await pg.route("**/fonts.*", lambda r: r.abort())
            await pg.goto(U + f"#/learn/{a.chapter}")
            await pg.wait_for_timeout(300)
            secs = await pg.evaluate("[...document.querySelectorAll('.guide-sec[id]')].map(s=>s.id.replace('sec-',''))")
            hashes = ["#/home", "#/learn", f"#/learn/{a.chapter}", f"#/learn/{a.chapter}/review", f"#/quiz/{a.chapter}",
                      "#/practice/all", "#/simulate", "#/drills", "#/cards/all", "#/bookmarks", "#/progress", "#/about"]
            hashes += [f"#/learn/{a.chapter}/{s}" for s in secs]
            for hsh in hashes:
                await pg.goto(U + hsh)
                await pg.wait_for_timeout(150)
                ov = await pg.evaluate("document.documentElement.scrollWidth - innerWidth")
                head = await pg.evaluate("(document.querySelector('main h1')||{}).textContent||'(no h1)'")
                print(f"{name:7} {hsh:40} overflow {ov}  {head[:50]}")
                if ov: bad += 1
            # screenshots
            for tag, hsh in [("top", f"#/learn/{a.chapter}"), ("mid", f"#/learn/{a.chapter}/{secs[len(secs)//2] if secs else ''}"),
                             ("end", f"#/learn/{a.chapter}/{secs[-2] if len(secs) > 1 else ''}")]:
                await pg.goto(U + hsh); await pg.wait_for_timeout(200)
                await pg.screenshot(path=os.path.join(a.out, f"{name}-{a.chapter}-{tag}.png"))
            # chrome: drawer, history, search
            await pg.goto(U + "#/home"); await pg.wait_for_timeout(150)
            await pg.click("#menu-btn"); await pg.wait_for_timeout(100)
            await pg.screenshot(path=os.path.join(a.out, f"{name}-drawer.png"))
            link = await pg.query_selector(f'#drawer a[data-ch="{a.chapter}"]')
            if not link:
                print(f"{name}: chapter {a.chapter} missing from drawer"); bad += 1
                await pg.keyboard.press("Escape")
            else:
                await link.click(); await pg.wait_for_timeout(200)
            await pg.click("#hist-back"); await pg.wait_for_timeout(200)
            if not pg.url.endswith("#/home"): print(f"{name}: back button failed ({pg.url})"); bad += 1
            await pg.click("[data-open-search]"); await pg.keyboard.type("empathy"); await pg.wait_for_timeout(200)
            n = await pg.evaluate("document.querySelectorAll('#search-results li').length")
            await pg.screenshot(path=os.path.join(a.out, f"{name}-search.png"))
            await pg.keyboard.press("Escape")
            if not n: print(f"{name}: search returned nothing"); bad += 1
            if errs: print(f"{name}: PAGE ERRORS", errs); bad += 1
        await b.close()
    print("PASS" if not bad else f"FAIL ({bad} problem(s))")
    print("screenshots in", a.out)
    sys.exit(1 if bad else 0)

asyncio.run(main())
