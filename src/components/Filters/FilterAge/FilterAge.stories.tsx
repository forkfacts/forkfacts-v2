import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import { FilterAge } from "@forkfacts/components";
import { ageItem } from "@forkfacts/models";
export default {
  title: "Components/Filters/FilterAge",
  component: FilterAge,
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
    },
  },
} as ComponentMeta<typeof FilterAge>;

const Template: ComponentStory<typeof FilterAge> = (args) => {
  return <FilterAge {...args} />;
};
const ageItems: ageItem[] = [
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
  {
    start: 70,
    ageUnit: "years",
  },
];

export const Mobile = Template.bind({});

Mobile.args = {
  ageItems: ageItems,
};

Mobile.parameters = {
  viewport: {
    defaultViewport: "iphone6",
  },
};
