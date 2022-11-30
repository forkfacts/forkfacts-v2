import { Box, ListItem, ListItemText, Typography } from "@mui/material";
import React from "react";
import { FactlListItemPropTypes } from "@forkfacts/models";
import { useStyles } from "./styles";

export default function FactlListItem({ item }: FactlListItemPropTypes) {
  const styles = useStyles();
  return (
    <ListItem className={styles.listItem}>
      <Box className={styles.listWrapper}>
        <img src={item.image} alt={item.name} className={styles.imgStyles} />
        <ListItemText
          className={styles.ListItemText}
          primary={<Typography variant="body1">{item.name}</Typography>}
        />
      </Box>
    </ListItem>
  );
}
