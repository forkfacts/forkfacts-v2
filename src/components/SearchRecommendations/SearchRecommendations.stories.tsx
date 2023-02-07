import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import { SearchRecommendations } from "@forkfacts/components";
import { recommendationType } from "@forkfacts/models";

export default {
  title: "Components/SearchRecommendations",
  component: SearchRecommendations,
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
    },
  },
} as ComponentMeta<typeof SearchRecommendations>;

const recommendations: recommendationType[] = [
  {
    recommendationName: "Tags",
    recommendationItems: [
      {
        name: "SUPERFOODS",
        icon: "/tag1.png",
      },
      {
        name: "Kosher",
        icon: "/tag2.png",
      },
      {
        name: "Flax seeds",
        icon: "/tag3.png",
      },
    ],
  },
  {
    recommendationName: "COMPARE FOODS",
    recommendationItems: [
      { name: "Nuts and seeds", icon: "/tag4.png" },
      { name: "Legumes", icon: "/tag5.png" },
      { name: "Fruits", icon: "/tag3.png" },
    ],
  },
  {
    recommendationName: "Vitamins and minerals",
    recommendationItems: [
      { name: "Vitamin A", icon: "/tag4.png" },
      { name: "Zinc", icon: "/tag4.png" },
      { name: "Vitamin B12", icon: "/tag5.png" },
    ],
  },
  {
    recommendationName: "Recipes",
    recommendationItems: [
      { name: "Creamy broccoli pasta", icon: "/tag1.png" },
      { name: "Broccoli pasta salad", icon: "/tag2.png" },
    ],
  },
];

const Template: ComponentStory<typeof SearchRecommendations> = (args) => (
  <SearchRecommendations {...args} />
);

export const Mobile = Template.bind({});

Mobile.args = {
  recommendations,
};

Mobile.parameters = {
  viewport: {
    defaultViewport: "iphone6",
  },
};
