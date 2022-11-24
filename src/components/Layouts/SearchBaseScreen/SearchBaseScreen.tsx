import React, { PropsWithChildren } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Box, TextField } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import CloseIcon from "@mui/icons-material/Close";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  underline: {
    "&&&:before": {
      borderBottom: "none",
    },
    "&&:after": {
      borderBottom: "none",
    },
  },
});

const SearchBaseScreen: React.FC<PropsWithChildren> = ({ children }) => {
  const classes = useStyles();

  return (
    <Box>
      <Box sx={{ width: "100%" }}>
        <TextField
          id="filled-start-adornment"
          sx={{ width: "100%", borderBottom: "none" }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <ArrowBackIcon sx={{ width: "14px", height: "14px", color: "#356A1E" }} />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end">
                <CloseIcon sx={{ width: "14px", height: "14px", color: "#356A1E" }} />
              </InputAdornment>
            ),
            classes,
          }}
          placeholder="Search for food product"
          variant="standard"
        />
      </Box>
      {/* childern */}
      <Box>{children}</Box>
    </Box>
  );
};

export default SearchBaseScreen;
