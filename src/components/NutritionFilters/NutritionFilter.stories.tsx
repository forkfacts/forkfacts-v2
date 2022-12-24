import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import { NutritionFilters as Sliders } from "@forkfacts/components";

export default {
  title: "Components/Nutrition/NutritionFilters",
  component: Sliders,
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
    },
  },
} as ComponentMeta<typeof Sliders>;

const filters = [
  { name: "All filters" },
  { name: "Life state" },
  { name: "Age" },
  { name: "Nutrients" },
  { name: "Measure Units" },
];

const Template: ComponentStory<typeof Sliders> = (args) => <Sliders {...args} />;

export const Mobile = Template.bind({});

Mobile.args = {
  filters: filters,
  onSelectFilterItems: (item: string[]) => {
    console.log(item);
  },
};

Mobile.parameters = {
  viewport: {
    defaultViewport: "iphone6",
  },
};
