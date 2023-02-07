import React from "react";
import { Box, Typography, List, useTheme } from "@mui/material";
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
  const theme = useTheme();

  return (
    <Box className={classes.root}>
      {multiple ? (
        <Box>
          {collectionGroupedItems && (
            <ForLoops each={collectionGroupedItems}>
              {(value, idx) => {
                return (
                  <List key={idx} className={classes.listWrapper}>
                    <Box sx={{ display: "flex", alignItems: "center", width: "100%" }}>
                      <Typography variant="caption" className={classes.categoryName}>
                        {value.categoryName}
                      </Typography>
                      <Typography
                        color="primary"
                        sx={{
                          bgcolor: theme.palette.primary.light,
                          width: theme.spacing(3),
                          height: theme.spacing(3),
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          borderRadius: "50%",
                          ml: theme.spacing(2),
                        }}
                      >
                        {value.collection.length}
                      </Typography>
                    </Box>
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
                      <ViewMoreButton handleViewMore={handleViewMore} text="See more" />
                    )}
                  </List>
                );
              }}
            </ForLoops>
          )}
        </Box>
      ) : (
        <Box>
          {collectionListsItems && (
            <List sx={{ padding: 0 }} className={classes.listWrapper}>
              <ForLoops each={collectionListsItems}>
                {(item, index) => {
                  return <SearchResultItem key={index} item={item} onSelectItem={onSelectItem} />;
                }}
              </ForLoops>
            </List>
          )}
          {collectionListsItems && handleViewMore && collectionListsItems?.length > 3 && (
            <ViewMoreButton handleViewMore={handleViewMore} text="See more" />
          )}
        </Box>
      )}
    </Box>
  );
};

export default SearchResults;
