import React, { useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import { SearchResultItemType } from "@forkfacts/models";
import { SearchResults, RecentSearchHeader } from "@forkfacts/components";
import { useStyles } from "./recentSearchStyles";

interface RecentSearchScreenProps {
  recentLists: SearchResultItemType[];
}

const RecentSearchScreen: React.FC<RecentSearchScreenProps> = ({ recentLists }) => {
  const classes = useStyles();
  const handleViewMoreEvent = () => {
    console.log("view handler triggered");
  };
  const handleCloseHeader = () => {};
  const handleClearInput = () => {};
  const onSelectItem = () => {};

  return (
    <Box>
      <RecentSearchHeader
        showBorderBottom={false}
        handleClearInput={handleClearInput}
        handleCloseHeader={handleCloseHeader}
        showClearInput={true}
      />
      <Box sx={{ mt: ({ spacing }) => spacing(4) }}>
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
          onSelectItem={onSelectItem}
          onViewMore={handleViewMoreEvent}
        />
      </Box>
    </Box>
  );
};

export default RecentSearchScreen;
