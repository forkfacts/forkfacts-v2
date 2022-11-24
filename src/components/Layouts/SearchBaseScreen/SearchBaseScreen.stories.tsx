import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import { SearchBaseScreen } from "@forkfacts/components";

export default {
  title: "Components/layouts/SearchBaseScreen",
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
    },
  },
  component: SearchBaseScreen,
} as ComponentMeta<typeof SearchBaseScreen>;

export const Mobile: ComponentStory<typeof SearchBaseScreen> = (args) => {
  return (
    <>
      <SearchBaseScreen {...args}>
        {/* comtent */}
        <main>Page content</main>
      </SearchBaseScreen>
    </>
  );
};

Mobile.parameters = {
  viewport: {
    defaultViewport: "iphone5",
  },
};
