import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { RecentSearchScreenProps } from "@forkfacts/models";
import { SearchResults, RecentSearchHeader } from "@forkfacts/components";
import { useStyles } from "./recentSearchScreenStyles";

const RecentSearchScreen: React.FC<RecentSearchScreenProps> = ({
  collectionListsItems,
  handleViewMore,
  onSelectItem,
  onClearSearch,
  onClosePage,
  inputRef,
  autocomplete,
  formRef,
}) => {
  const classes = useStyles();

  return (
    <Box
      sx={{
        position: "fixed",
        left: 0,
        right: 0,
        bottom: 0,
        top: 0,
        bgcolor: "white",
        zIndex: ({ zIndex }) => zIndex.modal,
      }}
    >
      <RecentSearchHeader
        showBorderBottom={false}
        onClosePage={onClosePage}
        inputRef={inputRef}
        autocomplete={autocomplete}
        formRef={formRef}
      />
      <Box>
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
