/* Offline support: network first, cached copy when offline. Bump VERSION on every publish.
   Cache names MUST start with this app's PREFIX: all isaymotion apps share one origin and one cache storage. */
const PREFIX = 'sheatrainer-';
const VERSION = PREFIX + '11.0.0-b';
const CORE = [
  './',
  './index.html',
  './css/app.css',
  './js/app.js',
  './data/app-meta.js',
  './data/changelog.js',
  './data/hospital.js',
  './data/strings.js',
  './content/guide-ch1.js',
  './content/guide-ch10.js',
  './content/guide-ch11.js',
  './content/guide-ch12.js',
  './content/guide-ch13.js',
  './content/guide-ch14.js',
  './content/guide-ch15.js',
  './content/guide-ch16.js',
  './content/guide-ch17.js',
  './content/guide-ch18.js',
  './content/guide-ch2.js',
  './content/guide-ch3.js',
  './content/guide-ch4.js',
  './content/guide-ch5.js',
  './content/guide-ch6.js',
  './content/guide-ch7.js',
  './content/guide-ch8.js',
  './content/guide-ch9.js',
  './content/part1-chapters.js',
  './content/part1-practice.js',
  './content/part2-chapters.js',
  './content/part2-practice.js',
  './content/part3-chapters.js',
  './content/tagalog-cases.js',
  './content/tagalog-drills.js',
  './content/tagalog-practice.js',
  './content/tagalog-sims.js',
  './content/tagalog.js',
  './manifest.webmanifest',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/icon-maskable-512.png',
  './icons/apple-touch-icon.png',
  './icons/favicon-32.png'
];
self.addEventListener('install', (event) => {
  // add() one by one so a not-yet-uploaded icon cannot make the whole install fail
  event.waitUntil(caches.open(VERSION).then((c) => Promise.all(CORE.map((u) => c.add(u).catch(() => {})))).then(() => self.skipWaiting()));
});
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      // Only delete this app's own old caches: other study apps on isaymotion.github.io share this cache storage.
      .then((keys) => Promise.all(keys.filter((k) => k.indexOf(PREFIX) === 0 && k !== VERSION).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});
self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;
  event.respondWith(
    fetch(req)
      .then((res) => {
        if (res && (res.ok || res.type === 'opaque')) {
          const copy = res.clone();
          caches.open(VERSION).then((c) => c.put(req, copy));
        }
        return res;
      })
      .catch(() => caches.match(req).then((hit) => hit || caches.match('./index.html')))
  );
});
