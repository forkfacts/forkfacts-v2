import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material";

export const useStyles = makeStyles(({ spacing, breakpoints, palette, zIndex }: Theme) => ({
  root: {
    [breakpoints.down("md")]: {
      width: "100%",
      position: "fixed",
      display: (prop: { openMobilePage: boolean }) => {
        if (prop.openMobilePage) {
          return "block";
        }
        return "none";
      },
      height: "100",
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      padding: spacing(2.5),
      backgroundColor: palette.common.white,
      zIndex: zIndex.modal,
      overflow: "scroll",
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
  footerStyles: {
    [breakpoints.down("md")]: {
      position: "fixed",
      height: spacing(12.5),
      width: "100%",
      right: 0,
      bottom: 0,
      left: 0,
    },
  },
}));
