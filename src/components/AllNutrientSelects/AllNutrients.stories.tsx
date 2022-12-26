import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { AllNutrientSelects } from "@forkfacts/components";
import { filterItem } from "@forkfacts/models";

export default {
  title: "Components/Nutrition/AllNutrientSelects",
  component: AllNutrientSelects,
} as ComponentMeta<typeof AllNutrientSelects>;

const allNutrients: filterItem[] = [
  { name: "Protein", amount: 0 },
  { name: "Fiber", amount: 0 },
  { name: "Carbohydrate", amount: 2 },
  { name: "Minerals", amount: 16 },
  { name: "Vitamin", amount: 15 },
  { name: "Fats", amount: 4 },
  { name: "Water", amount: 0 },
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
