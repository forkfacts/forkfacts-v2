import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Box, TextField, AppBar } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import CloseIcon from "@mui/icons-material/Close";
import { RecentSearchHeaderProps } from "@forkfacts/models";
import { useStyles } from "./RecentSearchHeaderStyles";

interface hey {
  getInputProps: any;
  inputRef: any;
}

const RecentSearchHeader: React.FC<RecentSearchHeaderProps & hey> = ({
  showBorderBottom = false,
  onClosePage,
  onClearSearch,
  getInputProps,
  inputRef,
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
            ref={inputRef}
            sx={{ width: "100%", borderBottom: "none" }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <ArrowBackIcon className={classes.icon} color="primary" onClick={onClosePage} />
                </InputAdornment>
              ),
              classes,
            }}
            {...getInputProps.getInputProps({ inputElement: inputRef.current })}
            variant="standard"
          />
        </Box>
      </AppBar>
    </Box>
  );
};

export default RecentSearchHeader;
