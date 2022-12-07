import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material";

const headerHeight = 55.4993;

export const useStyles = makeStyles(({ spacing, breakpoints }: Theme) => ({
  root: {
    width: "100%",
    flexGrow: 1,
    minHeight: `calc(100vh - ${headerHeight}px)`,
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
    fontWeight: 600,
    display: "flex",
    alignItems: "center",
    textAlign: "center",
  },
}));
