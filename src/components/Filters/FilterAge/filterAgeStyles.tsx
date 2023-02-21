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
    display: "block",
    width: 270,
    py: theme.spacing(2),
    px: theme.spacing(1),
    zIndex: theme.zIndex.modal,
    backgroundColor: theme.palette.common.white,
    borderRadius: theme.spacing(1),
    ml: prop.mobile ? theme.spacing(-15.5) : prop.margin,
  };
}
