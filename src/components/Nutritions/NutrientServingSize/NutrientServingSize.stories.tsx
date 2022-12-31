import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import { NutrientServingSize } from "@forkfacts/components";
import { Box } from "@mui/material";

export default {
  title: "Components/Nutrition/NutrientServingSize",
  component: NutrientServingSize,
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
    },
  },
} as ComponentMeta<typeof NutrientServingSize>;

const servingSizeAmounts = ["1 tablespoon", "1 cup", "100 g"];

const Template: ComponentStory<typeof NutrientServingSize> = (args) => (
  <Box style={{ width: "10%" }}>
    <NutrientServingSize {...args} />
  </Box>
);

export const Main = Template.bind({});

Main.args = {
  servingSizeAmounts: servingSizeAmounts,
  onSelectServingSizeAmount: (name: string) => {},
};
