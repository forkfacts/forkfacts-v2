import React from "react";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { RecentSearchHeader } from "@forkfacts/components";

export default {
  title: "Components/RecentSearchHeader",
  component: RecentSearchHeader,
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
    },
  },
  argTypes: {
    showBorderBottom: {
      name: "showBorderBottom",
      description:
        "A boolean prop that will decide if the SearchHeader should allow border-botton. ",
    },
    handleCloseHeader: {
      name: "handleCloseHeader",
      description:
        "handleCloseHeader is a functon prop passed into the component that will close the current page the component is being used.",
    },
    handleClearInput: {
      name: "handleClearInput",
      description:
        "handleClearInput is a functon prop passed into the component to  clear the search input field",
    },
    showClearInput: {
      name: "showClearInput",
      description:
        "showClearInput is boolean prop passed into the component and which allows you to trigger handleClearInput",
    },
  },
} as ComponentMeta<typeof RecentSearchHeader>;

export const Mobile: ComponentStory<typeof RecentSearchHeader> = (args) => (
  <RecentSearchHeader {...args} />
);
Mobile.parameters = {
  viewport: {
    defaultViewport: "iphone6",
  },
};

Mobile.args = {
  ...Mobile.args,
  showBorderBottom: true,
  handleClearInput: () => {},
  showClearInput: true,
  handleCloseHeader: () => {},
};
