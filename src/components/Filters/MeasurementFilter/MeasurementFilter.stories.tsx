import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import { MeasurementFilter } from "@forkfacts/components";

export default {
  title: "Components/filters/MeasurementFilter",
  component: MeasurementFilter,
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
    },
  },
} as ComponentMeta<typeof MeasurementFilter>;

const Template: ComponentStory<typeof MeasurementFilter> = (args) => (
  <MeasurementFilter {...args} />
);

export const Mobile = Template.bind({});

Mobile.args = {
  measurementFilterItems: ["US", "Metric"],
  onSelectMeasurementItem: (item: string) => {
    console.log(item);
  },
};

Mobile.parameters = {
  viewport: {
    defaultViewport: "iphone6",
  },
};
