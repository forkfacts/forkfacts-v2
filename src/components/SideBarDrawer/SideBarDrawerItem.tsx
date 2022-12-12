import { ListItem, ListItemText, Typography, useTheme, ListItemButton } from "@mui/material";
import { SideBarDrawerItemProps } from "@forkfacts/models";
import { blue } from "@mui/material/colors";
import React from "react";

export default function SideBarDrawerItem({
  index,
  selectedIndex,
  drawerWidthExpanded,
  item: { label, Icon },
  handleSelectedIndex,
}: SideBarDrawerItemProps) {
  const { spacing, transitions, palette } = useTheme();
  return (
    <ListItem
      onClick={() => handleSelectedIndex(index, { Icon, label })}
      key={index}
      divider={drawerWidthExpanded && index === 2 ? true : false}
      disablePadding
      sx={{
        color: selectedIndex === index ? palette.primary.dark : palette.grey[700],
        backgroundColor:
          selectedIndex === index && drawerWidthExpanded ? blue["50"] : palette.background.default,
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
        <Icon sx={{ width: spacing(2.5), height: spacing(2.5) }} />
        <ListItemText
          primary={
            <Typography variant="body1" sx={{ ml: drawerWidthExpanded ? spacing(2) : spacing(0) }}>
              {label}
            </Typography>
          }
        />
      </ListItemButton>
    </ListItem>
  );
}
