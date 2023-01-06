import React from "react";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { NutritionTableContent } from "@forkfacts/components";
import { nutritionTableItem } from "@forkfacts/models";

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

const nutritionTableItems: nutritionTableItem[] = [
  {
    nutrient: "Total Carbohydrate",
    amount: 4,
    amountUnit: "g",
    content: [
      {
        nutrient: "Carbohydrate",
        value: {
          amount: 2,
          unit: "g",
        },
        valuePercent: null,
        rdi: {
          amount: 130,
          unit: "g",
        },
      },
      {
        nutrient: "Sugar",
        value: {
          amount: 2,
          unit: "g",
        },
        valuePercent: 17.67,
        rdi: { amount: 15, unit: "g" },
      },
      {
        nutrient: "Starch",
        value: {
          amount: 2,
          unit: "g",
        },
        valuePercent: null,
        rdi: {
          amount: 12.6,
          unit: "g",
        },
      },
    ],
  },
  {
    nutrient: "Protein",
    amount: 11,
    amountUnit: "g",
    content: [
      {
        nutrient: "Protein",
        value: {
          amount: 2,
          unit: "g",
        },
        valuePercent: 1.61,
        rdi: {
          amount: 46,
          unit: "g",
        },
      },
    ],
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
