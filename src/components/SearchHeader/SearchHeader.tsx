import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Box, TextField, AppBar, Theme, CssBaseline } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(({ typography, spacing }: Theme) => ({
  underline: {
    "&&&:before": {
      borderBottom: "none",
    },
    "&&:after": {
      borderBottom: "none",
    },
  },
  searchNav: {
    boxSizing: "border-box",
    border: "none !importannt",
  },
  icon: {
    fontWeight: typography.fontWeightBold,
    width: spacing(4),
    height: "24px",
    cursor: "pointer",
  },
}));

const SearchHeader: React.FC = ({}) => {
  const classes = useStyles();

  return (
    <Box>
      <CssBaseline />
      <AppBar
        sx={{ boxShadow: 2, width: "100% !important" }}
        color="transparent"
        className={classes.underline}
      >
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
