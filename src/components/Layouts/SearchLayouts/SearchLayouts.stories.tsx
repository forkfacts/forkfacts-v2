import React from "react";
import SearchLayout from "./SearchLayout";
import { ComponentMeta } from "@storybook/react";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";

export default {
  title: "Components/SearchLayout",
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
    },
  },
  component: SearchLayout,
} as ComponentMeta<typeof SearchLayout>;

export const Mobile = () => {
  return <SearchLayout>Page content goes here</SearchLayout>;
};
Mobile.parameters = {
  viewport: {
    defaultViewport: "iphone5",
  },
};
