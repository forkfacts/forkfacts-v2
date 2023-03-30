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
  FoodWithSameName,
  RdiAge,
  compareTableItem,
  filterItem,
  lifeStageItem,
  SelectedNutrient,
  MenuItem,
  NutritionTableRow,
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

const menuItems: MenuItem[] = [
  { label: "Food", Icon: EggAltOutlinedIcon, link: "/food" },
  { label: "Recipes", Icon: EmojiFoodBeverageOutlinedIcon, link: "/recipe" },
  { label: "Library", Icon: LibraryBooksOutlinedIcon, link: "/library" },
  { label: "Cookbook", Icon: AutoStoriesOutlinedIcon, link: "/Cookbook" },
  { label: "Grocery List", Icon: ShoppingCartOutlinedIcon, link: "/grocery-list" },
];

const tabs = [
  { label: "Nutrition", Icon: FastfoodOutlinedIcon, link: "/food" },
  { label: "Recipes", Icon: EmojiFoodBeverageOutlinedIcon, link: "/recipe" },
  { label: "Emissions", Icon: SmokingRoomsOutlinedIcon, link: "/library" },
  { label: "Tips", Icon: TipsAndUpdatesOutlinedIcon, link: "/tips" },
  { label: "Compare foods", Icon: CompareArrowsOutlinedIcon, link: "/recipe" },
];

const foodsWithSameNames: FoodWithSameName[] = [
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

const foodOverview = {
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
  const [selectAge, setSelectedAge] = useState<RdiAge>({} as RdiAge);
  const [selectSearchNutrition, seSelectedSearchNutrition] = useState([] as SelectedNutrient[]);
  const [unit, setUnit] = React.useState("Cups");
  return <DetailsPageScreen {...args} onSelectUnit={setUnit} />;
};

const units = ["Plates", "Cups", "Teaspoon"];

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
export const Desktop = Template.bind({});

Desktop.args = {
  menuItems: menuItems,
  foodsWithSameNames,
  foodOverview,
  tabItems: tabs,
  compareTableItems: compareTableItemRows,
  compareTableDetails: {
    name: "Comparing Greens",
    quantityAmount: "3 1/2 OUNCES RAW (2 TO 3 CUPS)",
  },
  ageItems,
  lifeStageItems,
  nutritionFilterItems,
  nutritionSummaryItems,
  measurementFilterItems: ["Metric", "US"],
  nutritionTableRows: nutritionTableItems,
  units,
  values: values,
};

export const Mobile = Template.bind({});

Mobile.args = {
  menuItems: menuItems,
  foodsWithSameNames,
  foodOverview,
  tabItems: tabs,
  compareTableItems: compareTableItemRows,
  compareTableDetails: {
    name: "Comparing Greens",
    quantityAmount: "3 1/2 OUNCES RAW (2 TO 3 CUPS)",
  },
  ageItems,
  lifeStageItems,
  nutritionFilterItems,
  nutritionSummaryItems,
  measurementFilterItems: ["Metric", "US"],
  nutritionTableRows: nutritionTableItems,
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
  menuItems: menuItems,
  foodsWithSameNames: foodsWithSameNames,
  foodOverview,
  tabItems: tabs,
  compareTableItems: compareTableItemRows,
  compareTableDetails: {
    name: "Comparing Greens",
    quantityAmount: "3 1/2 OUNCES RAW (2 TO 3 CUPS)",
  },
  ageItems,
  lifeStageItems,
  nutritionFilterItems,
  nutritionSummaryItems,
  measurementFilterItems: ["Metric", "US"],
  nutritionTableRows: nutritionTableItems,
  units,
  values: values,
};

Tablet.parameters = {
  viewport: {
    defaultViewport: "ipad",
  },
};
