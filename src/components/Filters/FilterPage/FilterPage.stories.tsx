import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import { FilterPage } from "@forkfacts/components";
import { ageItem, lifeStageItem, SearchNutritionFilterItem } from "@forkfacts/models";
import ChildCareOutlinedIcon from "@mui/icons-material/ChildCareOutlined";
import EscalatorWarningOutlinedIcon from "@mui/icons-material/EscalatorWarningOutlined";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import PregnantWomanOutlinedIcon from "@mui/icons-material/PregnantWomanOutlined";

export default {
  title: "Components/Filters/FilterPage",
  component: FilterPage,
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
} as ComponentMeta<typeof FilterPage>;

const lifeStageItems: lifeStageItem[] = [
  {
    name: "Infant",
    icon: ChildCareOutlinedIcon,
  },
  {
    name: "Children",
    icon: EscalatorWarningOutlinedIcon,
  },
  {
    name: "Male",
    icon: PregnantWomanOutlinedIcon,
  },
  {
    name: "Female",
    icon: EscalatorWarningOutlinedIcon,
  },
  {
    name: "Pregnant",
    icon: PregnantWomanOutlinedIcon,
  },
  {
    name: "Location",
    icon: Person2OutlinedIcon,
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
const Template: ComponentStory<typeof FilterPage> = (args) => <FilterPage {...args} />;

export const Mobile = Template.bind({});

Mobile.args = {
  selectedFilters: ["All filters", "Life stage", "Age", "Nutrients", "Measure Units"],
  lifeStageItems: lifeStageItems,
  ageItems: ageItems,
  nutritionFilterItems: nutritionFilterItems,
  measurementFilterItems: ["US", "Metric"],
  openMobilePage: true,
};

Mobile.parameters = {
  viewport: {
    defaultViewport: "iphone6",
  },
};
