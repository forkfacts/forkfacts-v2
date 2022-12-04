import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { ViewMoreButton } from "@forkfacts/components";

export default {
  title: "Components/Buttons/ViewMoreButton",
  component: ViewMoreButton,
  argTypes: {},
} as ComponentMeta<typeof ViewMoreButton>;

const Template: ComponentStory<typeof ViewMoreButton> = (args) => <ViewMoreButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  ...Primary.args,
};
