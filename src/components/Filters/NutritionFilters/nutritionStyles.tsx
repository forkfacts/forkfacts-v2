import { Theme } from "@mui/material";

export function withoutDropdown<T extends Theme>(theme: T) {
  return {
    position: "relative",
  };
}

export function withDropdown<
  T extends Theme,
  W extends { mobile: boolean; margin: string | number }
>(theme: T, prop: W) {
  return {
    position: "absolute",
    width: 320,
    mt: theme.spacing(1.1),
    py: theme.spacing(2),
    px: theme.spacing(1),
    zIndex: theme.zIndex.modal,
    backgroundColor: theme.palette.common.white,
    display: "flex",
    flexDirection: "column",
    height: "auto",
    borderRadius: theme.spacing(1),
  };
}
