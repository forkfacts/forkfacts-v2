import { Box, Typography, List, ListItem, ListItemText, Theme, Button } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { makeStyles } from "@mui/styles";

import React from "react";

interface listItemTypes {
  name: string;
  path: string;
  image: string;
}
interface propsTypes {
  recentLists: Array<listItemTypes>;
}

const useStyles = makeStyles(({ spacing, palette, typography }: Theme) => ({
  root: {
    width: "100%",
  },

  listItem: {
    width: "100%",
    padding: 0,
    marginTop: spacing(3.5),
  },
  listWrapper: {
    display: "flex",
    alignItems: "center",
  },
  ListItemText: {
    marginLeft: spacing(1),
    lineHeight: spacing(4),
    fontStyle: "normal",
  },
  btn: {
    fontWeight: typography.fontWeightBold,
    fontSize: `${spacing(1.5)}`,
    textTransform: "capitalize",
  },
  icon: {
    fontWeight: typography.fontWeightBold,
  },
  viewMoreBox: {
    marginTop: spacing(1.5),
  },
}));

const FactRecentSearchLists: React.FC<propsTypes> = ({ recentLists }) => {
  const styles = useStyles();
  return (
    <Box className={styles.root}>
      <Box>
        <List>
          {recentLists.map((item, index) => (
            <ListItem key={index} className={styles.listItem}>
              <Box className={styles.listWrapper}>
                <img src={item.image} alt={item.name} />
                <ListItemText
                  className={styles.ListItemText}
                  primary={<Typography variant="body1">{item.name}</Typography>}
                />
              </Box>
            </ListItem>
          ))}
        </List>
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

export default FactRecentSearchLists;
