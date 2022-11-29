import React from "react";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import { FactSearchLists } from "@forkfacts/components";
import { ComponentMeta } from "@storybook/react";

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

export const Mobile = () => <FactSearchLists recentLists={recentLists} />;
Mobile.parameters = {
  viewport: {
    defaultViewport: "iphone5",
  },
};
