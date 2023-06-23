import React from "react";
import { Helmet } from "react-helmet-async";
import { App } from "konsta/react";
import "@algolia/autocomplete-theme-classic";
import "@fontsource/poppins";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";
import "./src/styles/styles.css";

export const wrapPageElement = ({ element }) => {
  return (
    <>
      <Helmet>
        <link rel="manifest" href="/manifest.webmanifest" />
      </Helmet>
      <App theme="material" dark={false}>
        {element}
      </App>
    </>
  );
};

export const onServiceWorkerUpdateReady = () => {
  const answer = window.confirm(
    "This application has been updated. " + "Reload to display the latest version?"
  );
  if (answer === true) {
    window.location.reload();
  }
};

export const registerServiceWorker = () => true;
