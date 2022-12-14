import React from "react";
import { Box, TextField } from "@mui/material";
import { SearchOutlined } from "@mui/icons-material";
import InputAdornment from "@mui/material/InputAdornment";

interface SearchInputFieldProps {}

export default function SearchInputField({}: SearchInputFieldProps) {
  return (
    <Box sx={{ width: "100%" }}>
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
          "& fieldset": {
            paddingLeft: (theme) => theme.spacing(2.5),
            borderRadius: (theme) => theme.spacing(1.25),
            width: "100%",
            borderColor: "grey[100] !important",
            "&:hover": {
              borderColor: "grey[100] !important",
              outlineColor: "grey[100] !important",
            },
          },
          "&:focus fieldset": {
            borderColor: "grey[100] !important",
          },
        }}
      />
    </Box>
  );
}
