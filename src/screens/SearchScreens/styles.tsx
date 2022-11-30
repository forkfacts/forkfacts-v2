import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material";

export const useStyles = makeStyles(({ spacing, breakpoints }: Theme) => ({
  root: {
    width: "100%",
    flexGrow: 1,
    minHeight: "92vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  spaceBottom: {
    [breakpoints.down("md")]: {
      marginBottom: spacing(4),
    },
  },
  searchtitle: {
    fontSize: spacing(3),
    fontWeight: 600,
    display: "flex",
    alignItems: "center",
    textAlign: "center",
  },
}));
