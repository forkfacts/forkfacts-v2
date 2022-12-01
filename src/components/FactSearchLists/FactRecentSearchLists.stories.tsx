import React from "react";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import { FactSearchLists } from "@forkfacts/components";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: "Components/FactSearchLists",
  component: FactSearchLists,
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
    },
  },
} as ComponentMeta<typeof FactSearchLists>;

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

const groupListsTypes = [
  { groupTitle: "FRUIT AND FRUIT JUICES", listItems: recentLists },
  { groupTitle: "BABY FOODS", listItems: recentLists.slice(0, 1) },
  { groupTitle: "SWEETS", listItems: recentLists.slice(0, 2) },
];

export const Grouped: ComponentStory<typeof FactSearchLists> = (args) => (
  <FactSearchLists {...args} />
);
Grouped.parameters = {
  viewport: {
    defaultViewport: "iphone5",
  },
};

Grouped.args = {
  groupLists: groupListsTypes,
  grouped: true,
};

export const Lists: ComponentStory<typeof FactSearchLists> = (args) => (
  <FactSearchLists {...args} />
);
Lists.parameters = {
  viewport: {
    defaultViewport: "iphone5",
  },
};

Lists.args = {
  recentLists: recentLists,
};
