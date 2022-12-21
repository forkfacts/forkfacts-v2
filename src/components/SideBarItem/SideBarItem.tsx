import { ListItem, ListItemText, Typography, useTheme, ListItemButton } from "@mui/material";
import { SideBarItemProps } from "@forkfacts/models";
import { navigate } from "gatsby";
import { blue } from "@mui/material/colors";
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
        <item.Icon sx={{ width: spacing(2.5), height: spacing(2.5) }} />
        <ListItemText
          primary={
            <Typography variant="body1" sx={{ ml: drawerWidthExpanded ? spacing(2) : spacing(0) }}>
              {item.label}
            </Typography>
          }
        />
      </ListItemButton>
    </ListItem>
  );
}
