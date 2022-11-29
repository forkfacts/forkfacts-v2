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

export const GroupedMobileLists: ComponentStory<typeof FactSearchLists> = (args) => (
  <FactSearchLists {...args} />
);
GroupedMobileLists.parameters = {
  viewport: {
    defaultViewport: "iphone5",
  },
};

GroupedMobileLists.args = {
  groupLists: groupListsTypes,
  grouped: true,
};

export const recentMobileLists: ComponentStory<typeof FactSearchLists> = (args) => (
  <FactSearchLists {...args} />
);
recentMobileLists.parameters = {
  viewport: {
    defaultViewport: "iphone5",
  },
};

recentMobileLists.args = {
  recentLists: recentLists,
};
