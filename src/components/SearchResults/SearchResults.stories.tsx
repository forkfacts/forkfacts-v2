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
  { image: "/recentImg.png", name: "Kidney beans light, Legume", url: "/:id", category: "Food" },
  { image: "/image3.png", name: "Grape fruit juices", url: "/:id", category: "Food" },
  {
    image: "/image2.png",
    name: "Baked white bread, Baked products",
    url: "/:id",
    category: "Food",
  },
  {
    image: "/image4.png",
    name: "Grape fruit juice unsweentened, Fruit ...",
    url: "/:id",
    category: "Recipes",
  },
  {
    image: "/image5.png",
    name: "Banana dehydrated/ banana powder",
    url: "/:id",
    category: "Library",
  },
];

const Template: ComponentStory<typeof SearchResults> = (args) => {
  return <SearchResults {...args} />;
};

export const SearchResultsItemsMultipleDesktopCategories = Template.bind({});

SearchResultsItemsMultipleDesktopCategories.args = {
  multiple: true,
  onSelectItem: (item: SearchResultItemType) => item,
  collectionListsItems,
};

SearchResultsItemsMultipleDesktopCategories.storyName =
  "SearchResultsItemsMultipleDesktopCategories";

export const SearchResultsItemsSingleDesktopCategory = Template.bind({});

SearchResultsItemsSingleDesktopCategory.args = {
  collectionListsItems,
  multiple: false,
  onSelectItem: (item: SearchResultItemType) => item,
};

SearchResultsItemsSingleDesktopCategory.storyName = "SearchResultsItemsSingleDesktopCategory";

export const SearchResultsItemsMultipleMobileCategories = Template.bind({});
SearchResultsItemsMultipleMobileCategories.parameters = {
  viewport: {
    defaultViewport: "iphonexr",
  },
};
SearchResultsItemsMultipleMobileCategories.args = {
  multiple: true,
  onSelectItem: (item: SearchResultItemType) => item,
  collectionListsItems,
};
SearchResultsItemsMultipleMobileCategories.argTypes = {
  multiple: {
    table: { defaultValue: { summary: true } },
    control: false,
  },
};
SearchResultsItemsMultipleMobileCategories.storyName = "SearchResultsItemsMultipleMobileCategories";

export const SearchResultsItemsSingleMobileCategory = Template.bind({});
SearchResultsItemsSingleMobileCategory.parameters = {
  viewport: {
    defaultViewport: "iphonexr",
  },
};
SearchResultsItemsSingleMobileCategory.args = {
  collectionListsItems,
  multiple: false,
  onSelectItem: (item: SearchResultItemType) => item,
};
SearchResultsItemsSingleMobileCategory.argTypes = {
  multiple: {
    table: { defaultValue: { summary: false } },
    control: false,
  },
};

SearchResultsItemsSingleMobileCategory.storyName = "SearchResultsItemsSingleMobileCategory";
