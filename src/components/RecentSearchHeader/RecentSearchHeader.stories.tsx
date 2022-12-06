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
    onClosePage: {
      name: "onClosePage",
      description:
        "onClosePage is a functon prop passed into the component that will close the current page the component is being used.",
      action: "onClick",
      control: null,
    },
    onClearSearch: {
      name: "onClearSearch",
      description:
        "onClearSearch is a functon prop passed into the component to  clear the search input field",
      action: "onClick",
      control: null,
    },
    showClearSearch: {
      name: "showClearSearch",
      description:
        "showClearSearch is boolean prop passed into the component and which allows you to trigger onClearSearch",
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
  showClearSearch: false,
};
