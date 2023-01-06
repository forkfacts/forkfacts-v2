import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import { NutrientTopTableHeader } from "@forkfacts/components";

export default {
  title: "Components/Nutrition/NutrientTopTableHeader",
  component: NutrientTopTableHeader,
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
    },
  },
} as ComponentMeta<typeof NutrientTopTableHeader>;

const availableAmounts = ["1 tablespoon", "1 cup", "100 g"];

const Template: ComponentStory<typeof NutrientTopTableHeader> = (args) => (
  <NutrientTopTableHeader {...args} />
);

export const Mobile = Template.bind({});

Mobile.args = {
  servingSizeAmounts: availableAmounts,
  source: "USDA",
  onSelectServingSizeAmount: (item: string) => {
    console.log(item);
  },
};

Mobile.parameters = {
  viewport: {
    defaultViewport: "iphone6",
  },
};
