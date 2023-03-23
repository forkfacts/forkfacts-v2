import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import { NutritionFilters } from "@forkfacts/components";
import { Baby, Kids, Lactation, Male, PregnantWoman, Woman } from "@forkfacts/icons";
import { RdiAge, lifeStageItem, SelectedNutrient } from "@forkfacts/models";

export default {
  title: "Components/Filters/NutritionFilters",
  component: NutritionFilters,
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
    },
  },
} as ComponentMeta<typeof NutritionFilters>;

const lifeStageItems: lifeStageItem[] = [
  {
    name: "Children",
    icon: Kids,
  },
  {
    name: "Infants",
    icon: Baby,
  },
  {
    name: "females",
    icon: Woman,
  },
  {
    name: "males",
    icon: Male,
  },
  {
    name: "Pregnant",
    icon: PregnantWoman,
  },
  {
    name: "Lactation",
    icon: Lactation,
  },
];

const ageItems: RdiAge[] = [
  {
    start: 9,
    end: 13,
    ageUnit: "years",
  },
  {
    start: 14,
    end: 18,
    ageUnit: "years",
  },
  {
    start: 19,
    end: 30,
    ageUnit: "years",
  },
  {
    start: 31,
    end: 50,
    ageUnit: "years",
  },
  {
    start: 51,
    end: 70,
    ageUnit: "years",
  },
];

const nutritionFilterItems: SelectedNutrient[] = [
  {
    name: "Vitamin",
    unit: "mg",
    subItems: [
      { name: "Vitamin B1", checked: false },
      { name: "Vitamin B2", checked: false },
      { name: "Vitamin B3", checked: false },
      { name: "Vitamin B4", checked: false },
    ],
    checked: false,
  },
  {
    name: "Protein",
    unit: "mg",
    subItems: [
      { name: "Protein B1", checked: false },
      { name: "Protein B2", checked: false },
    ],
    checked: false,
  },
  { name: "Carbohydrate", unit: "mg", subItems: [], checked: false },
  { name: "Water", unit: "mg", subItems: [], checked: false },
  { name: "Fats", unit: "mg", subItems: [], checked: false },
  { name: "Fiber", unit: "mg", subItems: [], checked: false },
  { name: "Minerals", unit: "mg", subItems: [], checked: false },
];

const Template: ComponentStory<typeof NutritionFilters> = (args) => {
  const [selectSearchNutrition, seSelectedSearchNutrition] = useState([] as SelectedNutrient[]);
  return <NutritionFilters {...args} onSelectNutritionFilterItem={seSelectedSearchNutrition} />;
};

export const Desktop = Template.bind({});

Desktop.args = {
  lifeStageItems,
  ageItems,
  nutritionFilterItems,
};

export const Mobile = Template.bind({});

Mobile.parameters = {
  viewport: {
    defaultViewport: "iphonexr",
  },
};

Mobile.args = {
  lifeStageItems,
  ageItems,
  nutritionFilterItems,
};
