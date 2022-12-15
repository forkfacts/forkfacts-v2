import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { SearchInputField as InputField } from "@forkfacts/components";

export default {
  title: "Components/InputFields/SearchInputField",
  component: InputField,
} as ComponentMeta<typeof InputField>;

const Template: ComponentStory<typeof InputField> = (args) => <InputField {...args} />;

export const SearchInputField = Template.bind({});
SearchInputField.storyName = "SearchInputField";
