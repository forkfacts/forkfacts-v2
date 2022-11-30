import React from "react";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Header } from "@forkfacts/components";

export default {
  title: "Components/Header",
  component: Header,
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
    },
  },
  argTypes: {
    status: {
      control: "select",
      options: ["recentScreen", "ResultsScreen"],
    },
  },
} as ComponentMeta<typeof Header>;

export const Mobile: ComponentStory<typeof Header> = () => <Header />;
Mobile.parameters = {
  viewport: {
    defaultViewport: "iphone5",
  },
};

Mobile.args = {
  status: "recentScreen",
};
