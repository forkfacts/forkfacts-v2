import React from "react";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import { SearchResults } from "@forkfacts/components";
import { SearchResultItemType } from "@forkfacts/models";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
  title: "Components/SearchResults",
  component: SearchResults,
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
    },
  },
  argTypes: {
    collection: {
      name: "collection",
      description: "Collection of single lists data that should be passed to the component",
    },
    onSelectItem: {
      name: "onSelectItem",
      description: "A function that should be passed to select a single search item",
      action: "onClick",
      control: null,
    },
    multiple: {
      name: "multiple",
      description: "If you want multiple table lists pass as a prop to render multiple data",
    },
    handleViewMore: {
      name: "handleViewMore",
      description:
        "An event handler that should be passed if you want to view more lists or expand the lists",
      action: "onClick",
      control: null,
    },
    collections: {
      name: "collection",
      description: "collections multiple data  that should be passed to the component",
    },
  },
} as ComponentMeta<typeof SearchResults>;

const collectionListsItems = [
  { image: "/recentImg.png", name: "Kidney beans light, Legume", path: "/:id" },
  { image: "/image3.png", name: "Grape fruit juices", path: "/:id" },
  {
    image: "/image2.png",
    name: "Baked white bread, Baked products",
    path: "/:id",
  },
  {
    image: "/image4.png",
    name: "Grape fruit juice unsweentened, Fruit ...",
    path: "/:id",
  },
  {
    image: "/image5.png",
    name: "Banana dehydrated/ banana powder",
    path: "/:id",
  },
];

const collectionGroupedItems = [
  { categoryName: "FRUIT AND FRUIT JUICES", collection: collectionListsItems },
  { categoryName: "BABY FOODS", collection: collectionListsItems.slice(0, 3) },
  { categoryName: "SWEETS", collection: collectionListsItems.slice(0, 4) },
];

const Template: ComponentStory<typeof SearchResults> = (args) => <SearchResults {...args} />;

export const SearchResultsItemsMultipleCategories = Template.bind({});
SearchResultsItemsMultipleCategories.parameters = {
  viewport: {
    defaultViewport: "iphone6",
  },
};
SearchResultsItemsMultipleCategories.args = {
  ...SearchResultsItemsMultipleCategories.args,
  collectionGroupedItems,
  multiple: true,
  onSelectItem: (item: SearchResultItemType) => item,
};
SearchResultsItemsMultipleCategories.argTypes = {
  multiple: {
    table: { defaultValue: { summary: true } },
    control: false,
  },
};

export const SearchResultsItemsSingleCategory = Template.bind({});
SearchResultsItemsSingleCategory.parameters = {
  viewport: {
    defaultViewport: "iphone6",
  },
};
SearchResultsItemsSingleCategory.args = {
  ...SearchResultsItemsSingleCategory.args,
  collectionListsItems,
  multiple: false,
  onSelectItem: (item: SearchResultItemType) => item,
};
SearchResultsItemsSingleCategory.argTypes = {
  multiple: {
    table: { defaultValue: { summary: false } },
    control: false,
  },
};
