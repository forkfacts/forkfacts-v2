import React, { useEffect } from "react";
import { App } from "konsta/react";
import { Helmet } from "react-helmet";
import { HelmetProvider } from "react-helmet-async";
import "@algolia/autocomplete-theme-classic";
import "@fontsource/poppins";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";
import "./src/styles/styles.css";
import { navigate } from "gatsby";

// const isBrowser = typeof window !== "undefined";

const WrapPageElement = ({ element }) => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      window &&
        window.addEventListener("offline", function (e) {
          navigate("/offline");
        });
    }
    return () => {
      if (typeof window !== "undefined") {
        window &&
          window.removeEventListener("offline", function (e) {
            navigate("/offline");
          });
      }
    };
  }, []);

  return (
    <HelmetProvider>
      <Helmet defer={false} />
      <link rel="manifest" href="/manifest.webmanifest" />
      <App theme="material" dark={false}>
        {element}
      </App>
    </HelmetProvider>
  );
};

export const wrapPageElement = WrapPageElement;

export const onServiceWorkerUpdateReady = async (args) => {
  const permissionResponse = await Notification.requestPermission();
  if (permissionResponse === "granted") {
    await args.serviceWorker.showNotification("Website update", {
      body: "Our website just got a little bit better. We reloaded the site with the update to ensure a smooth experience for you.",
    });
  }
  window.location.reload(true);

  if ("serviceWorker" in navigator) {
    navigator.serviceWorker
      .register("/src/helpers/sw.js")
      .then(function (registration) {
        console.log("Service Worker registered:", registration);
      })
      .catch(function (error) {
        console.log("Service Worker registration failed:", error);
      });
  }
};
export const registerServiceWorker = () => true;
