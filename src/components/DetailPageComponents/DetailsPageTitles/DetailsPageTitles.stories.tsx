import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import { DetailsPageTitles } from "@forkfacts/components";
import { DetailsPageTitlesItem } from "@forkfacts/models";
export default {
  title: "Components/DetailsPageComponents/DetailsPageTitles",
  component: DetailsPageTitles,
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
    },
  },
} as ComponentMeta<typeof DetailsPageTitles>;

const Template: ComponentStory<typeof DetailsPageTitles> = (args) => {
  const [SelectedTitle, setSelectedTitle] = useState("");
  return <DetailsPageTitles {...args} onDetailsPageTitleItem={setSelectedTitle} />;
};

const DetailsPageTitlesItems: DetailsPageTitlesItem[] = [
  {
    title: "",
  },
];

export const Mobile = Template.bind({});

Mobile.args = {
  DetailsPageTitlesItems: DetailsPageTitlesItems,
};

Mobile.parameters = {
  viewport: {
    defaultViewport: "iphone6",
  },
};
