import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { NutritionTableRow } from "@forkfacts/models";
import { NutritionDesktopTable } from "@forkfacts/components";
import { Box } from "@mui/material";

export default {
  title: "Components/DetailPageComponents/NutritionTable",
  component: NutritionDesktopTable,
} as ComponentMeta<typeof NutritionDesktopTable>;

const nutritionTableItems: NutritionTableRow[] = [
  {
    nutrient: "Fats",
    dailyValue: 12.9,
    amount: 30,
    nutrientGroup: "Fats",
    amountUnit: "g",
    rdi: {
      value: 120,
      weight: "g",
    },
  },
  {
    nutrient: "Carbohydrates",
    dailyValue: 12.9,
    amount: 30,
    nutrientGroup: "Fats",
    amountUnit: "g",
    rdi: { value: 120, weight: "g" },
  },
  {
    nutrient: "Minerals",
    dailyValue: null,
    nutrientGroup: "Fats",
    amountUnit: "g",
    rdi: { value: null, weight: "g" },
  },
  {
    nutrient: "Vitamins",
    dailyValue: null,
    nutrientGroup: "Fats",
    amountUnit: "g",
    rdi: { value: null, weight: "g" },
  },
  {
    nutrient: "Protein",
    dailyValue: 12.9,
    nutrientGroup: "Fats",
    amount: 30,
    amountUnit: "g",
    rdi: { value: 120, weight: "g" },
  },
];

const Template: ComponentStory<typeof NutritionDesktopTable> = (args) => {
  return (
    <Box
      sx={{
        width: { sm: "100%", md: "90%" },
        m: "auto",
      }}
    >
      <NutritionDesktopTable {...args} />
    </Box>
  );
};

export const Desktop = Template.bind({});

Desktop.args = {
  rows: nutritionTableItems,
};
