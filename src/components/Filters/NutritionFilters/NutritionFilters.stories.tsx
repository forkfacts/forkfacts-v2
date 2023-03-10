import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import { NutritionFilters } from "@forkfacts/components";
import ChildCareOutlinedIcon from "@mui/icons-material/ChildCareOutlined";
import EscalatorWarningOutlinedIcon from "@mui/icons-material/EscalatorWarningOutlined";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import PregnantWomanOutlinedIcon from "@mui/icons-material/PregnantWomanOutlined";
import { ageItem, lifeStageItem, SearchNutritionFilterItem } from "@forkfacts/models";

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
    name: "Lactation",
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
  { name: "Carbohydrate", subItems: [], checked: false },
  {
    name: "Protein",
    subItems: [
      { name: "Protein B1", checked: false },
      { name: "Protein B2", checked: false },
    ],
    checked: false,
  },
  {
    name: "Vitamin",
    subItems: [
      { name: "Vitamin A", checked: false },
      { name: "Vitamin B1", checked: false },
      { name: "Vitamin B2", checked: false },
      { name: "Vitamin B3", checked: false },
      { name: "Vitamin B4", checked: false },
      { name: "Vitamin C", checked: false },
      { name: "Vitamin D", checked: false },
      { name: "Vitamin E", checked: false },
    ],
    checked: false,
  },
  { name: "Fats", subItems: [], checked: false },
  { name: "Minerals", subItems: [], checked: false },
  { name: "Water", subItems: [], checked: false },
  { name: "Fiber", subItems: [], checked: false },
];

const Template: ComponentStory<typeof NutritionFilters> = (args) => {
  const [selectLifeStage, setSelectedLifeStage] = useState("");
  const [selectAge, setSelectedAge] = useState<ageItem>({} as ageItem);
  const [selectSearchNutrition, seSelectedSearchNutrition] = useState(
    [] as SearchNutritionFilterItem[]
  );
  return (
    <NutritionFilters
      {...args}
      onSelectLifeStageItem={setSelectedLifeStage}
      onSelectAgeItem={setSelectedAge}
      onSelectNutritionFilterItem={seSelectedSearchNutrition}
    />
  );
};

export const Desktop = Template.bind({});

Desktop.args = {
  lifeStageItems,
  ageItems,
  nutritionFilterItems,
};
