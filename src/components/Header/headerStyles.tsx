import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles(({ spacing, breakpoints }: Theme) => ({
  root: {
    width: "100%",
    flexGrow: 1,
    background: "red",
  },
  rightContent: {
    [breakpoints.down("sm")]: {
      display: "none",
    },
    position: "absolute",
    right: spacing(1.5),
  },
}));
