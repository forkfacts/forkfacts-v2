import React, { useState } from "react";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import EggAltOutlinedIcon from "@mui/icons-material/EggAltOutlined";
import EmojiFoodBeverageOutlinedIcon from "@mui/icons-material/EmojiFoodBeverageOutlined";
import TipsAndUpdatesOutlinedIcon from "@mui/icons-material/TipsAndUpdatesOutlined";
import CompareArrowsOutlinedIcon from "@mui/icons-material/CompareArrowsOutlined";
import { Baby, Kids, Lactation, Male, PregnantWoman, Woman } from "@forkfacts/icons";
import FastfoodOutlinedIcon from "@mui/icons-material/FastfoodOutlined";
import SmokingRoomsOutlinedIcon from "@mui/icons-material/SmokingRoomsOutlined";
import LibraryBooksOutlinedIcon from "@mui/icons-material/LibraryBooksOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import AutoStoriesOutlinedIcon from "@mui/icons-material/AutoStoriesOutlined";
import { DetailsPageScreen } from "@forkfacts/screens";
import {
  DetailsPageTitlesItem,
  ageItem,
  compareTableItem,
  filterItem,
  lifeStageItem,
  SearchNutritionFilterItem,
  sidebarItem,
  NutritionTableItem,
} from "@forkfacts/models";
export default {
  title: "Screens/DetailsPageScreen",
  component: DetailsPageScreen,
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
    },
  },
} as ComponentMeta<typeof DetailsPageScreen>;

const sidebarItems: sidebarItem[] = [
  { label: "Food", Icon: EggAltOutlinedIcon, link: "/food" },
  { label: "Recipes", Icon: EmojiFoodBeverageOutlinedIcon, link: "/recipe" },
  { label: "Library", Icon: LibraryBooksOutlinedIcon, link: "/library" },
  { label: "Cookbook", Icon: AutoStoriesOutlinedIcon, link: "/Cookbook" },
  { label: "Grocery List", Icon: ShoppingCartOutlinedIcon, link: "/grocery-list" },
];

const tabItems = [
  { label: "Nutrition", Icon: FastfoodOutlinedIcon, link: "/food" },
  { label: "Recipes", Icon: EmojiFoodBeverageOutlinedIcon, link: "/recipe" },
  { label: "Emissions", Icon: SmokingRoomsOutlinedIcon, link: "/library" },
  { label: "Tips", Icon: TipsAndUpdatesOutlinedIcon, link: "/tips" },
  { label: "Compare foods", Icon: CompareArrowsOutlinedIcon, link: "/recipe" },
];

const DetailsPageTitlesItems: DetailsPageTitlesItem[] = [
  {
    title: "Banana, overripe, raw",
  },
  {
    title: "Banana, ripe and slightly ripe, raw",
  },
  {
    title: "Banana, raw",
  },
  {
    title: "Banana, raw",
  },
];

const detailsHeaderValues = {
  img: "/banana.svg",
  name: "Banana, overripe, raw",
  category: "Fruits and Fruit Juices",
  nutritionValues: [
    { name: "Gluten - Free", icon: "/details1.svg" },
    { name: "Vegan", icon: "/details2.svg" },
    { name: "Good for diabetes", icon: "/details3.svg" },
  ],
  tag: "High in Vitamin C and Calcium",
};

const compareTableItemRows: compareTableItem[] = [
  {
    foodName: "Beet greens",
    Calories: 19,
    "Beta carotene": 4,
    Vitamin: 30,
    Calcium: 119,
    Iron: 3,
  },
  {
    foodName: "Collards",
    Calories: 19,
    "Beta carotene": 2,
    Vitamin: 23,
    Calcium: 117,
    Iron: 0.6,
  },
  {
    foodName: "Dandelion greens",
    Calories: 45,
    "Beta carotene": 0,
    Vitamin: 35,
    Calcium: 187,
    Iron: 3,
  },
  {
    foodName: "Kale",
    Calories: 50,
    "Beta carotene": 5,
    Vitamin: 120,
    Calcium: 135,
    Iron: 2,
  },
  {
    foodName: "Mustard greens",
    Calories: 26,
    "Beta carotene": 3,
    Vitamin: 70,
    Calcium: 103,
    Iron: 1,
  },
  {
    foodName: "Swiss chard",
    Calories: 19,
    "Beta carotene": 2,
    Vitamin: 30,
    Calcium: 51,
    Iron: 2,
  },
  {
    foodName: "Tumip greens",
    Calories: 27,
    "Beta carotene": 6,
    Vitamin: 60,
    Calcium: 190,
    Iron: 1,
  },
];
const values: filterItem[] = [
  {
    name: "Beta Carotene (mg)",
  },
  {
    name: "Collards",
  },
  {
    name: "Dandelion greens",
  },
  {
    name: "Kale",
  },
  {
    name: "Mustard greens",
  },
  {
    name: "Swiss chard",
  },
  {
    name: "Tumip greens",
  },
];

