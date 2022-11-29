import { createTheme, PaletteColor, PaletteColorOptions, Theme } from "@mui/material/styles";

/*=============================================
  =            New themes customization            =
  =============================================*/
declare module "@mui/material/styles" {
  interface Theme {
    status?: {
      danger: string;
      check: string;
      main: string;
    };
    appColor?: {
      success: string;
      light: string;
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    status?: {
      danger: string;
      check: string;
      main: string;
    };
    appColor?: {
      success: string;
      light: string;
    };
  }
}

declare module "@mui/styles/defaultTheme" {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface (remove this line if you don't have the rule enabled)
  interface DefaultTheme extends Theme {}
}
/*=====  End of New themes customization  ======*/

/*=============================================
    =            Typography            =
 =============================================*/

declare module "@mui/material/styles" {
  interface TypographyVariants {
    customFontSize?: {
      xs: React.CSSProperties;
      xl: React.CSSProperties;
      sm: React.CSSProperties;
      md: React.CSSProperties;
      lg: React.CSSProperties;
      xl: React.CSSProperties;
      xxl: React.CSSProperties;
    };
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    customFontSize?: {
      xs: React.CSSProperties;
      xl: React.CSSProperties;
      sm: React.CSSProperties;
      md: React.CSSProperties;
      lg: React.CSSProperties;
      xl: React.CSSProperties;
      xxl: React.CSSProperties;
    };
  }
}

// Update the Typography's variant prop options
declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    customFontSize: true;
  }
}

/*=====  End of Typography  ======*/

/*=============================================
    =        Palette             =
=============================================*/
declare module "@mui/material/styles" {
  // append to color palette
  interface Palette {
    customGreen?: PaletteColor;
    customBlack?: PaletteColor;
  }
  interface PaletteOptions {
    customBlack?: PaletteColorOptions;
    customGreen?: PaletteColorOptions;
  }
}

/*=====  End of Palette  ======*/
