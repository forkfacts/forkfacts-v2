import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Box, TextField, AppBar } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import CloseIcon from "@mui/icons-material/Close";
import { useStyles } from "./RecentSearchHeaderStyles";

type pageStatusPropTypes = {
  showBorderBottom?: boolean;
  showClearInput?: boolean;
  handleCloseHeader: () => void;
  handleClearInput: () => void;
};

const SearchHeader: React.FC<pageStatusPropTypes> = ({
  showClearInput,
  showBorderBottom = true,
  handleCloseHeader,
  handleClearInput,
}) => {
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
                  <ArrowBackIcon
                    className={classes.icon}
                    color="primary"
                    onClick={handleCloseHeader}
                  />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  {showClearInput ? (
                    <CloseIcon
                      className={classes.icon}
                      color="primary"
                      onClick={handleClearInput}
                    />
                  ) : null}
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
