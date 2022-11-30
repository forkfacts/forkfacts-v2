import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material";

export const useStyles = makeStyles(({ spacing, breakpoints, typography }: Theme) => ({
  root: {
    [breakpoints.down("sm")]: {
      paddingTop: "20px",
      paddingBottom: "20px",
      width: "100%",
    },
  },
  gridWrapper: {
    [breakpoints.down("sm")]: {
      gap: spacing(4.9),
    },
  },
  btn: {
    paddingTop: "6px",
    paddingLeft: "8px",
    paddingBottom: "6px",
    paddingRight: "16px",
  },
}));
