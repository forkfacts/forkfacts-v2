import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import { SearchNutritionFilter } from "@forkfacts/components";
import { SearchNutritionFilterItem } from "@forkfacts/models";

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
  const [selectSearchNutrition, seSelectedSearchNutrition] = useState(
    [] as SearchNutritionFilterItem[]
  );
  return (
    <SearchNutritionFilter {...args} onSelectNutritionFilterItem={seSelectedSearchNutrition} />
  );
};

const nutritionFilterItems: SearchNutritionFilterItem[] = [
  {
    name: "Vitamin",
    unit: "mg",
    subItems: [
      { name: "Vitamin B1", checked: false },
      { name: "Vitamin B2", checked: false },
      { name: "Vitamin B3", checked: false },
      { name: "Vitamin B4", checked: false },
    ],
    checked: false,
  },
  {
    name: "Protein",
    unit: "mg",
    subItems: [
      { name: "Protein B1", checked: false },
      { name: "Protein B2", checked: false },
    ],
    checked: false,
  },
  { name: "Carbohydrate", unit: "mg", subItems: [], checked: false },
  { name: "Water", unit: "mg", subItems: [], checked: false },
  { name: "Fats", unit: "mg", subItems: [], checked: false },
  { name: "Fiber", unit: "mg", subItems: [], checked: false },
  { name: "Minerals", unit: "mg", subItems: [], checked: false },
];

export const Desktop = Template.bind({});

Desktop.args = {
  nutritionFilterItems: nutritionFilterItems,
};
