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
  authBtn: {
    borderRadius: spacing(12.5),
    color: palette.common.white,
    width: spacing(14),
    height: spacing(6),
    paddingTop: spacing(1.25),
    paddingBottom: spacing(1.25),
    paddingLeft: spacing(3),
    paddingRight: spacing(3),
    textTransform: "capitalize",
  },
}));
