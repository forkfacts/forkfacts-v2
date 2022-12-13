import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { SearchInputField } from "@forkfacts/components";

export default {
  title: "Component/InputFields/SearchInputField",
  component: SearchInputField,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof SearchInputField>;

const Template: ComponentStory<typeof SearchInputField> = (args) => <SearchInputField {...args} />;

export const Primary = Template.bind({});
