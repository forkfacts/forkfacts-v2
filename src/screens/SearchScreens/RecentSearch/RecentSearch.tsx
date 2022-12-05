import React, { useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import { SearchResultItemType } from "@forkfacts/models";
import { SearchResults, RecentSearchHeader } from "@forkfacts/components";
import { useStyles } from "./recentSearchStyles";
const RecentSearchScreen: React.FC = () => {
  const [selectItem, setSelectItem] = useState<SearchResultItemType>({} as SearchResultItemType);
  const classes = useStyles();
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
        <Box className={classes.statusWrapper}>
          <Typography color="text.secondary" variant="subtitle2">
            Recent search
          </Typography>
          <Button color="primary" variant="text" className={classes.btn}>
            Clear all
          </Button>
        </Box>
        <SearchResults
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
