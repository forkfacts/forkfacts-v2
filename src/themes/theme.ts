import { red, orange } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

// A custom theme for this app
export const customTheme = createTheme({
  spacing: 8,
  palette: {
    mode: "light",
    primary: {
      main: "#556cd6",
      darker: "#053e85",
    },
    secondary: {
      main: "#19857b",
    },
    error: {
      main: red.A400,
    },
    custom: {
      main: "#64748B",
      light: "#fff",
      darker: "#053e85",
      contrastText: "#fff",
    },
  },
  typography: {
    subtitle1: {
      fontSize: 14,
    },
    // Disable h3 variant
    h3: {
      fontSize: "100px",
    },
    poster: {
      fontSize: "10px",
    },
  },
  status: {
    danger: "yellow",
    check: "purple",
  },
  appColor: {
    success: "red",
  },
});

declare module "@mui/material/styles" {
  interface Theme {
    status: {
      danger: string;
      check: string;
    };
    appColor: {
      success: string;
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    status: {
      danger: string;
      check: string;
    };
    appColor: {
      success: string;
    };
  }
}

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
    h3: false;
  }
}

/*=====  End of Typography  ======*/

/*=============================================
=        Palette             =
=============================================*/
declare module "@mui/material/styles" {
  interface Palette {
    neutral: Palette["primary"];
  }
  interface PaletteOptions {
    custom?: PaletteOptions["primary"];
  }

  interface PaletteColor {
    darker: string;
  }
  interface SimplePaletteColorOptions {
    darker?: string;
  }
}

/*=====  End of  Palette  ======*/
