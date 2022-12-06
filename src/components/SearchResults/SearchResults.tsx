import React from "react";
import { Box, Typography, List } from "@mui/material";
import { ForLoops } from "@forkfacts/helpers";
import { SearchResultsProps } from "@forkfacts/models";
import { ViewMoreButton, SearchResultItem } from "@forkfacts/components";
import { useStyles } from "./searchResultsStyles";

const SearchResults: React.FC<SearchResultsProps> = ({
  collectionGroupedItems,
  collectionListsItems,
  multiple,
  onSelectItem,
  handleViewMore,
}) => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      {multiple ? (
        <Box>
          {collectionGroupedItems !== undefined && (
            <ForLoops each={collectionGroupedItems}>
              {(value, idx) => {
                return (
                  <List key={idx} className={classes.listWrapper}>
                    <Typography
                      color="text.secondary"
                      component="div"
                      className={classes.categoryName}
                    >
                      {value.categoryName}
                    </Typography>
                    <Box>
                      <ForLoops each={value.collection}>
                        {(item, index) => {
                          return (
                            <SearchResultItem key={index} item={item} onSelectItem={onSelectItem} />
                          );
                        }}
                      </ForLoops>
                    </Box>
                    {value.collection.length > 3 && (
                      <ViewMoreButton handleViewMore={handleViewMore!} />
                    )}
                  </List>
                );
              }}
            </ForLoops>
          )}
        </Box>
      ) : (
        <Box>
          {collectionListsItems !== undefined && (
            <List sx={{ padding: 0 }} className={classes.listWrapper}>
              <ForLoops each={collectionListsItems}>
                {(item, index) => {
                  return <SearchResultItem key={index} item={item} onSelectItem={onSelectItem} />;
                }}
              </ForLoops>
            </List>
          )}
          {collectionListsItems !== undefined && collectionListsItems?.length > 3 && (
            <ViewMoreButton handleViewMore={handleViewMore!} />
          )}
        </Box>
      )}
    </Box>
  );
};

export default SearchResults;
