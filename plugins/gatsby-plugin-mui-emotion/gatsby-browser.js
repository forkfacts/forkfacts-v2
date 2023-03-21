/* eslint-disable import/prefer-default-export */
import * as React from "react";
import { CacheProvider } from "@emotion/react";
import getEmotionCache from "./getEmotionCache";
import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import "@fontsource/poppins";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";
import { customTheme } from "../../src/themes/";

const cache = getEmotionCache();

export const wrapRootElement = ({ element }) => {
  return (
    <CacheProvider value={cache}>
      <ThemeProvider theme={customTheme}>
        <CssBaseline />
        <>{element}</>
      </ThemeProvider>
    </CacheProvider>
  );
};
