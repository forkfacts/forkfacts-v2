import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import { SearchRecommendations } from "@forkfacts/components";
import { recommendationType } from "@forkfacts/models";
import { Box } from "@mui/material";

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
        name: "Chia seeds",
        icon: "/tag1.svg",
      },
      {
        name: "Kosher",
        icon: "/tag2.svg",
      },
      {
        name: "Flax seeds",
        icon: "/tag3.svg",
      },
    ],
  },
  {
    recommendationName: "COMPARE FOODS",
    recommendationItems: [
      { name: "Nuts and seeds", icon: "/tag4.svg" },
      { name: "Legumes", icon: "/tag5.svg" },
      { name: "Fruits", icon: "/tag3.svg" },
    ],
  },
  {
    recommendationName: "Vitamins and minerals",
    recommendationItems: [
      { name: "Vitamin A", icon: "/tag4.svg" },
      { name: "Zinc", icon: "/tag4.svg" },
      { name: "Vitamin B12", icon: "/tag5.svg" },
    ],
  },
  {
    recommendationName: "Recipes",
    recommendationItems: [{ name: "Creamy broccoli pasta" }],
  },
];

const Template: ComponentStory<typeof SearchRecommendations> = (args) => {
  return (
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
      {" "}
      <SearchRecommendations {...args} />
    </Box>
  );
};

export const Desktop = Template.bind({});

Desktop.args = {
  recommendations,
};

export const Mobile = Template.bind({});

Mobile.args = {
  recommendations,
};

Mobile.parameters = {
  viewport: {
    defaultViewport: "iphone6",
  },
};

export const Tablet = Template.bind({});

Tablet.args = {
  recommendations,
};

Tablet.parameters = {
  viewport: {
    defaultViewport: "ipad",
  },
};
