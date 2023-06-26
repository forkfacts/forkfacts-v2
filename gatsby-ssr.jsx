import React, { useEffect } from "react";
import { App } from "konsta/react";
import "@fontsource/poppins";
import "@algolia/autocomplete-theme-classic";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";
import "./src/styles/styles.css";
import { Helmet } from "react-helmet";
import { HelmetProvider } from "react-helmet-async";

const isBrowser = typeof window !== "undefined";

const WrapPageElement = ({ element }) => {
  useEffect(() => {
    if (isBrowser) {
      window &&
        window.addEventListener("offline", function (e) {
          navigate("/offline");
        });
    } else if (
      !navigator.connection &&
      navigator.onLine &&
      window.navigator.connection.type === "none"
    ) {
      navigate("/offline");
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

export const wrapRootElement = WrapPageElement;
