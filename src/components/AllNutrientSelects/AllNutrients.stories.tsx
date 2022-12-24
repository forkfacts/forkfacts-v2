import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { AllNutrientSelects } from "@forkfacts/components";

export default {
  title: "Components/Nutrition/AllNutrientSelects",
  component: AllNutrientSelects,
} as ComponentMeta<typeof AllNutrientSelects>;

const allNutrients: string[] = [
  "Protein",
  "Carbohydrate",
  "Water",
  "Vitamin",
  "Fats",
  "Fiber",
  "Minerals",
];

const Template: ComponentStory<typeof AllNutrientSelects> = (args) => (
  <AllNutrientSelects {...args} />
);

export const Main = Template.bind({});
Main.args = {
  ...Main.args,
  allNutrients: allNutrients,
  getSelectedNutrients: (items: string[]) => {
    console.log(items);
  },
};
