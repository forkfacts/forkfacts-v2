import { createTheme } from "@mui/material";

export const customTheme = createTheme({
  palette: {
    primary: {
      main: "#4C42E8",
      light: "#E2DFFF",
      dark: "#0E006A",
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: "#5D5C71",
      light: "#E3E0F9",
      dark: "#1A1A2C",
      contrastText: "#FFFFFF",
    },
    error: {
      main: "#BA1A1A",
      light: "#FFDAD6",
      dark: "#410002",
      contrastText: "#FFFFFF",
    },
    tertiary: {
      main: "#006874",
      light: "#97F0FF",
      dark: "#001F24",
      contrastText: "#FFFFFF",
    },
    surface: {
      main: "#FFFBFF",
      surface1: " linear-gradient(0deg, rgba(76, 66, 232, 0.05), rgba(76, 66, 232, 0.05)), #FFFBFF",
      surface2: "linear-gradient(0deg, rgba(76, 66, 232, 0.08), rgba(76, 66, 232, 0.08)), #FFFBFF",
      surface3: "linear-gradient(0deg, rgba(76, 66, 232, 0.11), rgba(76, 66, 232, 0.11)), #FFFBFF",
      surface4: "linear-gradient(0deg, rgba(76, 66, 232, 0.12), rgba(76, 66, 232, 0.12)), #FFFBFF",
      surface5: "linear-gradient(0deg, rgba(76, 66, 232, 0.14), rgba(76, 66, 232, 0.14)), #FFFBFF",
    },
    background: {
      default: "#FFFFFF",
    },
    customGray: {
      light: "#E5E1E6",
      main: "#1C1B1F",
      dark: "#78767A",
      textLight: "#78767A",
      textDark: "#47464A",
    },
  },
  typography: {
    fontFamily: "Poppins",
    button: {
      textTransform: "none",
    },
    fontWeightMedium: 600,
    fontWeightRegular: 500,
    fontWeightLight: 400,
    labelSmall: {
      fontSize: "11px",
      lineHeight: "16px",
    },
    labelMedium: {
      fontSize: "12px",
      lineHeight: "16px",
    },
    titleMedium: {
      fontSize: "16px",
      lineHeight: "24px",
    },
    headline4: {
      fontSize: "24px",
      lineHeight: "32px",
    },
  },
});
