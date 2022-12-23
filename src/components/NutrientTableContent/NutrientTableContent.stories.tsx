import React from "react";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { NutritionTableContent } from "@forkfacts/components";
import { NutritionTableItem } from "@forkfacts/models";

export default {
  title: "Components/Nutrition/NutritionTableContent",
  component: NutritionTableContent,
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
    },
  },
} as ComponentMeta<typeof NutritionTableContent>;

const Template: ComponentStory<typeof NutritionTableContent> = (args) => (
  <NutritionTableContent {...args} />
);

const nutritionTableItems: NutritionTableItem[] = [
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

export const Mobile = Template.bind({});

Mobile.args = {
  nutritionTableItems: nutritionTableItems,
};

Mobile.parameters = {
  viewport: {
    defaultViewport: "iphone6",
  },
};
