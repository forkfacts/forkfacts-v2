import React from "react";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { TypingSearchScreen } from "@forkfacts/screens";

export default {
  title: "Screens/SearchScreen/TypingSearchScreen",
  component: TypingSearchScreen,
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
    },
  },
} as ComponentMeta<typeof TypingSearchScreen>;

export const Mobile: ComponentStory<typeof TypingSearchScreen> = (args) => (
  <TypingSearchScreen {...args} />
);
Mobile.parameters = {
  viewport: {
    defaultViewport: "iphone6",
  },
};

Mobile.args = {
  status: "ResultsScreen",
};
