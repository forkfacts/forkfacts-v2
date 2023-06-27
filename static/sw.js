importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.4.1/workbox-sw.js");

// The plugin will pass the files to cache here
workbox.precaching.precacheAndRoute([]);

// Cache the offline page during the install event
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open("offline-cache").then((cache) => {
      return cache.add(["/", "/offline/", "/favorites/", "/manifest.webmanifest", "/*"]);
    })
  );
});

// Serve the cached offline page when offline
self.addEventListener("fetch", (event) => {
  if (event.request.mode === "navigate") {
    event.respondWith(
      fetch(event.request).catch(() => {
        return caches.match("/offline");
      })
    );
  } else {
    // Respond with the cached offline page for all other requests when offline
    event.respondWith(
      caches.match(event.request).then((response) => {
        return response || fetch(event.request);
      })
    );
  }
});
