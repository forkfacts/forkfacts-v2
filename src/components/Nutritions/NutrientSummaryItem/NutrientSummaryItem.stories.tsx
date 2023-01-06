import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { NutrientSummaryItem } from "@forkfacts/components";

export default {
  title: "Components/Nutrition/NutritionSummary",
  component: NutrientSummaryItem,
} as ComponentMeta<typeof NutrientSummaryItem>;

const Template: ComponentStory<typeof NutrientSummaryItem> = (args) => (
  <NutrientSummaryItem {...args} />
);

export const SingleNutrientSummaryItem = Template.bind({});

SingleNutrientSummaryItem.args = {
  percentage: 30,
  weight: "120g",
  name: "PROTEIN",
};

SingleNutrientSummaryItem.storyName = "SingleNutrientSummaryItem";
