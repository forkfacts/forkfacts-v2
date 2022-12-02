import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Box, TextField, AppBar, Theme } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import { makeStyles } from "@mui/styles";
import CloseIcon from "@mui/icons-material/Close";

type pageStatusPropTypes = {
  showBorderBottom?: boolean;
  openCloseBtn?: boolean;
};

const useStyles = makeStyles(({ typography, spacing, breakpoints }: Theme) => ({
  underline: {
    [breakpoints.down("md")]: {
      "&&&:before": {
        borderBottom: "none",
      },
      "&&:after": {
        borderBottom: "none",
      },
    },
  },
  icon: {
    [breakpoints.down("sm")]: {
      fontWeight: typography.fontWeightBold,
      width: spacing(3),
      height: spacing(3),
      cursor: "pointer",
    },
  },
}));

const SearchHeader: React.FC<pageStatusPropTypes> = ({ openCloseBtn, showBorderBottom = true }) => {
  const classes = useStyles();

  return (
    <Box>
      <AppBar
        sx={{
          boxShadow: showBorderBottom ? 1 : 0,
          zIndex: ({ zIndex }) => zIndex.appBar,
          bgcolor: "background.paper",
          py: { xs: "15px" },
          pr: { xs: "20px" },
          pl: { xs: "11px" },
        }}
      >
        <Box>
          <TextField
            id="filled-start-adornment"
            type="text"
            sx={{ width: "100%", borderBottom: "none" }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <ArrowBackIcon className={classes.icon} color="success" />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  {openCloseBtn ? <CloseIcon className={classes.icon} color="success" /> : null}
                </InputAdornment>
              ),
              classes,
            }}
            placeholder="Search for food product"
            variant="standard"
          />
        </Box>
      </AppBar>
    </Box>
  );
};

export default SearchHeader;
