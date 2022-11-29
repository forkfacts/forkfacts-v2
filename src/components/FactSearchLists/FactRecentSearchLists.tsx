import { Box, Typography, List, ListItem, ListItemText, Theme, Button } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { makeStyles } from "@mui/styles";

import React from "react";
import FactlListItem from "./FactlListItem";

export interface listItemTypes {
  name: string;
  path: string;
  image: string;
}

export interface GroupListsTypes {
  listItems: Array<listItemTypes>;
  groupedTitle: string;
}
interface propsTypes {
  recentLists: Array<listItemTypes>;
  grouped?: boolean;
  groupLists?: GroupListsTypes[];
}

const useStyles = makeStyles(({ spacing, typography }: Theme) => ({
  root: {
    width: "100%",
  },
  viewMoreBox: {
    marginTop: spacing(1.5),
  },
  btn: {
    fontWeight: typography.fontWeightBold,
    fontSize: `${4 + spacing(1)}px`,
    textTransform: "capitalize",
  },
  icon: {
    fontWeight: typography.fontWeightBold,
  },
}));

const FactSearchLists: React.FC<propsTypes> = ({ recentLists, grouped, groupLists }) => {
  const styles = useStyles();
  return (
    <Box className={styles.root}>
      <Box>
        {grouped ? (
          <Box>
            <List>
              {groupLists!.map((item, index) => (
                <Box>
                  <Typography color="text.secondary" variant="body2">
                    eyey
                  </Typography>
                  <List>
                    {item.listItems.map((item, index) => (
                      <FactlListItem key={index} item={item} />
                    ))}
                  </List>
                </Box>
              ))}
            </List>
          </Box>
        ) : (
          <List>
            {recentLists.map((item, index) => (
              <FactlListItem key={index} item={item} />
            ))}
          </List>
        )}
      </Box>
      <Box className={styles.viewMoreBox}>
        <Button variant="text" color="primary" className={styles.btn}>
          View More
          <ExpandMoreIcon className={styles.icon} />
        </Button>
      </Box>
    </Box>
  );
};

export default FactSearchLists;
