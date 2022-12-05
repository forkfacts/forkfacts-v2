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

const recentLists = [
  { image: "/recentImg.png", name: "Kidney beans light, Legume", path: "/:id" },
  { image: "/image3.png", name: "Grape fruit juices", path: "/:id" },
  {
    image: "/image2.png",
    name: "Baked white bread, Baked products",
    path: "/:id",
  },
  {
    image: "/image4.png",
    name: "Grape fruit juice unsweentened, Fruit ...",
    path: "/:id",
  },
  {
    image: "/image5.png",
    name: "Banana dehydrated/ banana powder",
    path: "/:id",
  },
];

const GroupListsType = [
  { groupTitle: "FRUIT AND FRUIT JUICES", listItems: recentLists },
  { groupTitle: "BABY FOODS", listItems: recentLists.slice(0, 3) },
  { groupTitle: "SWEETS", listItems: recentLists.slice(0, 4) },
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
  groupLists: GroupListsType,
  categoryOptions: categoryOptions,
};
