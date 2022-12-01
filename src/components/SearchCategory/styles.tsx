import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material";

export const useStyles = makeStyles(({ spacing, breakpoints }: Theme) => ({
  root: {
    [breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  btn: {
    paddingTop: "6px",
    paddingLeft: "8px",
    paddingBottom: "6px",
    paddingRight: "16px",
  },
}));
