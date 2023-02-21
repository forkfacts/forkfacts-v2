import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material";

export const useStyles = makeStyles(({ breakpoints, spacing, palette, zIndex }: Theme) => ({
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
      minHeight: "100vh",
      overflowY: "auto",
    },
  },
  icon: {
    cursor: "pointer",
  },
}));

export function mobileInputStyles<T extends Theme, W>(theme: T, isOpen: W) {
  return {
    "& fieldset": {
      borderRadius: theme.spacing(1),
      width: "100%",
      boxShadow: "0px 1px 4px rgba(0, 0, 0, 0.25)",
      border: isOpen
        ? `2px solid ${theme.palette.primary.main}`
        : `1.5px solid ${theme.palette.customGray.light}`,
    },
  };
}

export function inputStyles<T extends Theme, W>(theme: T, isOpen: W) {
  return {
    "& fieldset": {
      border: isOpen && `2px solid ${theme.palette.primary.main}`,
      borderRadius: theme.spacing(1),
    },
  };
}

export function desktopInputStyles<T extends Theme, W>(theme: T, isOpen: W) {
  return {
    "& fieldset": {
      border: "none",
    },
    borderRadius: isOpen ? `${theme.spacing(1)} ${theme.spacing(1)} 0px 0px` : theme.spacing(1),
    py: theme.spacing(1.2),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(3.9),
    border: isOpen
      ? `2px solid ${theme.palette.primary.main}`
      : `1.5px solid ${theme.palette.customGray.light}`,
    boxShadow: "0px 1px 4px rgba(0, 0, 0, 0.25)",
  };
}
