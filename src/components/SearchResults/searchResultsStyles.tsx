import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material";

export const useStyles = makeStyles(({ spacing, breakpoints, typography }: Theme) => ({
  root: {
    [breakpoints.down("md")]: {
      maxWidth: "100%",
      width: "100%",
      boxSizing: "border-box",
    },
  },
  ListItemText: {
    [breakpoints.down("md")]: {
      marginLeft: spacing(-2),
    },
  },
  categoryName: {
    [breakpoints.down("md")]: {
      fontSize: typography.caption.fontSize,
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
