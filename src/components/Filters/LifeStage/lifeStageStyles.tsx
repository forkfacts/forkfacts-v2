import { Theme } from "@mui/material";

export function withDropdown<T extends Theme>(theme: T) {
  return {
    position: "relative",
  };
}

export function withoutDropdown<T extends Theme, U extends boolean>(theme: T, mobile: U) {
  return {
    position: "absolute",
    display: "block",
    width: mobile ? theme.spacing(28.5) : theme.spacing(41),
    pt: theme.spacing(1),
    px: theme.spacing(1.75),
    pb: theme.spacing(3),
    zIndex: theme.zIndex.modal,
    backgroundColor: theme.palette.common.white,
    borderRadius: theme.spacing(1),
    mt: theme.spacing(2),
  };
}