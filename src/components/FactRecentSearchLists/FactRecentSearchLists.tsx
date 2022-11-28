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

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },

  listItem: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    padding: 0,
    marginTop: "15px",
  },
  ListItemText: {
    marginLeft: "10px",
    lineHeight: "24px",
    fontStyle: "normal",
  },
  btn: {
    color: theme.palette.customGreen?.main,
    fontWeight: theme.typography.fontWeightBold,
  },
  icon: {
    fontWeight: theme.typography.fontWeightBold,
    color: theme.palette.customGreen?.main,
  },
}));

const FactRecentSearchLists: React.FC<propsTypes> = ({ recentLists }) => {
  const styles = useStyles();
  return (
    <Box className={styles.root}>
      <Box>
        <List>
          {recentLists.map((item, index) => (
            <ListItem key={index} classes={{ root: styles.listItem }}>
              <div>
                <img src={item.image} alt={item.name} />
              </div>
              <ListItemText
                className={styles.ListItemText}
                primary={
                  <Typography
                    sx={{
                      fontSize: ({ typography }) => typography.customFontSize.sm.fontSize,
                      color: ({ palette }) => palette.customBlack?.main,
                    }}
                  >
                    {item.name}
                  </Typography>
                }
              />
            </ListItem>
          ))}
        </List>
      </Box>
      <Box>
        <Button
          variant="text"
          endIcon={<ExpandMoreIcon className={styles.icon} />}
          className={styles.btn}
        >
          View More
        </Button>
      </Box>
    </Box>
  );
};

export default FactRecentSearchLists;
