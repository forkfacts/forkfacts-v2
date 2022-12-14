import React from "react";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import EggAltOutlinedIcon from "@mui/icons-material/EggAltOutlined";
import { MobileSearchCategory } from "@forkfacts/components";
import { SearchCategoryItemType } from "@forkfacts/models";

export default {
  title: "Components/MobileSearchCategories/Single",
  component: MobileSearchCategory,
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
    },
  },
  argTypes: {
    index: {
      name: "index",
      description: "Index of the button should be passed down as prop",
      control: false,
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
      description: "onSelectCategory function helps to selected single button data ",
    },
    setSelectedIndex: {
      name: "setSelectedIndex",
      description: "setSelectedIndex function get the current clicked button",
    },
  },
} as ComponentMeta<typeof MobileSearchCategory>;

export const selectedButton: ComponentStory<typeof MobileSearchCategory> = (args) => (
  <MobileSearchCategory {...args} />
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
  onSelectCategory: (label: SearchCategoryItemType) => label,
  setSelectedIndex: (index: number = 1) => index,
};
selectedButton.storyName = "selected Button";

export const unSelectedButton: ComponentStory<typeof MobileSearchCategory> = (args) => (
  <MobileSearchCategory {...args} />
);
unSelectedButton.parameters = {
  viewport: {
    defaultViewport: "iphone6",
  },
};

unSelectedButton.args = {
  label: "Food",
  Icon: EggAltOutlinedIcon,
  onSelectCategory: (label: SearchCategoryItemType) => label,
  index: 0,
  selectedIndex: 1,
  setSelectedIndex: (index: number = 1) => index,
};
unSelectedButton.storyName = "unSelected Button";
