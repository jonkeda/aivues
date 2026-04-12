const CACHE_NAME = 'aivues-v1';
const OFFLINE_URL = '/aivues/';

// Core assets to cache on install
const PRECACHE_URLS = [
  '/aivues/',
  '/aivues/en/',
  '/aivues/nl/',
  '/aivues/css/style.css',
  '/aivues/js/main.js',
  '/aivues/favicon.svg'
];

self.addEventListener('install', function (event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
      return cache.addAll(PRECACHE_URLS);
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (keys) {
      return Promise.all(
        keys.filter(function (key) { return key !== CACHE_NAME; })
            .map(function (key) { return caches.delete(key); })
      );
    })
  );
  self.clients.claim();
});

self.addEventListener('fetch', function (event) {
  if (event.request.method !== 'GET') return;

  event.respondWith(
    fetch(event.request).then(function (response) {
      // Cache successful responses for offline use
      if (response.ok) {
        var clone = response.clone();
        caches.open(CACHE_NAME).then(function (cache) {
          cache.put(event.request, clone);
        });
      }
      return response;
    }).catch(function () {
      // Serve from cache when offline
      return caches.match(event.request).then(function (cached) {
        return cached || caches.match(OFFLINE_URL);
      });
    })
  );
});
