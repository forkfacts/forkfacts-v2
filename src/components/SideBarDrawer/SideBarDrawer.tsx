import React, { FC } from "react";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Drawer,
  Toolbar,
  ListItemIcon,
  useTheme,
} from "@mui/material";
import { SideBarDrawerProps } from "@forkfacts/models";
import { ForLoops } from "@forkfacts/helpers";
import { Link } from "gatsby-link";

const SideBarDrawer: FC<SideBarDrawerProps> = ({
  drawerWidth,
  mobileOpen,
  handleDrawerToggle,
  drawerItems,
  window,
}) => {
  const container = window !== undefined ? () => window().document.body : undefined;
  const { spacing } = useTheme();

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
          display: { xs: "block", sm: "none" },
          flexShrink: 0,
          overflow: "hidden",
          [`& .MuiDrawer-paper`]: { width: "100%", boxSizing: "border-box" },
          borderWidth: 0,
        }}
      >
        <Toolbar />
        <Box sx={{ width: drawerWidth, overflow: "auto" }}>
          <List>
            <ForLoops each={drawerItems}>
              {({ Icon, label }, index) => {
                return (
                  <ListItem key={index} disablePadding>
                    <ListItemButton
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        flexDirection: "column",
                        alignItems: "center",
                      }}
                    >
                      <ListItemText primary={label} />
                      <Icon />
                    </ListItemButton>
                  </ListItem>
                );
              }}
            </ForLoops>
          </List>
        </Box>
      </Drawer>
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: "none", sm: "block" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
            borderWidth: 0,
          },
        }}
        open
      >
        <Toolbar />
        <Box sx={{ width: drawerWidth, overflow: "hidden" }}>
          <List>
            <ForLoops each={drawerItems}>
              {({ Icon, label }, index) => {
                return (
                  <ListItem key={index} disablePadding>
                    <ListItemButton
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        flexDirection: "column",
                        alignItems: "center",
                      }}
                    >
                      <ListItemText primary={label} />
                      <Icon />
                    </ListItemButton>
                  </ListItem>
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
