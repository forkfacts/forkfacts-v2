import React from "react";
import "@fontsource/poppins";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";
import { App } from "konsta/react";
import "../styles/styles.css";

const WrapRootElement: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <App theme="material" dark={false}>
      {children}
    </App>
  );
};

export default WrapRootElement;
