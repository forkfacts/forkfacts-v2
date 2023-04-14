import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { SideBarItem } from "@forkfacts/components";
import EggAltOutlinedIcon from "@mui/icons-material/EggAltOutlined";
import { MenuItem } from "@forkfacts/models";

export default {
  title: "Components/SideBar",
  component: SideBarItem,
} as ComponentMeta<typeof SideBarItem>;

const Template: ComponentStory<typeof SideBarItem> = (args) => <SideBarItem {...args} />;

export const SelectedSideBarSingleItem = Template.bind({});

SelectedSideBarSingleItem.args = {
  item: {
    link: "/food",
    label: "Food",
    Icon: EggAltOutlinedIcon,
  },
  selectedIndex: 0,
  index: 0,
  handleSelectedIndex: (index: number = 0, item: MenuItem) => {},
};

SelectedSideBarSingleItem.storyName = "SelectedSideBarSingleItem";

export const UnSelectedSideBarSingleItem = Template.bind({});

UnSelectedSideBarSingleItem.args = {
  item: {
    link: "/food",
    label: "Food",
    Icon: EggAltOutlinedIcon,
  },
  selectedIndex: 1,
  index: 0,
  handleSelectedIndex: (index: number = 0, item: MenuItem) => {},
};

UnSelectedSideBarSingleItem.storyName = "UnSelectedSideBarSingleItem";
