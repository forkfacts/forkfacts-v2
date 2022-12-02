import React, { useState } from "react";
import { Box } from "@mui/material";
import { catergoryItemTypes, listItemTypes } from "@forkfacts/models";
import EggAltOutlinedIcon from "@mui/icons-material/EggAltOutlined";
import EmojiFoodBeverageOutlinedIcon from "@mui/icons-material/EmojiFoodBeverageOutlined";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";

import {
  SearchStatus,
  FactSearchLists,
  SearchHeader,
  SearchCategories,
} from "@forkfacts/components";

const SearchResultsScreen: React.FC = () => {
  const [_, setSelectItem] = useState<listItemTypes>({} as listItemTypes);

  const handleViewMoreEvent = () => {
    console.log("view handler triggered");
  };

  const onhandleClearSearch = () => {};

  const handleCategorySelect = (value: catergoryItemTypes) => {
    console.log(value);
  };

  return (
    <Box>
      <SearchHeader showBorderBottom={false} openCloseBtn={true} />
      <Box sx={{ mt: ({ spacing }) => spacing(7) }}>
        <SearchStatus status="ResultsScreen" onhandleClearSearch={onhandleClearSearch} />
        <SearchCategories
          onSelectCategory={handleCategorySelect}
          categoryOptions={categoryOptions}
        />
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

const categoryOptions = [
  { label: "Food", Icon: EggAltOutlinedIcon },
  { label: "Recipe", Icon: EmojiFoodBeverageOutlinedIcon },
  { label: "Library", Icon: BookmarkBorderOutlinedIcon },
];
