import React from "react";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import EggAltOutlinedIcon from "@mui/icons-material/EggAltOutlined";
import { SearchCategory } from "@forkfacts/components";
import { catergoryItemTypes } from "@forkfacts/models";

export default {
  title: "Components/SearchCategory",
  component: SearchCategory,
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
    },
  },
  argTypes: {
    onSelectCategory: {
      control: { type: "function" },
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
  onSelectCategory: (label: catergoryItemTypes) => label,
};

export const unSelectButton: ComponentStory<typeof SearchCategory> = (args) => (
  <SearchCategory {...args} />
);
unSelectButton.parameters = {
  viewport: {
    defaultViewport: "iphone6",
  },
};

unSelectButton.args = {
  label: "Food",
  Icon: EggAltOutlinedIcon,
  onSelectCategory: (label: catergoryItemTypes) => label,
  selectedIndex: 1,
};
