import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";

import SearchInput from "./SearchInput";

export default {
  title: "Components/InputFields/SearchInput",
  component: SearchInput,
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
    },
  },
  argTypes: {
    size: {
      control: {
        type: "select",
      },
      options: ["medium", "small"],
    },
  },
} as ComponentMeta<typeof SearchInput>;

export const Desktop: ComponentStory<typeof SearchInput> = (args) => {
  return <SearchInput {...args} />;
};

Desktop.args = {
  width: "100%",
};

export const Tablet: ComponentStory<typeof SearchInput> = (args) => {
  return <SearchInput {...args} />;
};

Tablet.parameters = {
  viewport: {
    defaultViewport: "ipad",
  },
};

export const Mobile: ComponentStory<typeof SearchInput> = (args) => {
  return <SearchInput {...args} />;
};

Mobile.parameters = {
  viewport: {
    defaultViewport: "iphone5",
  },
};
