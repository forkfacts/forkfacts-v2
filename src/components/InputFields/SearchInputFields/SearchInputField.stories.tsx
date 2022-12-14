import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { SearchInputField } from "@forkfacts/components";

export default {
  title: "Components/InputFields/SearchInputField",
  component: SearchInputField,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof SearchInputField>;

const Template: ComponentStory<typeof SearchInputField> = (args) => <SearchInputField {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  placeholder: "Search",
  openOnFocus: true,
};
