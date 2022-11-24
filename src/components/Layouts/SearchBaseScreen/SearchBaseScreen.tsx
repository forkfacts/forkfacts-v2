import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Box, TextField } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import React from "react";

const SearchBaseScreen: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <Box>
      {/* header */}
      <Box sx={{ width: "100%" }}>
        <TextField
          id="filled-start-adornment"
          sx={{ py: 2, width: "100%", borderBottom: "none" }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <ArrowBackIcon />
              </InputAdornment>
            ),
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
