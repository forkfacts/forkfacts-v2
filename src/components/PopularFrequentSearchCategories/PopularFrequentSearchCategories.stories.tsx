import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { PopularFrequentSearchCategories } from "@forkfacts/components";
import { PopularFrequentSearchProps } from "@forkfacts/models";

export default {
  title: "Components/PopularFrequentSearchCategories",
  component: PopularFrequentSearchCategories,
} as ComponentMeta<typeof PopularFrequentSearchCategories>;

const { PopularFrequentSearchTitle, PopularFrequentSearchItems }: PopularFrequentSearchProps = {
  PopularFrequentSearchTitle: "Popular Foods",
  PopularFrequentSearchItems: [
    {
      searchName: "Flax seeds",
      searchLabels: ["Gluten-free", "Dairy-free"],
      extraInfo: [
        { name: "Calories", weight: "23g" },
        { name: "Fats", weight: "10g" },
        { name: "Proteins", weight: "5g" },
      ],
    },
  ],
};

const Template: ComponentStory<typeof PopularFrequentSearchCategories> = (args) => (
  <PopularFrequentSearchCategories {...args} />
);

export const PopularFrequentSearch = Template.bind({});

PopularFrequentSearch.args = {
  ...PopularFrequentSearch.args,
  PopularFrequentSearchTitle: PopularFrequentSearchTitle,
  PopularFrequentSearchItems: PopularFrequentSearchItems,
};

PopularFrequentSearch.storyName = "PopularFrequentSearchCategories";
