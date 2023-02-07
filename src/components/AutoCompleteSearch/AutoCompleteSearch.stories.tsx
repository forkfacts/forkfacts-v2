import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import EggAltOutlinedIcon from "@mui/icons-material/EggAltOutlined";
import EmojiFoodBeverageOutlinedIcon from "@mui/icons-material/EmojiFoodBeverageOutlined";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import { AutoCompleteSearch } from "@forkfacts/components";
import { recommendationType } from "models/components";

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

const collectionGroupedItems = [
  { categoryName: "FRUIT AND FRUIT JUICES", collection: collection },
  { categoryName: "BABY FOODS", collection: collection.slice(0, 3) },
  { categoryName: "SWEETS", collection: collection.slice(0, 4) },
];

Desktop.args = {
  placeholder: "Search food, recipes & library",
  openOnFocus: true,
  sourceId: "forkfact-v2",
  collectionGroupedItems: collectionGroupedItems,
  categoryOptions: categoryOptions,
};

export const Mobile = Template.bind({});

Mobile.args = {
  openOnFocus: true,
  sourceId: "forkfact-v2",
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
  collectionGroupedItems: collectionGroupedItems,
  placeholder: "Search",
  categoryOptions: categoryOptions,
};

Tablet.parameters = {
  viewport: {
    defaultViewport: "ipad",
  },
};
