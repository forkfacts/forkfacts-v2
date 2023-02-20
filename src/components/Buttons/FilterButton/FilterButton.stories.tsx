import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { FilterButton as Button } from "@forkfacts/components";

export default {
  title: "Components/Buttons",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const FilterButton = Template.bind({});

FilterButton.args = {
  name: "Life stage",
  index: 1,
  selectedItemArrays: [],
  onSelectItem: (item: string, index: number) => {},
};
