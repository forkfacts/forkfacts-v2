import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import { NutritionSummary } from "@forkfacts/components";

export default {
  title: "Components/Nutrition/NutritionSummary",
  component: NutritionSummary,
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
    },
  },
} as ComponentMeta<typeof NutritionSummary>;

const Template: ComponentStory<typeof NutritionSummary> = (args) => <NutritionSummary {...args} />;

const nutritionSummaryItems = [
  { name: "Protein", percentage: "10%", weight: "120g" },
  { name: "Carbs", percentage: "20%", weight: "120g" },
  { name: "Fats", percentage: "30%", weight: "120g" },
  { name: "Fiber", percentage: "40%", weight: "120g" },
];

export const Mobile = Template.bind({});

Mobile.args = {
  nutritionSummaryItems: nutritionSummaryItems,
};

Mobile.parameters = {
  viewport: {
    defaultViewport: "iphone6",
  },
};

export const Tablet = Template.bind({});

Tablet.args = {
  nutritionSummaryItems: nutritionSummaryItems,
};

Tablet.parameters = {
  viewport: {
    defaultViewport: "ipad",
  },
};
