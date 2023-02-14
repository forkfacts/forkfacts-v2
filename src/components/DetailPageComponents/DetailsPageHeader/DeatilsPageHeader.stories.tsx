import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { DetailsPageHeader } from "@forkfacts/components";

export default {
  title: "Components/DetailsPageComponents/DetailsPageHeader",
  component: DetailsPageHeader,
} as ComponentMeta<typeof DetailsPageHeader>;

const detailsHeaderValues = {
  img: "/banana.svg",
  name: "Banana, overripe, raw",
  subTitle: "Fruits and Fruit Juices",
  nutritionValues: [
    { name: "Gluten - Free", icon: "/details1.svg" },
    { name: "Vegan", icon: "/details2.svg" },
    { name: "Good for diabetes", icon: "/details3.svg" },
  ],
  tag: "High in Vitamin C and Calcium",
};

const Template: ComponentStory<typeof DetailsPageHeader> = (args) => (
  <DetailsPageHeader {...args} />
);

export const Desktop = Template.bind({});

Desktop.args = {
  detailsHeaderValues: detailsHeaderValues,
};
