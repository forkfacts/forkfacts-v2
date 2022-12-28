import React from "react";
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

const Template: ComponentStory<typeof SearchNutritionFilter> = (args) => (
  <SearchNutritionFilter {...args} />
);

const nutritionFilterItems: SearchNutritionFilterItem[] = [
  {
    name: "Vitamin",
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
    subItems: [
      { name: "Protein B1", checked: false },
      { name: "Protein B2", checked: false },
    ],
    checked: false,
  },
  { name: "Carbohydrate", subItems: [], checked: false },
  { name: "Water", subItems: [], checked: false },
  { name: "Fats", subItems: [], checked: false },
  { name: "Fiber", subItems: [], checked: false },
  { name: "Minerals", subItems: [], checked: false },
];

export const Mobile = Template.bind({});

Mobile.args = {
  nutritionFilterItems: nutritionFilterItems,
  onSelectNutritionFilterItem: (items: SearchNutritionFilterItem[]) => {
    console.log(items);
  },
};

Mobile.parameters = {
  viewport: {
    defaultViewport: "iphone6",
  },
};
