import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { FilterPage } from "@forkfacts/components";

export default {
  title: "Components/FilterPage",
  component: FilterPage,
} as ComponentMeta<typeof FilterPage>;

const Template: ComponentStory<typeof FilterPage> = (args) => <FilterPage {...args} />;

export const Primary = Template.bind({});
