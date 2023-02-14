import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material";

export const useStyles = makeStyles(
  ({ spacing, breakpoints, typography, palette, zIndex }: Theme) => ({
    desktopScreenWrapper: {
      [breakpoints.up("md")]: {
        width: spacing(141),
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: spacing(10),
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
      },
      [breakpoints.down("md")]: {
        maxWidth: "100%",
        marginTop: spacing(7),
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
      },
    },
  })
);
