import React, { PropsWithChildren, useState } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Box, TextField, Container } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
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
  const [isSearchEmpty, setIsSearchEmpty] = useState<boolean>(true);
  const [searchValue, setSearchValue] = useState<string>("");
  const classes = useStyles();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.currentTarget.value.length > 0) {
      setIsSearchEmpty(false);
    } else setIsSearchEmpty(true);
    setSearchValue(e.currentTarget.value);
  };

  const onCloseSearch = () => {
    setIsSearchEmpty(!isSearchEmpty);
    setSearchValue("");
  };

  return (
    <Box>
      <CssBaseline />
      <Container
        sx={{
          boxShadow: isSearchEmpty ? "0px 1px 4px 0px #000000" : 0,
          boxSizing: "border-box",
          pt: "15px",
          pb: "15px",
          pl: "11px",
          pr: "20px",
        }}
      >
        <TextField
          id="filled-start-adornment"
          type="text"
          sx={{ width: "100%", borderBottom: "none" }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <ArrowBackIcon
                  sx={{ color: "#356A1E", width: "50px", height: "50px", py: "10px" }}
                />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end">
                {isSearchEmpty || (
                  <CloseIcon
                    sx={{
                      color: "#356A1E",
                      width: "50px",
                      height: "50px",
                      py: "10px",
                      cursor: "pointer",
                    }}
                    onClick={() => onCloseSearch()}
                  />
                )}
              </InputAdornment>
            ),
            classes,
          }}
          value={searchValue}
          onChange={handleChange}
          placeholder="Search for food product"
          variant="standard"
        />
      </Container>
      {/* childern */}
      <Box>{children}</Box>
    </Box>
  );
};

export default SearchBaseScreen;
