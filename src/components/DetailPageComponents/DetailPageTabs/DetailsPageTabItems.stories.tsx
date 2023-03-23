import React, { useState } from "react";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import EmojiFoodBeverageOutlinedIcon from "@mui/icons-material/EmojiFoodBeverageOutlined";
import TipsAndUpdatesOutlinedIcon from "@mui/icons-material/TipsAndUpdatesOutlined";
import CompareArrowsOutlinedIcon from "@mui/icons-material/CompareArrowsOutlined";
import FastfoodOutlinedIcon from "@mui/icons-material/FastfoodOutlined";
import SmokingRoomsOutlinedIcon from "@mui/icons-material/SmokingRoomsOutlined";
import { DetailPageTabs } from "@forkfacts/components";

export default {
  title: "Components/DetailPageComponents/DetailsPageTabItems",
  component: DetailPageTabs,
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
    },
  },
} as ComponentMeta<typeof DetailPageTabs>;

const tabItems = [
  { label: "Nutrition", Icon: FastfoodOutlinedIcon, link: "/food" },
  { label: "Recipes", Icon: EmojiFoodBeverageOutlinedIcon, link: "/recipe" },
  { label: "Emissions", Icon: SmokingRoomsOutlinedIcon, link: "/library" },
  { label: "Tips", Icon: TipsAndUpdatesOutlinedIcon, link: "/tips" },
  { label: "Compare foods", Icon: CompareArrowsOutlinedIcon, link: "/recipe" },
];

const Template: ComponentStory<typeof DetailPageTabs> = (args) => {
  const [_, setSelectedTabItem] = useState("Compare foods");

  return <DetailPageTabs {...args} onselectTabItem={setSelectedTabItem} />;
};

export const Desktop = Template.bind({});

Desktop.args = {
  tabItems: tabItems,
};

export const Mobile = Template.bind({});

Mobile.args = {
  tabItems: tabItems,
};

Mobile.parameters = {
  viewport: {
    defaultViewport: "iphonexr",
  },
};

export const Tablet = Template.bind({});

Tablet.args = {
  tabItems: tabItems,
};

Tablet.parameters = {
  viewport: {
    defaultViewport: "ipad",
  },
};
