import React from "react";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import { FactRecentSearchLists } from "@forkfacts/components";
import { ComponentMeta } from "@storybook/react";

export default {
  title: "Components/FactRecentSearchLists",
  component: FactRecentSearchLists,
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
    },
  },
} as ComponentMeta<typeof FactRecentSearchLists>;

const recentLists = [
  { image: "", name: "Kidney beans light, Legume", path: "/:id" },
  { image: "", name: "Grape fruit juices", path: "/:id" },
  { image: "", name: "Baked white bread, Baked products", path: "/:id" },
  { image: "", name: "Grape fruit juice unsweentened, Fruit ...", path: "/:id" },
  { image: "", name: "Banana dehydrated/ banana powder", path: "/:id" },
];
export const Desktop = () => <FactRecentSearchLists recentLists={recentLists} />;

export const Mobile = () => <FactRecentSearchLists recentLists={recentLists} />;
Mobile.parameters = {
  viewport: {
    defaultViewport: "iphone5",
  },
};

export const Tablet = () => <FactRecentSearchLists recentLists={recentLists} />;
Tablet.parameters = {
  viewport: {
    defaultViewport: "ipad",
  },
};
