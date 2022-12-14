import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Box, TextField, AppBar } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import CloseIcon from "@mui/icons-material/Close";
import { RecentSearchHeaderProps } from "@forkfacts/models";
import { useStyles } from "./RecentSearchHeaderStyles";

const RecentSearchHeader: React.FC<RecentSearchHeaderProps> = ({
  showClearSearch,
  showBorderBottom = false,
  onClosePage,
  onClearSearch,
}) => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <AppBar
        sx={{
          boxShadow: showBorderBottom ? 1 : 0,
          zIndex: ({ zIndex }) => zIndex.appBar,
          bgcolor: "background.paper",
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
                  <ArrowBackIcon className={classes.icon} color="primary" onClick={onClosePage} />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  {showClearSearch ? (
                    <CloseIcon className={classes.icon} color="primary" onClick={onClearSearch} />
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

export default RecentSearchHeader;
