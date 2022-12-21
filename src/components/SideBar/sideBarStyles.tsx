import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material";

export const useStyles = makeStyles(({ spacing, breakpoints, typography }: Theme) => ({
  hideShowDrawer: {
    [breakpoints.down("md")]: {
      display: "none",
    },
    [breakpoints.up("md")]: {
      display: "block",
    },
  },
}));
