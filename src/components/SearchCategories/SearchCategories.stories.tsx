import React from "react";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import EggAltOutlinedIcon from "@mui/icons-material/EggAltOutlined";
import EmojiFoodBeverageOutlinedIcon from "@mui/icons-material/EmojiFoodBeverageOutlined";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import { SearchCategories } from "@forkfacts/components";
import { SearchCategoryItemType } from "@forkfacts/models";

export default {
  title: "Components/SearchCategories/multiple",
  component: SearchCategories,
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
    },
  },
  argTypes: {
    categoryOptions: {
      name: "categoryOptions",
      description: "Data array option that should be passed to the component",
    },
    onSelectCategory: {
      name: "onSelectCategory",
      description: "onSelectCategory function helps to select single button value",
    },
  },
} as ComponentMeta<typeof SearchCategories>;

const Template: ComponentStory<typeof SearchCategories> = (args) => <SearchCategories {...args} />;

export const Mobile = Template.bind({});
Mobile.parameters = {
  viewport: {
    defaultViewport: "iphonexr",
  },
};
const categoryOptions = [
  { label: "Food", Icon: EggAltOutlinedIcon },
  { label: "Recipe", Icon: EmojiFoodBeverageOutlinedIcon },
  { label: "Library", Icon: BookmarkBorderOutlinedIcon },
];
Mobile.args = {
  ...Mobile.args,
  onSelectCategory: (item: SearchCategoryItemType) => item,
  categoryOptions: categoryOptions,
};

export const Tablet = Template.bind({});
Tablet.parameters = {
  viewport: {
    defaultViewport: "ipad",
  },
};
Tablet.args = {
  ...Tablet.args,
  onSelectCategory: (item: SearchCategoryItemType) => item,
  categoryOptions: categoryOptions,
};
