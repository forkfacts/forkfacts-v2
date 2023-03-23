import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import { NutritionSummary } from "@forkfacts/components";

export default {
  title: "Components/DetailPageComponents/NutritionSummary",
  component: NutritionSummary,
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
    },
  },
} as ComponentMeta<typeof NutritionSummary>;

const Template: ComponentStory<typeof NutritionSummary> = (args) => <NutritionSummary {...args} />;

const nutritionSummaryItems = [
  { name: "CALORIES", percentage: 20, weight: "450" },
  { name: "CARBS", percentage: 20, weight: "120g" },
  { name: "PROTEINS", percentage: 20, weight: "50g" },
  { name: "FATS", percentage: 20, weight: "112g" },
  { name: "SUGARS", percentage: 20, weight: "9g" },
];

export const Desktop = Template.bind({});

Desktop.args = {
  nutritionSummaryItems: nutritionSummaryItems,
};

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
