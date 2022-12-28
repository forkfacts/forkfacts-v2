import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { MeasurementFilter } from "@forkfacts/components";

export default {
  title: "Components/filters/MeasurementFilter",
  component: MeasurementFilter,
} as ComponentMeta<typeof MeasurementFilter>;

const Template: ComponentStory<typeof MeasurementFilter> = (args) => (
  <MeasurementFilter {...args} />
);

export const Primary = Template.bind({});
