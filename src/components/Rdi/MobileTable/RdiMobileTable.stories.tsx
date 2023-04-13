import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import { RdiMobileTable } from "@forkfacts/components";
import { RdiNutritionTableRow } from "@forkfacts/models";

export default {
  title: "Components/Rdi/RdiMobileTable",
  component: RdiMobileTable,
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
    },
  },
} as ComponentMeta<typeof RdiMobileTable>;

const nutritionTableItems: RdiNutritionTableRow[] = [
  {
    nutrient: "Fats",
    recommendedAmount: 30,
    nutrientGroup: "Fats",
    recommendedUnit: "g",
  },
  {
    nutrient: "Carbohydrates",
    recommendedAmount: 30,
    nutrientGroup: "Fats",
    recommendedUnit: "g",
  },
  {
    nutrient: "Minerals",
    recommendedAmount: 40,
    nutrientGroup: "Minerals",
    recommendedUnit: "g",
  },
  {
    nutrient: "Vitamins A",
    recommendedAmount: 400,
    nutrientGroup: "Vitamins",
    recommendedUnit: "ug/d",
  },
  {
    nutrient: "Vitamins B",
    recommendedAmount: 25,
    nutrientGroup: "Vitamins",
    recommendedUnit: "mg/d",
  },
  {
    nutrient: "Vitamins C",
    recommendedAmount: 25,
    nutrientGroup: "Vitamins",
    recommendedUnit: "mg/d",
  },
  {
    nutrient: "Vitamins D",
    recommendedAmount: 15,
    nutrientGroup: "Vitamins",
    recommendedUnit: "mg/d",
  },
  {
    nutrient: "Vitamins E",
    recommendedAmount: 7,
    nutrientGroup: "Vitamins",
    recommendedUnit: "mg/d",
  },
  {
    nutrient: "Vitamins K",
    recommendedAmount: 55,
    nutrientGroup: "Vitamins",
    recommendedUnit: "ug/d",
  },
  {
    nutrient: "Thiamin",
    recommendedAmount: 0.6,
    nutrientGroup: "Vitamins",
    recommendedUnit: "mg/d",
  },
  {
    nutrient: "Protein",
    nutrientGroup: "Protein",
    recommendedAmount: 30,
    recommendedUnit: "g",
  },
];

const Template: ComponentStory<typeof RdiMobileTable> = (args) => <RdiMobileTable {...args} />;

export const Mobile = Template.bind({});

Mobile.args = {
  rows: nutritionTableItems,
};

Mobile.parameters = {
  viewport: {
    defaultViewport: "iphonexr",
  },
};

export const Tablet = Template.bind({});

Tablet.args = {
  rows: nutritionTableItems,
};

Tablet.parameters = {
  viewport: {
    defaultViewport: "ipad",
  },
};
