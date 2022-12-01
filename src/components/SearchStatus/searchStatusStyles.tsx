import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material";

export const useStyles = makeStyles(({ spacing, breakpoints, typography }: Theme) => ({
  root: {},
  statusWrapper: {
    [breakpoints.down("sm")]: {
      marginTop: spacing(1),
      marginBottom: spacing(3),
      width: "100%",
      display: "flex",
      justifyContent: "space-between",
    },
  },
  btn: {
    [breakpoints.down("sm")]: {
      fontWeight: typography.fontWeightBold,
      fontSize: spacing(1.2),
      lineHeight: spacing(2),
      textTransform: "capitalize",
      textaAign: "center",
      letterSpacing: spacing(0.005),
      cursor: "pointer",
    },
  },
}));
