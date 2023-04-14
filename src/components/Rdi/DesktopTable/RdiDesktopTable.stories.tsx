import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { RdiDesktopTable } from "@forkfacts/components";
import { RdiNutritionTableRow } from "@forkfacts/models";

export default {
  title: "Components/Rdi/RdiDesktopTable",
  component: RdiDesktopTable,
} as ComponentMeta<typeof RdiDesktopTable>;

const Template: ComponentStory<typeof RdiDesktopTable> = (args) => <RdiDesktopTable {...args} />;

const nutritionTableItems: RdiNutritionTableRow[] = [
  {
    nutrient: "Fats",
    recommendedAmount: 30,
    nutrientGroup: "Fats",
    recommendedUnit: "g",
  },
  {
    nutrient: "Carbohydrates",
    recommendedAmount: 30,
    nutrientGroup: "Fats",
    recommendedUnit: "g",
  },
  {
    nutrient: "Minerals",
    recommendedAmount: 40,
    nutrientGroup: "Minerals",
    recommendedUnit: "g",
  },
  {
    nutrient: "Vitamins A",
    recommendedAmount: 400,
    nutrientGroup: "Vitamins",
    recommendedUnit: "ug/d",
  },
  {
    nutrient: "Vitamins B",
    recommendedAmount: 25,
    nutrientGroup: "Vitamins",
    recommendedUnit: "mg/d",
  },
  {
    nutrient: "Vitamins C",
    recommendedAmount: 25,
    nutrientGroup: "Vitamins",
    recommendedUnit: "mg/d",
  },
  {
    nutrient: "Vitamins D",
    recommendedAmount: 15,
    nutrientGroup: "Vitamins",
    recommendedUnit: "mg/d",
  },
  {
    nutrient: "Vitamins E",
    recommendedAmount: 7,
    nutrientGroup: "Vitamins",
    recommendedUnit: "mg/d",
  },
  {
    nutrient: "Vitamins K",
    recommendedAmount: 55,
    nutrientGroup: "Vitamins",
    recommendedUnit: "ug/d",
  },
  {
    nutrient: "Thiamin",
    recommendedAmount: 0.6,
    nutrientGroup: "Vitamins",
    recommendedUnit: "mg/d",
  },
  {
    nutrient: "Protein",
    nutrientGroup: "Protein",
    recommendedAmount: 30,
    recommendedUnit: "g",
  },
];

export const Desktop = Template.bind({});

Desktop.args = {
  rows: nutritionTableItems,
};
