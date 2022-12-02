import React from "react";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import { ComponentMeta } from "@storybook/react";
import { SearchScreen } from "@forkfacts/screens";

export default {
  title: "Screens/SearchScreen/Home",
  component: SearchScreen,
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
    },
  },
} as ComponentMeta<typeof SearchScreen>;

export const Mobile = () => <SearchScreen />;
Mobile.parameters = {
  viewport: {
    defaultViewport: "iphone6",
  },
};

export const Tablet = () => <SearchScreen />;
Tablet.parameters = {
  viewport: {
    defaultViewport: "ipad",
  },
};
