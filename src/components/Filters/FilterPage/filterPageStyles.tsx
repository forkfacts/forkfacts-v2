import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material";

export const useStyles = makeStyles(({ spacing, breakpoints, palette, zIndex }: Theme) => ({
  root: {
    [breakpoints.down("md")]: {
      width: "100%",
      position: "fixed",
      height: "100%",
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      backgroundColor: palette.common.white,
      zIndex: zIndex.modal,
    },
  },
  headerStyles: {
    [breakpoints.down("md")]: {
      width: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    },
  },
  boxWrapper: {
    [breakpoints.down("md")]: {
      marginTop: spacing(5),
    },
  },
}));
