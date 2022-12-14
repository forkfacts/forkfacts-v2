import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material";

export const useStyles = makeStyles(({ breakpoints, spacing, typography }: Theme) => ({
  noBorder: {
    border: "none",
  },
  statusWrapper: {
    [breakpoints.down("sm")]: {
      paddingTop: spacing(1.2),
      paddingLeft: spacing(2),
      paddingBottom: spacing(1.2),
      paddingRight: spacing(3.9),
    },
  },
  clearBtn: {
    [breakpoints.down("sm")]: {
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
