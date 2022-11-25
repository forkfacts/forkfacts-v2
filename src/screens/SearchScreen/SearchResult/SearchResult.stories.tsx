import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import { SearchResult } from "@forkfacts/screens";

export default {
  title: "Screens/SearchScreen/SearchResult",
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
    },
  },
  component: SearchResult,
} as ComponentMeta<typeof SearchResult>;

export const Mobile: ComponentStory<typeof SearchResult> = (args) => {
  return (
    <>
      <SearchResult {...args} />
    </>
  );
};

Mobile.parameters = {
  viewport: {
    defaultViewport: "iphone5",
  },
};
