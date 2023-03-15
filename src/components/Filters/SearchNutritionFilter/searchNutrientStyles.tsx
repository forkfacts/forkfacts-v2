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
    width: prop.mobile ? theme.spacing(36.75) : theme.spacing(58),
    pt: theme.spacing(1),
    px: theme.spacing(1.75),
    pb: theme.spacing(3),
    zIndex: theme.zIndex.modal,
    backgroundColor: theme.palette.common.white,
    borderRadius: theme.spacing(1),
    ml: prop.mobile ? theme.spacing(-25.5) : prop.margin,
    mt: theme.spacing(2),
  };
}
