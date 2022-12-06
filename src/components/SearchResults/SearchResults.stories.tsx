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
    recentLists: {
      name: "recentLists",
      description: "Data value that should be passed to the component",
    },
    onSelectItem: {
      name: "onSelectItem",
      description: "A function that should be passed to select a single search item",
      action: "onClick",
      control: null,
    },
    grouped: {
      name: "grouped",
      description: "If you want grouped table lists pass as a prop to render grouped data",
    },
    handleViewMore: {
      name: "handleViewMore",
      description:
        "An event handler that should be passed if you want to view more lists or expand the lists",
      action: "onClick",
      control: null,
    },
    groupLists: {
      name: "groupLists",
      description: "Grouped Data value that should be passed to the component",
    },
  },
} as ComponentMeta<typeof SearchResults>;

const recentLists = [
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

const GroupListsType = [
  { categoryName: "FRUIT AND FRUIT JUICES", listItems: recentLists },
  { categoryName: "BABY FOODS", listItems: recentLists.slice(0, 3) },
  { categoryName: "SWEETS", listItems: recentLists.slice(0, 4) },
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
  groupLists: GroupListsType,
  grouped: true,
  onSelectItem: (item: SearchResultItemType) => item,
};
SearchResultsItemsMultipleCategories.argTypes = {
  grouped: {
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
  recentLists: recentLists,
  grouped: false,
  onSelectItem: (item: SearchResultItemType) => item,
};
SearchResultsItemsSingleCategory.argTypes = {
  grouped: {
    table: { defaultValue: { summary: false } },
    control: false,
  },
};
