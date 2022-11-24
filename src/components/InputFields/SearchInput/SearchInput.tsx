import { SearchOutlined } from "@mui/icons-material";
import { Box, TextField } from "@mui/material";
import React, { PropsWithChildren } from "react";

interface SearchInputPropTypes {
  width: string;
}

const SearchInput: React.FC<SearchInputPropTypes> = ({ width }) => {
  return (
    <Box sx={{ width: width }}>
      <Box sx={{ position: "relative" }}>
        <SearchOutlined sx={{ position: "absolute" }} />
        <TextField placeholder="Search" sx={{ height: "0px" }} />
      </Box>
    </Box>
  );
};

export default SearchInput;
