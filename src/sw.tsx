// src/sw.js
/// <reference lib="webworker" />

self.addEventListener("fetch", (event: Event) => {
  const fetchEvent = event as FetchEvent;

  fetchEvent.respondWith(
    fetch(fetchEvent.request).catch(() => {
      // Redirect to the offline route
      return fetch("/offline");
    })
  );
});
