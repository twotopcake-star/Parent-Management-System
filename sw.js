/**
 * Service Worker for Sitabutr bamrung School PWA (GitHub Pages Edition)
 * Version: 3.1.0
 */

const CACHE_NAME = 'sitabutr-parent-pwa-v3.6';
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './manifest.json',
  'https://lh3.googleusercontent.com/d/1xX85Kyhv36WJJ-0CS35mfKLdy0H0-YU-',
  'https://fonts.googleapis.com/css2?family=Prompt:wght@300;400;500;600;700&display=swap',
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css'
];

// 1. Install Event: Cache essential assets safely
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(async (cache) => {
      // Robust caching: ensure single failed CDN request does not block SW installation
      for (const asset of ASSETS_TO_CACHE) {
        try {
          await cache.add(asset);
        } catch (err) {
          console.warn('Optional asset caching skipped:', asset, err);
        }
      }
    }).then(() => self.skipWaiting())
  );
});

// 2. Activate Event: Clean up old caches and claim clients immediately
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// 3. Fetch Event: Network first with Cache fallback
self.addEventListener('fetch', (event) => {
  // Only handle GET requests
  if (event.request.method !== 'GET') return;

  event.respondWith(
    fetch(event.request)
      .then((networkResponse) => {
        // Cache valid local requests dynamically
        if (networkResponse && networkResponse.status === 200 && event.request.url.startsWith(self.location.origin)) {
          const responseClone = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(event.request, responseClone));
        }
        return networkResponse;
      })
      .catch(() => {
        return caches.match(event.request).then((cachedResponse) => {
          if (cachedResponse) return cachedResponse;
          if (event.request.mode === 'navigate') {
            return caches.match('./index.html');
          }
          return new Response('Offline', { status: 503, statusText: 'Service Unavailable' });
        });
      })
  );
});
