import React, { useState } from "react";
import { Box, Typography, List, useTheme, useMediaQuery } from "@mui/material";
import { ForLoops } from "@forkfacts/helpers";
import { SearchResultItemCollectionType, SearchResultsProps } from "@forkfacts/models";
import { ViewMoreButton, SearchResultItem } from "@forkfacts/components";
import { useStyles } from "./searchResultsStyles";

const SearchResults: React.FC<SearchResultsProps> = ({
  collectionListsItems,
  multiple,
  onSelectItem,
}) => {
  const classes = useStyles();
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("md"));
  const resultResultLimit = Number(process.env.NUM_SEARCH_RESULT_VISIBLE) || 5;
  const [viewMore, setViewMore] = useState(resultResultLimit);
  const groupedItems = collectionListsItems.reduce(
    (groups: SearchResultItemCollectionType[], item: any) => {
      const group = groups.find(
        (g: SearchResultItemCollectionType) => g.categoryName === item.category
      );
      if (group) {
        group.collection.push(item);
      } else {
        groups.push({ categoryName: item.category, collection: [item] });
      }
      return groups;
    },
    []
  );

  console.log("process.env", process.env);

  const handleGroupedViewMore = () => {
    setViewMore(collectionListsItems.length);
  };
  return (
    <Box className={classes.root}>
      {multiple ? (
        <Box>
          {groupedItems && (
            <ForLoops each={groupedItems.slice(0, viewMore)}>
              {(value, idx) => {
                return (
                  <List key={idx} sx={{ wordBreak: "break-all" }}>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        width: "100%",
                        mb: theme.spacing(1),
                        ml: theme.spacing(-2),
                        wordBreak: "break-all",
                      }}
                    >
                      <Typography
                        variant="labelMedium"
                        sx={{
                          padding: theme.spacing(1.2, 2),
                          color: theme.palette.customGray.dark,
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
                          fontSize: theme.spacing(1.7),
                          pt: theme.spacing(0.5),
                        }}
                      >
                        {value.collection.length}
                      </Typography>
                    </Box>
                    <Box>
                      <ForLoops each={value.collection}>
                        {(item, index) => {
                          return (
                            <SearchResultItem
                              key={index}
                              item={item}
                              onSelectItem={onSelectItem}
                              multiple={multiple}
                            />
                          );
                        }}
                      </ForLoops>
                    </Box>
                    <Box
                      sx={{
                        ml: mobile ? theme.spacing(-1) : theme.spacing(-1.5),
                        display: collectionListsItems?.length === viewMore ? "none" : "block",
                      }}
                    >
                      {value.collection.length > resultResultLimit && (
                        <ViewMoreButton handleViewMore={handleGroupedViewMore} text="See more" />
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
          <List sx={{ padding: 0 }}>
            <ForLoops each={collectionListsItems.slice(0, viewMore)}>
              {(item, index) => {
                return (
                  <SearchResultItem
                    key={index}
                    item={item}
                    onSelectItem={onSelectItem}
                    multiple={multiple}
                  />
                );
              }}
            </ForLoops>
          </List>
          <Box
            sx={{
              ml: mobile ? theme.spacing(-2.5) : theme.spacing(-1),
              display: collectionListsItems?.length === viewMore ? "none" : "block",
            }}
          >
            {collectionListsItems?.length > resultResultLimit && (
              <ViewMoreButton handleViewMore={handleGroupedViewMore} text="View all" />
            )}
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default SearchResults;
