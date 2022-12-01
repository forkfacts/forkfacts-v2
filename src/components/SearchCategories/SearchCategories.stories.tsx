import React from "react";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import EggAltIcon from "@mui/icons-material/EggAlt";
import { SearchCategories } from "@forkfacts/components";

export default {
  title: "Components/SearchCategories",
  component: SearchCategories,
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
    },
  },
} as ComponentMeta<typeof SearchCategories>;

export const Mobile: ComponentStory<typeof SearchCategories> = (args) => (
  <SearchCategories {...args} />
);
Mobile.parameters = {
  viewport: {
    defaultViewport: "iphone5",
  },
};

Mobile.args = {
  onSelectCategory: (label: string) => label,
};
