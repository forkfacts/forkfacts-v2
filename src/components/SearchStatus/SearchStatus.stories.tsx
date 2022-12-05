import React from "react";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { SearchStatus } from "@forkfacts/components";

export default {
  title: "Components/SearchStatus",
  component: SearchStatus,
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
    },
  },
  argTypes: {
    status: {
      control: "select",
      name: "Status",
      options: ["RecentScreen", "ResultsScreen"],
      description: "This option allows you display search screen you want on the page",
      table: {
        defaultValue: { summary: "Recentscreen" },
      },
    },
    onhandleClearSearch: {
      name: "onhandleClearSearch",
      description: "A function that is passed to the component to clear search history",
      table: {
        type: "onhandleClearSearch=()=>{}",
      },
    },
  },
} as ComponentMeta<typeof SearchStatus>;

export const Mobile: ComponentStory<typeof SearchStatus> = (args) => <SearchStatus {...args} />;
Mobile.parameters = {
  viewport: {
    defaultViewport: "iphone6",
  },
};

Mobile.args = {
  ...Mobile.args,
  status: "RecentScreen",
};
