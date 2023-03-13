import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import { AllFilters } from "@forkfacts/components";
import { ageItem, lifeStageItem, SearchNutritionFilterItem } from "@forkfacts/models";
import { Baby, Kids, Lactation, Male, PregnantWoman, Woman } from "@forkfacts/icons";

export default {
  title: "Components/Filters/AllFilters",
  component: AllFilters,
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
    },
  },
  argTypes: {
    selectedFilters: {
      control: {
        type: "select",
        options: ["All filters", "Life stage", "Age", "Nutrients", "Measure Units"],
      },
    },
  },
} as ComponentMeta<typeof AllFilters>;

const lifeStageItems: lifeStageItem[] = [
  {
    name: "Infant",
    icon: Baby,
  },
  {
    name: "Children",
    icon: Kids,
  },
  {
    name: "Male",
    icon: Male,
  },
  {
    name: "Female",
    icon: Woman,
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

const ageItems: ageItem[] = [
  {
    start: 9,
    end: 13,
    unit: "years",
  },
  {
    start: 14,
    end: 18,
    unit: "years",
  },
  {
    start: 19,
    end: 30,
    unit: "years",
  },
  {
    start: 31,
    end: 50,
    unit: "years",
  },
  {
    start: 51,
    end: 70,
    unit: "years",
  },
  {
    end: 70,
    unit: "years",
  },
];

const nutritionFilterItems: SearchNutritionFilterItem[] = [
  {
    name: "Vitamin",
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
    subItems: [
      { name: "Protein B1", checked: false },
      { name: "Protein B2", checked: false },
    ],
    checked: false,
  },
  { name: "Carbohydrate", subItems: [], checked: false },
  { name: "Water", subItems: [], checked: false },
  { name: "Fats", subItems: [], checked: false },
  { name: "Fiber", subItems: [], checked: false },
  { name: "Minerals", subItems: [], checked: false },
];
const Template: ComponentStory<typeof AllFilters> = (args) => <AllFilters {...args} />;

export const Mobile = Template.bind({});

Mobile.args = {
  selectedFilters: ["All filters", "Life stage", "Age", "Nutrients", "Measure Units"],
  lifeStageItems: lifeStageItems,
  ageItems: ageItems,
  nutritionFilterItems: nutritionFilterItems,
  measurementFilterItems: ["Metric", "US"],
  openMobilePage: true,
};

Mobile.parameters = {
  viewport: {
    defaultViewport: "iphone6",
  },
};
