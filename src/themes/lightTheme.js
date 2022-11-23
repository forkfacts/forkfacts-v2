import {createTheme} from "@mui/material";
import {cyan, grey, lightGreen} from "@mui/material/colors";

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: lightGreen["A200"],
    },
    secondary: {
      main: grey["A400"],
    },
    background: {
      default: grey["200"],
      paper: grey["200"],
    },
  },
});