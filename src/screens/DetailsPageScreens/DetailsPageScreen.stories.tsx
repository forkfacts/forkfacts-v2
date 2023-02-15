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
import { compareTableItem, DetailsPageTitlesItem, sidebarItem } from "@forkfacts/models";

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

const Template: ComponentStory<typeof DetailsPageScreen> = (args) => {
  return <DetailsPageScreen {...args} />;
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
};

Mobile.parameters = {
  viewport: {
    defaultViewport: "iphonexr",
  },
};
