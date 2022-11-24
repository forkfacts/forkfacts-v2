import React from "react";
import { SearchOutlined } from "@mui/icons-material";
import { Box, TextField } from "@mui/material";

interface SearchInputPropTypes {
  width: string;
}

const SearchInput: React.FC<SearchInputPropTypes> = ({ width }) => {
  return (
    <Box sx={{ width: width }}>
      <Box sx={{ position: "relative", width: "100%" }}>
        <SearchOutlined sx={{ position: "absolute" }} />
        <TextField placeholder="Search" sx={{ height: "0px", width: "100%" }} />
      </Box>
    </Box>
  );
};

export default SearchInput;
