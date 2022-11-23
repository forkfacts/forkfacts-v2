import React from "react";
import { SearchLayout } from "@forkfacts/components";
import { Box, Typography } from "@mui/material";

const SearchScreen = () => {
  return (
    <SearchLayout>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          maxHeight: "100vh",
          alignItems: "center",
          marginTop: "130px",
        }}
      >
        <Typography
          component="h2"
          sx={{
            color: "#000000",
            lineHeight: "32px",
            textAlign: "center",
            fontSize: "24px",
            fontWeight: 600,
          }}
        >
          Forkfacts, Your Healthy diet search place.
        </Typography>
      </Box>
    </SearchLayout>
  );
};

export default SearchScreen;
