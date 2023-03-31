import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { NutritionTableRow } from "@forkfacts/models";
import { NutritionMobileTable } from "@forkfacts/components";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";

export default {
  title: "Components/DetailPageComponents/NutritionTable",
  component: NutritionMobileTable,
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
    },
  },
} as ComponentMeta<typeof NutritionMobileTable>;

const nutritionTableItems: NutritionTableRow[] = [
  {
    nutrient: "Fats",
    dailyValue: 12.9,
    amount: 30,
    nutrientGroup: "Fats",
    amountUnit: "g",
    rdi: {
      servingUnitSize: 120,
      servingSizeUnit: "g",
    },
  },
  {
    nutrient: "Carbohydrates",
    dailyValue: 12.9,
    amount: 30,
    nutrientGroup: "Fats",
    amountUnit: "g",
    rdi: { servingUnitSize: 120, servingSizeUnit: "g" },
  },
  {
    nutrient: "Minerals",
    dailyValue: null,
    nutrientGroup: "Fats",
    amountUnit: "g",
  },
  {
    nutrient: "Vitamins",
    dailyValue: null,
    nutrientGroup: "Fats",
    amountUnit: "g",
  },
  {
    nutrient: "Protein",
    dailyValue: 12.9,
    nutrientGroup: "Fats",
    amount: 30,
    amountUnit: "g",
    rdi: { servingUnitSize: 120, servingSizeUnit: "g" },
  },
];
const Template: ComponentStory<typeof NutritionMobileTable> = (args) => {
  return <NutritionMobileTable {...args} />;
};

export const Mobile = Template.bind({});
Mobile.args = {
  rows: nutritionTableItems,
};

Mobile.parameters = {
  viewport: {
    defaultViewport: "iphonexr",
  },
};
