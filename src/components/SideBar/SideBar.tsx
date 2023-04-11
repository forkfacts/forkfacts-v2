import React, { FC, useState } from "react";
import { Box, List, Drawer, Toolbar, useTheme } from "@mui/material";
import { SideBarProps, MenuItem } from "@forkfacts/models";
import { ForLoops } from "@forkfacts/helpers";
import { SideBarItem } from "@forkfacts/components";

const SideBar: FC<SideBarProps> = ({
  drawerWidth,
  mobileOpen = false,
  handleDrawerToggle,
  sidebarItems,
  window,
  drawerWidthExpanded = false,
}) => {
  const container = window ? () => window().document.body : undefined;
  const { transitions, spacing } = useTheme();
  const [selectedItem, setSelectedItem] = useState<string>("Food");

  const handleSelectedItem = (name: string, item: MenuItem) => {
    setSelectedItem(name);
  };

  return (
    <Box>
      <Drawer
        container={container}
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: "block", sm: "block", md: "none" },
          flexShrink: 0,
          overflow: "hidden",
          [`& .MuiDrawer-paper`]: {
            boxSizing: "border-box",
          },
          width: drawerWidth,
          borderWidth: 0,
        }}
      >
        <Toolbar />
        <List sx={{ width: drawerWidth, overflow: "auto", mt: spacing(3) }}>
          <ForLoops each={sidebarItems}>
            {(item, index) => {
              return (
                <SideBarItem
                  key={index}
                  index={index}
                  selectedItem={selectedItem}
                  drawerWidthExpanded={drawerWidthExpanded}
                  item={item}
                  handleSelectedItem={handleSelectedItem}
                />
              );
            }}
          </ForLoops>
        </List>
      </Drawer>
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: "none", sm: "none", md: "block" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
            borderWidth: drawerWidthExpanded ? 1 : 0,
            overflow: "hidden",
          },
          width: drawerWidth,
        }}
        open
      >
        <Toolbar />
        <List
          sx={{
            overflow: "hidden",
            transition: transitions.create(["width"], {
              easing: transitions.easing.sharp,
              duration: transitions.duration.enteringScreen,
            }),
            ml: drawerWidthExpanded ? 0 : spacing(-1),
            display: "flex",
            flexDirection: "column",
            mt: spacing(3),
          }}
        >
          <ForLoops each={sidebarItems}>
            {(item, index) => {
              return (
                <SideBarItem
                  key={index}
                  index={index}
                  selectedItem={selectedItem}
                  drawerWidthExpanded={drawerWidthExpanded}
                  item={item}
                  handleSelectedItem={handleSelectedItem}
                />
              );
            }}
          </ForLoops>
        </List>
      </Drawer>
    </Box>
  );
};

export default SideBar;
