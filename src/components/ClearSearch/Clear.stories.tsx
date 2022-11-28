import React from "react";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import { ComponentMeta } from "@storybook/react";
import { ClearSearch } from "@forkfacts/components";

export default {
  title: "Components/ClearSearch",
  component: ClearSearch,
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
    },
  },
} as ComponentMeta<typeof ClearSearch>;

export const Mobile = () => <ClearSearch />;
Mobile.parameters = {
  viewport: {
    defaultViewport: "iphone5",
  },
};
