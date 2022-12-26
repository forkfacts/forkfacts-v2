import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import { NutritionTable } from "@forkfacts/components";
import { nutritionTableItem, filterItem } from "@forkfacts/models";

export default {
  title: "Components/Nutrition/NutritionTable",
  component: NutritionTable,
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
    },
  },
} as ComponentMeta<typeof NutritionTable>;

const Template: ComponentStory<typeof NutritionTable> = (args) => <NutritionTable {...args} />;

const nutritionTableItems: nutritionTableItem[] = [
  {
    title: "Total Carbohydrate",
    amount: 4,
    amountUnit: "g",
    content: [
      {
        nutrient: "Carbohydrate  2g",
        valuePercent: "17.67%",
        rdi: {
          amount: "130",
          unit: "g",
        },
      },
      {
        nutrient: "Sugar  2g",
        valuePercent: "",
        rdi: { amount: "15", unit: "g" },
      },
      {
        nutrient: "Starch  2g",
        valuePercent: "",
        rdi: {
          amount: "12.6",
          unit: "g",
        },
      },
    ],
  },
  {
    title: "Protein",
    amount: 11,
    amountUnit: "g",
    content: [{ nutrient: "Protein 2g", valuePercent: "1.61%", rdi: { amount: "46", unit: "g" } }],
  },
];
const allNutrients: filterItem[] = [
  { name: "Protein", amount: 0 },
  { name: "Fiber", amount: 0 },
  { name: "Carbohydrate", amount: 2 },
  { name: "Minerals", amount: 16 },
  { name: "Vitamin", amount: 15 },
  { name: "Fats", amount: 4 },
  { name: "Water", amount: 0 },
];

export const Mobile = Template.bind({});

Mobile.args = {
  nutritionTableItems: nutritionTableItems,
  allNutrients: allNutrients,
  getSelectedNutrients: (items: string[] | null) => {
    console.log(items);
  },
};

Mobile.parameters = {
  viewport: {
    defaultViewport: "iphone6",
  },
};
