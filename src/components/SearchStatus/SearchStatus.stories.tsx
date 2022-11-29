import React from "react";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { SearchStatus } from "@forkfacts/components";

export default {
  title: "Components/SearchStatus",
  component: SearchStatus,
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
    },
  },
} as ComponentMeta<typeof SearchStatus>;

export const Mobile: ComponentStory<typeof SearchStatus> = (args) => <SearchStatus {...args} />;
Mobile.parameters = {
  viewport: {
    defaultViewport: "iphone5",
  },
};
