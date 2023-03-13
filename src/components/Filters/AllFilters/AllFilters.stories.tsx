import React, { useState } from "react";
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
    name: "Children",
    icon: Kids,
  },
  {
    name: "Infant",
    icon: Baby,
  },
  {
    name: "Female",
    icon: Woman,
  },
  {
    name: "Male",
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
const Template: ComponentStory<typeof AllFilters> = (args) => {
  const [selectedNutritionFilterItems, setSelectedNutritionFilterItems] = useState<
    SearchNutritionFilterItem[]
  >([]);
  const [selectedAge, setSelectedAge] = useState<ageItem>({} as ageItem);
  const [selectedLifeStage, setLifeStage] = useState("");
  const handleSelectedAge = (value: ageItem) => {
    setSelectedAge(value);
  };

  const handleLifeStage = (value: string) => {
    setLifeStage(value);
  };

  const handleSelectNutritionFilterItem = (value: SearchNutritionFilterItem[] | any[]) => {
    setSelectedNutritionFilterItems(value);
  };
  return (
    <AllFilters
      {...args}
      selectedAge={selectedAge}
      selectedLifeStage={selectedLifeStage}
      selectedNutritionFilterItems={selectedNutritionFilterItems}
      handleLifeStage={handleLifeStage}
      handleSelectNutritionFilterItem={handleSelectNutritionFilterItem}
      handleSelectedAge={handleSelectedAge}
    />
  );
};

export const Desktop = Template.bind({});

Desktop.args = {
  ageItems,
  lifeStageItems,
  nutritionFilterItems,
};
