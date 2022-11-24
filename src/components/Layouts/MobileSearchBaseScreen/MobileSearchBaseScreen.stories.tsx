import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import { MobileSearchBaseScreen } from "@forkfacts/components";

export default {
  title: "Components/layouts/MobileSearchBaseScreen",
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
    },
  },
  component: MobileSearchBaseScreen,
} as ComponentMeta<typeof MobileSearchBaseScreen>;

export const Mobile: ComponentStory<typeof MobileSearchBaseScreen> = (args) => {
  return (
    <>
      <MobileSearchBaseScreen {...args}>
        {/* comtent */}
        <main>Page content</main>
      </MobileSearchBaseScreen>
    </>
  );
};

Mobile.parameters = {
  viewport: {
    defaultViewport: "iphone5",
  },
};
