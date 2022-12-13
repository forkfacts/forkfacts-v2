import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material";

export const useStyles = makeStyles(({ palette }: Theme) => ({
  root: {
    backgroundColor: palette.background.default,
  },
  main: {
    backgroundColor: palette.background.default,
  },
}));
