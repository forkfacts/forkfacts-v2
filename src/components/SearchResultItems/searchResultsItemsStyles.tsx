import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material";

export const useStyles = makeStyles(({ spacing, breakpoints, typography }: Theme) => ({
  root: {
    [breakpoints.down("md")]: {
      maxWidth: "100%",
      width: "100%",
      padding: 0,
    },
  },
  ListItemText: {
    [breakpoints.down("md")]: {
      marginLeft: spacing(-2),
      lineHeight: spacing(3),
      fontSize: spacing(2),
    },
  },
  groupTitle: {
    [breakpoints.down("md")]: {
      fontSize: spacing(1.4),
      padding: spacing(1.2, 2),
    },
  },
  groupWrapper: {
    [breakpoints.down("md")]: {
      marginTop: spacing(-1),
      "&:first-child": {
        marginTop: 0,
      },
    },
  },
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
    "@media (max-width:320px)": {
      fontSize: "10px",
    },
  },
  btn: {
    [breakpoints.down("md")]: {
      fontWeight: typography.fontWeightBold,
      fontSize: spacing(1.4),
      textTransform: "capitalize",
    },
  },
  icon: {
    fontWeight: typography.fontWeightBold,
  },
}));
