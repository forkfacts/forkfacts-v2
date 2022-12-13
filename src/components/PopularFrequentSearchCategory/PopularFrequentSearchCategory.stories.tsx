import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { PopularFrequentSearchCategory } from "@forkfacts/components";

export default {
  title: "Components/PopularFrequentSearchCategories",
  component: PopularFrequentSearchCategory,
} as ComponentMeta<typeof PopularFrequentSearchCategory>;

const Template: ComponentStory<typeof PopularFrequentSearchCategory> = (args) => (
  <PopularFrequentSearchCategory {...args} />
);

const PopularFrequentSearchItems = {
  searchImg: "/popular.png",
  searchName: "Flax seeds",
  searchLabels: ["Gluten-free", "Dairy-free"],
  extraInfo: [
    { name: "Calories", weight: "23g" },
    { name: "Fats", weight: "10g" },
    { name: "Proteins", weight: "5g" },
  ],
};

export const PopularFrequentSingleSearch = Template.bind({});

PopularFrequentSingleSearch.args = {
  item: PopularFrequentSearchItems,
};

PopularFrequentSingleSearch.storyName = "PopularFrequentSearchCategory";
