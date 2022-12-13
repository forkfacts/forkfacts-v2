import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import EggAltOutlinedIcon from "@mui/icons-material/EggAltOutlined";
import { NavBarItem as NavBarItem } from "@forkfacts/components";

export default {
  title: "Components/NavBar",
  component: NavBarItem,
} as ComponentMeta<typeof NavBarItem>;

const Template: ComponentStory<typeof NavBarItem> = (args) => <NavBarItem {...args} />;

const item = { label: "Food", Icon: EggAltOutlinedIcon, link: "/food" };

export const NavBarSingleItem = Template.bind({});
NavBarSingleItem.args = {
  item: item,
};
NavBarSingleItem.storyName = "NavBarItem";
