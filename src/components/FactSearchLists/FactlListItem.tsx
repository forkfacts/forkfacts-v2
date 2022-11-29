import { Box, ListItem, ListItemText, Theme, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import { listItemTypes } from "./FactRecentSearchLists";

const useStyles = makeStyles(({ spacing, palette, typography }: Theme) => ({
  listItem: {
    width: "100%",
    padding: 0,
  },
  listWrapper: {
    display: "flex",
    alignItems: "center",
  },
  ListItemText: {
    marginLeft: spacing(2),
    lineHeight: spacing(3),
    fontSize: spacing(2),
  },
}));

interface FactlListItemPropTypes {
  item: listItemTypes;
}

export default function FactlListItem({ item }: FactlListItemPropTypes) {
  const styles = useStyles();
  return (
    <ListItem className={styles.listItem}>
      <Box className={styles.listWrapper}>
        <img src={item.image} alt={item.name} />
        <ListItemText
          className={styles.ListItemText}
          primary={<Typography variant="body1">{item.name}</Typography>}
        />
      </Box>
    </ListItem>
  );
}
