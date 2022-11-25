import { createTheme } from "@mui/material/styles";
import { cyan, grey, purple } from "@mui/material/colors";

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#00000",
    },
    secondary: {
      main: "#fff",
    },
    background: {
      default: grey["50"],
      paper: grey["50"],
    },
  },
});
