import { makeStyles } from "@mui/styles";
import { Theme, useTheme } from "@mui/material";

export const useStyles = makeStyles(({ typography, palette, spacing, breakpoints }: Theme) => ({
  root: {
    [breakpoints.down("sm")]: {
      width: "100%",
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
