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
    borderColor: palette.grey[500],
    lineHeight: "20px",
    // "&:hover": {
    //   color: palette.primary.main,
    // },
  },
  icon: {
    "&:hover": {
      color: palette.primary.main,
    },
  },
}));
