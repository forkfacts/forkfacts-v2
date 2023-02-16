import React, { useState } from "react";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import EggAltOutlinedIcon from "@mui/icons-material/EggAltOutlined";
import EmojiFoodBeverageOutlinedIcon from "@mui/icons-material/EmojiFoodBeverageOutlined";
import TipsAndUpdatesOutlinedIcon from "@mui/icons-material/TipsAndUpdatesOutlined";
import CompareArrowsOutlinedIcon from "@mui/icons-material/CompareArrowsOutlined";
import FastfoodOutlinedIcon from "@mui/icons-material/FastfoodOutlined";
import SmokingRoomsOutlinedIcon from "@mui/icons-material/SmokingRoomsOutlined";
import LibraryBooksOutlinedIcon from "@mui/icons-material/LibraryBooksOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import AutoStoriesOutlinedIcon from "@mui/icons-material/AutoStoriesOutlined";
import { DetailsPageScreen } from "@forkfacts/screens";
import {
  compareTableItem,
  DetailsPageTitlesItem,
  filterItem,
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
const multipleSelectItems: filterItem[] = [
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

const Template: ComponentStory<typeof DetailsPageScreen> = (args) => {
  const [_, setSelectedNutrients] = useState<string[]>([]);
  return <DetailsPageScreen {...args} getSelectedNutrients={setSelectedNutrients} />;
};

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
  multipleSelectItems: multipleSelectItems,
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
  multipleSelectItems: multipleSelectItems,
};

Mobile.parameters = {
  viewport: {
    defaultViewport: "iphonexr",
  },
};
