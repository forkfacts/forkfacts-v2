import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material";

export function withDropdown<T extends Theme>(theme: T) {
  return {
    position: "relative",
  };
}

export function withoutDropdown<T extends Theme>(theme: T) {
  return {
    position: "absolute",
    display: "block",
    width: 300,
    mt: theme.spacing(1.1),
    py: theme.spacing(2),
    px: theme.spacing(1),
    zIndex: theme.zIndex.modal,
    backgroundColor: theme.palette.common.white,
    borderRadius: theme.spacing(1),
  };
}
