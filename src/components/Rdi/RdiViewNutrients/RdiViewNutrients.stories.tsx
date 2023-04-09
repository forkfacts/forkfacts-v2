import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { SelectedNutrient } from "@forkfacts/models";
import { RdiViewNutrients } from "@forkfacts/components";

export default {
  title: "Components/Rdi/RdiViewNutrients",
  component: RdiViewNutrients,
} as ComponentMeta<typeof RdiViewNutrients>;

const Template: ComponentStory<typeof RdiViewNutrients> = (args) => <RdiViewNutrients {...args} />;

const nutritionFilterItems: SelectedNutrient[] = [
  {
    name: "Vitamins",
    nutrientGroup: "Vitamins",
    rows: [
      { name: "Vitamin B1", checked: false, nutrientGroup: "Vitamins" },
      { name: "Vitamin B2", checked: false, nutrientGroup: "Vitamins" },
      { name: "Vitamin B3", checked: false, nutrientGroup: "Vitamins" },
      { name: "Vitamin B4", checked: false, nutrientGroup: "Vitamins" },
    ],
    checked: false,
  },
  {
    name: "Proteins",
    nutrientGroup: "Proteins",
    rows: [
      { name: "Protein B1", checked: false, nutrientGroup: "Proteins" },
      { name: "Protein B2", checked: false, nutrientGroup: "Proteins" },
    ],
    checked: false,
  },
  { name: "Carbohydrate", rows: [], checked: false, nutrientGroup: "" },
  { name: "Water", rows: [], checked: false, nutrientGroup: "" },
  { name: "Fats", rows: [], checked: false, nutrientGroup: "" },
  { name: "Fiber", rows: [], checked: false, nutrientGroup: "" },
  { name: "Minerals", rows: [], checked: false, nutrientGroup: "" },
];

export const Desktop = Template.bind({});

Desktop.args = {
  nutritionFilterItems,
};
