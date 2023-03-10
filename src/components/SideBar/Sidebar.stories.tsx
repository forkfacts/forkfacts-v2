import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import EggAltOutlinedIcon from "@mui/icons-material/EggAltOutlined";
import EmojiFoodBeverageOutlinedIcon from "@mui/icons-material/EmojiFoodBeverageOutlined";
import LibraryBooksOutlinedIcon from "@mui/icons-material/LibraryBooksOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import AutoStoriesOutlinedIcon from "@mui/icons-material/AutoStoriesOutlined";
import { SideBar as Drawer } from "@forkfacts/components";
import { sidebarItem } from "@forkfacts/models";
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

const sidebarItems: sidebarItem[] = [
  { label: "Food", Icon: EggAltOutlinedIcon, link: "/food" },
  { label: "Recipes", Icon: EmojiFoodBeverageOutlinedIcon, link: "/recipe" },
  { label: "Library", Icon: LibraryBooksOutlinedIcon, link: "/library" },
  { label: "Cookbook", Icon: AutoStoriesOutlinedIcon, link: "/cookbook" },
  { label: "Grocery List", Icon: ShoppingCartOutlinedIcon, link: "/grocery-List" },
];

export const SideBar = Template.bind({});

SideBar.args = {
  sidebarItems: sidebarItems,
  drawerWidthExpanded: false,
  mobileOpen: false,
};

SideBar.storyName = "unexpandedSideBar";

export const expandedSideBar = Template.bind({});

expandedSideBar.args = {
  sidebarItems: sidebarItems,
  drawerWidthExpanded: true,
  mobileOpen: false,
};

expandedSideBar.storyName = "expandedSideBar";
