import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { SideBarDrawer } from "@forkfacts/components";

export default {
  title: "Components/SideBarDrawer",
  component: SideBarDrawer,
} as ComponentMeta<typeof SideBarDrawer>;

const Template: ComponentStory<typeof SideBarDrawer> = (args) => <SideBarDrawer {...args} />;

export const Primary = Template.bind({});
