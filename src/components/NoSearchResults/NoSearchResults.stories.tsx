import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { NoSearchResults } from "@forkfacts/components";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";

export default {
  title: "Components/NoSearchResults",
  component: NoSearchResults,
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
    },
  },
} as ComponentMeta<typeof NoSearchResults>;

const Template: ComponentStory<typeof NoSearchResults> = (args) => <NoSearchResults {...args} />;

export const Desktop = Template.bind({});
