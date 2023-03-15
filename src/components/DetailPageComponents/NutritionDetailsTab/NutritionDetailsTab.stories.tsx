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
    name: "Infant",
    icon: Baby,
  },
  {
    name: "Female",
    icon: Woman,
  },
  {
    name: "Male",
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
    unit: "years",
  },
  {
    start: 14,
    end: 18,
    unit: "years",
  },
  {
    start: 19,
    end: 30,
    unit: "years",
  },
  {
    start: 31,
    end: 50,
    unit: "years",
  },
  {
    start: 51,
    end: 70,
    unit: "years",
  },
  {
    end: 70,
    unit: "years",
  },
];

const nutritionFilterItems: SearchNutritionFilterItem[] = [
  { name: "Carbohydrate", subItems: [], checked: false },
  {
    name: "Protein",
    subItems: [
      { name: "Protein B1", checked: false },
      { name: "Protein B2", checked: false },
    ],
    checked: false,
  },
  {
    name: "Vitamin",
    subItems: [
      { name: "Vitamin A", checked: false },
      { name: "Vitamin B1", checked: false },
      { name: "Vitamin B2", checked: false },
      { name: "Vitamin B3", checked: false },
      { name: "Vitamin B4", checked: false },
      { name: "Vitamin C", checked: false },
      { name: "Vitamin D", checked: false },
      { name: "Vitamin E", checked: false },
    ],
    checked: false,
  },
  { name: "Fats", subItems: [], checked: false },
  { name: "Minerals", subItems: [], checked: false },
  { name: "Water", subItems: [], checked: false },
  { name: "Fiber", subItems: [], checked: false },
];

const units = ["Plates", "Cups", "TeaSpoon"];

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
const DesktopNutritionTableItems: NutritionTableItem[] = [
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
        amount: "120g",
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

const Template: ComponentStory<typeof NutritionDetailsTab> = (args) => {
  const [selectLifeStage, setSelectedLifeStage] = useState("");
  const [selectAge, setSelectedAge] = useState<ageItem>({} as ageItem);
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
        onSelectLifeStageItem={setSelectedLifeStage}
        onSelectAgeItem={setSelectedAge}
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
  nutritionTableItems: DesktopNutritionTableItems,
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
