import React from "react";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import { ComponentMeta } from "@storybook/react";
import { RecentSearchScreen } from "@forkfacts/screens";

export default {
  title: "Screens/SearchScreen/RecentSearch",
  component: RecentSearchScreen,
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
    },
  },
} as ComponentMeta<typeof RecentSearchScreen>;

export const Mobile = () => <RecentSearchScreen />;
Mobile.parameters = {
  viewport: {
    defaultViewport: "iphone5",
  },
};
