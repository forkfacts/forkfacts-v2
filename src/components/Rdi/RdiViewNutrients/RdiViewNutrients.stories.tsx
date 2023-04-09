import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { RdiNutritionTableRow, SelectedNutrient } from "@forkfacts/models";
import { RdiViewNutrients } from "@forkfacts/components";

export default {
  title: "Components/Rdi/RdiViewNutrients",
  component: RdiViewNutrients,
} as ComponentMeta<typeof RdiViewNutrients>;

const Template: ComponentStory<typeof RdiViewNutrients> = (args) => <RdiViewNutrients {...args} />;

const nutritionFilterItems: SelectedNutrient[] = [
  {
    name: "Vitamins",
    nutrientGroup: "Vitamins",
    rows: [
      { name: "Vitamin B1", checked: false, nutrientGroup: "Vitamins" },
      { name: "Vitamin B2", checked: false, nutrientGroup: "Vitamins" },
      { name: "Vitamin B3", checked: false, nutrientGroup: "Vitamins" },
      { name: "Vitamin B4", checked: false, nutrientGroup: "Vitamins" },
    ],
    checked: false,
  },
  {
    name: "Proteins",
    nutrientGroup: "Proteins",
    rows: [
      { name: "Protein B1", checked: false, nutrientGroup: "Proteins" },
      { name: "Protein B2", checked: false, nutrientGroup: "Proteins" },
    ],
    checked: false,
  },
  { name: "Carbohydrate", rows: [], checked: false, nutrientGroup: "" },
  { name: "Water", rows: [], checked: false, nutrientGroup: "" },
  { name: "Fats", rows: [], checked: false, nutrientGroup: "" },
  { name: "Fiber", rows: [], checked: false, nutrientGroup: "" },
  { name: "Minerals", rows: [], checked: false, nutrientGroup: "" },
];

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
  nutritionFilterItems,
  rows: nutritionTableItems,
};
