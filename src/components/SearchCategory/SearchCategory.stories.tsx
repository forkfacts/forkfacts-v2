import React from "react";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import { ComponentMeta, ComponentStory } from "@storybook/react";
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

export const Mobile: ComponentStory<typeof SearchCategory> = () => <SearchCategory />;
Mobile.parameters = {
  viewport: {
    defaultViewport: "iphone5",
  },
};
