import React, { useState } from "react";
import { Box } from "@mui/material";
import { SearchResultItemType } from "@forkfacts/models";
import { SearchStatus, SearchResultItems, RecentSearchHeader } from "@forkfacts/components";

const RecentSearchScreen: React.FC = () => {
  const [selectItem, setSelectItem] = useState<SearchResultItemType>({} as SearchResultItemType);
  console.log("selectItem", selectItem);
  const handleViewMoreEvent = () => {
    console.log("view handler triggered");
  };

  const handleCloseHeader = () => {};

  const handleClearInput = () => {};

  return (
    <Box>
      <RecentSearchHeader
        showBorderBottom={false}
        handleClearInput={handleClearInput}
        handleCloseHeader={handleCloseHeader}
        showClearInput={true}
      />
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
  { image: "/image3.png", name: "Grape fruit juices", path: "/:id" },
  {
    image: "/image2.png",
    name: "Baked white bread, Baked products",
    path: "/:id",
  },
  {
    image: "/image4.png",
    name: "Grape fruit juice unsweentened, Fruit ...",
    path: "/:id",
  },
  {
    image: "/image5.png",
    name: "Banana dehydrated/ banana powder",
    path: "/:id",
  },
];
