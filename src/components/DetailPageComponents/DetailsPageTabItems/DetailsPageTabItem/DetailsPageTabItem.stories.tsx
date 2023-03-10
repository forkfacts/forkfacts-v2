import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import { DetailsPageTabItem } from "@forkfacts/components";
import FastfoodOutlinedIcon from "@mui/icons-material/FastfoodOutlined";

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
  <DetailsPageTabItem {...args} onSelectDetailsPageTabItem={args.onSelectDetailsPageTabItem} />
);

export const UnselectedTabItem = Template.bind({});

UnselectedTabItem.args = {
  index: 3,
  item: { label: "Nutrition", Icon: FastfoodOutlinedIcon, link: "/food" },
  setSelectedIndex: (value: number) => {},
  selectedIndex: 1,
};

UnselectedTabItem.storyName = "UnselectTabItem";

export const SelectedTabItem = Template.bind({});

SelectedTabItem.args = {
  index: 1,
  item: { label: "Nutrition", Icon: FastfoodOutlinedIcon, link: "/food" },
  setSelectedIndex: (value: number) => {},
  selectedIndex: 1,
};

SelectedTabItem.storyName = "SelectedTabItem";
