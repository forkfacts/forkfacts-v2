import React from "react";
import { App } from "konsta/react";
import "@fontsource/poppins";
import "@algolia/autocomplete-theme-classic";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";
import "./src/styles/styles.css";

export const WrapPageElement = ({ element }) => {
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
    <App theme="material" dark={false}>
      {element}
    </App>
  );
};

export const wrapPageElement = WrapPageElement;
