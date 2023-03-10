import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import ChildCareOutlinedIcon from "@mui/icons-material/ChildCareOutlined";
import EscalatorWarningOutlinedIcon from "@mui/icons-material/EscalatorWarningOutlined";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import PregnantWomanOutlinedIcon from "@mui/icons-material/PregnantWomanOutlined";
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
    name: "Infant",
    icon: ChildCareOutlinedIcon,
  },
  {
    name: "Children",
    icon: EscalatorWarningOutlinedIcon,
  },
  {
    name: "Male",
    icon: PregnantWomanOutlinedIcon,
  },
  {
    name: "Female",
    icon: EscalatorWarningOutlinedIcon,
  },
  {
    name: "Pregnant",
    icon: PregnantWomanOutlinedIcon,
  },
  {
    name: "Lactation",
    icon: Person2OutlinedIcon,
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

const units = ["Plates", "Cups", "Tea spoon"];

const nutritionTableItems: NutritionTableItem[] = [
  {
    nutrient: "Fats",
    dailyValue: 12.9,
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
        dailyValue: 2.4,
        amount: "100g",
        rdi: { value: 30, weight: "g" },
      },
      {
        nutrient: "Omega 6",
        dailyValue: 2.0,
        amount: "39g",
        rdi: { value: 45, weight: "g" },
      },
      {
        nutrient: "Omega 9",
        dailyValue: 1.07,
        amount: "4g",
        rdi: { value: 119, weight: "g" },
      },
    ],
  },
  {
    nutrient: "Carbohydrates",
    dailyValue: 12.9,
    amount: "30g",
    rdi: { value: 120, weight: "g" },
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
        dailyValue: 2.4,
        amount: "100g",
        rdi: { value: 30, weight: "g" },
      },
      {
        nutrient: "Omega 6",
        dailyValue: 2.0,
        amount: "39g",
        rdi: { value: 45, weight: "g" },
      },
      {
        nutrient: "Omega 9",
        dailyValue: 1.07,
        amount: "4g",
        rdi: { value: 119, weight: "g" },
      },
    ],
  },
  {
    nutrient: "Carbohydrates",
    dailyValue: 12.9,
    amount: "30g",
    rdi: { value: 120, weight: "g" },
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
        dailyValue: 2.4,
        amount: "100g",
        rdi: { value: 30, weight: "g" },
      },
      {
        nutrient: "Omega 6",
        dailyValue: 2.0,
        amount: "39g",
        rdi: { value: 45, weight: "g" },
      },
      {
        nutrient: "Omega 9",
        dailyValue: 1.07,
        amount: "4g",
        rdi: { value: 119, weight: "g" },
      },
    ],
  },
  {
    nutrient: "Minerals",
    dailyValue: 12.9,
    amount: "30g",
    rdi: { value: 120, weight: "g" },
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
        dailyValue: 2.4,
        amount: "100g",
        rdi: { value: 30, weight: "g" },
      },
      {
        nutrient: "Omega 6",
        dailyValue: 2.0,
        amount: "39g",
        rdi: { value: 45, weight: "g" },
      },
      {
        nutrient: "Omega 9",
        dailyValue: 1.07,
        amount: "4g",
        rdi: { value: 119, weight: "g" },
      },
    ],
  },
  {
    nutrient: "Vitamins",
    dailyValue: 12.9,
    amount: "30g",
    rdi: { value: 120, weight: "g" },
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
        dailyValue: 2.4,
        amount: "100g",
        rdi: { value: 30, weight: "g" },
      },
      {
        nutrient: "Omega 6",
        dailyValue: 2.0,
        amount: "39g",
        rdi: { value: 45, weight: "g" },
      },
      {
        nutrient: "Omega 9",
        dailyValue: 1.07,
        amount: "4g",
        rdi: { value: 119, weight: "g" },
      },
    ],
  },
  {
    nutrient: "Protein",
    dailyValue: 12.9,
    amount: "30g",
    rdi: { value: 120, weight: "g" },
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
        dailyValue: 2.4,
        amount: "100g",
        rdi: { value: 30, weight: "g" },
      },
      {
        nutrient: "Omega 6",
        dailyValue: 2.0,
        amount: "39g",
        rdi: { value: 4, weight: "g" },
      },
      {
        nutrient: "Omega 9",
        dailyValue: 1.07,
        amount: "4g",
        rdi: { value: 119, weight: "g" },
      },
    ],
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
        width: { sm: "100%", md: "80%" },
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
  measurementFilterItems: ["US", "Metric"],
  lifeStageItems,
  ageItems,
  nutritionFilterItems,
  units,
  nutritionTableItems,
};
