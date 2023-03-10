import { createTheme } from "@mui/material";
import { TypographyOptions } from "@mui/material/styles/createTypography";
import { TypographyPropsVariantOverrides } from "@mui/material/Typography";
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
      textDark: string;
      textBlack: string;
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
      textDark: string;
      textBlack: string;
    };
  }
}
declare module "@mui/material/styles/createTypography" {
  interface Typography {
    headline6: {
      fontSize: string;
      lineHeight: string;
      fontStyle: string;
      letterSpacing: string;
    };
    headline4: {
      fontSize: string;
      lineHeight: string;
      fontStyle: string;
      letterSpacing: string;
    };
    headline3: {
      fontSize: string;
      lineHeight: string;
      fontStyle: string;
      letterSpacing: string;
    };
    titleMedium: {
      fontSize: string;
      lineHeight: string;
      fontStyle: string;
      letterSpacing: string;
    };
    titleSmall: {
      fontSize: string;
      lineHeight: string;
      fontStyle: string;
      letterSpacing: string;
    };
    titleLarge: {
      fontSize: string;
      lineHeight: string;
      fontStyle: string;
      letterSpacing: string;
    };
    labelLarge: {
      fontSize: string;
      lineHeight: string;
      letterSpacing: string;
      fontStyle: string;
    };
    labelSmall: {
      fontSize: string;
      lineHeight: string;
      fontStyle: string;
      letterSpacing: string;
    };
    labelMedium: {
      fontSize: string;
      lineHeight: string;
      letterSpacing: string;
      fontStyle: string;
    };
    bodyLarge: {
      fontSize: string;
      lineHeight: string;
      letterSpacing: string;
      fontStyle: string;
    };
    bodyMedium: {
      fontSize: string;
      lineHeight: string;
      letterSpacing: string;
      fontStyle: string;
    };
    bodySmall: {
      fontSize: string;
      lineHeight: string;
      letterSpacing: string;
      fontStyle: string;
      letterSpacing: string;
    };
    displaySmall: {
      fontSize: string;
      lineHeight: string;
      fontStyle: string;
      letterSpacing: string;
    };
    displayMedium: {
      fontSize: string;
      lineHeight: string;
      fontStyle: string;
      letterSpacing: string;
    };
    displayLarge: {
      fontSize: string;
      lineHeight: string;
      fontStyle: string;
      letterSpacing: string;
    };
    extraSmall: {
      fontSize: string;
      lineHeight: string;
      fontStyle: string;
      letterSpacing: string;
    };
  }

  interface TypographyOptions {
    headline6: {
      fontSize: string;
      lineHeight: string;
      fontStyle: string;
      letterSpacing: string;
    };
    headline4: {
      fontSize: string;
      lineHeight: string;
      fontStyle: string;
      letterSpacing: string;
    };
    headline3: {
      fontSize: string;
      lineHeight: string;
      fontStyle: string;
      letterSpacing: string;
    };
    titleMedium: {
      fontSize: string;
      lineHeight: string;
      fontStyle: string;
      letterSpacing: string;
    };
    titleSmall: {
      fontSize: string;
      lineHeight: string;
      fontStyle: string;
      letterSpacing: string;
    };
    titleLarge: {
      fontSize: string;
      lineHeight: string;
      fontStyle: string;
      letterSpacing: string;
    };
    labelLarge: {
      fontSize: string;
      lineHeight: string;
      letterSpacing: string;
      fontStyle: string;
    };
    labelSmall: {
      fontSize: string;
      lineHeight: string;
      fontStyle: string;
      letterSpacing: string;
    };
    labelMedium: {
      fontSize: string;
      lineHeight: string;
      letterSpacing: string;
      fontStyle: string;
    };
    bodyLarge: {
      fontSize: string;
      lineHeight: string;
      letterSpacing: string;
      fontStyle: string;
    };
    bodyMedium: {
      fontSize: string;
      lineHeight: string;
      letterSpacing: string;
      fontStyle: string;
    };
    bodySmall: {
      fontSize: string;
      lineHeight: string;
      letterSpacing: string;
      fontStyle: string;
      letterSpacing: string;
    };
    displaySmall: {
      fontSize: string;
      lineHeight: string;
      fontStyle: string;
      letterSpacing: string;
    };
    displayMedium: {
      fontSize: string;
      lineHeight: string;
      fontStyle: string;
      letterSpacing: string;
    };
    displayLarge: {
      fontSize: string;
      lineHeight: string;
      fontStyle: string;
      letterSpacing: string;
    };
    extraSmall: {
      fontSize: string;
      lineHeight: string;
      fontStyle: string;
      letterSpacing: string;
    };
  }
}
declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    displaySmall: true;
    displayMedium: true;
    displayLarge: true;
    titleMedium: true;
    titleSmall: true;
    titleLarge: true;
    headline6: true;
    headline4: true;
    headline3: true;
    labelSmall: true;
    labelMedium: true;
    labelLarge: true;
    bodyLarge: true;
    bodyMedium: true;
    bodySmall: true;
    extraSmall: true;
  }
}
