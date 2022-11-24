import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import SearchScreen from "./index";

export default {
  title: "Screens/SearchScreens",
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
    },
  },
  component: SearchScreen,
} as ComponentMeta<typeof SearchScreen>;

export const SearchScreenForMobilePage: ComponentStory<typeof SearchScreen> = (args) => {
  return <SearchScreen {...args} />;
};

SearchScreenForMobilePage.parameters = {
  viewport: {
    defaultViewport: "iphone5",
  },
};
