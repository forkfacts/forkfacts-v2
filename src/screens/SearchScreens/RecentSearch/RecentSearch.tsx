import React from "react";
import { Box } from "@mui/material";
import { SearchStatus, FactSearchLists, SearchHeader } from "@forkfacts/components";

const RecentSearchScreen: React.FC = ({}) => {
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
    <Box>
      <SearchHeader showBorderBottom={false} openCloseBtn={false} />
      <Box sx={{ mt: ({ spacing }) => spacing(6.5) }}>
        <SearchStatus status="recentScreen" />
      </Box>
      <Box sx={{ mt: ({ spacing }) => spacing(2) }}>
        <FactSearchLists recentLists={recentLists} />
      </Box>
    </Box>
  );
};

export default RecentSearchScreen;
