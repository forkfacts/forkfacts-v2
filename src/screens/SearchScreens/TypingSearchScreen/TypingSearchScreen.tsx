import React from "react";
import { Box, Typography } from "@mui/material";
import { useStyles } from "./typeSearchScreenStyles";
import { TypingSearchScreenProps } from "@forkfacts/models";
import { SearchResults, RecentSearchHeader, SearchCategories } from "@forkfacts/components";

const TypingSearchScreen: React.FC<TypingSearchScreenProps> = ({
  collectionGroupedItems,
  categoryOptions,
  onClearSearch,
  onClosePage,
  handleViewMore,
  onSelectItem,
  onSelectCategory,
  multiple,
}) => {
  const classes = useStyles();

  return (
    <Box>
      <RecentSearchHeader
        showBorderBottom={false}
        onClearSearch={onClearSearch}
        onClosePage={onClosePage}
        showClearSearch={true}
      />
      <Box sx={{ mt: ({ spacing }) => spacing(2) }}>
        <Box className={classes.statusWrapper}>
          <Typography color="text.secondary" variant="body2">
            I’m searching for
          </Typography>
        </Box>
        <SearchCategories onSelectCategory={onSelectCategory} categoryOptions={categoryOptions} />
        <SearchResults
          collectionGroupedItems={collectionGroupedItems}
          multiple={true}
          onSelectItem={onSelectItem}
          handleViewMore={handleViewMore}
        />
      </Box>
    </Box>
  );
};

export default TypingSearchScreen;
