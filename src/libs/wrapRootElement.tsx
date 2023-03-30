import React from "react";
import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import "@fontsource/poppins";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";
import { customTheme } from "../themes/theme";
import "../styles/styles.css";

const wrapRootElement: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <ThemeProvider theme={customTheme}>
      <CssBaseline />
      <>{children}</>
    </ThemeProvider>
  );
};

export default wrapRootElement;
