import { createTheme } from "@mui/material";
import { cyan, grey, purple } from "@mui/material/colors";

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: purple["900"],
    },
    secondary: {
      main: grey["50"],
    },
    background: {
      default: grey["50"],
      paper: grey["50"],
    },
  },
});
