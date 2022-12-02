import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import { FactlListItem } from "@forkfacts/components";

export default {
  title: "Components/FactSearchLists/FactlListItem",
  component: FactlListItem,
  argTypes: {
    backgroundColor: { control: "color" },
  },
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
    },
  },
} as ComponentMeta<typeof FactlListItem>;

const Template: ComponentStory<typeof FactlListItem> = (args) => <FactlListItem {...args} />;

export const Listitem = Template.bind({});
Listitem.args = {
  ...Listitem.args,
  item: {
    name: "Banana dehydrated/ banana powder",
    image: "/recentImg.png",
    path: "/:",
  },
};
Listitem.parameters = {
  viewport: {
    defaultViewport: "iphone6",
  },
};
