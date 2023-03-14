import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { NutritionTableItem } from "@forkfacts/models";
import { NutritionMobileTable } from "@forkfacts/components";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";

export default {
  title: "Components/DetailsPageComponents/NutritionTable",
  component: NutritionMobileTable,
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
    },
  },
} as ComponentMeta<typeof NutritionMobileTable>;

const nutritionTableItems: NutritionTableItem[] = [
  {
    nutrient: "Minerals",
    dailyValue: null,
    amount: null,
    rdi: { value: null, weight: "g" },
    nutrientContents: [
      {
        nutrient: "Chlorine",
        dailyValue: 1.7,
        amount: "100g",
        rdi: { value: 30, weight: "g" },
      },
      {
        nutrient: "Iron",
        dailyValue: 1.7,
        amount: "120g",
        rdi: { value: 45, weight: "g" },
      },
      {
        nutrient: "Magnesium",
        dailyValue: 9.05,
        amount: "39g",
        rdi: { value: 120, weight: "g" },
      },
      {
        nutrient: "Phosphorus",
        dailyValue: 2.0,
        amount: "g",
        rdi: { value: 11, weight: "g" },
      },
      {
        nutrient: "Potassium",
        dailyValue: 1.07,
        amount: "4g",
        rdi: { value: 112, weight: "g" },
      },
      {
        nutrient: "Sodium",
        dailyValue: 1.7,
        amount: "120g",
        rdi: { value: 45, weight: "g" },
      },
      {
        nutrient: "Sulphur",
        dailyValue: 9.05,
        amount: "120g",
        rdi: { value: 120, weight: "g" },
      },
      {
        nutrient: "Zinc",
        dailyValue: 2.0,
        amount: "39g",
        rdi: { value: 11, weight: "g" },
      },
      {
        nutrient: "Chromium",
        dailyValue: 1.07,
        amount: "4g",
        rdi: { value: 112, weight: "g" },
      },
    ],
  },
  {
    nutrient: "Fats",
    dailyValue: 12.91,
    amount: "30g",
    rdi: {
      value: 120,
      weight: "g",
    },
    nutrientContents: [
      {
        nutrient: "Saturated",
        dailyValue: 2.4,
        amount: "100g",
        rdi: { value: 30, weight: "g" },
      },
      {
        nutrient: "Trans",
        dailyValue: 1.7,
        amount: "35g",
        rdi: { value: 45, weight: "g" },
      },
      {
        nutrient: "Omega 3",
        dailyValue: 9.05,
        amount: "120g",
        rdi: { value: 120, weight: "g" },
      },
      {
        nutrient: "Omega 6",
        dailyValue: 2.0,
        amount: "39g",
        rdi: { value: 11, weight: "g" },
      },
      {
        nutrient: "Omega 9",
        dailyValue: 1.07,
        amount: "4g",
        rdi: { value: 112, weight: "g" },
      },
    ],
  },
  {
    nutrient: "Carbohydrates",
    dailyValue: 12.91,
    amount: "30g",
    rdi: { value: 120, weight: "g" },
    nutrientContents: [
      {
        nutrient: "Sugar",
        dailyValue: 2.4,
        amount: "100g",
        rdi: { value: 30, weight: "g" },
      },
      {
        nutrient: "Starch",
        dailyValue: 1.7,
        amount: "35g",
        rdi: { value: 45, weight: "g" },
      },
    ],
  },
  {
    nutrient: "Vitamins",
    dailyValue: null,
    amount: null,
    rdi: { value: null, weight: "g" },
    nutrientContents: [
      {
        nutrient: "Vitamin A",
        dailyValue: 2.4,
        amount: "100g",
        rdi: { value: 30, weight: "g" },
      },
      {
        nutrient: "Vitamin B1",
        dailyValue: 1.7,
        amount: "45g",
        rdi: { value: 45, weight: "g" },
      },
      {
        nutrient: "Vitamin B12",
        dailyValue: 9.05,
        amount: "120g",
        rdi: { value: 30, weight: "g" },
      },
      {
        nutrient: "Vitamin C",
        dailyValue: 2.0,
        amount: "11g",
        rdi: { value: 45, weight: "g" },
      },
      {
        nutrient: "Vitamin D",
        dailyValue: 1.07,
        amount: "4g",
        rdi: { value: 112, weight: "g" },
      },
    ],
  },
  {
    nutrient: "Protein",
    dailyValue: 12.91,
    amount: "30g",
    rdi: { value: 120, weight: "g" },
    nutrientContents: [],
  },
];

const Template: ComponentStory<typeof NutritionMobileTable> = (args) => {
  return <NutritionMobileTable {...args} />;
};

export const Mobile = Template.bind({});
Mobile.args = {
  nutritionTableItems: nutritionTableItems,
};

Mobile.parameters = {
  viewport: {
    defaultViewport: "iphonexr",
  },
};
