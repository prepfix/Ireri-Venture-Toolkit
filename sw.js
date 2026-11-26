// IRERI VENTURE offline cache.
// The app page is fetched fresh whenever you are online (so updates arrive on their own)
// and falls back to the saved copy when you are offline.
const CACHE = 'ireri-v4';
const SHELL = ['./', 'index.html', 'manifest.webmanifest', 'icons/icon-180.png', 'icons/icon-192.png', 'icons/icon-512.png', 'icons/icon-maskable-512.png', 'icons/favicon-64.png'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(SHELL)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(k => Promise.all(k.filter(x => x !== CACHE).map(x => caches.delete(x)))).then(() => self.clients.claim()));
});

self.addEventListener('fetch', e => {
  const r = e.request;
  if (r.method !== 'GET') return;
  const same = new URL(r.url).origin === location.origin;
  if (same) {
    // network first (3s), then saved copy
    e.respondWith(new Promise(res => {
      const t = setTimeout(() => caches.match(r, {ignoreSearch: true}).then(m => m && res(m)), 3000);
      fetch(r, {cache: 'no-cache'}).then(n => {
        clearTimeout(t);
        const copy = n.clone();
        caches.open(CACHE).then(c => c.put(r, copy));
        res(n);
      }).catch(() => {
        clearTimeout(t);
        caches.match(r, {ignoreSearch: true}).then(m => res(m || caches.match('index.html')));
      });
    }));
  } else {
    // Excel / PDF libraries: saved after first online use, then work offline
    e.respondWith(caches.match(r).then(m => m || fetch(r).then(n => {
      const copy = n.clone();
      caches.open(CACHE).then(c => c.put(r, copy));
      return n;
    })));
  }
});
