import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import { ComparingDetailsTab } from "@forkfacts/components";
import { compareTableItem } from "@forkfacts/models";

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
    foodName: "Beta Carotene (mg)",
    calories: 19,
    betaCarotene: 4,
    vitamin: 30,
    calcium: 119,
    iron: 3,
  },
  {
    foodName: "Collards",
    calories: 19,
    betaCarotene: 2,
    vitamin: 23,
    calcium: 117,
    iron: 0.6,
  },
  {
    foodName: "Dandelion greens",
    calories: 45,
    betaCarotene: 0,
    vitamin: 35,
    calcium: 187,
    iron: 3,
  },
  {
    foodName: "Kale",
    calories: 50,
    betaCarotene: 5,
    vitamin: 120,
    calcium: 135,
    iron: 2,
  },
  {
    foodName: "Mustard greens",
    calories: 26,
    betaCarotene: 3,
    vitamin: 70,
    calcium: 103,
    iron: 1,
  },
  {
    foodName: "Swiss chard",
    calories: 19,
    betaCarotene: 2,
    vitamin: 30,
    calcium: 51,
    iron: 2,
  },
  {
    foodName: "Tumip greens",
    calories: 27,
    betaCarotene: 6,
    vitamin: 60,
    calcium: 190,
    iron: 1,
  },
];

const Template: ComponentStory<typeof ComparingDetailsTab> = (args) => (
  <ComparingDetailsTab {...args} />
);

export const Desktop = Template.bind({});

Desktop.args = {
  compareTableItems: compareTableItemRows,
  compareTableDetails: {
    name: "Comparing Greens",
    quantityAmount: "3 1/2 OUNCES RAW (2 TO 3 CUPS)",
  },
};

export const Mobile = Template.bind({});

Mobile.args = {
  compareTableItems: compareTableItemRows,
  compareTableDetails: {
    name: "Comparing Greens",
    quantityAmount: "3 1/2 OUNCES RAW (2 TO 3 CUPS)",
  },
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
};

Tablet.parameters = {
  viewport: {
    defaultViewport: "ipad",
  },
};
