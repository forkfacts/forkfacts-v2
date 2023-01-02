import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import { NutritionScreen } from "@forkfacts/screens";
import ChildCareOutlinedIcon from "@mui/icons-material/ChildCareOutlined";
import EscalatorWarningOutlinedIcon from "@mui/icons-material/EscalatorWarningOutlined";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import PregnantWomanOutlinedIcon from "@mui/icons-material/PregnantWomanOutlined";
import { filterButtonItem } from "@forkfacts/models";

import {
  nutritionTableItem,
  filterItem,
  SearchNutritionFilterItem,
  ageItem,
  lifeStageItem,
} from "@forkfacts/models";

export default {
  title: "Screens/NutritionScreen",
  component: NutritionScreen,
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
    },
  },
} as ComponentMeta<typeof NutritionScreen>;

const Template: ComponentStory<typeof NutritionScreen> = (args) => <NutritionScreen {...args} />;

const filters: filterButtonItem[] = [
  { name: "All filters" },
  { name: "Life stage" },
  { name: "Age" },
  { name: "Nutrients" },
  { name: "Measure Units" },
];
const nutritionSummaryItems = [
  { name: "Protein", percentage: 10, weight: "120g" },
  { name: "Carbs", percentage: 20, weight: "120g" },
  { name: "Fats", percentage: 30, weight: "120g" },
  { name: "Fiber", percentage: 40, weight: "120g" },
];

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
        valuePercent: 17.67,
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
        valuePercent: null,
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
const allNutrients: filterItem[] = [
  { name: "Protein", amount: 0 },
  { name: "Fiber", amount: 0 },
  { name: "Carbohydrate", amount: 2 },
  { name: "Minerals", amount: 16 },
  { name: "Vitamin", amount: 15 },
  { name: "Fats", amount: 4 },
  { name: "Water", amount: 0 },
];

const availableAmounts = ["1 tablespoon", "1 cup", "100 g"];

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
    name: "Location",
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
  {
    name: "Vitamin",
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
    subItems: [
      { name: "Protein B1", checked: false },
      { name: "Protein B2", checked: false },
    ],
    checked: false,
  },
  { name: "Carbohydrate", subItems: [], checked: false },
  { name: "Water", subItems: [], checked: false },
  { name: "Fats", subItems: [], checked: false },
  { name: "Fiber", subItems: [], checked: false },
  { name: "Minerals", subItems: [], checked: false },
];

export const Mobile = Template.bind({});

Mobile.args = {
  filters: filters,
  servingSizeAmounts: availableAmounts,
  source: "USDA",
  nutritionSummaryItems: nutritionSummaryItems,
  nutritionTableItems: nutritionTableItems,
  allNutrients: allNutrients,
  getSelectedNutrients: (items: string[]) => {
    console.log(items);
  },
  onSelectServingSizeAmount: (item: string) => {
    console.log(item);
  },
  lifeStageItems: lifeStageItems,
  ageItems: ageItems,
  nutritionFilterItems: nutritionFilterItems,
  measurementFilterItems: ["US", "Metric"],
  onSelectFilterPageData: (item) => {
    console.log(item);
  },
};

Mobile.parameters = {
  viewport: {
    defaultViewport: "iphone6",
  },
};
