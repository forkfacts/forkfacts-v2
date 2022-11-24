import React from "react";
import { SearchOutlined } from "@mui/icons-material";
import { Box, TextField } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";

interface SearchInputPropTypes {
  width: string;
  borderRadius?: string;
}

const SearchInput: React.FC<SearchInputPropTypes> = ({ width, borderRadius = "10px" }) => {
  return (
    <Box sx={{ width: width }}>
      <Box sx={{ position: "relative", width: "100%" }} style={{ borderRadius: "10px" }}>
        <TextField
          size="small"
          placeholder="Search"
          fullWidth
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchOutlined />
              </InputAdornment>
            ),
          }}
          sx={{
            "& label": { paddingLeft: (theme) => theme.spacing(2) },
            "& input": { paddingLeft: (theme) => theme.spacing(3.5) },
            "& fieldset": {
              paddingLeft: (theme) => theme.spacing(2.5),
              borderRadius: borderRadius,
            },
          }}
        />
      </Box>
    </Box>
  );
};

export default SearchInput;
