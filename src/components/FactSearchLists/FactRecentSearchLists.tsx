import { Box, Typography, List, Theme, Button } from "@mui/material";
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
  groupTitle: string;
}
interface propsTypes {
  recentLists?: Array<listItemTypes>;
  grouped?: boolean;
  groupLists?: GroupListsTypes[];
}

const useStyles = makeStyles(({ spacing, typography, breakpoints }: Theme) => ({
  root: {
    width: "100%",
    [breakpoints.down("sm")]: {
      marginTop: spacing(4),
    },
  },
  viewMoreBox: {
    [breakpoints.down("sm")]: {
      marginTop: spacing(1.5),
    },
  },
  groupTitle: {
    [breakpoints.down("sm")]: {
      fontSize: `${4 + spacing(1)}px`,
    },
  },
  btn: {
    [breakpoints.down("sm")]: {
      fontWeight: typography.fontWeightBold,
      fontSize: `${4 + spacing(1)}px`,
      textTransform: "capitalize",
    },
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
                <Box key={index}>
                  <Typography color="text.secondary" className={styles.groupTitle}>
                    {item.groupTitle}
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
            {recentLists!.map((item, index) => (
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
