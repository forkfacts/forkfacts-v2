import React from "react";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { SearchResultsScreen } from "@forkfacts/screens";

export default {
  title: "Screens/SearchScreen/SearchResultsScreen",
  component: SearchResultsScreen,
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
    },
  },
} as ComponentMeta<typeof SearchResultsScreen>;

export const Mobile: ComponentStory<typeof SearchResultsScreen> = (args) => (
  <SearchResultsScreen {...args} />
);
Mobile.parameters = {
  viewport: {
    defaultViewport: "iphone5",
  },
};

Mobile.args = {
  status: "ResultsScreen",
};
