import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { NoSearchResults } from "@forkfacts/components";

export default {
  title: "Example/MyComponent",
  component: NoSearchResults,
} as ComponentMeta<typeof NoSearchResults>;

const Template: ComponentStory<typeof NoSearchResults> = (args) => <NoSearchResults {...args} />;
