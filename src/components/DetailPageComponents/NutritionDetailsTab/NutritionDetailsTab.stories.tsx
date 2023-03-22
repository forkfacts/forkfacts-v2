import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Baby, Kids, Lactation, Male, PregnantWoman, Woman } from "@forkfacts/icons";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import { NutritionDetailsTab } from "@forkfacts/components";
import {
  ageItem,
  NutritionTableItem,
  lifeStageItem,
  SearchNutritionFilterItem,
} from "@forkfacts/models";
import { Box } from "@mui/material";

export default {
  title: "Components/DetailsPageComponents/NutritionDetailsTab",
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
const ageItems: ageItem[] = [
  {
    start: 9,
    end: 13,
    ageUnit: "years",
  },
  {
    start: 14,
    end: 18,
    ageUnit: "years",
  },
  {
    start: 19,
    end: 30,
    ageUnit: "years",
  },
  {
    start: 31,
    end: 50,
    ageUnit: "years",
  },
  {
    start: 51,
    end: 70,
    ageUnit: "years",
  },
  {
    end: 70,
    ageUnit: "years",
  },
];

const nutritionFilterItems: SearchNutritionFilterItem[] = [
  {
    name: "Vitamin",
    unit: "mg",
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
    unit: "mg",
    subItems: [
      { name: "Protein B1", checked: false },
      { name: "Protein B2", checked: false },
    ],
    checked: false,
  },
  { name: "Carbohydrate", unit: "mg", subItems: [], checked: false },
  { name: "Water", unit: "mg", subItems: [], checked: false },
  { name: "Fats", unit: "mg", subItems: [], checked: false },
  { name: "Fiber", unit: "mg", subItems: [], checked: false },
  { name: "Minerals", unit: "mg", subItems: [], checked: false },
];

const units = ["Plates", "Cups", "Teaspoon"];

const nutritionTableItems: NutritionTableItem[] = [
  {
    nutrient: "Fats",
    dailyValue: 12.9,
    amount: 30,
    amountUnit: "g",
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
    dailyValue: 12.9,
    amount: 30,
    amountUnit: "g",
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
    nutrient: "Minerals",
    dailyValue: null,
    amountUnit: "g",
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
        amount: "39g",
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
    nutrient: "Vitamins",
    dailyValue: null,
    amountUnit: "g",
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
    dailyValue: 12.9,
    amount: 30,
    amountUnit: "g",
    rdi: { value: 120, weight: "g" },
    nutrientContents: [],
  },
];

const Template: ComponentStory<typeof NutritionDetailsTab> = (args) => {
  const [selectSearchNutrition, seSelectedSearchNutrition] = useState(
    [] as SearchNutritionFilterItem[]
  );
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
        onSelectNutritionFilterItem={seSelectedSearchNutrition}
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
