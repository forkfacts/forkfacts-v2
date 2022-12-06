import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material";

export const useStyles = makeStyles(({ typography, spacing, breakpoints, palette }: Theme) => ({
  root: {
    [breakpoints.down("md")]: {
      display: "flex",
      flexdDirection: "column",
      alignItems: "center",
      paddingTop: spacing(1.9),
      paddingLeft: spacing(3.5),
      paddingBottom: spacing(1.9),
      paddingRight: spacing(3.5),
    },
  },
  underline: {
    [breakpoints.down("md")]: {
      "&&&:before": {
        borderBottom: "none",
      },
      "&&:after": {
        borderBottom: "none",
      },
      fontSize: spacing(1.75),
      lineHeight: spacing(2.5),
      letterSpacing: spacing(0.025),
      color: palette.grey[700],
      fontWeight: typography.fontWeightRegular,
    },
  },
  icon: {
    [breakpoints.down("sm")]: {
      fontWeight: typography.fontWeightBold,
      width: spacing(3),
      height: spacing(3),
      cursor: "pointer",
    },
  },
}));
