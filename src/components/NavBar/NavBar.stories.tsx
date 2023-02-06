import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import EggAltOutlinedIcon from "@mui/icons-material/EggAltOutlined";
import EmojiFoodBeverageOutlinedIcon from "@mui/icons-material/EmojiFoodBeverageOutlined";
import LibraryBooksOutlinedIcon from "@mui/icons-material/LibraryBooksOutlined";
import { sidebarItem } from "@forkfacts/models";
import { NavBar } from "@forkfacts/components";

export default {
  title: "Components/Navbar",
  component: NavBar,
} as ComponentMeta<typeof NavBar>;

const Template: ComponentStory<typeof NavBar> = (args) => <NavBar {...args} />;

const navbarItems: sidebarItem[] = [
  { label: "Food", Icon: EggAltOutlinedIcon, link: "/food" },
  { label: "Recipes", Icon: EmojiFoodBeverageOutlinedIcon, link: "/Recipe" },
  { label: "Library", Icon: LibraryBooksOutlinedIcon, link: "/library" },
];

export const Navbar = Template.bind({});

Navbar.args = {
  navbarItems: navbarItems,
};

Navbar.storyName = "NavBar";
