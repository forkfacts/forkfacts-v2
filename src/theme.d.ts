import { createTheme } from "@mui/material";
import { TypographyOptions } from "@mui/material/styles/createTypography";

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
      dark: string;
      textLight: string;
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
      dark: string;
      textLight: string;
    };
  }
}
declare module "@mui/material/styles/createTypography" {
  interface Typography {
    labelSmall: {
      fontSize: string;
      lineHeight: string;
    };
    labelMedium: {
      fontSize: string;
      lineHeight: string;
    };
    titleMedium: {
      fontSize: string;
      lineHeight: string;
    };
    headline4: {
      fontSize: string;
      lineHeight: string;
    };
  }

  interface TypographyOptions {
    labelSmall: {
      fontSize: string;
      lineHeight: string;
    };
    labelMedium: {
      fontSize: string;
      lineHeight: string;
    };
    titleMedium: {
      fontSize: string;
      lineHeight: string;
    };
    headline4: {
      fontSize: string;
      lineHeight: string;
    };
  }
}
