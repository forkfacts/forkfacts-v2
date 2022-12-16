import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Box, TextField, AppBar } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import { RecentSearchHeaderProps } from "@forkfacts/models";
import { useStyles } from "./RecentSearchHeaderStyles";

const RecentSearchHeader: React.FC<RecentSearchHeaderProps> = ({
  showBorderBottom = false,
  onClosePage,
  formRef,
  inputRef,
  autocomplete,
}) => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Box
        sx={{
          boxShadow: showBorderBottom ? 1 : 0,
          zIndex: ({ zIndex }) => zIndex.appBar,
          bgcolor: "background.paper",
        }}
      >
        <Box
          component="form"
          ref={formRef}
          {...autocomplete.getFormProps({ inputElement: inputRef.current })}
        >
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
            {...autocomplete.getInputProps({ inputElement: inputRef.current })}
            variant="standard"
          />
        </Box>
      </Box>
    </Box>
  );
};

export default RecentSearchHeader;
