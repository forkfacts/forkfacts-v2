import { ListItem, ListItemText, Typography } from "@mui/material";
import React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import { SearchResultItemProps } from "@forkfacts/models";

import { useStyles } from "../SearchResults/searchResultsStyles";

export default function SearchResultItem({ item, onSelectItem }: SearchResultItemProps) {
  const styles = useStyles();

  return (
    <ListItem disablePadding onClick={() => onSelectItem(item)}>
      <ListItemButton>
        <ListItemIcon>
          <img src={item.image} alt={item.name} />
        </ListItemIcon>
        <ListItemText
          primary={<Typography className={styles.ListItemText}>{item.name}</Typography>}
        />
      </ListItemButton>
    </ListItem>
  );
}
