import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material";

export const useStyles = makeStyles(({ spacing, breakpoints, typography }: Theme) => ({
  root: {
    [breakpoints.down("md")]: {
      maxWidth: "100%",
      width: "100%",
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
  listWrapper: {
    [breakpoints.down("md")]: {
      marginTop: spacing(-1),
      "&:first-child": {
        marginTop: 0,
      },
    },
  },
}));
