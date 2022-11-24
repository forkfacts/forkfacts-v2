import React from "react";
import { MobileSearchLayout } from "@forkfacts/components";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";

export default {
  title: "Components/layouts/MobileSearchLayout",
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
    },
  },
  component: MobileSearchLayout,
} as ComponentMeta<typeof MobileSearchLayout>;

export const Mobile: ComponentStory<typeof MobileSearchLayout> = (args) => {
  return <MobileSearchLayout {...args}>Page content goes here</MobileSearchLayout>;
};

Mobile.parameters = {
  viewport: {
    defaultViewport: "iphone5",
  },
};
