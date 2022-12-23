import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { AllNutrientSelects } from "@forkfacts/components";

export default {
  title: "Components/Nutrients/AllNutrientSelects",
  component: AllNutrientSelects,
} as ComponentMeta<typeof AllNutrientSelects>;

const Template: ComponentStory<typeof AllNutrientSelects> = (args) => (
  <AllNutrientSelects {...args} />
);

export const Primary = Template.bind({});
