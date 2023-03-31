import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import { FoodOverview } from "@forkfacts/components";
import { Box } from "@mui/material";

export default {
  title: "Components/DetailPageComponents/FoodOverview",
  component: FoodOverview,
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
    },
  },
} as ComponentMeta<typeof FoodOverview>;

const values = {
  img: "/banana.svg",
  name: "Banana, overripe, raw",
  category: "Fruits and Fruit Juices",
  nutritionValues: [
    { name: "Gluten - Free", icon: "/details1.svg" },
    { name: "Vegan", icon: "/details2.svg" },
    { name: "Good for diabetes", icon: "/details3.svg" },
  ],
  tag: "High in Vitamin C and Calcium",
};

const Template: ComponentStory<typeof FoodOverview> = (args) => {
  return (
    <Box sx={{ mt: { md: "50px", sm: "50px" } }}>
      <FoodOverview {...args} />
    </Box>
  );
};

export const Desktop = Template.bind({});

Desktop.args = {
  values,
};

export const Mobile = Template.bind({});

Mobile.args = {
  values,
};

Mobile.parameters = {
  viewport: {
    defaultViewport: "iphonexr",
  },
};

export const Tablet = Template.bind({});

Tablet.args = {
  values,
};

Tablet.parameters = {
  viewport: {
    defaultViewport: "ipad",
  },
};
