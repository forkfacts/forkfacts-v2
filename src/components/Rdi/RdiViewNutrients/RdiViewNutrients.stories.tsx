import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { RdiViewNutrients } from "@forkfacts/components";

export default {
  title: "Components/Rdi/RdiViewNutrients",
  component: RdiViewNutrients,
} as ComponentMeta<typeof RdiViewNutrients>;

const Template: ComponentStory<typeof RdiViewNutrients> = (args) => <RdiViewNutrients {...args} />;

export const Desktop = Template.bind({});
