import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { AutoCompleteSearch } from "@forkfacts/components";

export default {
  title: "Components/AutoCompleteSearch",
  component: AutoCompleteSearch,
} as ComponentMeta<typeof AutoCompleteSearch>;

const Template: ComponentStory<typeof AutoCompleteSearch> = (args) => (
  <AutoCompleteSearch {...args} />
);

export const Primary = Template.bind({});

Primary.args = {
  placeholder: "Search",
  openOnFocus: true,
};
