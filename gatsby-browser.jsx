import React from "react";
import { App } from "konsta/react";
import { Helmet } from "react-helmet";
import { HelmetProvider } from "react-helmet-async";
import "@algolia/autocomplete-theme-classic";
import "@fontsource/poppins";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";
import "./src/styles/styles.css";

export const wrapPageElement = ({ element }) => {
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

export const onServiceWorkerUpdateReady = () => {
  const answer = window.confirm(
    "This application has been updated. Reload to display the latest version?"
  );
  if (answer === true) {
    window.location.reload();
  }
};
export const registerServiceWorker = () => true;
