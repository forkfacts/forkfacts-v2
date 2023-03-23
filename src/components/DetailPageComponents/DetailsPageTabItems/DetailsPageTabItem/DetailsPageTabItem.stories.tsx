import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import { DetailsPageTabItem } from "@forkfacts/components";
import FastfoodOutlinedIcon from "@mui/icons-material/FastfoodOutlined";
import { sidebarItem } from "@forkfacts/models";

export default {
  title: "Components/DetailsPageComponents/DetailsPageTabItems",
  component: DetailsPageTabItem,
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
    },
  },
} as ComponentMeta<typeof DetailsPageTabItem>;

const Template: ComponentStory<typeof DetailsPageTabItem> = (args) => (
  <DetailsPageTabItem {...args} />
);

export const UnselectedTabItem = Template.bind({});

UnselectedTabItem.args = {
  index: 3,
  item: { label: "Nutrition", Icon: FastfoodOutlinedIcon, link: "/food" },
  handleClick: (value: sidebarItem) => {},
  selectedTab: "Recipes",
};

UnselectedTabItem.storyName = "UnselectTabItem";

export const SelectedTabItem = Template.bind({});

SelectedTabItem.args = {
  index: 1,
  item: { label: "Nutrition", Icon: FastfoodOutlinedIcon, link: "/food" },
  handleClick: (value: sidebarItem) => {},
  selectedTab: "Nutrition",
};

SelectedTabItem.storyName = "SelectedTabItem";
