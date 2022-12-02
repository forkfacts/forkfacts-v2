import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material";

export const useStyles = makeStyles(({ typography, palette, spacing, breakpoints }: Theme) => ({
  root: {
    [breakpoints.down("sm")]: {
      width: "100%",
      paddingTop: spacing(1.2),
      paddingLeft: spacing(2),
      paddingBottom: spacing(1.2),
      paddingRight: spacing(3.9),
    },
    [breakpoints.up("sm")]: {
      width: spacing(44.5),
      margin: "auto",
    },
  },
  btn: {
    fontWeight: typography.fontWeightBold,
    lineHeight: "20px",
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
