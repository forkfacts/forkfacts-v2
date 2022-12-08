import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material";

const HeaderHeight = 55.4993;

export const useStyles = makeStyles(({ spacing, breakpoints, typography }: Theme) => ({
  root: {
    width: "100%",
    flexGrow: 1,
    minHeight: `calc(100vh - ${HeaderHeight}px)`,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  spaceBottom: {
    [breakpoints.down("md")]: {
      marginBottom: spacing(4),
    },
  },
  searchTitle: {
    fontSize: spacing(3),
    fontWeight: typography.fontWeightBold,
    display: "flex",
    alignItems: "center",
    textAlign: "center",
  },
}));
