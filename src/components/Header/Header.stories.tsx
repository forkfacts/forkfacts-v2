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
  args: {
    handleToggleEvenets: () => console.log("toggle sidebar"),
  },
} as ComponentMeta<typeof Header>;

export const Mobile: ComponentStory<typeof Header> = (args) => <Header {...args} />;
Mobile.parameters = {
  viewport: {
    defaultViewport: "iphone5",
  },
};

export const Tablet: ComponentStory<typeof Header> = (args) => <Header {...args} />;
Tablet.parameters = {
  viewport: {
    defaultViewport: "ipad",
  },
};
