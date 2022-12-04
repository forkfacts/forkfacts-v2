import React from "react";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { RecentSearchHeader } from "@forkfacts/components";

export default {
  title: "Components/RecentSearchHeader",
  component: RecentSearchHeader,
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
    },
  },
} as ComponentMeta<typeof RecentSearchHeader>;

export const Mobile: ComponentStory<typeof RecentSearchHeader> = (args) => (
  <RecentSearchHeader {...args} />
);
Mobile.parameters = {
  viewport: {
    defaultViewport: "iphone6",
  },
};
