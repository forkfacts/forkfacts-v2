import React, { PropsWithChildren, useState } from "react";
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
  const [isSearchEmpty, setIsSearchEmpty] = useState<boolean>(true);
  const [searchValue, setSearchValue] = useState<string>("");
  const classes = useStyles();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.currentTarget.value.length > 0) {
      setIsSearchEmpty(false);
      setSearchValue(e.currentTarget.value);
    } else setIsSearchEmpty(true);
  };

  const onCloseSearch = () => {
    setIsSearchEmpty(!isSearchEmpty);
    setSearchValue("");
  };

  return (
    <div>
      <Box
        sx={{
          boxShadow: isSearchEmpty ? "0px 1px 4px 0px #000000" : 0,
          boxSizing: "border-box",
          pt: "15px",
          pb: "15px",
          pl: "11px",
          pr: "20px",
        }}
        style={{ width: "100%" }}
      >
        <TextField
          id="filled-start-adornment"
          type="text"
          sx={{ width: "100%", borderBottom: "none" }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <ArrowBackIcon sx={{ color: "#356A1E", fontSize: "30px", py: "10px" }} />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end">
                {isSearchEmpty || (
                  <CloseIcon
                    sx={{ color: "#356A1E", fontSize: "30px", py: "10px" }}
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
      </Box>
      {/* childern */}
      <Box>{children}</Box>
    </div>
  );
};

export default SearchBaseScreen;