const nutritionSummaryItems = [
  { name: "CALORIES", percentage: 20, weight: "450g" },
  { name: "CARBS", percentage: 20, weight: "120g" },
  { name: "PROTEINS", percentage: 20, weight: "50g" },
  { name: "FATS", percentage: 20, weight: "112g" },
  { name: "SUGARS", percentage: 20, weight: "9g" },
];

const Template: ComponentStory<typeof DetailsPageScreen> = (args) => {
  const [_, setSelectedNutrients] = useState<string[]>([]);
  const [selectLifeStage, setSelectedLifeStage] = useState("");
  const [selectAge, setSelectedAge] = useState<ageItem>({} as ageItem);
  const [selectSearchNutrition, seSelectedSearchNutrition] = useState(
    [] as SearchNutritionFilterItem[]
  );
  const [unit, setUnit] = React.useState("Cups");
  return (
    <DetailsPageScreen
      {...args}
      getSelectedNutrients={setSelectedNutrients}
      onSelectLifeStageItem={setSelectedLifeStage}
      onSelectAgeItem={setSelectedAge}
      onSelectNutritionFilterItem={seSelectedSearchNutrition}
      onSelectUnit={setUnit}
    />
  );
};

const units = ["Plates", "Cups", "Teaspoon"];

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
export const Desktop = Template.bind({});

Desktop.args = {
  sidebarItems,
  DetailsPageTitlesItems: DetailsPageTitlesItems,
  detailsHeaderValues: detailsHeaderValues,
  tabItems: tabItems,
  compareTableItems: compareTableItemRows,
  compareTableDetails: {
    name: "Comparing Greens",
    quantityAmount: "3 1/2 OUNCES RAW (2 TO 3 CUPS)",
  },
  ageItems,
  lifeStageItems,
  nutritionFilterItems,
  nutritionSummaryItems,
  onSelectFilterItems: (item: string[]) => {
    console.log(item);
  },
  measurementFilterItems: ["Metric", "US"],
  nutritionTableItems: nutritionTableItems,
  units,
  values: values,
};

export const Mobile = Template.bind({});

Mobile.args = {
  sidebarItems,
  DetailsPageTitlesItems: DetailsPageTitlesItems,
  detailsHeaderValues: detailsHeaderValues,
  tabItems: tabItems,
  compareTableItems: compareTableItemRows,
  compareTableDetails: {
    name: "Comparing Greens",
    quantityAmount: "3 1/2 OUNCES RAW (2 TO 3 CUPS)",
  },
  ageItems,
  lifeStageItems,
  nutritionFilterItems,
  nutritionSummaryItems,
  onSelectFilterItems: (item: string[]) => {
    console.log(item);
  },
  measurementFilterItems: ["Metric", "US"],
  nutritionTableItems: nutritionTableItems,
  units,
  values: values,
};

Mobile.parameters = {
  viewport: {
    defaultViewport: "iphonexr",
  },
};

export const Tablet = Template.bind({});

Tablet.args = {
  sidebarItems,
  DetailsPageTitlesItems: DetailsPageTitlesItems,
  detailsHeaderValues: detailsHeaderValues,
  tabItems: tabItems,
  compareTableItems: compareTableItemRows,
  compareTableDetails: {
    name: "Comparing Greens",
    quantityAmount: "3 1/2 OUNCES RAW (2 TO 3 CUPS)",
  },
  ageItems,
  lifeStageItems,
  nutritionFilterItems,
  nutritionSummaryItems,
  onSelectFilterItems: (item: string[]) => {
    console.log(item);
  },
  measurementFilterItems: ["Metric", "US"],
  nutritionTableItems: nutritionTableItems,
  units,
  values: values,
};

Tablet.parameters = {
  viewport: {
    defaultViewport: "ipad",
  },
};
