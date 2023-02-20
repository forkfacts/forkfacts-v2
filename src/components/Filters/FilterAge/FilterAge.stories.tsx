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
  const [selectAge, setSelectedAge] = useState<ageItem>({} as ageItem);
  return <FilterAge {...args} onSelectAgeItem={setSelectedAge} />;
};
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

export const Mobile = Template.bind({});

Mobile.args = {
  ageItems: ageItems,
};

Mobile.parameters = {
  viewport: {
    defaultViewport: "iphone6",
  },
};
