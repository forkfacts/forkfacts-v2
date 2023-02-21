import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import SearchRecommendationItem from "./SearchRecommendationItem";

export default {
  title: "Components/SearchRecommendations",
  component: SearchRecommendationItem,

  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof SearchRecommendationItem>;

const Template: ComponentStory<typeof SearchRecommendationItem> = (args) => (
  <SearchRecommendationItem {...args} />
);

export const Item = Template.bind({});

Item.args = {
  item: { name: "Nuts and seeds", icon: "/tag4.svg" },
};

Item.storyName = "SearchRecommendationItem";
