import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import { ComparingDetailsTab } from "@forkfacts/components";
import { compareTableItem, filterItem } from "@forkfacts/models";

export default {
  title: "Components/DetailsPageComponents/ComparingDetailsTab",
  component: ComparingDetailsTab,
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
    },
  },
} as ComponentMeta<typeof ComparingDetailsTab>;

const compareTableItemRows: compareTableItem[] = [
  {
    foodName: "Beet greens",
    Calories: 19,
    "Beta carotene": 4,
    Vitamin: 30,
    Calcium: 119,
    Iron: 3,
  },
  {
    foodName: "Collards",
    Calories: 19,
    "Beta carotene": 2,
    Vitamin: 23,
    Calcium: 117,
    Iron: 0.6,
  },
  {
    foodName: "Dandelion greens",
    Calories: 45,
    "Beta carotene": 0,
    Vitamin: 35,
    Calcium: 187,
    Iron: 3,
  },
  {
    foodName: "Kale",
    Calories: 50,
    "Beta carotene": 5,
    Vitamin: 120,
    Calcium: 135,
    Iron: 2,
  },
  {
    foodName: "Mustard greens",
    Calories: 26,
    "Beta carotene": 3,
    Vitamin: 70,
    Calcium: 103,
    Iron: 1,
  },
  {
    foodName: "Swiss chard",
    Calories: 19,
    "Beta carotene": 2,
    Vitamin: 30,
    Calcium: 51,
    Iron: 2,
  },
  {
    foodName: "Tumip greens",
    Calories: 27,
    "Beta carotene": 6,
    Vitamin: 60,
    Calcium: 190,
    Iron: 1,
  },
];
const multipleSelectItems: filterItem[] = [
  {
    name: "Beta Carotene (mg)",
  },
  {
    name: "Collards",
  },
  {
    name: "Dandelion greens",
  },
  {
    name: "Kale",
  },
  {
    name: "Mustard greens",
  },
  {
    name: "Swiss chard",
  },
  {
    name: "Tumip greens",
  },
];

const Template: ComponentStory<typeof ComparingDetailsTab> = (args) => {
  const [_, setSelectedNutrients] = useState<string[]>([]);
  return <ComparingDetailsTab {...args} getSelectedNutrients={setSelectedNutrients} />;
};

export const Desktop = Template.bind({});

Desktop.args = {
  compareTableItems: compareTableItemRows,
  compareTableDetails: {
    name: "Comparing Greens",
    quantityAmount: "3 1/2 OUNCES RAW (2 TO 3 CUPS)",
  },
  multipleSelectItems: multipleSelectItems,
};

export const Mobile = Template.bind({});

Mobile.args = {
  compareTableItems: compareTableItemRows,
  compareTableDetails: {
    name: "Comparing Greens",
    quantityAmount: "3 1/2 OUNCES RAW (2 TO 3 CUPS)",
  },
  multipleSelectItems: multipleSelectItems,
};

Mobile.parameters = {
  viewport: {
    defaultViewport: "iphonexr",
  },
};

export const Tablet = Template.bind({});

Tablet.args = {
  compareTableItems: compareTableItemRows,
  compareTableDetails: {
    name: "Comparing Greens",
    quantityAmount: "3 1/2 OUNCES RAW (2 TO 3 CUPS)",
  },
  multipleSelectItems: multipleSelectItems,
};

Tablet.parameters = {
  viewport: {
    defaultViewport: "ipad",
  },
};