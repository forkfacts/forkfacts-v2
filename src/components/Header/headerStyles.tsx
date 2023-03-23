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
  authBtn: {
    borderRadius: spacing(1),
    color: palette.common.white,
    width: spacing(14),
    height: spacing(6),
    paddingTop: spacing(1.25),
    paddingBottom: spacing(1.25),
    paddingLeft: spacing(3),
    paddingRight: spacing(3),
    textTransform: "capitalize",
    [breakpoints.up("md")]: {
      fontSize: typography.labelLarge.fontSize,
    },
    [breakpoints.down("md")]: {
      fontSize: typography.labelMedium.fontSize,
      paddingTop: spacing(1),
      width: spacing(12),
      height: spacing(5),
      paddingBottom: spacing(1),
      paddingLeft: spacing(2),
      paddingRight: spacing(2),
    },
  },
}));
