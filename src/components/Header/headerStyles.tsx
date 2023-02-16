import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles(({ typography, spacing, breakpoints, palette }: Theme) => ({
  rightContent: {
    [breakpoints.down("sm")]: {
      right: spacing(1),
    },
    position: "absolute",
    right: spacing(1.5),
  },
  pageTitle: {
    lineHeight: spacing(5),
    fontWeight: typography.fontWeightRegular,
  },
}));
