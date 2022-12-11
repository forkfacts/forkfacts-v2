import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles(({ typography, spacing, breakpoints, palette }: Theme) => ({
  root: {
    width: "100%",
    flexGrow: 1,
    background: "red",
  },
  rightContent: {
    [breakpoints.down("sm")]: {
      display: "none",
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
    paddingTop: spacing(1),
    paddingLeft: spacing(2),
    paddingBottom: spacing(1),
    paddingRight: spacing(2),
    flex: "none",
    order: 1,
    flexGrow: 0,
  },
}));
