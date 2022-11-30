import { Box, Typography, List } from "@mui/material";
import React from "react";
import { propsTypes } from "@forkfacts/models";
import FactlListItem from "./FactlListItem";
import ViewMoreListsBtn from "./ViewMoreLists";
import { useStyles } from "./styles";

const FactSearchLists: React.FC<propsTypes> = ({ recentLists, grouped, groupLists }) => {
  const styles = useStyles();
  return (
    <Box className={styles.root}>
      <Box>
        {grouped ? (
          <Box>
            {groupLists!.map((item, index) => (
              <List key={index}>
                <Typography color="text.secondary" component="div" className={styles.groupTitle}>
                  {item.groupTitle}
                </Typography>
                <Box>
                  {item.listItems.map((item, index) => (
                    <FactlListItem key={index} item={item} />
                  ))}
                </Box>
                <ViewMoreListsBtn />
              </List>
            ))}
          </Box>
        ) : (
          <Box>
            <List>
              {recentLists!.map((item, index) => (
                <FactlListItem key={index} item={item} />
              ))}
            </List>
            <ViewMoreListsBtn />
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default FactSearchLists;
