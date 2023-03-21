import React from "react";
import { CacheProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import "@fontsource/poppins";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";
import { customTheme } from "../../src/themes/theme";
import getEmotionCache from "../gatsby-plugin-mui-emotion/getEmotionCache";

const cache = getEmotionCache();

const wrapRootElement = ({ element }) => {
  return (
    <CacheProvider value={cache}>
      <ThemeProvider theme={customTheme}>
        <CssBaseline />
        <>{element}</>
      </ThemeProvider>
    </CacheProvider>
  );
};

export default wrapRootElement;
