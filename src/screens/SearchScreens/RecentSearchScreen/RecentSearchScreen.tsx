import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { RecentSearchScreenProps } from "@forkfacts/models";
import { SearchResults, RecentSearchHeader } from "@forkfacts/components";
import { useStyles } from "./recentSearchScreenStyles";
interface hey {
  getInputProps: any;
  inputRef: any;
}

const RecentSearchScreen: React.FC<RecentSearchScreenProps & hey> = ({
  collectionListsItems,
  onClearSearch,
  onClosePage,
  handleViewMore,
  onSelectItem,
  setIsOpen,
  getInputProps,
  inputRef,
}) => {
  const classes = useStyles();
  console.log(collectionListsItems);

  return (
    <Box>
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
export default RecentSearchScreen;
