// src/sw.js
self.addEventListener("fetch", (event: any) => {
  const offlineResponse = new Response(
    `<div>
       <h1>Offline</h1>
       <p>You are currently offline. Please check your internet connection.</p>
     </div>`,
    {
      headers: { "Content-Type": "text/html" },
    }
  );

  event.respondWith(
    fetch(event.request).catch(() => {
      return offlineResponse;
    })
  );
});

// // Register the service worker
export const registerServiceWorker = () => true;
