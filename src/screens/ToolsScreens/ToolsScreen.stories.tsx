import React from "react";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { menuItems } from "../../RealData/realData";
import { ToolsScreen } from "@forkfacts/screens";

export default {
  title: "Screens/Tools/ToolsScreen",
  component: ToolsScreen,
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
    },
  },
} as ComponentMeta<typeof ToolsScreen>;

const Template: ComponentStory<typeof ToolsScreen> = (args) => <ToolsScreen {...args} />;

export const Desktop = Template.bind({});

Desktop.args = {
  menuItems,
};

export const Mobile = Template.bind({});

Mobile.parameters = {
  viewport: {
    defaultViewport: "iphonexr",
  },
};

Mobile.args = {
  menuItems,
};

export const Tablet = Template.bind({});
Tablet.args = {
  menuItems,
};

Tablet.parameters = {
  viewport: {
    defaultViewport: "ipad",
  },
};
