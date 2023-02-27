import { createTheme } from "@mui/material/styles";

const theme = createTheme();

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
      textDark: "#47464A",
      textLight: " #929094",
    },
  },
  typography: {
    button: {
      textTransform: "none",
    },
    fontWeightMedium: 600,
    fontWeightRegular: 500,
    fontWeightLight: 400,
    fontFamily: "Poppins",
    displaySmall: {
      fontSize: "16px",
      lineHeight: "24px",
      fontStyle: "normal",
      letterSpacing: "0.1px",
    },
    displayMedium: {
      fontSize: "24px",
      lineHeight: "24px",
      fontStyle: "normal",
      letterSpacing: "0.1px",
    },
    displayLarge: {
      fontSize: "32px",
      lineHeight: "24px",
      fontStyle: "normal",
      letterSpacing: "0.1px",
    },
    headline6: {
      fontSize: theme.spacing(2.25),
      lineHeight: "24px",
      fontStyle: "normal",
      letterSpacing: "0.1px",
    },
    headline4: {
      fontSize: theme.spacing(3),
      lineHeight: "24px",
      fontStyle: "normal",
      letterSpacing: "0.1px",
    },
    headline3: {
      fontSize: "24px",
      lineHeight: "32px",
      fontStyle: "normal",
      letterSpacing: "0.1px",
    },
    titleSmall: {
      fontSize: theme.spacing(1.75),
      lineHeight: "20px",
      fontStyle: "normal",
      letterSpacing: "0.1px",
    },
    titleMedium: {
      fontSize: theme.spacing(2),
      lineHeight: "24px",
      letterSpacing: "0.1px",
      fontStyle: "normal",
    },
    titleLarge: {
      fontSize: theme.spacing(2.75),
      lineHeight: "28px",
      fontStyle: "normal",
      letterSpacing: "0.1px",
    },
    labelSmall: {
      fontSize: theme.spacing(1.375),
      lineHeight: "16px",
      fontStyle: "normal",
      letterSpacing: "0.5px",
    },
    labelMedium: {
      fontSize: theme.spacing(1.5),
      lineHeight: "16px",
      letterSpacing: "0.5px",
      fontStyle: "normal",
    },
    labelLarge: {
      fontSize: theme.spacing(1.75),
      lineHeight: "20px",
      letterSpacing: "0.25px",
      fontStyle: "normal",
    },
    bodyMedium: {
      fontSize: theme.spacing(1.75),
      lineHeight: "20px",
      letterSpacing: "0.25px",
      fontStyle: "normal",
    },
    bodyLarge: {
      fontSize: theme.spacing(2),
      lineHeight: "24px",
      letterSpacing: "0.5px",
      fontStyle: "normal",
    },
    bodySmall: {
      fontSize: theme.spacing(1.5),
      lineHeight: "16px",
      letterSpacing: "0.4px",
      fontStyle: "normal",
    },
  },
});
