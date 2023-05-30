import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material";

export const useStyles = makeStyles(({ typography, palette, spacing, breakpoints }: Theme) => ({
  root: {
    width: "100%",
  },
  btn: {
    fontWeight: typography.fontWeightBold,
    lineHeight: spacing(2.5),
  },
  icon: {
    "&:hover": {
      color: palette.primary.main,
    },
  },
}));
