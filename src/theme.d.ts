import { createTheme } from "@mui/material";

declare module "@mui/material/styles/createPalette" {
  // allow configuration using `createTheme`
  interface Palette {
    tertiary: {
      main: string;
      light: string;
      dark: string;
      contrastText: string;
    };
    surface: {
      main: string;
      surface1: string;
      surface2: string;
      surface3: string;
      surface4: string;
      surface5: string;
    };
    customGray: {
      light: string;
      main: string;
    };
  }
  interface PaletteOptions {
    tertiary: {
      main: string;
      light: string;
      dark: string;
      contrastText: string;
    };
    surface: {
      main: string;
      surface1: string;
      surface2: string;
      surface3: string;
      surface4: string;
      surface5: string;
    };
    customGray: {
      light: string;
      main: string;
    };
  }
}
