import React from "react";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import EggAltOutlinedIcon from "@mui/icons-material/EggAltOutlined";
import { SearchCategory } from "@forkfacts/components";
import { SearchcategoryItemType } from "@forkfacts/models";

export default {
  title: "Components/SearchCategories/Single",
  component: SearchCategory,
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
    },
  },
  argTypes: {
    index: {
      name: "index",
      description: "Index of the button should be passed down as prop",
      control: "text",
    },
    label: {
      name: "Label",
      description: "Label title  of the button",
      table: {
        defaultValue: { summary: "Food" },
      },
    },
    onSelectCategory: {
      name: "onSelectCategory",
      description: "onSelectCategory function helps to selected single buttton data ",
    },
    setSelectedIndex: {
      name: "setSelectedIndex",
      description: "setSelectedIndex function get the current clicked button",
    },
  },
} as ComponentMeta<typeof SearchCategory>;

export const selectedButton: ComponentStory<typeof SearchCategory> = (args) => (
  <SearchCategory {...args} />
);
selectedButton.parameters = {
  viewport: {
    defaultViewport: "iphone6",
  },
};

selectedButton.args = {
  label: "Food",
  Icon: EggAltOutlinedIcon,
  index: 0,
  selectedIndex: 0,
  onSelectCategory: (label: SearchcategoryItemType) => label,
};

selectedButton.storyName = "seleted Button";

export const unSelectedButton: ComponentStory<typeof SearchCategory> = (args) => (
  <SearchCategory {...args} />
);
unSelectedButton.parameters = {
  viewport: {
    defaultViewport: "iphone6",
  },
};
unSelectedButton.storyName = "unSelected Button";

unSelectedButton.args = {
  label: "Food",
  Icon: EggAltOutlinedIcon,
  onSelectCategory: (label: SearchcategoryItemType) => label,
  index: 0,
  selectedIndex: 1,
};
