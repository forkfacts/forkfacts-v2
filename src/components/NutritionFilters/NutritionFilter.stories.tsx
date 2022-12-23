import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import { NutritionFilters as Sliders } from "@forkfacts/components";

export default {
  title: "Components/NutritionFilters",
  component: Sliders,
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
    },
  },
} as ComponentMeta<typeof Sliders>;

const buttonItems = [
  { name: "All filters" },
  { name: "Life state" },
  { name: "Age" },
  { name: "Nutrients" },
  { name: "Measure Units" },
];

const Template: ComponentStory<typeof Sliders> = (args) => <Sliders {...args} />;

export const FilterSliders = Template.bind({});

FilterSliders.args = {
  buttonItems: buttonItems,
  setSelectedItems: (item: string[]) => {
    console.log(item);
  },
};

FilterSliders.parameters = {
  viewport: {
    defaultViewport: "iphone6",
  },
};
