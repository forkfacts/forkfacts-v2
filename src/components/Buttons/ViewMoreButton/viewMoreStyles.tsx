import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material";

export const useStyles = makeStyles(({ spacing, breakpoints, typography }: Theme) => ({
  btnWrapper: {
    [breakpoints.down("md")]: {
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      paddingTop: spacing(1.2),
      paddingLeft: spacing(2),
      paddingBottom: spacing(1.2),
      paddingRight: spacing(3.9),
    },
  },
  btn: {
    [breakpoints.down("md")]: {
      fontWeight: typography.fontWeightMedium,
      fontSize: typography.caption.fontSize,
      textTransform: "capitalize",
      letterSpacing: spacing(0.0625),
    },
  },
  icon: {
    fontWeight: typography.fontWeightBold,
  },
}));
