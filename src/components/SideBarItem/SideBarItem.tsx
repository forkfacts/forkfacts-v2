import { ListItem, ListItemText, Typography, useTheme, ListItemButton } from "@mui/material";
import { SideBarItemProps } from "@forkfacts/models";
import { navigate } from "gatsby";
import React from "react";

export default function SideBarItem({
  index,
  selectedIndex,
  drawerWidthExpanded,
  item,
  handleSelectedIndex,
}: SideBarItemProps) {
  const { spacing, palette } = useTheme();

  const onRoutePage = () => {
    navigate(item.link);
    handleSelectedIndex(index, item);
  };

  return (
    <ListItem
      onClick={onRoutePage}
      key={index}
      divider={drawerWidthExpanded && index === 2 ? true : false}
      disablePadding
      sx={{
        backgroundColor:
          selectedIndex === index && drawerWidthExpanded
            ? palette.primary.light
            : palette.background.default,
      }}
    >
      <ListItemButton
        style={{
          display: "flex",
          justifyContent: drawerWidthExpanded ? "space-evenly" : "center",
          flexDirection: drawerWidthExpanded ? "row" : "column",
          alignItems: "center",
          width: "100%",
          padding: drawerWidthExpanded ? spacing(3) : spacing(2, 0),
        }}
      >
        <item.Icon
          color={selectedIndex === index ? "primary" : "inherit"}
          sx={{
            width: spacing(2.5),
            height: spacing(2.5),
            fontWeight: 500,
          }}
        />
        <ListItemText
          primary={
            <Typography
              variant="body1"
              color={selectedIndex === index ? "primary" : palette.grey[700]}
              sx={{ ml: drawerWidthExpanded ? spacing(2) : spacing(0) }}
            >
              {item.label}
            </Typography>
          }
        />
      </ListItemButton>
    </ListItem>
  );
}
