import { createTheme } from "@mui/material/styles";

export const customTheme = createTheme({
  spacing: 8,
  palette: {
    customGreen: {
      main: "#356A1E",
    },
    customBlack: {
      main: "#000000",
    },
  },
  typography: {
    fontFamily: "Poppins",
    customFontSize: {
      xs: {
        fontSize: "10px",
      },
      sm: {
        fontSize: "16px",
      },
      md: {
        fontSize: "10px",
      },
      lg: {
        fontSize: "100px",
      },
      xl: {
        fontSize: "10px",
      },
      xxl: {
        fontSize: "10px",
      },
    },
  },
});
