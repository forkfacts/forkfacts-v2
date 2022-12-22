import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { NutritionRate } from "@forkfacts/components";
import { Box } from "@mui/material";

export default {
  title: "Components/NutritionRates",
  component: NutritionRate,
} as ComponentMeta<typeof NutritionRate>;

const Template: ComponentStory<typeof NutritionRate> = (args) => <NutritionRate {...args} />;

export const SingleNutritionRate = Template.bind({});

SingleNutritionRate.args = {
  percentage: "30%",
  weight: "120g",
  name: "PROTEIN",
};

SingleNutritionRate.storyName = "SingleNutritionRate";
