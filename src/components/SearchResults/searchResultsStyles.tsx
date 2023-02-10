import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material";

export const useStyles = makeStyles(({ spacing, breakpoints, typography }: Theme) => ({
  root: {
    maxWidth: "100%",
    width: "100%",
    boxSizing: "border-box",
  },
  ListItemText: {
    marginLeft: spacing(-2),
  },
  categoryName: {
    fontSize: typography.caption.fontSize,
    padding: spacing(1.2, 2),
  },
  listWrapper: {
    marginTop: spacing(-1),
    "&:first-child": {
      marginTop: 0,
    },
  },
}));
