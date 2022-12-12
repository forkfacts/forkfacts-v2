import React, { FC, useState } from "react";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Drawer,
  Toolbar,
  useTheme,
  Typography,
} from "@mui/material";
import { blue } from "@mui/material/colors";
import { SideBarDrawerProps } from "@forkfacts/models";
import { ForLoops } from "@forkfacts/helpers";

const SideBarDrawer: FC<SideBarDrawerProps> = ({
  drawerWidth,
  mobileOpen = false,
  handleDrawerToggle,
  drawerItems,
  window,
  drawerWidthExpanded,
}) => {
  const container = window !== undefined ? () => window().document.body : undefined;
  const { spacing, transitions, palette } = useTheme();
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handleSelectedIndex = (index: number) => setSelectedIndex(index);

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
          [`& .MuiDrawer-paper`]: {
            width: mobileOpen ? "100%" : drawerWidth,
            boxSizing: "border-box",
          },
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
            <ForLoops each={drawerItems}>
              {({ Icon, label }, index) => {
                return (
                  <ListItem
                    onClick={() => handleSelectedIndex(index)}
                    key={index}
                    disablePadding
                    sx={{
                      color: selectedIndex === index ? palette.primary.dark : palette.grey[700],
                      borderColor:
                        selectedIndex === index ? palette.primary.dark : palette.grey[700],
                      backgroundColor:
                        selectedIndex === index ? blue["50"] : palette.background.default,
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
                          <Typography
                            variant="body1"
                            sx={{ ml: drawerWidthExpanded ? spacing(2) : spacing(0) }}
                          >
                            {label}
                          </Typography>
                        }
                      />
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
