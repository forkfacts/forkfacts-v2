import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { ViewMoreButton as ViewMoreBtn } from "@forkfacts/components";

export default {
  title: "Components/Buttons",
  component: ViewMoreBtn,
  argTypes: {},
} as ComponentMeta<typeof ViewMoreBtn>;

const Template: ComponentStory<typeof ViewMoreBtn> = (args) => <ViewMoreBtn {...args} />;

export const ViewMoreButton = Template.bind({});
ViewMoreButton.args = {
  ...ViewMoreButton.args,
};

ViewMoreButton.storyName = "ViewMoreButton";
