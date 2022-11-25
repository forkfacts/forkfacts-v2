import { MobileSearchBaseScreen, FactRecentSearchLists } from "@forkfacts/components";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";

const SearchResult: React.FC = () => {
  const [isSearchEmpty, setIsSearchEmpty] = useState(true);

  const recentLists = [
    { image: "/recentImg.png", name: "Kidney beans light, Legume", path: "/:id" },
    { image: "/recentImg.png", name: "Grape fruit juices", path: "/:id" },
    {
      image: "/recentImg.png",
      name: "Baked white bread, Baked products",
      path: "/:id",
    },
    {
      image: "/recentImg.png",
      name: "Grape fruit juice unsweentened, Fruit ...",
      path: "/:id",
    },
    {
      image: "/recentImg.png",
      name: "Banana dehydrated/ banana powder",
      path: "/:id",
    },
  ];
  return (
    <MobileSearchBaseScreen
      isHome={false}
      isSearchEmpty={isSearchEmpty}
      setIsSearchEmpty={setIsSearchEmpty}
    >
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
              fontStyle: "normal",
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
          <Typography
            sx={{
              color: "#356A1E",
              fontStyle: "normal",
              fontSize: "12px",
              lineHeight: "16px",
              textAlign: "center",
              verticallAign: "top",
              letterSpacing: " 0.4px",
            }}
          >
            Clear all
          </Typography>
        </Box>
        <Box sx={{ mt: 3, py: "12px", px: "20px" }}>
          <FactRecentSearchLists recentLists={recentLists} />
        </Box>
      </div>
    </MobileSearchBaseScreen>
  );
};

export default SearchResult;
