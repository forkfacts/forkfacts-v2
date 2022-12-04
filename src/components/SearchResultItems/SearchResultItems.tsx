import { Box, Typography, List } from "@mui/material";
import React from "react";
import { SearchResultItemsPropsType } from "@forkfacts/models";
import { ViewMoreButton, SearchResultItem } from "@forkfacts/components";
import { useStyles } from "./searchResultsItemsStyles";

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
          {groupLists !== undefined &&
            groupLists.map((item, index) => (
              <List key={index} className={classes.groupWrapper}>
                <Typography color="text.secondary" component="div" className={classes.groupTitle}>
                  {item.groupTitle}
                </Typography>
                <Box>
                  {item.listItems.map((item, index) => (
                    <SearchResultItem key={index} item={item} onSelectItem={onSelectItem} />
                  ))}
                </Box>
                {item.listItems.length > 3 && <ViewMoreButton onViewMore={onViewMore!} />}
              </List>
            ))}
        </Box>
      ) : (
        <Box>
          <List sx={{ padding: 0 }}>
            {recentLists?.map((item, index) => (
              <SearchResultItem key={index} item={item} onSelectItem={onSelectItem} />
            ))}
          </List>
          {recentLists !== undefined && recentLists?.length > 3 && (
            <ViewMoreButton onViewMore={onViewMore!} />
          )}
        </Box>
      )}
    </Box>
  );
};

export default SearchResultItems;
