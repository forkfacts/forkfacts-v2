import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material";

export const useStyles = makeStyles(
  ({ spacing, breakpoints, typography, palette, zIndex }: Theme) => ({
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
    desktopScreenWrapper: {
      [breakpoints.up("md")]: {
        width: spacing(153.125),
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: spacing(10),
        flexDirection: "column",
        justifyContent: "space-between",
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
    img: {
      [breakpoints.up("md")]: {
        width: "100%",
      },
    },
    showDesktop: {
      [breakpoints.up("md")]: {
        display: "block",
      },
      [breakpoints.down("md")]: {
        display: "none",
      },
    },
    showMobile: {
      [breakpoints.up("md")]: {
        display: "none",
      },
      [breakpoints.down("md")]: {
        display: "block",
      },
    },
    navbarStyles: {
      marginTop: spacing(20),
      marginBottom: spacing(5),
      marginLeft: "auto",
      marginRight: "auto",
      width: spacing(45.625),
    },
    searchInputStyles: {
      [breakpoints.up("md")]: {
        width: spacing(91.25),
        marginTop: spacing(4),
        marginBottom: spacing(5),
        marginLeft: "auto",
        marginRight: "auto",
        position: "relative",
        zIndex: zIndex.mobileStepper,
        height: "auto",
      },
      [breakpoints.down("md")]: {
        position: "relative",
      },
    },
    selectedSearchTitle: {
      [breakpoints.up("md")]: {
        textAlign: "center",
        fontWeight: typography.fontWeightBold,
        color: palette.common.black,
        marginTop: spacing(4),
      },
    },
    PopularFrequentStyles: {
      [breakpoints.up("md")]: {
        marginTop: spacing(13),
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      },
    },
  })
);
