import { Box, Button, Typography, useMediaQuery, useTheme } from "@mui/material";

import React from "react";

interface NoSearchResultsProps {}

const NoSearchResults: React.FC<NoSearchResultsProps> = ({}) => {
  const theme = useTheme();
  const desktop = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <Box>
      <Box
        sx={{
          width: "100%",
          height: desktop ? theme.spacing(58.5) : "70vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          px: theme.spacing(2.25),
          py: theme.spacing(12.5),
          gap: theme.spacing(3),
        }}
      >
        <Box
          sx={{
            mb: theme.spacing(5),
            backgroundColor: "#FCFCFC",
            p: theme.spacing(4),
            borderRadius: "50%",
            width: theme.spacing(19.75),
            height: theme.spacing(19.75),
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            component="img"
            src="/Layer_1_5_.svg"
            alt="no-result-img"
            sx={{
              width: theme.spacing(10.5),
              height: theme.spacing(10.5),
            }}
          />
        </Box>
        <Box sx={{ textAlign: "center" }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: theme.spacing(0.5) }}>
            <Typography variant="body2">We found 5 results for “Vitamin C” in</Typography>
            <Typography color="primary" variant="body2">
              library
            </Typography>
          </Box>
          <Button
            variant="outlined"
            color="primary"
            sx={{
              mt: theme.spacing(3),
              borderRadius: theme.spacing(1),
              paddingTop: theme.spacing(1.25),
              paddingBottom: theme.spacing(1.25),
              paddingLeft: theme.spacing(3),
              paddingRight: theme.spacing(3),
            }}
          >
            View Library
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default NoSearchResults;
