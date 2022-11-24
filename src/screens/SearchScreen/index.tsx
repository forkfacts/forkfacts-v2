import React from "react";
import { SearchInput, SearchLayout } from "@forkfacts/components";
import { Box, Typography } from "@mui/material";

const SearchScreen: React.FC = () => {
  return (
    <SearchLayout>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          maxHeight: "100vh",
          alignItems: "center",
          mt: "130px",
          width: "100%",
        }}
      >
        <Typography
          component="h2"
          sx={[
            {
              color: "#000000",
              lineHeight: "32px",
              textAlign: "center",
              fontSize: "24px",
              fontWeight: 600,
              verticalAlign: "center",
            },
          ]}
        >
          Forkfacts, Your Healthy diet search place.
        </Typography>
      </Box>
      <Box sx={{ mt: "30px" }}>
        <SearchInput width={"100%"} />
      </Box>
    </SearchLayout>
  );
};

export default SearchScreen;
