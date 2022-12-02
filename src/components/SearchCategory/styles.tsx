import { makeStyles } from "@mui/styles";
import { Theme, useTheme } from "@mui/material";
import { catergoryItemTypes } from "models/components";

export const useStyles = makeStyles(({ typography, palette, spacing, breakpoints }: Theme) => ({
  root: {
    [breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  btn: {
    fontWeight: typography.fontWeightBold,
    lineHeight: "20px",
  },
  icon: {
    "&:hover": {
      color: palette.primary.main,
    },
  },
}));
