import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import { NutritionRates } from "@forkfacts/components";

export default {
  title: "Components/Nutrition/NutritionRates",
  component: NutritionRates,
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
    },
  },
} as ComponentMeta<typeof NutritionRates>;

const Template: ComponentStory<typeof NutritionRates> = (args) => <NutritionRates {...args} />;

const NutritionRatesData = [
  { name: "Protein", percentage: "10%", weight: "120g" },
  { name: "Carbs", percentage: "20%", weight: "120g" },
  { name: "Fats", percentage: "30%", weight: "120g" },
  { name: "Fiber", percentage: "40%", weight: "120g" },
];

export const Mobile = Template.bind({});

Mobile.args = {
  nutritionRatesItems: NutritionRatesData,
};

Mobile.parameters = {
  viewport: {
    defaultViewport: "iphone6",
  },
};

export const Tablet = Template.bind({});

Tablet.args = {
  nutritionRatesItems: NutritionRatesData,
};

Tablet.parameters = {
  viewport: {
    defaultViewport: "ipad",
  },
};
