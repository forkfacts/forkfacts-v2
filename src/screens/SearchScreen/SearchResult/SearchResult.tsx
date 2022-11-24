import { SearchBaseScreen } from "@forkfacts/components";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";

const SearchResult: React.FC = () => {
  const [isSearchEmpty, setIsSearchEmpty] = useState(true);
  return (
    <SearchBaseScreen isSearchEmpty={isSearchEmpty} setIsSearchEmpty={setIsSearchEmpty}>
      {/* content */}
      <div>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            py: "12px",
            px: "20px",
          }}
        >
          <Typography
            sx={{
              fontStyle: "regular",
              fontSize: "14px",
              lineHeight: "20px",
              textAlign: "center",
              verticallAign: "top",
              letterSpacing: " 0.1px",
              color: "#767872",
              fontWeight: 400,
            }}
          >
            Recent search
          </Typography>
          <Typography>Clear all</Typography>
        </Box>
      </div>
    </SearchBaseScreen>
  );
};

export default SearchResult;
