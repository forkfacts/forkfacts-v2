import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Baby, Kids, Lactation, Male, PregnantWoman, Woman } from "@forkfacts/icons";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import { NutritionDetailsTab } from "@forkfacts/components";
import { RdiAge, NutritionTableRow, lifeStageItem, SelectedNutrient } from "@forkfacts/models";
import { Box } from "@mui/material";

export default {
  title: "Components/DetailPageComponents/NutritionDetailsTab",
  component: NutritionDetailsTab,
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
    },
  },
} as ComponentMeta<typeof NutritionDetailsTab>;

const nutritionSummaryItems = [
  { name: "CALORIES", percentage: 20, weight: "450g" },
  { name: "CARBS", percentage: 20, weight: "120g" },
  { name: "PROTEINS", percentage: 20, weight: "50g" },
  { name: "FATS", percentage: 20, weight: "112g" },
  { name: "SUGARS", percentage: 20, weight: "9g" },
];

const lifeStageItems: lifeStageItem[] = [
  {
    name: "Children",
    icon: Kids,
  },
  {
    name: "Infants",
    icon: Baby,
  },
  {
    name: "females",
    icon: Woman,
  },
  {
    name: "males",
    icon: Male,
  },
  {
    name: "Pregnant",
    icon: PregnantWoman,
  },
  {
    name: "Lactation",
    icon: Lactation,
  },
];
const ageItems: RdiAge[] = [
  {
    start: 9,
    end: 13,
    ageUnit: "year",
  },
  {
    start: 14,
    end: 18,
    ageUnit: "year",
  },
  {
    start: 19,
    end: 30,
    ageUnit: "year",
  },
  {
    start: 31,
    end: 50,
    ageUnit: "year",
  },
  {
    start: 51,
    end: 70,
    ageUnit: "year",
  },
  {
    start: 70,
    ageUnit: "year",
  },
];

const nutritionFilterItems: SelectedNutrient[] = [
  {
    name: "Vitamin",
    nutrientGroup: "Vitamins",
    rows: [
      { name: "Vitamin B1", checked: false, nutrientGroup: "Vitamins" },
      { name: "Vitamin B2", checked: false, nutrientGroup: "Vitamins" },
      { name: "Vitamin B3", checked: false, nutrientGroup: "Vitamins" },
      { name: "Vitamin B4", checked: false, nutrientGroup: "Vitamins" },
    ],
    checked: false,
  },
  {
    name: "Protein",
    nutrientGroup: "Proteins",
    rows: [
      { name: "Protein B1", checked: false, nutrientGroup: "Proteins" },
      { name: "Protein B2", checked: false, nutrientGroup: "Proteins" },
    ],
    checked: false,
  },
  { name: "Carbohydrate", rows: [], checked: false, nutrientGroup: "" },
  { name: "Water", rows: [], checked: false, nutrientGroup: "" },
  { name: "Fats", rows: [], checked: false, nutrientGroup: "" },
  { name: "Fiber", rows: [], checked: false, nutrientGroup: "" },
  { name: "Minerals", rows: [], checked: false, nutrientGroup: "" },
];

const units = ["Plates", "Cups", "Teaspoon"];
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

const Template: ComponentStory<typeof NutritionDetailsTab> = (args) => {
  const [selectSearchNutrition, seSelectedSearchNutrition] = useState([] as SelectedNutrient[]);
  const [unit, setUnit] = React.useState("Cups");
  return (
    <Box
      sx={{
        width: { sm: "100%", md: "90%" },
        m: "auto",
      }}
    >
      <NutritionDetailsTab
        {...args}
        //onSelectNutritionFilterItem={seSelectedSearchNutrition} // todo(h2): not sure why it is broken
        onSelectUnit={setUnit}
      />
    </Box>
  );
};

export const Desktop = Template.bind({});

Desktop.args = {
  nutritionSummaryItems: nutritionSummaryItems,
  measurementFilterItems: ["Metric", "US"],
  lifeStageItems,
  ageItems,
  nutritionFilterItems,
  units,
  nutritionTableItems: nutritionTableItems,
};

export const Mobile = Template.bind({});

Mobile.parameters = {
  viewport: {
    defaultViewport: "iphonexr",
  },
};

Mobile.args = {
  nutritionSummaryItems: nutritionSummaryItems,
  measurementFilterItems: ["Metric", "US"],
  lifeStageItems,
  ageItems,
  nutritionFilterItems,
  units,
  nutritionTableItems,
};

export const Tablet = Template.bind({});

Tablet.parameters = {
  viewport: {
    defaultViewport: "ipad",
  },
};

Tablet.args = {
  nutritionSummaryItems: nutritionSummaryItems,
  measurementFilterItems: ["Metric", "US"],
  lifeStageItems,
  ageItems,
  nutritionFilterItems,
  units,
  nutritionTableItems,
};
