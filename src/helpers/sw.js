importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.4.1/workbox-sw.js");

// The plugin will pass the files to cache here
workbox.precaching.precacheAndRoute([]);

// sw.js
self.addEventListener("install", function (event) {
  event.waitUntil(
    caches.open("offline-cache").then(function (cache) {
      return cache.addAll(["/", "/offline.html", "/favorites/", "/manifest.webmanifest", "/*"]);
    })
  );
});

self.addEventListener("fetch", function (event) {
  event.respondWith(
    caches.match(event.request).then(function (response) {
      if (response) {
        return response;
      }
      return fetch(event.request).catch(function () {
        return caches.match("/offline");
      });
    })
  );
});
