import { createTheme } from "@mui/material/styles";

export const customTheme = createTheme({
  spacing: 8,
  palette: {
    customGreen: {
      main: "#64748B",
      light: "#fff",
      dark: "red",
      contrastText: "#ff8a80",
    },
    customBlack: {
      main: "#880e4f",
      light: "#5f0937",
      dark: "#9f3e72",
      contrastText: "#ffa199",
      lightier: "#fff90",
    },
  },
  typography: {
    poster: {
      fontSize: "10px",
    },
  },
  status: {
    danger: "yellow",
    check: "purple",
    main: "pink",
  },
  appColor: {
    success: "red",
    light: "orange",
  },
});
