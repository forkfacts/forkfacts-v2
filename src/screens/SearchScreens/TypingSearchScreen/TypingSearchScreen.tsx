import React from "react";
import { Box, Typography } from "@mui/material";
import { useStyles } from "./typeSearchScreenStyles";
import { GroupListsType, catergoryItemType, SearchResultItemType } from "@forkfacts/models";
import { SearchResults, RecentSearchHeader, SearchCategories } from "@forkfacts/components";

interface TypingSearchScreenProps {
  groupLists: GroupListsType[];
  categoryOptions: catergoryItemType[];
}

const TypingSearchScreen: React.FC<TypingSearchScreenProps> = ({ groupLists, categoryOptions }) => {
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
          groupLists={groupLists}
          grouped={true}
          onSelectItem={onSelectItem}
          onViewMore={handleViewMoreEvent}
        />
      </Box>
    </Box>
  );
};

export default TypingSearchScreen;
