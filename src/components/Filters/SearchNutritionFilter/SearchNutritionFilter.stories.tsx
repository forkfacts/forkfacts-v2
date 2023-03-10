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
  { name: "Carbohydrate", subItems: [], checked: false },
  {
    name: "Protein",
    subItems: [
      { name: "Protein B1", checked: false },
      { name: "Protein B2", checked: false },
    ],
    checked: false,
  },
  {
    name: "Vitamin",
    subItems: [
      { name: "Vitamin A", checked: false },
      { name: "Vitamin B1", checked: false },
      { name: "Vitamin B2", checked: false },
      { name: "Vitamin B3", checked: false },
      { name: "Vitamin B4", checked: false },
      { name: "Vitamin C", checked: false },
      { name: "Vitamin D", checked: false },
      { name: "Vitamin E", checked: false },
    ],
    checked: false,
  },
  { name: "Fats", subItems: [], checked: false },
  { name: "Minerals", subItems: [], checked: false },
  { name: "Water", subItems: [], checked: false },
  { name: "Fiber", subItems: [], checked: false },
];

export const Desktop = Template.bind({});

Desktop.args = {
  nutritionFilterItems: nutritionFilterItems,
};
