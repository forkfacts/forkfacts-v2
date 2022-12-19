import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material";

export const useStyles = makeStyles(
  ({ breakpoints, spacing, typography, palette, zIndex }: Theme) => ({
    root: {
      [breakpoints.up("md")]: {
        width: "100%",
        py: spacing(3),
        px: spacing(1.375),
        borderRadius: (props: { isOpen: boolean }) => {
          return props.isOpen ? spacing(1.25) : spacing(0);
        },
        position: "absolute",
        backgroundColor: palette.common.white,
      },
    },
    rootOpen: {
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
    statusWrapper: {
      [breakpoints.down("md")]: {
        paddingTop: spacing(1.2),
        paddingLeft: spacing(2),
        paddingBottom: spacing(1.2),
        paddingRight: spacing(3.9),
      },
    },
    clearBtn: {
      [breakpoints.down("sm")]: {
        fontWeight: typography.fontWeightBold,
        fontSize: typography.caption.fontSize,
        lineHeight: spacing(2),
        textTransform: "capitalize",
        textAlign: "center",
        letterSpacing: spacing(0.005),
        cursor: "pointer",
      },
    },
    icon: {
      cursor: "pointer",
    },
  })
);

export function mobileInputStyles<T, U>(spacing: (type: number) => T, isOpen: U) {
  return {
    "& fieldset": {
      borderRadius: spacing(1.25),
      width: "100%",
      borderColor: "grey[100] !important",
      "&:hover": {
        borderColor: "grey[100] !important",
        outlineColor: "grey[100] !important",
      },
    },
    "&:focus fieldset": {
      borderColor: "grey[100] !important",
      width: "100%",
    },
  };
}

export function inputStyles<T>(spacing: (type: number) => T) {
  return {
    "& fieldset": {
      border: "none",
      borderRadius: spacing(0),
    },
  };
}

export function desktopInputStyles<T, U, V>(spacing: (type: number) => T, shadows: U[], isOpen: V) {
  return {
    "& fieldset": {
      border: "none",
    },
    borderRadius: spacing(1.25),
    boxShadow: isOpen ? shadows[0] : shadows[2],
    py: spacing(1.2),
    paddingLeft: spacing(2),
    paddingRight: spacing(3.9),
  };
}
