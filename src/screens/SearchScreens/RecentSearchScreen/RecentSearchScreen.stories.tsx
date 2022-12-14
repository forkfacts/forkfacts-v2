import React from "react";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { RecentSearchScreen } from "@forkfacts/screens";
import { SearchResultItemType } from "@forkfacts/models";

export default {
  title: "Screens/SearchScreen/RecentSearchScreen",
  component: RecentSearchScreen,
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
    },
  },
} as ComponentMeta<typeof RecentSearchScreen>;

export const Mobile: ComponentStory<typeof RecentSearchScreen> = (args) => (
  <RecentSearchScreen {...args} />
);

const collectionListsItems = [
  { image: "/recentImg.png", name: "Kidney beans light, Legume", url: "/:id" },
  { image: "/image3.png", name: "Grape fruit juices", url: "/:id" },
  {
    image: "/image2.png",
    name: "Baked white bread, Baked products",
    url: "/:id",
  },
  {
    image: "/image4.png",
    name: "Grape fruit juice unsweentened, Fruit ...",
    url: "/:id",
  },
  {
    image: "/image5.png",
    name: "Banana dehydrated/ banana powder",
    url: "/:id",
  },
];
Mobile.parameters = {
  viewport: {
    defaultViewport: "iphone6",
  },
};

Mobile.args = {
  ...Mobile.args,
  collectionListsItems,
  onSelectItem: (item: SearchResultItemType) => item,
};
