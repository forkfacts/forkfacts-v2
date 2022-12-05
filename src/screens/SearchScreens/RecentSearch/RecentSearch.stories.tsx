import React from "react";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { RecentSearchScreen } from "@forkfacts/screens";

export default {
  title: "Screens/SearchScreen/RecentSearchScreen",
  component: RecentSearchScreen,
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
    },
  },
} as ComponentMeta<typeof RecentSearchScreen>;

export const Mobile: ComponentStory<typeof RecentSearchScreen> = (args) => (
  <RecentSearchScreen {...args} />
);
Mobile.parameters = {
  viewport: {
    defaultViewport: "iphone6",
  },
};
