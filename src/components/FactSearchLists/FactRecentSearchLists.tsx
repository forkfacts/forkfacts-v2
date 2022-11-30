import { Box, Typography, List, Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useState } from "react";
import FactlListItem from "./FactlListItem";
import { addSpacing } from "@forkfacts/helpers";
import ViewMoreListsBtn from "./ViewMoreLists";

export interface listItemTypes {
  name: string;
  path: string;
  image: string;
}

export interface GroupListsTypes {
  listItems: Array<listItemTypes>;
  groupTitle: string;
}
type propsTypes =
  | {
      recentLists: Array<listItemTypes>;
      grouped?: boolean;
      groupLists?: Array<GroupListsTypes>;
    }
  | {
      recentLists?: Array<listItemTypes>;
      grouped: boolean;
      groupLists: Array<GroupListsTypes>;
    };

const useStyles = makeStyles(({ spacing, breakpoints }: Theme) => ({
  root: {
    [breakpoints.down("sm")]: {
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
              <List key={index} sx={{ mt: (theme) => theme.spacing(3.5) }}>
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
