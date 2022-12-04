import React from "react";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import { ComponentMeta } from "@storybook/react";
import { HomeScreen } from "@forkfacts/screens";

export default {
  title: "Screens/SearchScreen/HomeScreen",
  component: HomeScreen,
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
    },
  },
} as ComponentMeta<typeof HomeScreen>;

export const Mobile = () => <HomeScreen />;
Mobile.parameters = {
  viewport: {
    defaultViewport: "iphone6",
  },
};

export const Tablet = () => <HomeScreen />;
Tablet.parameters = {
  viewport: {
    defaultViewport: "ipad",
  },
};
