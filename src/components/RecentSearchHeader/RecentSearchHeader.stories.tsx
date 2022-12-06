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
      table: {
        defaultValue: {
          summary: true,
        },
      },
    },
    handleCloseHeader: {
      name: "handleCloseHeader",
      description:
        "handleCloseHeader is a functon prop passed into the component that will close the current page the component is being used.",
      action: "onClick",
      control: null,
    },
    handleClearInput: {
      name: "handleClearInput",
      description:
        "handleClearInput is a functon prop passed into the component to  clear the search input field",
      action: "onClick",
      control: null,
    },
    showClearInput: {
      name: "showClearInput",
      description:
        "showClearInput is boolean prop passed into the component and which allows you to trigger handleClearInput",
      table: {
        defaultValue: {
          summary: false,
        },
      },
    },
  },
} as ComponentMeta<typeof RecentSearchHeader>;

const Template: ComponentStory<typeof RecentSearchHeader> = (args) => (
  <RecentSearchHeader {...args} />
);

export const Mobile = Template.bind({});

Mobile.parameters = {
  viewport: {
    defaultViewport: "iphone6",
  },
};

Mobile.args = {
  ...Mobile.args,
  showBorderBottom: true,
  showClearInput: false,
};
