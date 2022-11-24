import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import { SearchScreen } from "@forkfacts/screens";

export default {
  title: "Screens/SearchScreen/Home",
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
    },
  },
  component: SearchScreen,
} as ComponentMeta<typeof SearchScreen>;

export const SearchScreenHome: ComponentStory<typeof SearchScreen> = (args) => {
  return <SearchScreen {...args} />;
};

SearchScreenHome.parameters = {
  viewport: {
    defaultViewport: "iphone5",
  },
};
