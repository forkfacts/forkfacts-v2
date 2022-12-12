import React, { FC, useState } from "react";
import { Box, List, Drawer, Toolbar, useTheme } from "@mui/material";
import { SideBarDrawerProps, drawerItem } from "@forkfacts/models";
import { ForLoops } from "@forkfacts/helpers";
import { SideBarDrawerItem } from "@forkfacts/components";

const SideBarDrawer: FC<SideBarDrawerProps> = ({
  drawerWidth,
  mobileOpen = false,
  handleDrawerToggle,
  drawerItems,
  window,
  drawerWidthExpanded = false,
  onSelectItem,
}) => {
  const container = window !== undefined ? () => window().document.body : undefined;
  const { transitions } = useTheme();
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  const handleSelectedIndex = (index: number, item: drawerItem) => {
    setSelectedIndex(index);
    onSelectItem(item);
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
            width: drawerWidth,
            boxSizing: "border-box",
          },
          borderWidth: 0,
        }}
      >
        <Toolbar />
        <Box sx={{ width: drawerWidth, overflow: "auto" }}>
          <List>
            <ForLoops each={drawerItems.slice(0, drawerItems ? drawerItems.length : 3)}>
              {(item, index) => {
                return (
                  <SideBarDrawerItem
                    index={index}
                    selectedIndex={selectedIndex}
                    drawerWidthExpanded={drawerWidthExpanded}
                    item={item}
                    handleSelectedIndex={handleSelectedIndex}
                  />
                );
              }}
            </ForLoops>
          </List>
        </Box>
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
        }}
        open
      >
        <Toolbar />
        <Box
          sx={{
            width: drawerWidth,
            overflow: "hidden",
            transition: transitions.create(["all"], {
              easing: transitions.easing.sharp,
              duration: transitions.duration.enteringScreen,
            }),
          }}
        >
          <List>
            <ForLoops each={drawerItems.slice(0, drawerWidthExpanded ? drawerItems.length : 3)}>
              {(item, index) => {
                return (
                  <SideBarDrawerItem
                    index={index}
                    selectedIndex={selectedIndex}
                    drawerWidthExpanded={drawerWidthExpanded}
                    item={item}
                    handleSelectedIndex={handleSelectedIndex}
                  />
                );
              }}
            </ForLoops>
          </List>
        </Box>
      </Drawer>
    </Box>
  );
};

export default SideBarDrawer;
