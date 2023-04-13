import React from "react";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import EggAltOutlinedIcon from "@mui/icons-material/EggAltOutlined";
import EmojiFoodBeverageOutlinedIcon from "@mui/icons-material/EmojiFoodBeverageOutlined";
import LibraryBooksOutlinedIcon from "@mui/icons-material/LibraryBooksOutlined";

import { PopularFrequentSearchProps, recommendationType } from "@forkfacts/models";
import { HomeScreen } from "@forkfacts/screens";
import { menuItems } from "../../RealData/realData";

export default {
  title: "Screens/SearchScreen/HomeScreen",
  component: HomeScreen,
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
    },
  },
} as ComponentMeta<typeof HomeScreen>;

const navbarItems = [
  { label: "Food", Icon: EggAltOutlinedIcon, link: "/food" },
  { label: "Recipes", Icon: EmojiFoodBeverageOutlinedIcon, link: "/recipe" },
  { label: "Library", Icon: LibraryBooksOutlinedIcon, link: "/library" },
];

const recommendations: recommendationType[] = [
  {
    recommendationName: "Tags",
    recommendationItems: [
      {
        name: "Chia seeds",
        icon: "/tag1.svg",
      },
      {
        name: "Kosher",
        icon: "/tag2.svg",
      },
      {
        name: "Flax seeds",
        icon: "/tag3.svg",
      },
    ],
  },
  {
    recommendationName: "COMPARE FOODS",
    recommendationItems: [
      { name: "Nuts and seeds", icon: "/tag4.svg" },
      { name: "Legumes", icon: "/tag5.svg" },
      { name: "Fruits", icon: "/tag3.svg" },
    ],
  },
  {
    recommendationName: "Vitamins and minerals",
    recommendationItems: [
      { name: "Vitamin A", icon: "/tag4.svg" },
      { name: "Zinc", icon: "/tag4.svg" },
      { name: "Vitamin B12", icon: "/tag5.svg" },
    ],
  },
  {
    recommendationName: "Recipes",
    recommendationItems: [{ name: "Creamy broccoli pasta" }],
  },
];

const { PopularFrequentSearchItems }: PopularFrequentSearchProps = {
  PopularFrequentSearchItems: [
    {
      searchImg: "/popular.png",
      searchName: "Blueberries",
      extraInfo: [
        { name: "Calories", weight: "23g" },
        { name: "Fats", weight: "10g" },
        { name: "Proteins", weight: "5g" },
      ],
    },
    {
      searchImg: "/popular2.png",
      searchName: "Flax seeds",
      extraInfo: [
        { name: "Calories", weight: "23g" },
        { name: "Fats", weight: "10g" },
        { name: "Proteins", weight: "5g" },
      ],
    },
    {
      searchImg: "/popular3.png",
      searchName: "Sesame seeds",
      extraInfo: [
        { name: "Calories", weight: "23g" },
        { name: "Fats", weight: "10g" },
        { name: "Proteins", weight: "5g" },
      ],
    },
    {
      searchImg: "/popular4.png",
      searchName: "Kidney beans",
      extraInfo: [
        { name: "Calories", weight: "23g" },
        { name: "Fats", weight: "10g" },
        { name: "Proteins", weight: "5g" },
      ],
    },
    {
      searchImg: "/popular5.png",
      searchName: "Almonds",
      extraInfo: [
        { name: "Calories", weight: "23g" },
        { name: "Fats", weight: "10g" },
        { name: "Proteins", weight: "5g" },
      ],
    },
    {
      searchImg: "/popular6.png",
      searchName: "Walnuts",
      extraInfo: [
        { name: "Calories", weight: "23g" },
        { name: "Fats", weight: "10g" },
        { name: "Proteins", weight: "5g" },
      ],
    },
    {
      searchImg: "/popular7.png",
      searchName: "Spinach",
      extraInfo: [
        { name: "Calories", weight: "23g" },
        { name: "Fats", weight: "10g" },
        { name: "Proteins", weight: "5g" },
      ],
    },
    {
      searchImg: "/popular8.png",
      searchName: "Sunflower seeds",
      extraInfo: [
        { name: "Calories", weight: "23g" },
        { name: "Fats", weight: "10g" },
        { name: "Proteins", weight: "5g" },
      ],
    },
  ],
};

const categoryOptions = [
  { label: "Food", Icon: EggAltOutlinedIcon },
  { label: "Recipes", Icon: EmojiFoodBeverageOutlinedIcon },
  { label: "Library", Icon: LibraryBooksOutlinedIcon },
];

const collection = [
  {
    image: "/recentImg.png",
    name: "Kidney beans light, Legume",
    url: "/:id",
  },
  {
    image: "/image3.png",
    name: "Grape fruit juices",
    url: "/:id",
  },
  {
    image: "/image2.png",
    name: "Baked white bread, Baked products",
    url: "/:id",
  },
  {
    image: "/image4.png",
    name: "Grape fruit juice unsweetened, Fruit ...",
    url: "/:id",
  },
  {
    image: "/image5.png",
    name: "Banana dehydrated/ banana powder",
    url: "/:id",
  },
];

const Template: ComponentStory<typeof HomeScreen> = (args) => <HomeScreen {...args} />;

export const Desktop = Template.bind({});

Desktop.args = {
  sidebarItems: menuItems,
  navbarItems: navbarItems,
  PopularFrequentSearchItems: PopularFrequentSearchItems,
  sourceId: "forkfact-v2",
  categoryOptions: categoryOptions,
  recommendations: recommendations,
};

export const Mobile = Template.bind({});
Mobile.parameters = {
  viewport: {
    defaultViewport: "iphonexr",
  },
};

Mobile.args = {
  sidebarItems: menuItems,
  categoryOptions: categoryOptions,
  PopularFrequentSearchItems: PopularFrequentSearchItems,
  sourceId: "forkfact-v2",
  navbarItems: navbarItems,
  recommendations: recommendations,
};

export const Tablet = Template.bind({});
Tablet.parameters = {
  viewport: {
    defaultViewport: "ipad",
  },
};

Tablet.args = {
  sidebarItems: menuItems,
  categoryOptions: categoryOptions,
  PopularFrequentSearchItems: PopularFrequentSearchItems,
  navbarItems: navbarItems,
  sourceId: "forkfact-v2",
  recommendations: recommendations,
};
