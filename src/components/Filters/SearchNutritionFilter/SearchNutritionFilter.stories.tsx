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

export const Desktop = Template.bind({});

Desktop.args = {
  nutritionFilterItems: nutritionFilterItems,
};
