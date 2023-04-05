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
  const theme = useTheme();

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
            ? theme.palette.primary.light
            : theme.palette.background.default,
      }}
    >
      <ListItemButton
        style={{
          display: "flex",
          justifyContent: drawerWidthExpanded ? "space-evenly" : "center",
          flexDirection: drawerWidthExpanded ? "row" : "column",
          alignItems: "center",
          width: "100%",
          padding: drawerWidthExpanded ? theme.spacing(3) : theme.spacing(2, 0),
        }}
      >
        <item.Icon
          sx={{
            width: theme.spacing(3),
            height: theme.spacing(3),
            fontWeight: 500,
            color:
              selectedIndex === index ? theme.palette.primary.main : theme.palette.customGray.dark,
          }}
        />
        <ListItemText
          primary={
            <Typography
              variant="titleSmall"
              sx={{
                ml: drawerWidthExpanded ? theme.spacing(2) : theme.spacing(0),
                fontWeight: theme.typography.fontWeightRegular,
                color:
                  selectedIndex === index
                    ? theme.palette.primary.main
                    : theme.palette.customGray.dark,
              }}
            >
              {item.label}
            </Typography>
          }
        />
      </ListItemButton>
    </ListItem>
  );
}
