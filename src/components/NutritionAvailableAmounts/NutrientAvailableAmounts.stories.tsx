import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import { NutrientAvailableAmounts } from "@forkfacts/components";
import { Box } from "@mui/material";

export default {
  title: "Components/Nutrition/NutrientAvailableAmounts",
  component: NutrientAvailableAmounts,
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
    },
  },
} as ComponentMeta<typeof NutrientAvailableAmounts>;

const availableAmounts = ["1 tablespoon", "1 cup", "100g"];

const Template: ComponentStory<typeof NutrientAvailableAmounts> = (args) => (
  <Box style={{ width: "10%" }}>
    <NutrientAvailableAmounts {...args} />
  </Box>
);

export const Main = Template.bind({});

Main.args = {
  availableAmounts: availableAmounts,
  onSelectAvailableAmounts: (name: string) => {},
};
