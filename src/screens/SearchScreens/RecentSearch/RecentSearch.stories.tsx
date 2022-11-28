import React from "react";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import { ComponentMeta } from "@storybook/react";
import { RecentSearch } from "@forkfacts/screens";

export default {
  title: "Screens/SearchScreen/RecentSearch",
  component: RecentSearch,
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
    },
  },
} as ComponentMeta<typeof RecentSearch>;

export const Mobile = () => <RecentSearch />;
Mobile.parameters = {
  viewport: {
    defaultViewport: "iphone5",
  },
};
