import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { RdiMobileTable } from "@forkfacts/components";

export default {
  title: "Components/Rdi/RdiMobileTable",
  component: RdiMobileTable,
} as ComponentMeta<typeof RdiMobileTable>;

const Template: ComponentStory<typeof RdiMobileTable> = (args) => <RdiMobileTable {...args} />;

export const Desktop = Template.bind({});
