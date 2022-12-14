import { ListItem, ListItemText, Typography, useTheme } from "@mui/material";
import React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import { SearchResultItemProps } from "@forkfacts/models";

import { useStyles } from "../SearchResults/searchResultsStyles";

export default function SearchResultItem({ item, onSelectItem }: SearchResultItemProps) {
  const theme = useTheme();
  const styles = useStyles();

  return (
    <ListItem disablePadding onClick={() => onSelectItem(item)}>
      <ListItemButton>
        <ListItemIcon>
          <img
            src={item.image}
            alt={item.name}
            style={{ width: theme.spacing(3.75), height: theme.spacing(3.75) }}
          />
        </ListItemIcon>
        <ListItemText
          primary={
            <Typography variant="body1" className={styles.ListItemText}>
              {item.name}
            </Typography>
          }
        />
      </ListItemButton>
    </ListItem>
  );
}
