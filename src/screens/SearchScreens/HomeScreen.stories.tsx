import React from "react";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import EggAltOutlinedIcon from "@mui/icons-material/EggAltOutlined";
import EmojiFoodBeverageOutlinedIcon from "@mui/icons-material/EmojiFoodBeverageOutlined";
import LibraryBooksOutlinedIcon from "@mui/icons-material/LibraryBooksOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import AutoStoriesOutlinedIcon from "@mui/icons-material/AutoStoriesOutlined";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import {
  sidebarItem,
  PopularFrequentSearchProps,
  PopularFrequentSearchType,
  SearchCategoryItemType,
  recommendationType,
} from "@forkfacts/models";
import { HomeScreen } from "@forkfacts/screens";

export default {
  title: "Screens/SearchScreen/HomeScreen",
  component: HomeScreen,
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
    },
  },
} as ComponentMeta<typeof HomeScreen>;

const sidebarItems: sidebarItem[] = [
  { label: "Food", Icon: EggAltOutlinedIcon, link: "/food" },
  { label: "Recipes", Icon: EmojiFoodBeverageOutlinedIcon, link: "/recipe" },
  { label: "Library", Icon: LibraryBooksOutlinedIcon, link: "/library" },
  { label: "Cookbook", Icon: AutoStoriesOutlinedIcon, link: "/Cookbook" },
  { label: "Grocery List", Icon: ShoppingCartOutlinedIcon, link: "/grocery-list" },
];

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
        name: "SUPERFOODS",
        icon: "/tag1.png",
      },
      {
        name: "Kosher",
        icon: "/tag2.png",
      },
      {
        name: "Flax seeds",
        icon: "/tag3.png",
      },
    ],
  },
  {
    recommendationName: "COMPARE FOODS",
    recommendationItems: [
      { name: "Nuts and seeds", icon: "/tag4.png" },
      { name: "Legumes", icon: "/tag5.png" },
      { name: "Fruits", icon: "/tag3.png" },
    ],
  },
  {
    recommendationName: "Vitamins and minerals",
    recommendationItems: [
      { name: "Vitamin A", icon: "/tag4.png" },
      { name: "Zinc", icon: "/tag4.png" },
      { name: "Vitamin B12", icon: "/tag5.png" },
    ],
  },
  {
    recommendationName: "Recipes",
    recommendationItems: [
      { name: "Creamy broccoli pasta", icon: "/tag1.png" },
      { name: "Broccoli pasta salad", icon: "/tag2.png" },
    ],
  },
];

const {
  PopularFrequentSearchTitle,
  PopularFrequentSearchItems,
  onSelectPopularItem,
}: PopularFrequentSearchProps = {
  PopularFrequentSearchTitle: "Popular Foods",
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
  onSelectPopularItem: (item: PopularFrequentSearchType) => {},
};

const categoryOptions = [
  { label: "Food", Icon: EggAltOutlinedIcon },
  { label: "Recipes", Icon: EmojiFoodBeverageOutlinedIcon },
  { label: "Library", Icon: BookmarkBorderOutlinedIcon },
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

const collectionGroupedItems = [
  { categoryName: "FRUIT AND FRUIT JUICES", collection: collection },
  { categoryName: "BABY FOODS", collection: collection.slice(0, 3) },
  { categoryName: "SWEETS", collection: collection.slice(0, 4) },
];

const Template: ComponentStory<typeof HomeScreen> = (args) => <HomeScreen {...args} />;

export const Desktop = Template.bind({});

Desktop.args = {
  sidebarItems: sidebarItems,
  navbarItems: navbarItems,
  PopularFrequentSearchItems: PopularFrequentSearchItems,
  PopularFrequentSearchTitle: PopularFrequentSearchTitle,
  onSelectPopularItem: onSelectPopularItem,
  sourceId: "forkfact-v2",
  categoryOptions: categoryOptions,
  collectionGroupedItems: collectionGroupedItems,
  recommendations: recommendations,
};

export const Mobile = Template.bind({});
Mobile.parameters = {
  viewport: {
    defaultViewport: "iphone6",
  },
};

Mobile.args = {
  sidebarItems: sidebarItems,
  categoryOptions: categoryOptions,
  collectionGroupedItems: collectionGroupedItems,
  PopularFrequentSearchItems: PopularFrequentSearchItems,
  PopularFrequentSearchTitle: PopularFrequentSearchTitle,
  onSelectPopularItem: onSelectPopularItem,
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
  sidebarItems: sidebarItems,
  categoryOptions: categoryOptions,
  collectionGroupedItems: collectionGroupedItems,
  PopularFrequentSearchItems: PopularFrequentSearchItems,
  PopularFrequentSearchTitle: PopularFrequentSearchTitle,
  onSelectPopularItem: onSelectPopularItem,
  navbarItems: navbarItems,
  sourceId: "forkfact-v2",
  recommendations: recommendations,
};
