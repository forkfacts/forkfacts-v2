import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import { FoodsWithSameName } from "@forkfacts/components";
import { FoodWithSameName } from "@forkfacts/models";
export default {
  title: "Components/DetailPageComponents/DetailsPageTitles",
  component: FoodsWithSameName,
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
    },
  },
} as ComponentMeta<typeof FoodsWithSameName>;

const Template: ComponentStory<typeof FoodsWithSameName> = (args) => {
  const [SelectedTitle, setSelectedTitle] = useState("");
  return <FoodsWithSameName {...args} onSelectFoodWithSameName={setSelectedTitle} />;
};

const DetailsPageTitlesItems: FoodWithSameName[] = [
  {
    title: "Banana, overripe, raw",
  },
  {
    title: "Banana, ripe and slightly ripe, raw",
  },
  {
    title: "Banana, raw",
  },
  {
    title: "Banana, raw",
  },
];

export const Desktop = Template.bind({});

Desktop.args = {
  foodsWithSameNames: DetailsPageTitlesItems,
};

export const Mobile = Template.bind({});

Mobile.args = {
  foodsWithSameNames: DetailsPageTitlesItems,
};

Mobile.parameters = {
  viewport: {
    defaultViewport: "iphonexr",
  },
};

export const Tablet = Template.bind({});

Tablet.args = {
  foodsWithSameNames: DetailsPageTitlesItems,
};

Tablet.parameters = {
  viewport: {
    defaultViewport: "ipad",
  },
};
