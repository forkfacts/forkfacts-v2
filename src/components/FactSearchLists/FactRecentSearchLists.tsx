import { Box, Typography, List } from "@mui/material";
import React from "react";
import { FactSearchListsPropsTypes } from "@forkfacts/models";
import { ViewMoreListBtn, FactlListItem } from "@forkfacts/components";
import { useStyles } from "./styles";

const FactSearchLists: React.FC<FactSearchListsPropsTypes> = ({
  recentLists,
  grouped,
  groupLists,
  onSelectItem,
  onViewMore,
}) => {
  const styles = useStyles();

  return (
    <Box className={styles.root}>
      {grouped ? (
        <Box>
          {groupLists!.map((item, index) => (
            <List key={index} className={styles.groupWrapper}>
              <Typography color="text.secondary" component="div" className={styles.groupTitle}>
                {item.groupTitle}
              </Typography>
              <Box>
                {item.listItems.map((item, index) => (
                  <FactlListItem key={index} item={item} onSelectItem={onSelectItem} />
                ))}
              </Box>
              <ViewMoreListBtn onViewMore={onViewMore!} />
            </List>
          ))}
        </Box>
      ) : (
        <Box>
          <List sx={{ padding: 0 }}>
            {recentLists!.map((item, index) => (
              <FactlListItem key={index} item={item} onSelectItem={onSelectItem} />
            ))}
          </List>
          <ViewMoreListBtn onViewMore={onViewMore!} />
        </Box>
      )}
    </Box>
  );
};

export default FactSearchLists;
