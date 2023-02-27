import React, { useState } from "react";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { SharedSocialMedia } from "@forkfacts/components";
import { Box, useTheme } from "@mui/material";

export default {
  title: "Components/SharedSocialMedia",
  component: SharedSocialMedia,
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
    },
  },
} as ComponentMeta<typeof SharedSocialMedia>;

const Template: ComponentStory<typeof SharedSocialMedia> = (args) => {
  const [isSharedMediaOpen, setIsSharedMediaOpen] = useState(true);
  const theme = useTheme();
  return (
    <Box sx={{ position: "relative", mt: "250px" }}>
      <SharedSocialMedia {...args} setIsSharedMediaOpen={setIsSharedMediaOpen} />
    </Box>
  );
};

export const Desktop = Template.bind({});

Desktop.args = {
  isSharedMediaOpen: true,
};

export const Mobile = Template.bind({});

Mobile.args = {
  isSharedMediaOpen: true,
};

Mobile.parameters = {
  viewport: {
    defaultViewport: "iphonexr",
  },
};
