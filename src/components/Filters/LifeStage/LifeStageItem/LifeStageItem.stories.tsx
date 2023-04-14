import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { LifeStageItem } from "@forkfacts/components";
import { Baby, Kids } from "@forkfacts/icons";

export default {
  title: "Components/Filters/LifeStage",
  component: LifeStageItem,
} as ComponentMeta<typeof LifeStageItem>;

const Template: ComponentStory<typeof LifeStageItem> = (args) => <LifeStageItem {...args} />;

export const selectedItem = Template.bind({});

selectedItem.args = {
  item: {
    name: "Children",
    icon: Kids,
  },
  index: 1,
  selectedItem: "Children",
};

selectedItem.storyName = "selectedItem";

export const unSelectedItem = Template.bind({});

unSelectedItem.args = {
  item: {
    name: "Children",
    icon: Baby,
  },
  index: 0,
  selectedItem: "Infants",
};

unSelectedItem.storyName = "unSelectedItem";
