import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { NutritionDetailsTab } from "@forkfacts/components";

export default {
  title: "Example/NutritionDetailsTab",
  component: NutritionDetailsTab,
} as ComponentMeta<typeof NutritionDetailsTab>;

const Template: ComponentStory<typeof NutritionDetailsTab> = (args) => (
  <NutritionDetailsTab {...args} />
);

export const Desktop = Template.bind({});
