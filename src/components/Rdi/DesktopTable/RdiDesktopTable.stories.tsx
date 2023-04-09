import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { RdiDesktopTable } from "@forkfacts/components";

export default {
  title: "Components/Rdi/RdiDesktopTable",
  component: RdiDesktopTable,
} as ComponentMeta<typeof RdiDesktopTable>;

const Template: ComponentStory<typeof RdiDesktopTable> = (args) => <RdiDesktopTable {...args} />;

export const Desktop = Template.bind({});
