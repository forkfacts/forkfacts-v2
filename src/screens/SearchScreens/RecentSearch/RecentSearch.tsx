import React from "react";
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

const MobileSearchBaseScreen: React.FC = ({}) => {
  const classes = useStyles();

  return (
    <Box>
      <Box>
        <CssBaseline />
        <Container
          sx={{
            boxShadow: "0px 1px 4px 0px #000000",
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
                  <CloseIcon
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
              classes,
            }}
            placeholder="Search for food product"
            variant="standard"
          />
        </Container>
      </Box>
      {/* childern */}
    </Box>
  );
};

export default MobileSearchBaseScreen;
