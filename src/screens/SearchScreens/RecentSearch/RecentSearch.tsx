import React, { useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import { RecentSearchScreenProps } from "@forkfacts/models";
import { SearchResults, RecentSearchHeader } from "@forkfacts/components";
import { useStyles } from "./recentSearchStyles";

const RecentSearchScreen: React.FC<RecentSearchScreenProps> = ({
  recentLists,
  handleClearInput,
  handleCloseHeader,
  handleViewMoreEvent,
  onSelectItem,
}) => {
  const classes = useStyles();

  return (
    <Box>
      <RecentSearchHeader
        showBorderBottom={false}
        handleClearInput={handleClearInput}
        handleCloseHeader={handleCloseHeader}
        showClearInput={false}
      />
      <Box sx={{ mt: ({ spacing }) => spacing(2) }}>
        <Box className={classes.statusWrapper}>
          <Typography color="text.secondary" variant="subtitle2">
            Recent search
          </Typography>
          <Button color="primary" variant="text" className={classes.btn} onClick={handleClearInput}>
            Clear all
          </Button>
        </Box>
        <SearchResults
          recentLists={recentLists}
          onSelectItem={onSelectItem}
          handleViewMore={handleViewMoreEvent}
        />
      </Box>
    </Box>
  );
};

export default RecentSearchScreen;
