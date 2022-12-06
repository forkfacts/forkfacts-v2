import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { RecentSearchScreenProps } from "@forkfacts/models";
import { SearchResults, RecentSearchHeader } from "@forkfacts/components";
import { useStyles } from "./recentSearchScreenStyles";

const RecentSearch: React.FC<RecentSearchScreenProps> = ({
  collectionListsItems,
  onClearSearch,
  onClosePage,
  handleViewMore,
  onSelectItem,
}) => {
  const classes = useStyles();
  return (
    <Box>
      <RecentSearchHeader
        showBorderBottom={false}
        onClearSearch={onClearSearch}
        onClosePage={onClosePage}
        showClearSearch={false}
      />
      <Box sx={{ mt: ({ spacing }) => spacing(2) }}>
        <Box className={classes.statusWrapper}>
          <Typography color="text.secondary" variant="subtitle2">
            Recent search
          </Typography>
          <Button color="primary" variant="text" className={classes.btn} onClick={onClearSearch}>
            Clear all
          </Button>
        </Box>
        <SearchResults
          collectionListsItems={collectionListsItems}
          onSelectItem={onSelectItem}
          handleViewMore={handleViewMore}
        />
      </Box>
    </Box>
  );
};
export default RecentSearch;
