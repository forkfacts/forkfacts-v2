import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material";

export const useStyles = makeStyles(({}: Theme) => ({
  noBorder: {
    border: "none",
  },
}));
