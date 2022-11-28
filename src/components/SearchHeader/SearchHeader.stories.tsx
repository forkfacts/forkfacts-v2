import React from "react";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import { ComponentMeta } from "@storybook/react";
import { SearchHeader } from "@forkfacts/components";

export default {
  title: "Components/SearchHeader",
  component: SearchHeader,
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
    },
  },
} as ComponentMeta<typeof SearchHeader>;

export const Mobile = () => <SearchHeader />;
Mobile.parameters = {
  viewport: {
    defaultViewport: "iphone5",
  },
};
