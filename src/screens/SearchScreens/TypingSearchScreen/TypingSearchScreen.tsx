import React from "react";
import { Box, Typography } from "@mui/material";
import { useStyles } from "./typeSearchScreenStyles";
import { TypingSearchScreenProps } from "@forkfacts/models";
import { SearchResults, RecentSearchHeader, SearchCategories } from "@forkfacts/components";

const TypingSearchScreen: React.FC<TypingSearchScreenProps> = ({
  groupLists,
  categoryOptions,
  handleClearInput,
  handleCloseHeader,
  handleViewMoreEvent,
  onSelectItem,
  onSelectCategory,
}) => {
  const classes = useStyles();

  return (
    <Box>
      <RecentSearchHeader
        showBorderBottom={false}
        handleClearInput={handleClearInput}
        handleCloseHeader={handleCloseHeader}
        showClearInput={true}
      />
      <Box sx={{ mt: ({ spacing }) => spacing(3) }}>
        <Box className={classes.statusWrapper}>
          <Typography color="text.secondary" variant="body2">
            I’m searching for
          </Typography>
        </Box>
        <SearchCategories onSelectCategory={onSelectCategory} categoryOptions={categoryOptions} />
        <SearchResults
          groupLists={groupLists}
          grouped={true}
          onSelectItem={onSelectItem}
          handleViewMore={handleViewMoreEvent}
        />
      </Box>
    </Box>
  );
};

export default TypingSearchScreen;
