import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material";

export const useStyles = makeStyles(({ spacing, breakpoints, typography }: Theme) => ({
  statusWrapper: {
    [breakpoints.down("md")]: {
      paddingTop: spacing(1.2),
      paddingLeft: spacing(2),
      paddingBottom: spacing(1.2),
      paddingRight: spacing(3.9),
      width: "100%",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
  },
  btn: {
    [breakpoints.down("md")]: {
      fontWeight: typography.fontWeightBold,
      fontSize: typography.caption.fontSize,
      lineHeight: spacing(2),
      textTransform: "capitalize",
      textAlign: "center",
      letterSpacing: spacing(0.005),
      cursor: "pointer",
    },
  },
}));
