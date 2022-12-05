import { ListItem, ListItemText, Typography } from "@mui/material";
import React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import { SearchResultItemPropsType } from "@forkfacts/models";

import { useStyles } from "../searchResultsItemsStyles";

export default function SearchResultItem({ item, onSelectItem }: SearchResultItemPropsType) {
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
