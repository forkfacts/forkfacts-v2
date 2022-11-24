import React from "react";
import SearchLayout from "./SearchLayout";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";

export default {
  title: "Components/layouts/SearchLayout",
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
    },
  },
  component: SearchLayout,
} as ComponentMeta<typeof SearchLayout>;

export const Mobile: ComponentStory<typeof SearchLayout> = (args) => {
  return <SearchLayout {...args}>Page content goes here</SearchLayout>;
};
Mobile.parameters = {
  viewport: {
    defaultViewport: "iphone5",
  },
};
