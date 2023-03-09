import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material";

export const useStyles = makeStyles(({ typography, palette, spacing, breakpoints }: Theme) => ({
  root: {
    width: "100%",
  },
  icon: {
    "&:hover": {
      color: palette.primary.main,
    },
  },
}));
