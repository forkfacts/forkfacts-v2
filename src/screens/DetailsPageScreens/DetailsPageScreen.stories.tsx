import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import EggAltOutlinedIcon from "@mui/icons-material/EggAltOutlined";
import EmojiFoodBeverageOutlinedIcon from "@mui/icons-material/EmojiFoodBeverageOutlined";
import LibraryBooksOutlinedIcon from "@mui/icons-material/LibraryBooksOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import AutoStoriesOutlinedIcon from "@mui/icons-material/AutoStoriesOutlined";
import { DetailsPageScreen } from "@forkfacts/screens";
import { sidebarItem } from "@forkfacts/models";

export default {
  title: "Screens/DetailsPageScreen",
  component: DetailsPageScreen,
} as ComponentMeta<typeof DetailsPageScreen>;

const sidebarItems: sidebarItem[] = [
  { label: "Food", Icon: EggAltOutlinedIcon, link: "/food" },
  { label: "Recipes", Icon: EmojiFoodBeverageOutlinedIcon, link: "/recipe" },
  { label: "Library", Icon: LibraryBooksOutlinedIcon, link: "/library" },
  { label: "Cookbook", Icon: AutoStoriesOutlinedIcon, link: "/Cookbook" },
  { label: "Grocery List", Icon: ShoppingCartOutlinedIcon, link: "/grocery-list" },
];

const Template: ComponentStory<typeof DetailsPageScreen> = (args) => (
  <DetailsPageScreen {...args} />
);

export const Desktop = Template.bind({});

Desktop.args = {
  sidebarItems,
};
