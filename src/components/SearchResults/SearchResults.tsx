import React from "react";
import { Box, Typography, List, useTheme, useMediaQuery } from "@mui/material";
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
  const mobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box className={classes.root}>
      {multiple ? (
        <Box>
          {collectionGroupedItems && (
            <ForLoops each={collectionGroupedItems}>
              {(value, idx) => {
                return (
                  <List key={idx} className={classes.listWrapper}>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        width: "100%",
                        mb: theme.spacing(1.5),
                      }}
                    >
                      <Typography
                        variant="labelMedium"
                        sx={{
                          padding: theme.spacing(1.2, 2),
                          color: theme.palette.customGray.main,
                        }}
                      >
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
                    <Box sx={{ ml: mobile ? theme.spacing(-1) : theme.spacing(1) }}>
                      {value.collection.length > 3 && (
                        <ViewMoreButton handleViewMore={handleViewMore} text="See more" />
                      )}
                    </Box>
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
          <Box sx={{ ml: mobile ? theme.spacing(-1) : theme.spacing(1) }}>
            {collectionListsItems && collectionListsItems?.length > 3 && (
              <ViewMoreButton handleViewMore={handleViewMore} text="View all" />
            )}
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default SearchResults;
