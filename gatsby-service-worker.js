importScripts("https://storage.googleapis.com/workbox-cdn/releases/6.1.5/workbox-sw.js");

workbox.routing.registerRoute(
  ({ request }) => request.mode === "navigate",
  ({ url }) =>
    caches.match(url.pathname).then((response) => response || caches.match("/offline.html"))
);
