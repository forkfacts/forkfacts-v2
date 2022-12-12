import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import EggAltOutlinedIcon from "@mui/icons-material/EggAltOutlined";
import EmojiFoodBeverageOutlinedIcon from "@mui/icons-material/EmojiFoodBeverageOutlined";
import LibraryBooksOutlinedIcon from "@mui/icons-material/LibraryBooksOutlined";
import { SideBarDrawer as Drawer } from "@forkfacts/components";
import { drawerArrayItem } from "@forkfacts/models";

export default {
  title: "Components/SideBarDrawer/SideBarDrawer",
  component: Drawer,
} as ComponentMeta<typeof Drawer>;

const Template: ComponentStory<typeof Drawer> = (args) => <SideBarDrawer {...args} />;

const drawerItems: drawerArrayItem[] = [
  { label: "Food", Icon: EggAltOutlinedIcon, link: "/food" },
  { label: "Recipe", Icon: EmojiFoodBeverageOutlinedIcon, link: "/recipe" },
  { label: "Library", Icon: LibraryBooksOutlinedIcon, link: "library" },
];

export const SideBarDrawer = Template.bind({});

SideBarDrawer.args = {
  drawerItems: drawerItems,
};

SideBarDrawer.storyName = "SideBarDrawer";
