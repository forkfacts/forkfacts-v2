import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { RecommendedDailyIntake } from "@forkfacts/screens";

export default {
  title: "Example/RecommendedDailyIntake",
  component: RecommendedDailyIntake,
} as ComponentMeta<typeof RecommendedDailyIntake>;

const Template: ComponentStory<typeof RecommendedDailyIntake> = (args) => (
  <RecommendedDailyIntake {...args} />
);

export const Desktop = Template.bind({});
