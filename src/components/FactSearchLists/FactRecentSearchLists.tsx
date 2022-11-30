import { Box, Typography, List, Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import { propsTypes } from "@forkfacts/models";
import FactlListItem from "./FactlListItem";
import { addSpacing } from "@forkfacts/helpers";
import ViewMoreListsBtn from "./ViewMoreLists";

const useStyles = makeStyles(({ spacing, breakpoints }: Theme) => ({
  root: {
    [breakpoints.down("sm")]: {
      maxWidth: "100%",
      width: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      padding: 0,
    },
  },
  groupTitle: {
    [breakpoints.down("sm")]: {
      fontSize: addSpacing(spacing, 4),
      padding: spacing(1.2, 2),
    },
  },
}));

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
