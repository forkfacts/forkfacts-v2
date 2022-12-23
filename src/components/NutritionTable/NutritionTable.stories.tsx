import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import { NutritionTable } from "@forkfacts/components";

export default {
  title: "Components/Nutrition/NutritionTable",
  component: NutritionTable,
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
    },
  },
} as ComponentMeta<typeof NutritionTable>;

const Template: ComponentStory<typeof NutritionTable> = (args) => <NutritionTable {...args} />;

export const Mobile = Template.bind({});

Mobile.parameters = {
  viewport: {
    defaultViewport: "iphone6",
  },
};
