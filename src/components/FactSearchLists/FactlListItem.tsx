import { Box, ListItem, ListItemText, Typography } from "@mui/material";
import React from "react";
import classnames from "classnames";
import styles from "@forkfacts/styles/flex.module.css";
import { FactlListItemPropTypes } from "@forkfacts/models";
import { useStyles } from "./styles";

export default function FactlListItem({ item }: FactlListItemPropTypes) {
  const classes = useStyles();
  return (
    <ListItem className={classnames(styles.pageFlexColContainer, classes.listItem)}>
      <Box className={classes.listWrapper}>
        <img src={item.image} alt={item.name} className={classes.imgStyles} />
        <ListItemText
          className={classes.ListItemText}
          primary={<Typography variant="body1">{item.name}</Typography>}
        />
      </Box>
    </ListItem>
  );
}
