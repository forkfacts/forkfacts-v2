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

interface SearchBaseScreenProps {
  setIsSearchEmpty: (a: boolean) => void;
  isSearchEmpty: boolean;
  isHome?: boolean;
}

const SearchBaseScreen: React.FC<SearchBaseScreenProps & PropsWithChildren> = ({
  children,
  isSearchEmpty = true,
  isHome = false,
  setIsSearchEmpty,
}) => {
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
      <Box>
        <CssBaseline />
        <Container
          sx={{
            boxShadow: isSearchEmpty && isHome ? "0px 1px 4px 0px #000000" : 0,
            boxSizing: "border-box",
            py: "20px",
            pl: "5px",
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
                    sx={{
                      color: "#356A1E",
                      width: "45px",
                      height: "45px",
                      py: "10px",
                      cursor: "pointer",
                    }}
                  />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  {isSearchEmpty || (
                    <CloseIcon
                      sx={{
                        color: "#356A1E",
                        width: "45px",
                        height: "45px",
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
      </Box>
      {/* childern */}

      <Box sx={{ position: "relative", width: "100%" }}>{children}</Box>
    </Box>
  );
};

export default SearchBaseScreen;
