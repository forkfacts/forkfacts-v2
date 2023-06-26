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

const isBrowser = typeof window !== "undefined";

const WrapPageElement = ({ element }) => {
  useEffect(() => {
    if (isBrowser) {
      window &&
        window.addEventListener("offline", function (e) {
          navigate("/offline");
        });
    }
    return () => {
      if (isBrowser) {
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

export const onServiceWorkerUpdateReady = () => {
  const answer = window.confirm(
    "This application has been updated. Reload to display the latest version?"
  );
  if (answer === true) {
    window.location.reload();
  }
};
export const registerServiceWorker = () => true;
