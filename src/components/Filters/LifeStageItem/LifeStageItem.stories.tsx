import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import ChildCareOutlinedIcon from "@mui/icons-material/ChildCareOutlined";
import { LifeStageItem } from "@forkfacts/components";

export default {
  title: "Components/Filters/LifeStage",
  component: LifeStageItem,
} as ComponentMeta<typeof LifeStageItem>;

const Template: ComponentStory<typeof LifeStageItem> = (args) => <LifeStageItem {...args} />;

export const selectedItem = Template.bind({});

selectedItem.args = {
  item: {
    name: "Infant",
    icon: ChildCareOutlinedIcon,
  },
  handleSelectedItem: (name: string, index: number) => {},
  index: 0,
  selectedItem: "Infant",
};

selectedItem.storyName = "selectedItem";

export const unSelectedItem = Template.bind({});

unSelectedItem.args = {
  item: {
    name: "Infant",
    icon: ChildCareOutlinedIcon,
  },
  handleSelectedItem: (name: string, index: number) => {},
  index: 0,
  selectedItem: "Children",
};

unSelectedItem.storyName = "unSelectedItem";
