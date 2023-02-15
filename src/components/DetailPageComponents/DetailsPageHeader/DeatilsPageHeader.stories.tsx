import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import { DetailsPageHeader } from "@forkfacts/components";
import { Box } from "@mui/material";

export default {
  title: "Components/DetailsPageComponents/DetailsPageHeader",
  component: DetailsPageHeader,
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
    },
  },
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

const Template: ComponentStory<typeof DetailsPageHeader> = (args) => {
  return (
    <Box sx={{ mt: { md: "50px", sm: "50px" } }}>
      <DetailsPageHeader {...args} />
    </Box>
  );
};

export const Desktop = Template.bind({});

Desktop.args = {
  detailsHeaderValues: detailsHeaderValues,
};

export const Mobile = Template.bind({});

Mobile.args = {
  detailsHeaderValues: detailsHeaderValues,
};

Mobile.parameters = {
  viewport: {
    defaultViewport: "iphonexr",
  },
};

export const Tablet = Template.bind({});

Tablet.args = {
  detailsHeaderValues: detailsHeaderValues,
};

Tablet.parameters = {
  viewport: {
    defaultViewport: "ipad",
  },
};
