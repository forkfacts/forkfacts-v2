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
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  const handleSelectedIndex = (index: number, item: MenuItem) => {
    setSelectedIndex(index);
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
        <List
          sx={{
            width: drawerWidth,
            overflow: "auto",
            mt: spacing(3),
            transition: transitions.create(["width"], {
              easing: transitions.easing.sharp,
              duration: transitions.duration.enteringScreen,
            }),
          }}
        >
          <ForLoops each={sidebarItems.slice(0, sidebarItems ? sidebarItems.length : 3)}>
            {(item, index) => {
              return (
                <SideBarItem
                  key={index}
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
        <List
          sx={{
            width: drawerWidth,
            overflow: "hidden",
            transition: transitions.create(["width"], {
              easing: transitions.easing.sharp,
              duration: transitions.duration.enteringScreen,
            }),
            ml: drawerWidthExpanded ? 0 : spacing(-1.5),
          }}
        >
          <ForLoops each={sidebarItems.slice(0, drawerWidthExpanded ? sidebarItems.length : 3)}>
            {(item, index) => {
              return (
                <SideBarItem
                  key={index}
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
      </Drawer>
    </Box>
  );
};

export default SideBar;
