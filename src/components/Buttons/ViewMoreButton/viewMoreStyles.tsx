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
      fontWeight: typography.fontWeightBold,
      fontSize: typography.caption.fontSize,
      textTransform: "capitalize",
    },
  },
  icon: {
    fontWeight: typography.fontWeightBold,
  },
}));
