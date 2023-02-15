import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { NutritionDetailsTab } from "@forkfacts/components";

export default {
  title: "Components/DetailsPageComponents/NutritionDetailsTab",
  component: NutritionDetailsTab,
} as ComponentMeta<typeof NutritionDetailsTab>;

const nutritionSummaryItems = [
  { name: "Calories", percentage: 20, weight: "450g" },
  { name: "Protein", percentage: 10, weight: "120g" },
  { name: "Carbs", percentage: 20, weight: "120g" },
  { name: "Fats", percentage: 30, weight: "120g" },
  { name: "Fiber", percentage: 40, weight: "120g" },
];

const Template: ComponentStory<typeof NutritionDetailsTab> = (args) => (
  <NutritionDetailsTab {...args} />
);

export const Desktop = Template.bind({});

Desktop.args = {
  nutritionSummaryItems: nutritionSummaryItems,
};
