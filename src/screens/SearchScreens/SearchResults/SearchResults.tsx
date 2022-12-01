import React, { useState } from "react";
import { Box } from "@mui/material";
import { listItemTypes } from "@forkfacts/models";
import { SearchStatus, FactSearchLists, SearchHeader, SearchCategory } from "@forkfacts/components";

const SearchResultsScreen: React.FC = () => {
  const [selectItem, setSelectItem] = useState<listItemTypes>({} as listItemTypes);

  console.log("selectItem", selectItem);

  const handleViewMoreEvent = () => {
    console.log("view handler triggered");
  };

  const onhandleClearSearch = () => {};

  return (
    <Box>
      <SearchHeader showBorderBottom={false} openCloseBtn={true} />
      <Box sx={{ mt: ({ spacing }) => spacing(7) }}>
        <SearchStatus status="ResultsScreen" onhandleClearSearch={onhandleClearSearch} />
        <SearchCategory />
        <FactSearchLists
          groupLists={groupListsTypes}
          grouped={true}
          onSelectItem={setSelectItem}
          onViewMore={handleViewMoreEvent}
        />
      </Box>
    </Box>
  );
};

export default SearchResultsScreen;

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

const groupListsTypes = [
  { groupTitle: "FRUIT AND FRUIT JUICES", listItems: recentLists },
  { groupTitle: "BABY FOODS", listItems: recentLists.slice(0, 1) },
  { groupTitle: "SWEETS", listItems: recentLists.slice(0, 2) },
];
