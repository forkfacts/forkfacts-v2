import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import EggAltOutlinedIcon from "@mui/icons-material/EggAltOutlined";
import EmojiFoodBeverageOutlinedIcon from "@mui/icons-material/EmojiFoodBeverageOutlined";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import LibraryBooksOutlinedIcon from "@mui/icons-material/LibraryBooksOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import AutoStoriesOutlinedIcon from "@mui/icons-material/AutoStoriesOutlined";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import { SearchCategoryItemType } from "@forkfacts/models";
import { AutoCompleteSearch } from "@forkfacts/components";

export default {
  title: "Components/AutoCompleteSearch",
  component: AutoCompleteSearch,
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
    },
  },
} as ComponentMeta<typeof AutoCompleteSearch>;

const Template: ComponentStory<typeof AutoCompleteSearch> = (args) => (
  <AutoCompleteSearch {...args} />
);

export const Desktop = Template.bind({});

const categoryOptions = [
  { label: "Food", Icon: EggAltOutlinedIcon },
  { label: "Recipe", Icon: EmojiFoodBeverageOutlinedIcon },
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

Desktop.args = {
  placeholder: "Search food, recipes & library",
  openOnFocus: true,
  sourceId: "forkfact-v2",
};

export const Mobile = Template.bind({});

Mobile.args = {
  openOnFocus: true,
  sourceId: "forkfact-v2",
  onSelectCategory: (item: SearchCategoryItemType) => {},
  collectionGroupedItems: collectionGroupedItems,
  placeholder: "Search",
  categoryOptions: categoryOptions,
};

Mobile.parameters = {
  viewport: {
    defaultViewport: "iphone6",
  },
};

export const Tablet = Template.bind({});

Tablet.args = {
  openOnFocus: true,
  sourceId: "forkfact-v2",
  onSelectCategory: (item: SearchCategoryItemType) => {},
  collectionGroupedItems: collectionGroupedItems,
  placeholder: "Search",
  categoryOptions: categoryOptions,
};

Tablet.parameters = {
  viewport: {
    defaultViewport: "ipad",
  },
};
