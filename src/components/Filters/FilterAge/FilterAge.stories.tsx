import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import { FilterAge } from "@forkfacts/components";
import { RdiAge } from "@forkfacts/models";
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

export const Mobile = Template.bind({});

Mobile.args = {
  ageItems: ageItems,
};

Mobile.parameters = {
  viewport: {
    defaultViewport: "iphone6",
  },
};
