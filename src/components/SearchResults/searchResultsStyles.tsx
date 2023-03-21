import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material";

export const useStyles = makeStyles(({ spacing, breakpoints, typography, palette }: Theme) => ({
  root: {
    maxWidth: "100%",
    width: "100%",
    boxSizing: "border-box",
  },
  ListItemText: {
    marginLeft: spacing(-2),
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
    columnGap: spacing(1),
    wordBreak: "break-all",
  },
}));
