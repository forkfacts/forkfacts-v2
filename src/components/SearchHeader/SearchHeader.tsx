import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Box, TextField, AppBar, Theme } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme: Theme) => ({
  underline: {
    "&&&:before": {
      borderBottom: "none",
    },
    "&&:after": {
      borderBottom: "none",
    },
  },
  searchNav: {
    boxShadow: "0px 1px 4px 0px #000000",
    boxSizing: "border-box",
    borderRadius: "4px",
  },
  icon: {
    fontWeight: theme.typography.fontWeightBold,
    color: theme.palette.customGreen?.main,
    width: "24px",
    height: "24px",
    cursor: "pointer",
  },
}));

const SearchHeader: React.FC = ({}) => {
  const classes = useStyles();

  return (
    <Box>
      <AppBar color="transparent" className={classes.searchNav}>
        <Box
          sx={{
            py: "15px",
            pr: "20px",
            pl: "11px",
          }}
        >
          <TextField
            id="filled-start-adornment"
            type="text"
            sx={{ width: "100%", borderBottom: "none" }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <ArrowBackIcon className={classes.icon} />
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
