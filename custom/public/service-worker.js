const CACHE_NAME = 'image-cache-v1';
const IMAGE_EXTENSIONS = ['png', 'jpg', 'jpeg', 'gif','json'];

// Install event to cache images
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('Opened cache:', CACHE_NAME);
    })
  );
});

// Fetch event to intercept network requests and serve cached images
self.addEventListener('fetch', (event) => {
  const requestUrl = new URL(event.request.url);
  
  // Only intercept requests for images
  if (IMAGE_EXTENSIONS.some((ext) => requestUrl.pathname.endsWith(ext))) {
    event.respondWith(
      caches.match(event.request).then((cachedResponse) => {
        if (cachedResponse) {
          return cachedResponse; // Serve from cache
        }

        // Fetch from network and cache it
        return fetch(event.request).then((networkResponse) => {
          return caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, networkResponse.clone());
            return networkResponse;
          });
        });
      })
    );
  }
});

// Activate event to clean up old caches
self.addEventListener('activate', (event) => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (!cacheWhitelist.includes(cacheName)) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});