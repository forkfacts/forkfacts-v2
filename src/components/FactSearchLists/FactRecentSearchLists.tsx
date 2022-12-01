import { Box, Typography, List } from "@mui/material";
import React, { useState } from "react";
import { FactSearchListsPropsTypes, listItemTypes } from "@forkfacts/models";
import FactlListItem from "./FactlListItem";
import ViewMoreListsBtn from "./ViewMoreLists";
import { useStyles } from "./styles";

const FactSearchLists: React.FC<FactSearchListsPropsTypes> = ({
  recentLists,
  grouped,
  groupLists,
}) => {
  const styles = useStyles();
  const [selectItem, setSelectItem] = useState<listItemTypes>({} as listItemTypes);

  console.log(selectItem);
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
                    <FactlListItem key={index} item={item} onSelectItem={setSelectItem} />
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
                <FactlListItem key={index} item={item} onSelectItem={setSelectItem} />
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
