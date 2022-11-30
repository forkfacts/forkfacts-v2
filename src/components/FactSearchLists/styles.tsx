import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material";

export const useStyles = makeStyles(({ spacing, breakpoints, typography }: Theme) => ({
  root: {
    [breakpoints.down("sm")]: {
      maxWidth: "100%",
      width: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      padding: 0,
    },
  },
  groupTitle: {
    [breakpoints.down("sm")]: {
      fontSize: spacing(1.4),
      padding: spacing(1.2, 2),
    },
  },
  listItem: {
    [breakpoints.down("sm")]: {
      width: "100%",
      padding: spacing(2.25, 2),
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      height: spacing(7.5),
      flex: "none",
      order: 1,
      flexGrow: 0,
    },
  },
  listWrapper: {
    [breakpoints.down("sm")]: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      padding: 0,
      gap: spacing(1.25),
      height: spacing(3),
    },
  },
  ListItemText: {
    [breakpoints.down("sm")]: {
      marginLeft: spacing(1),
      lineHeight: spacing(3),
      fontSize: spacing(2),
      flex: "none",
      order: 1,
      flexGrow: 0,
    },
  },
  imgStyles: {
    [breakpoints.down("sm")]: {
      flex: "none",
      order: 0,
      flexGrow: 0,
    },
  },
  btnWrapper: {
    [breakpoints.down("sm")]: {
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
    [breakpoints.down("sm")]: {
      fontWeight: typography.fontWeightBold,
      fontSize: spacing(1.4),
      textTransform: "capitalize",
    },
  },
  icon: {
    fontWeight: typography.fontWeightBold,
  },
}));
