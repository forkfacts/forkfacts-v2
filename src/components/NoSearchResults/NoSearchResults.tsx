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
          height: desktop ? "100vh" : "468px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "100px 18px",
          gap: "24px",
        }}
      >
        <Box
          component="img"
          src="/noresult-img.png"
          alt="no-result-img"
          sx={{ mb: theme.spacing(7) }}
        />
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
