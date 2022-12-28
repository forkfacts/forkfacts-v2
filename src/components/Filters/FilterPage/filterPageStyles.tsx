import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material";

export const useStyles = makeStyles(({ spacing, breakpoints, typography }: Theme) => ({
  root: {
    padding: 0,
    boxSizing: "border-box",
  },
  headerStyles: {
    [breakpoints.down("md")]: {
      width: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    },
  },
  boxWrapper: {
    [breakpoints.down("md")]: {
      marginTop: spacing(5),
    },
  },
}));
