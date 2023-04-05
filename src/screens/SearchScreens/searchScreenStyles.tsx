import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material";

export const useStyles = makeStyles(
  ({ spacing, breakpoints, typography, palette, zIndex }: Theme) => ({
    desktopScreenWrapper: {
      [breakpoints.up("md")]: {
        maxWidth: "100%",
        width: "90%",
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: spacing(6),
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        height: "100vh",
      },
      [breakpoints.down("md")]: {
        maxWidth: "100%",
        marginTop: spacing(7),
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
        height: spacing(27.93),
        margin: "auto",
      },
    },
    navbarStyles: {
      [breakpoints.up("md")]: {
        marginTop: spacing(5),
        marginBottom: spacing(5),
        marginLeft: "auto",
        marginRight: "auto",
        width: spacing(91.25),
      },
      [breakpoints.down("md")]: {
        width: "100%",
        marginTop: spacing(4),
      },
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
        width: "100%",
        marginTop: spacing(3),
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
        marginTop: spacing(20),
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        width: "85%",
        marginLeft: "auto",
        marginRight: "auto",
      },
      [breakpoints.down("md")]: {
        marginTop: spacing(4),
        marginBottom: spacing(4),
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
      },
    },
  })
);
