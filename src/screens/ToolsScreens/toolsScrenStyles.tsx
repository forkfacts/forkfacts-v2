import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material";

export const useStyles = makeStyles(
  ({ spacing, breakpoints, typography, palette, zIndex }: Theme) => ({
    desktopScreenWrapper: {
      [breakpoints.up("md")]: {
        maxWidth: "100%",
        marginTop: spacing(10),
        paddingLeft: "55px",
        paddingRight: "55px",
        overflow: "visible",
      },
      [breakpoints.down("sm")]: {
        maxWidth: "100%",
        marginTop: spacing(10),
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        overflow: "hidden",
      },
    },
  })
);
