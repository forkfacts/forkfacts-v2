import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import { NutritionScreen } from "@forkfacts/screens";
import { nutritionTableItem } from "@forkfacts/models";

export default {
  title: "Screens/NutritionScreen",
  component: NutritionScreen,
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
    },
  },
} as ComponentMeta<typeof NutritionScreen>;

const Template: ComponentStory<typeof NutritionScreen> = (args) => <NutritionScreen {...args} />;

const filters = [
  { name: "All filters" },
  { name: "Life state" },
  { name: "Age" },
  { name: "Nutrients" },
  { name: "Measure Units" },
];
const nutritionRatesItems = [
  { name: "Protein", percentage: "10%", weight: "120g" },
  { name: "Carbs", percentage: "20%", weight: "120g" },
  { name: "Fats", percentage: "30%", weight: "120g" },
  { name: "Fiber", percentage: "40%", weight: "120g" },
];

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

const allNutrients: string[] = [
  "Protein",
  "Carbohydrate",
  "Water",
  "Vitamin",
  "Fats",
  "Fiber",
  "Minerals",
];
const availableAmounts = ["1 tablespoon", "1cup", "100g"];

export const Mobile = Template.bind({});

Mobile.args = {
  filters: filters,
  onSelectFilterItems: (item: string[]) => {
    console.log(item);
  },
  availableAmounts: availableAmounts,
  source: "USDA",
  nutritionRatesItems: nutritionRatesItems,
  nutritionTableItems: nutritionTableItems,
  allNutrients: allNutrients,
  getSelectedNutrients: (items: string[]) => {
    console.log(items);
  },
  onSelectAvailableAmounts(item: string) {
    console.log(item);
  },
};

Mobile.parameters = {
  viewport: {
    defaultViewport: "iphone6",
  },
};
