import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { SharedSocialMedia } from "@forkfacts/components";

export default {
  title: "Components/SharedSocialMedia",
  component: SharedSocialMedia,
} as ComponentMeta<typeof SharedSocialMedia>;

const Template: ComponentStory<typeof SharedSocialMedia> = (args) => (
  <SharedSocialMedia {...args} />
);

export const Desktop = Template.bind({});

Desktop.args = {};
