import React, { ReactNode } from "react";
import { ThemeProvider } from "@mui/material";

import { customTheme } from "../themes/theme";

const wrapPageElement = ({ element }: { element: ReactNode }) => {
  return (
    <ThemeProvider theme={customTheme}>
      <>{element}</>
    </ThemeProvider>
  );
};

export default wrapPageElement;
