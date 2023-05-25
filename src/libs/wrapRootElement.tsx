import React from "react";
import "@fontsource/poppins";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";
import { KonstaProvider } from "konsta/react";
import "../styles/styles.css";

const wrapRootElement: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <KonstaProvider theme="material" dark={false}>
      {children}
    </KonstaProvider>
  );
};

export default wrapRootElement;
