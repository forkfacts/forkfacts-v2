import React from "react";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { TypingSearchScreen } from "@forkfacts/screens";
import EggAltOutlinedIcon from "@mui/icons-material/EggAltOutlined";
import EmojiFoodBeverageOutlinedIcon from "@mui/icons-material/EmojiFoodBeverageOutlined";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";

export default {
  title: "Screens/SearchScreen/TypingSearchScreen",
  component: TypingSearchScreen,
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
    },
  },
} as ComponentMeta<typeof TypingSearchScreen>;

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

const categoryOptions = [
  { label: "Food", Icon: EggAltOutlinedIcon },
  { label: "Recipe", Icon: EmojiFoodBeverageOutlinedIcon },
  { label: "Library", Icon: BookmarkBorderOutlinedIcon },
];

export const Mobile: ComponentStory<typeof TypingSearchScreen> = (args) => (
  <TypingSearchScreen {...args} />
);
Mobile.parameters = {
  viewport: {
    defaultViewport: "iphone6",
  },
};

Mobile.args = {
  collectionGroupedItems,
  multiple: true,
  categoryOptions: categoryOptions,
};
