import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material";

export const useStyles = makeStyles(({ typography, spacing, breakpoints, palette }: Theme) => ({
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
