import React from "react";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import { SearchResultItems } from "@forkfacts/components";
import { searchResultItemTypes } from "@forkfacts/models";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: "Components/SearchResultItems",
  component: SearchResultItems,
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
    },
  },
  argTypes: {
    recentLists: {
      description: "Data value that should be passed to the component",
    },
    onSelectItem: {
      description: "A function that should be passed to select a single search item",
    },
    grouped: {
      description: "If you want grouped table lists pass as a prop to render grouped data",
    },
    onViewMore: {
      description:
        "An event handler that should be passed if you want to view more lists or expand the lists",
    },
    groupLists: {
      description: "Grouped Data value that should be passed to the component",
    },
  },
} as ComponentMeta<typeof SearchResultItems>;

const recentLists = [
  { image: "/recentImg.png", name: "Kidney beans light, Legume", path: "/:id" },
  { image: "/recentImg.png", name: "Grape fruit juices", path: "/:id" },
  {
    image: "/recentImg.png",
    name: "Baked white bread, Baked products",
    path: "/:id",
  },
  {
    image: "/recentImg.png",
    name: "Grape fruit juice unsweentened, Fruit ...",
    path: "/:id",
  },
  {
    image: "/recentImg.png",
    name: "Banana dehydrated/ banana powder",
    path: "/:id",
  },
];

const GroupListsType = [
  { groupTitle: "FRUIT AND FRUIT JUICES", listItems: recentLists },
  { groupTitle: "BABY FOODS", listItems: recentLists.slice(0, 1) },
  { groupTitle: "SWEETS", listItems: recentLists.slice(0, 2) },
];

export const Grouped: ComponentStory<typeof SearchResultItems> = (args) => (
  <SearchResultItems {...args} />
);
Grouped.parameters = {
  viewport: {
    defaultViewport: "iphone6",
  },
};

Grouped.args = {
  groupLists: GroupListsType,
  grouped: true,
  onSelectItem: (item: searchResultItemTypes) => item,
};

Grouped.argTypes = {
  grouped: {
    table: { defaultValue: { summary: true } },
    control: false,
  },
};

// Lists data display
export const Lists: ComponentStory<typeof SearchResultItems> = (args) => (
  <SearchResultItems {...args} />
);
Lists.parameters = {
  viewport: {
    defaultViewport: "iphone6",
  },
};

Lists.args = {
  recentLists: recentLists,
  grouped: false,
  onSelectItem: (item: searchResultItemTypes) => item,
};

Lists.argTypes = {
  grouped: {
    table: { defaultValue: { summary: false } },
    control: false,
  },
};
