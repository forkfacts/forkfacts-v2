import React, { ReactNode } from "react";
import { CacheProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import "@fontsource/poppins";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";
import { customTheme } from "../themes/theme";

const wrapRootElement = ({ element }: { element: ReactNode }) => {
  return (
    <ThemeProvider theme={customTheme}>
      <CssBaseline />
      <>{element}</>
    </ThemeProvider>
  );
};

export default wrapRootElement;
