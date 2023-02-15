import React, { useState } from "react";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import EggAltOutlinedIcon from "@mui/icons-material/EggAltOutlined";
import EmojiFoodBeverageOutlinedIcon from "@mui/icons-material/EmojiFoodBeverageOutlined";
import TipsAndUpdatesOutlinedIcon from "@mui/icons-material/TipsAndUpdatesOutlined";
import CompareArrowsOutlinedIcon from "@mui/icons-material/CompareArrowsOutlined";
import ChildCareOutlinedIcon from "@mui/icons-material/ChildCareOutlined";
import EscalatorWarningOutlinedIcon from "@mui/icons-material/EscalatorWarningOutlined";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import PregnantWomanOutlinedIcon from "@mui/icons-material/PregnantWomanOutlined";
import FastfoodOutlinedIcon from "@mui/icons-material/FastfoodOutlined";
import SmokingRoomsOutlinedIcon from "@mui/icons-material/SmokingRoomsOutlined";
import LibraryBooksOutlinedIcon from "@mui/icons-material/LibraryBooksOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import AutoStoriesOutlinedIcon from "@mui/icons-material/AutoStoriesOutlined";
import { DetailsPageScreen } from "@forkfacts/screens";
import {
  ageItem,
  compareTableItem,
  DetailsPageTitlesItem,
  SearchNutritionFilterItem,
  sidebarItem,
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
  subTitle: "Fruits and Fruit Juices",
  nutritionValues: [
    { name: "Gluten - Free", icon: "/details1.svg" },
    { name: "Vegan", icon: "/details2.svg" },
    { name: "Good for diabetes", icon: "/details3.svg" },
  ],
  tag: "High in Vitamin C and Calcium",
};

const compareTableItemRows: compareTableItem[] = [
  {
    foodName: "Beta ",
    calories: 19,
    betaCarotene: 4,
    vitamin: 30,
    calcium: 119,
    iron: 3,
  },
  {
    foodName: "Collards",
    calories: 19,
    betaCarotene: 2,
    vitamin: 23,
    calcium: 117,
    iron: 0.6,
  },
  {
    foodName: "Dandelion",
    calories: 45,
    betaCarotene: 0,
    vitamin: 35,
    calcium: 187,
    iron: 3,
  },
  {
    foodName: "Kale",
    calories: 50,
    betaCarotene: 5,
    vitamin: 120,
    calcium: 135,
    iron: 2,
  },
  {
    foodName: "Mustard",
    calories: 26,
    betaCarotene: 3,
    vitamin: 70,
    calcium: 103,
    iron: 1,
  },
  {
    foodName: "Swiss",
    calories: 19,
    betaCarotene: 2,
    vitamin: 30,
    calcium: 51,
    iron: 2,
  },
  {
    foodName: "Tumip greens",
    calories: 27,
    betaCarotene: 6,
    vitamin: 60,
    calcium: 190,
    iron: 1,
  },
];

const nutritionSummaryItems = [
  { name: "Calories", percentage: 20, weight: "450g" },
  { name: "Protein", percentage: 10, weight: "120g" },
  { name: "Carbs", percentage: 20, weight: "120g" },
  { name: "Fats", percentage: 30, weight: "120g" },
  { name: "Fiber", percentage: 40, weight: "120g" },
];
const Template: ComponentStory<typeof DetailsPageScreen> = (args) => {
  return <DetailsPageScreen {...args} />;
};

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
  nutritionSummaryItems: nutritionSummaryItems,
  selectedFilters: ["All filters", "Life stage", "Age", "Nutrients", "Measure Units"],
  lifeStageItems: lifeStageItems,
  ageItems: ageItems,
  nutritionFilterItems: nutritionFilterItems,
  measurementFilterItems: ["US", "Metric"],
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
  nutritionSummaryItems: nutritionSummaryItems,
};

Mobile.parameters = {
  viewport: {
    defaultViewport: "iphonexr",
  },
};
