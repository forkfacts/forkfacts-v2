import React, { useState } from "react";
import { Box } from "@mui/material";
import EggAltIcon from "@mui/icons-material/EggAlt";
import EmojiFoodBeverageIcon from "@mui/icons-material/EmojiFoodBeverage";
import BookmarksIcon from "@mui/icons-material/Bookmarks";
import { listItemTypes } from "@forkfacts/models";
import { SearchStatus, FactSearchLists, SearchHeader, SearchCategory } from "@forkfacts/components";

const categories = [
  { label: "Food", Icon: EggAltIcon },
  { label: "Recipe", Icon: EmojiFoodBeverageIcon },
  { label: "Library", Icon: BookmarksIcon },
];

const SearchResultsScreen: React.FC = () => {
  const [selectItem, setSelectItem] = useState<listItemTypes>({} as listItemTypes);
  console.log("selectItem", selectItem);

  const handleViewMoreEvent = () => {
    console.log("view handler triggered");
  };

  const onhandleClearSearch = () => {};

  const handleCategorySelect = () => {};

  return (
    <Box>
      <SearchHeader showBorderBottom={false} openCloseBtn={true} />
      <Box sx={{ mt: ({ spacing }) => spacing(7) }}>
        <SearchStatus status="ResultsScreen" onhandleClearSearch={onhandleClearSearch} />
        <SearchCategory categories={categories} onSelectCategory={handleCategorySelect} />
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
