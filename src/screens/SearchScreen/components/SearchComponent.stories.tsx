import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import { SearchComponent } from "@forkfacts/screens";

export default {
  title: "Screens/SearchScreen/SearchComponent",
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
    },
  },
  component: SearchComponent,
} as ComponentMeta<typeof SearchComponent>;

export const Mobile: ComponentStory<typeof SearchComponent> = (args) => {
  return (
    <>
      <SearchComponent {...args} />
    </>
  );
};

Mobile.parameters = {
  viewport: {
    defaultViewport: "iphone5",
  },
};
