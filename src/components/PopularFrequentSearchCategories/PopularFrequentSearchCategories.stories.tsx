import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import { PopularFrequentSearchCategories } from "@forkfacts/components";
import { PopularFrequentSearchProps, PopularFrequentSearchType } from "@forkfacts/models";
import { Box } from "@mui/material";

export default {
  title: "Components/PopularFrequentSearchCategories",
  component: PopularFrequentSearchCategories,
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
    },
  },
} as ComponentMeta<typeof PopularFrequentSearchCategories>;

const { PopularFrequentSearchItems, onSelectPopularItem }: PopularFrequentSearchProps = {
  PopularFrequentSearchItems: [
    {
      searchImg: "/popular.png",
      searchName: "Blueberries",
      extraInfo: [
        { name: "Calories", weight: "23g" },
        { name: "Fats", weight: "10g" },
        { name: "Proteins", weight: "5g" },
      ],
    },
    {
      searchImg: "/popular2.png",
      searchName: "Flax seeds",
      extraInfo: [
        { name: "Calories", weight: "23g" },
        { name: "Fats", weight: "10g" },
        { name: "Proteins", weight: "5g" },
      ],
    },
    {
      searchImg: "/popular3.png",
      searchName: "Sesame seeds",
      extraInfo: [
        { name: "Calories", weight: "23g" },
        { name: "Fats", weight: "10g" },
        { name: "Proteins", weight: "5g" },
      ],
    },
    {
      searchImg: "/popular4.png",
      searchName: "Kidney beans",
      extraInfo: [
        { name: "Calories", weight: "23g" },
        { name: "Fats", weight: "10g" },
        { name: "Proteins", weight: "5g" },
      ],
    },
    {
      searchImg: "/popular5.png",
      searchName: "Almonds",
      extraInfo: [
        { name: "Calories", weight: "23g" },
        { name: "Fats", weight: "10g" },
        { name: "Proteins", weight: "5g" },
      ],
    },
    {
      searchImg: "/popular6.png",
      searchName: "Walnuts",
      extraInfo: [
        { name: "Calories", weight: "23g" },
        { name: "Fats", weight: "10g" },
        { name: "Proteins", weight: "5g" },
      ],
    },
    {
      searchImg: "/popular7.png",
      searchName: "Spinach",
      extraInfo: [
        { name: "Calories", weight: "23g" },
        { name: "Fats", weight: "10g" },
        { name: "Proteins", weight: "5g" },
      ],
    },
    {
      searchImg: "/popular8.png",
      searchName: "Sunflower seeds",
      extraInfo: [
        { name: "Calories", weight: "23g" },
        { name: "Fats", weight: "10g" },
        { name: "Proteins", weight: "5g" },
      ],
    },
  ],
  onSelectPopularItem: (item: PopularFrequentSearchType) => {},
};

const Template: ComponentStory<typeof PopularFrequentSearchCategories> = (args) => (
  <Box
    sx={{
      display: "flex",
      justifyContent: "center",
      flexDirection: "column",
      width: { sm: "100%", md: "60%" },
      marginLeft: "auto",
      marginRight: "auto",
    }}
  >
    <PopularFrequentSearchCategories {...args} />
  </Box>
);

export const Desktop = Template.bind({});

Desktop.args = {
  ...Desktop.args,
  PopularFrequentSearchItems: PopularFrequentSearchItems,
  onSelectPopularItem: onSelectPopularItem,
};

export const Mobile = Template.bind({});

Mobile.args = {
  ...Mobile.args,
  PopularFrequentSearchItems: PopularFrequentSearchItems,
  onSelectPopularItem: onSelectPopularItem,
};
Mobile.parameters = {
  viewport: {
    defaultViewport: "iphonexr",
  },
};

export const Tablet = Template.bind({});
Tablet.args = {
  ...Tablet.args,
  PopularFrequentSearchItems: PopularFrequentSearchItems,
  onSelectPopularItem: onSelectPopularItem,
};
Tablet.parameters = {
  viewport: {
    defaultViewport: "ipad",
  },
};
