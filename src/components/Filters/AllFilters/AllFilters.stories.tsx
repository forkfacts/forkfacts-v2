import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import { AllFilters } from "@forkfacts/components";
import { RdiAge, lifeStageItem, SelectedNutrient } from "@forkfacts/models";
import { Baby, Kids, Lactation, Male, PregnantWoman, Woman } from "@forkfacts/icons";

export default {
  title: "Components/Filters/AllFilters",
  component: AllFilters,
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
    },
  },
} as ComponentMeta<typeof AllFilters>;

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
    ageUnit: "year",
  },
  {
    start: 14,
    end: 18,
    ageUnit: "year",
  },
  {
    start: 19,
    end: 30,
    ageUnit: "year",
  },
  {
    start: 31,
    end: 50,
    ageUnit: "year",
  },
  {
    start: 51,
    end: 70,
    ageUnit: "year",
  },
  {
    start: 70,
    ageUnit: "year",
  },
];
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

const Template: ComponentStory<typeof AllFilters> = (args) => {
  const [selectedNutritionFilterItems, setSelectedNutritionFilterItems] = useState<
    SelectedNutrient[]
  >([]);
  const [selectedAge, setSelectedAge] = useState<RdiAge>({} as RdiAge);
  const [selectedLifeStage, setLifeStage] = useState("");
  const handleSelectedAge = (value: RdiAge) => {
    setSelectedAge(value);
  };

  const handleLifeStage = (value: string) => {
    setLifeStage(value);
  };

  const handleSelectNutritionFilterItem = (value: SelectedNutrient[] | any[]) => {
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
