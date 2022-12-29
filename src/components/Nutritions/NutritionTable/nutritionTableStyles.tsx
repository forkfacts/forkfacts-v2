import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material";

export const useStyles = makeStyles(({ spacing, breakpoints, typography }: Theme) => ({
  tableTitle: {
    [breakpoints.down("md")]: {
      fontSize: typography.htmlFontSize,
      fontWeight: typography.fontWeightBold,
      lineHeight: spacing(3),
    },
  },
}));
