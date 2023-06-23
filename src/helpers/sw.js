importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.4.1/workbox-sw.js");

const { registerRoute } = workbox.routing;
const { CacheFirst } = workbox.strategies;
const { CacheableResponsePlugin } = workbox.cacheableResponse;

// The plugin will pass the files to cache here
workbox.precaching.precacheAndRoute([]);

// Precache offline page
workbox.precaching.precacheAndRoute([{ url: "/offline", revision: null }]);

registerRoute(
  ({ event }) => event.request.mode === "navigate",
  new CacheFirst({
    cacheName: "pages",
    plugins: [
      new CacheableResponsePlugin({
        statuses: [200],
      }),
    ],
  })
);

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
