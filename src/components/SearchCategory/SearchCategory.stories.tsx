import React from "react";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import EggAltIcon from "@mui/icons-material/EggAlt";
import EmojiFoodBeverageIcon from "@mui/icons-material/EmojiFoodBeverage";
import BookmarksIcon from "@mui/icons-material/Bookmarks";
import { SearchCategory } from "@forkfacts/components";

export default {
  title: "Components/SearchCategory",
  component: SearchCategory,
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
    },
  },
} as ComponentMeta<typeof SearchCategory>;

const categories = [
  { label: "Food", Icon: EggAltIcon },
  { label: "Recipe", Icon: EmojiFoodBeverageIcon },
  { label: "Library", Icon: BookmarksIcon },
];

export const Mobile: ComponentStory<typeof SearchCategory> = (args) => <SearchCategory {...args} />;
Mobile.parameters = {
  viewport: {
    defaultViewport: "iphone5",
  },
};

Mobile.args = {
  categories: categories,
};
