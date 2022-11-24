import React from "react";
import { SearchOutlined } from "@mui/icons-material";
import { Box, TextField } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";

type sizeType = "medium" | "small";
interface SearchInputPropTypes {
  width?: string;
  borderRadius?: string;
  size?: sizeType;
}

const SearchInput: React.FC<SearchInputPropTypes> = ({
  width = "100%",
  borderRadius = "10px",
  size = "small",
}) => {
  return (
    <Box sx={{ width: width }}>
      <Box sx={{ position: "relative", width: "100%" }}>
        <TextField
          size={size}
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
