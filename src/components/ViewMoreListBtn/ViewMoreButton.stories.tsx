import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { ViewMoreListBtn } from "@forkfacts/components";

export default {
  title: "Components/ViewMoreListBtn",
  component: ViewMoreListBtn,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof ViewMoreListBtn>;

const Template: ComponentStory<typeof ViewMoreListBtn> = (args) => <ViewMoreListBtn {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  ...Primary.args,
};
