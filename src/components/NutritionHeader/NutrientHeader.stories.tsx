import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import { NutrientHeader } from "@forkfacts/components";

export default {
  title: "Components/Nutrition/NutrientHeader",
  component: NutrientHeader,
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
    },
  },
} as ComponentMeta<typeof NutrientHeader>;

const availableAmounts = ["1 tablespoon", "1cup", "100g"];

const Template: ComponentStory<typeof NutrientHeader> = (args) => <NutrientHeader {...args} />;

export const Mobile = Template.bind({});

Mobile.args = {
  availableAmounts: availableAmounts,
  source: "USDA",
};

Mobile.parameters = {
  viewport: {
    defaultViewport: "iphone6",
  },
};
