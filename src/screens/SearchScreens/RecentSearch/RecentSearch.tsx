import React, { useState } from "react";
import { Box } from "@mui/material";
import { searchResultItemTypes } from "@forkfacts/models";
import { SearchStatus, SearchResultItems, RecentSearchHeader } from "@forkfacts/components";

const RecentSearchScreen: React.FC = () => {
  const [selectItem, setSelectItem] = useState<searchResultItemTypes>({} as searchResultItemTypes);
  console.log("selectItem", selectItem);
  const handleViewMoreEvent = () => {
    console.log("view handler triggered");
  };

  return (
    <Box>
      <RecentSearchHeader showBorderBottom={false} openCloseBtn={false} />
      <Box sx={{ mt: ({ spacing }) => spacing(5.5) }}>
        <SearchStatus status="RecentScreen" />
        <SearchResultItems
          recentLists={recentLists}
          onSelectItem={setSelectItem}
          onViewMore={handleViewMoreEvent}
        />
      </Box>
    </Box>
  );
};

export default RecentSearchScreen;
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
