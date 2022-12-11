import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import { SearchResultItem } from "@forkfacts/components";
import { SearchResultItemType } from "@forkfacts/models";

export default {
  title: "Components/SearchResultsItem/SearchResultItem",
  component: SearchResultItem,
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
    },
  },
  argTypes: {
    onSelectItem: {
      description: "A function that should be passed to select a single search item",
    },
    item: {
      description: "A single search item prop passed to the component",
    },
  },
} as ComponentMeta<typeof SearchResultItem>;

const Template: ComponentStory<typeof SearchResultItem> = (args) => <SearchResultItem {...args} />;

export const searchItem = Template.bind({});
searchItem.args = {
  ...searchItem.args,
  item: {
    name: "Banana dehydrated/ banana powder",
    image: "/recentImg.png",
    path: "/:",
  },
  onSelectItem: (item: SearchResultItemType) => item,
};
searchItem.parameters = {
  viewport: {
    defaultViewport: "iphone6",
  },
};

searchItem.storyName = "SearchResultItem";
