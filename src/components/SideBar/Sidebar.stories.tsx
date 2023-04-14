import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import EggAltOutlinedIcon from "@mui/icons-material/EggAltOutlined";
import EmojiFoodBeverageOutlinedIcon from "@mui/icons-material/EmojiFoodBeverageOutlined";
import LibraryBooksOutlinedIcon from "@mui/icons-material/LibraryBooksOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import AutoStoriesOutlinedIcon from "@mui/icons-material/AutoStoriesOutlined";
import HomeRepairServiceOutlinedIcon from "@mui/icons-material/HomeRepairServiceOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import { SideBar as Drawer } from "@forkfacts/components";
import { MenuItem } from "@forkfacts/models";
import { Box } from "@mui/material";

export default {
  title: "Components/SideBar",
  component: Drawer,
} as ComponentMeta<typeof Drawer>;

const Template: ComponentStory<typeof Drawer> = (args) => (
  <Box sx={{ p: 4 }}>
    <Drawer {...args} />
  </Box>
);

export const menuItems: MenuItem[] = [
  { label: "Food", Icon: EggAltOutlinedIcon, link: "/" },
  { label: "Recipes", Icon: EmojiFoodBeverageOutlinedIcon, link: "/recipes" },
  { label: "Library", Icon: LibraryBooksOutlinedIcon, link: "/library" },
  { label: "Cookbook", Icon: AutoStoriesOutlinedIcon, link: "/Cookbook" },
  { label: "Grocery", Icon: ShoppingCartOutlinedIcon, link: "/grocery" },
  { label: "Tools", Icon: HomeRepairServiceOutlinedIcon, link: "/tools" },
  { label: "Help", Icon: HelpOutlineOutlinedIcon, link: "/help" },
];

export const SideBar = Template.bind({});

SideBar.args = {
  sidebarItems: menuItems,
  drawerWidthExpanded: false,
  mobileOpen: false,
};

SideBar.storyName = "unexpandedSideBar";

export const expandedSideBar = Template.bind({});

expandedSideBar.args = {
  sidebarItems: menuItems,
  drawerWidthExpanded: true,
  mobileOpen: false,
};

expandedSideBar.storyName = "expandedSideBar";
