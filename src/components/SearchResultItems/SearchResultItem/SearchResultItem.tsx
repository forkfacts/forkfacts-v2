import { ListItem, ListItemText, Typography } from "@mui/material";
import React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import { SearchResultItemsPropTypes } from "@forkfacts/models";

import { useStyles } from "../styles";

export default function SearchResultItem({ item, onSelectItem }: SearchResultItemsPropTypes) {
  const styles = useStyles();

  return (
    <ListItem disablePadding onClick={() => onSelectItem(item)}>
      <ListItemButton>
        <ListItemIcon>
          <img src="/recentImg.png" alt={item.name} />
        </ListItemIcon>
        <ListItemText
          primary={<Typography className={styles.ListItemText}>{item.name}</Typography>}
        />
      </ListItemButton>
    </ListItem>
  );
}
