import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { MenuItem } from "@forkfacts/models";
import EggAltOutlinedIcon from "@mui/icons-material/EggAltOutlined";
import EmojiFoodBeverageOutlinedIcon from "@mui/icons-material/EmojiFoodBeverageOutlined";
import LibraryBooksOutlinedIcon from "@mui/icons-material/LibraryBooksOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import AutoStoriesOutlinedIcon from "@mui/icons-material/AutoStoriesOutlined";
import HomeRepairServiceOutlinedIcon from "@mui/icons-material/HomeRepairServiceOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import { ToolsScreen } from "@forkfacts/screens";

export default {
  title: "Screens/ToolsScreen",
  component: ToolsScreen,
} as ComponentMeta<typeof ToolsScreen>;

const Template: ComponentStory<typeof ToolsScreen> = (args) => <ToolsScreen {...args} />;

export const menuItems: MenuItem[] = [
  { label: "Food", Icon: EggAltOutlinedIcon, link: "/" },
  { label: "Recipes", Icon: EmojiFoodBeverageOutlinedIcon, link: "/recipes" },
  { label: "Library", Icon: LibraryBooksOutlinedIcon, link: "/library" },
  { label: "Cookbook", Icon: AutoStoriesOutlinedIcon, link: "/Cookbook" },
  { label: "Grocery", Icon: ShoppingCartOutlinedIcon, link: "/grocery" },
  { label: "Tools", Icon: HomeRepairServiceOutlinedIcon, link: "/tools" },
  { label: "Help", Icon: HelpOutlineOutlinedIcon, link: "/help" },
];

export const Desktop = Template.bind({});

Desktop.args = {
  menuItems,
};
