import { createTheme, PaletteColor, PaletteColorOptions } from "@mui/material/styles";

/*=============================================
  =            New theme customization            =
  =============================================*/

declare module "@mui/material/styles" {
  interface Theme {
    status: {
      danger: string;
      check: string;
      main: string;
    };
    appColor: {
      success: string;
      light: string;
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    status: {
      danger: string;
      check: string;
      main: string;
    };
    appColor: {
      success: string;
      light: string;
    };
  }
}

/*=====  End of New theme customization  ======*/

/*=============================================
    =            Typography            =
    =============================================*/

declare module "@mui/material/styles" {
  interface TypographyVariants {
    poster: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    poster?: React.CSSProperties;
  }
}

// Update the Typography's variant prop options
declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    poster: true;
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
  // append to color option
  interface SimplePaletteColorOptions {
    lightier?: string;
  }
  interface PaletteColor {
    lightier?: string;
  }
}

/*=====  End of Palette  ======*/
