import React, { ReactNode } from "react";
import { ThemeProvider, CssBaseline, Box } from "@mui/material";
import "@fontsource/poppins";
import { customTheme } from "../themes/theme";

const wrapPageElement = ({ element }: { element: ReactNode }) => {
  return (
    <ThemeProvider theme={customTheme}>
      <CssBaseline />
      <Box>{element}</Box>
    </ThemeProvider>
  );
};

export default wrapPageElement;
