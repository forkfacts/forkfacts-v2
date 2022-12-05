import React from "react";
import { Box, Typography, List } from "@mui/material";
import { ForLoops } from "@forkfacts/helpers";
import { SearchResultItemsPropsType } from "@forkfacts/models";
import { ViewMoreButton, SearchResultItem } from "@forkfacts/components";
import { useStyles } from "./searchResultsStyles";

const SearchResultItems: React.FC<SearchResultItemsPropsType> = ({
  recentLists,
  grouped,
  groupLists,
  onSelectItem,
  onViewMore,
}) => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      {grouped ? (
        <Box>
          {groupLists !== undefined && (
            <ForLoops each={groupLists}>
              {(value, idx) => {
                return (
                  <List key={idx} className={classes.groupWrapper}>
                    <Typography
                      color="text.secondary"
                      component="div"
                      className={classes.groupTitle}
                    >
                      {value.groupTitle}
                    </Typography>
                    <Box>
                      <ForLoops each={value.listItems}>
                        {(item, index) => {
                          return (
                            <SearchResultItem key={index} item={item} onSelectItem={onSelectItem} />
                          );
                        }}
                      </ForLoops>
                    </Box>
                    {value.listItems.length > 3 && <ViewMoreButton onViewMore={onViewMore!} />}
                  </List>
                );
              }}
            </ForLoops>
          )}
        </Box>
      ) : (
        <Box>
          {recentLists !== undefined && (
            <List sx={{ padding: 0 }}>
              <ForLoops each={recentLists}>
                {(item, index) => {
                  return <SearchResultItem key={index} item={item} onSelectItem={onSelectItem} />;
                }}
              </ForLoops>
            </List>
          )}
          {recentLists !== undefined && recentLists?.length > 3 && (
            <ViewMoreButton onViewMore={onViewMore!} />
          )}
        </Box>
      )}
    </Box>
  );
};

export default SearchResultItems;
