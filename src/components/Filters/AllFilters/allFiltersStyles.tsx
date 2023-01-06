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
      padding: spacing(2.5),
    },
  },
  boxWrapper: {
    [breakpoints.down("md")]: {
      marginTop: spacing(0.5),
      position: "relative",
      paddingLeft: spacing(2.5),
      paddingRight: spacing(2.5),
      paddingBottom: spacing(4.5),
      paddingTop: spacing(4.5),
    },
  },
  borderLine: {
    [breakpoints.down("md")]: {
      borderBottom: `${spacing(0.125)} solid ${palette.grey[200]}`,
    },
  },
  footerStyles: {
    [breakpoints.down("md")]: {
      backgroundColor: palette.common.white,
      display: "flex",
      alignItems: "center",
      position: "fixed",
      width: "100%",
      height: spacing(10.5),
      right: 0,
      bottom: 0,
      left: 0,
      marginTop: spacing(25),
    },
  },
}));
