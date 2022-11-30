import { Box, ListItem, ListItemText, Theme, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import { listItemTypes } from "@forkfacts/models";

const useStyles = makeStyles(({ spacing, breakpoints, palette }: Theme) => ({
  listItem: {
    [breakpoints.down("sm")]: {
      width: "100%",
      padding: spacing(2.25, 2),
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      height: spacing(7.5),
      flex: "none",
      order: 1,
      flexGrow: 0,
    },
  },
  listWrapper: {
    [breakpoints.down("sm")]: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      padding: 0,
      gap: spacing(1.25),
      height: spacing(3),
    },
  },
  ListItemText: {
    [breakpoints.down("sm")]: {
      marginLeft: spacing(1),
      lineHeight: spacing(3),
      fontSize: spacing(2),
      flex: "none",
      order: 1,
      flexGrow: 0,
    },
  },
  imgStyles: {
    flex: "none",
    order: 0,
    flexGrow: 0,
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
        <img src={item.image} alt={item.name} className={styles.imgStyles} />
        <ListItemText
          className={styles.ListItemText}
          primary={<Typography variant="body1">{item.name}</Typography>}
        />
      </Box>
    </ListItem>
  );
}
