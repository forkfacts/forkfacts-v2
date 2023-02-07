import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material";

export const useStyles = makeStyles(({ breakpoints, spacing, palette, zIndex }: Theme) => ({
  root: {
    borderRadius: (props: { isOpen: boolean }) => {
      return props.isOpen ? "hidden" : "auto";
    },
  },
  closedSearchContainer: {
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
  openedSearchContainer: {
    [breakpoints.down("md")]: {
      width: "100%",
      position: "fixed",
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      backgroundColor: palette.common.white,
      zIndex: zIndex.modal,
    },
  },
  icon: {
    cursor: "pointer",
  },
}));

export function mobileInputStyles<T, U, V extends { main: string }, W extends { light: string }>(
  spacing: (type: number) => T,
  isOpen: U,
  primary: V,
  customGray: W
) {
  return {
    "& fieldset": {
      borderRadius: spacing(1),
      width: "100%",
      boxShadow: "0px 1px 4px rgba(0, 0, 0, 0.25)",
      border: isOpen ? `2px solid ${primary.main}` : `1.5px solid ${customGray.light}`,
    },
  };
}

export function inputStyles<T, W extends { main: string }, X>(
  isOpen: T,
  primary: W,
  spacing: (type: number) => X
) {
  return {
    "& fieldset": {
      border: isOpen && `2px solid ${primary.main}`,
      borderRadius: spacing(1),
    },
  };
}

export function desktopInputStyles<
  T,
  U,
  V,
  W extends { main: string },
  X extends { light: string }
>(spacing: (type: number) => T, shadows: U[], isOpen: V, primary: W, customGray: X) {
  return {
    "& fieldset": {
      border: "none",
    },
    borderRadius: isOpen ? `${spacing(1)} ${spacing(1)} 0px 0px` : spacing(1),
    py: spacing(1.2),
    paddingLeft: spacing(2),
    paddingRight: spacing(3.9),
    border: isOpen ? `2px solid ${primary.main}` : `1.5px solid ${customGray.light}`,
    boxShadow: "0px 1px 4px rgba(0, 0, 0, 0.25)",
  };
}
