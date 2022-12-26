import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import { LifeStage } from "@forkfacts/components";

export default {
  title: "Components/LifeStage",
  component: LifeStage,
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
    },
  },
} as ComponentMeta<typeof LifeStage>;

const Template: ComponentStory<typeof LifeStage> = (args) => <LifeStage {...args} />;

export const Mobile = Template.bind({});

Mobile.parameters = {
  viewport: {
    defaultViewport: "iphone6",
  },
};
