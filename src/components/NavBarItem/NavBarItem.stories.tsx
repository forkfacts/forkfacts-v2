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

export const SelectedNavBarSingleItem = Template.bind({});
SelectedNavBarSingleItem.args = {
  index: 0,
  item: item,
  selectedIndex: 0,
  setSelectedIndex: (number: number = 0) => {},
};
SelectedNavBarSingleItem.storyName = "SelectedNavBarSingleItem";

export const UnSelectedNavBarSingleItem = Template.bind({});
UnSelectedNavBarSingleItem.args = {
  index: 0,
  item: item,
  selectedIndex: 1,
  setSelectedIndex: (number: number = 1) => {},
};

UnSelectedNavBarSingleItem.storyName = "UnSelectedNavBarSingleItem";
