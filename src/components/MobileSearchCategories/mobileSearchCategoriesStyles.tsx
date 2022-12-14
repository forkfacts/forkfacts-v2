import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material";

export const useStyles = makeStyles(({ typography, palette, spacing, breakpoints }: Theme) => ({
  root: {
    [breakpoints.down("md")]: {
      width: "100%",
      paddingTop: spacing(1.2),
      paddingLeft: spacing(2),
      paddingBottom: spacing(1.2),
      paddingRight: spacing(3.9),
    },
  },
  btn: {
    fontWeight: typography.fontWeightBold,
    lineHeight: spacing(2.5),
    "&:hover": {
      color: palette.primary.main,
    },
  },
  icon: {
    "&:hover": {
      color: palette.primary.main,
    },
  },
}));
