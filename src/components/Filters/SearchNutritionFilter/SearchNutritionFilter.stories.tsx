import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import { SearchNutritionFilter } from "@forkfacts/components";
import { SelectedNutrient } from "@forkfacts/models";
import { useStore } from "../../../store/store";

export default {
  title: "Components/Filters/SearchNutritionFilter",
  component: SearchNutritionFilter,
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
    },
  },
} as ComponentMeta<typeof SearchNutritionFilter>;

const Template: ComponentStory<typeof SearchNutritionFilter> = (args) => {
  const { selectedNutrients } = useStore();
  console.log(selectedNutrients);
  return <SearchNutritionFilter {...args} />;
};

const nutritionFilterItems: SelectedNutrient[] = [
  {
    name: "Vitamin",
    unit: "mg",
    nutrientGroup: "Vitamins",
    rows: [
      { name: "Vitamin B1", checked: false, nutrientGroup: "Vitamins", unit: "" },
      { name: "Vitamin B2", checked: false, nutrientGroup: "Vitamins", unit: "" },
      { name: "Vitamin B3", checked: false, nutrientGroup: "Vitamins", unit: "" },
      { name: "Vitamin B4", checked: false, nutrientGroup: "Vitamins", unit: "" },
    ],
    checked: false,
  },
  {
    name: "Protein",
    unit: "mg",
    nutrientGroup: "Proteins",
    rows: [
      { name: "Protein B1", checked: false, nutrientGroup: "Proteins", unit: "" },
      { name: "Protein B2", checked: false, nutrientGroup: "Proteins", unit: "" },
    ],
    checked: false,
  },
  { name: "Carbohydrate", unit: "mg", rows: [], checked: false, nutrientGroup: "" },
  { name: "Water", unit: "mg", rows: [], checked: false, nutrientGroup: "" },
  { name: "Fats", unit: "mg", rows: [], checked: false, nutrientGroup: "" },
  { name: "Fiber", unit: "mg", rows: [], checked: false, nutrientGroup: "" },
  { name: "Minerals", unit: "mg", rows: [], checked: false, nutrientGroup: "" },
];

export const Desktop = Template.bind({});

Desktop.args = {
  nutritionFilterItems: nutritionFilterItems,
};
