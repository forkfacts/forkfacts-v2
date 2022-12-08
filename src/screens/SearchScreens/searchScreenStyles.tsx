import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material";

export const useStyles = makeStyles(({ spacing, breakpoints, typography, palette }: Theme) => ({
  root: {
    [breakpoints.down("md")]: {
      width: "100%",
      flexGrow: 1,
      minHeight: (minHeight) => {
        if (minHeight) {
          return `calc(100vh - ${minHeight}px)`;
        }
      },
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
  },
  spaceBottom: {
    [breakpoints.down("md")]: {
      marginBottom: spacing(4),
    },
  },
  searchTitle: {
    [breakpoints.down("md")]: {
      fontWeight: typography.fontWeightBold,
      display: "flex",
      alignItems: "center",
      textAlign: "center",
      color: palette.common.black,
    },
  },
}));
