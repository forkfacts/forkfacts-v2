import React from "react";
import { Box, Typography } from "@mui/material";
import { catergoryItemType, SearchResultItemType } from "@forkfacts/models";
import EggAltOutlinedIcon from "@mui/icons-material/EggAltOutlined";
import EmojiFoodBeverageOutlinedIcon from "@mui/icons-material/EmojiFoodBeverageOutlined";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import { useStyles } from "./typeSearchScreenStyles";

import { SearchResults, RecentSearchHeader, SearchCategories } from "@forkfacts/components";

const TypingSearchScreen: React.FC = () => {
  const handleViewMoreEvent = () => {};

  const classes = useStyles();

  const handleCategorySelect = (value: catergoryItemType) => {
    console.log(value);
  };

  const onSelectItem = (item: SearchResultItemType) => {
    console.log(item);
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
      <Box sx={{ mt: ({ spacing }) => spacing(5) }}>
        <Box className={classes.statusWrapper}>
          {" "}
          <Typography color="text.secondary" variant="body2">
            I’m searching for
          </Typography>
        </Box>
        <SearchCategories
          onSelectCategory={handleCategorySelect}
          categoryOptions={categoryOptions}
        />
        <SearchResults
          groupLists={GroupLists}
          grouped={true}
          onSelectItem={onSelectItem}
          onViewMore={handleViewMoreEvent}
        />
      </Box>
    </Box>
  );
};

export default TypingSearchScreen;

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

const GroupLists = [
  { groupTitle: "FRUIT AND FRUIT JUICES", listItems: recentLists },
  { groupTitle: "BABY FOODS", listItems: recentLists.slice(0, 1) },
  { groupTitle: "SWEETS", listItems: recentLists.slice(0, 2) },
];

const categoryOptions = [
  { label: "Food", Icon: EggAltOutlinedIcon },
  { label: "Recipe", Icon: EmojiFoodBeverageOutlinedIcon },
  { label: "Library", Icon: BookmarkBorderOutlinedIcon },
];
