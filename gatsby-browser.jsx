import React from "react";
import { App } from "konsta/react";
import "@algolia/autocomplete-theme-classic";
import "@fontsource/poppins";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";
import "./src/styles/styles.css";

export const wrapPageElement = ({ element }) => {
  return (
    <App theme="material" dark={false}>
      {element}
    </App>
  );
};
