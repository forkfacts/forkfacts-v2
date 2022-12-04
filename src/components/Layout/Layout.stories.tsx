import React from "react";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Layout } from "@forkfacts/components";
import { Box } from "@mui/material";

export default {
  title: "Components/Layout",
  component: Layout,
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
    },
  },
  args: {
    handleToggleEvenets: () => console.log("toggle sidebar"),
  },
} as ComponentMeta<typeof Layout>;

export const Mobile: ComponentStory<typeof Layout> = (args) => (
  <Layout {...args}>
    <Box
      sx={{
        width: "100%",
        flexGrow: 1,
        minHeight: "92vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      Page content
    </Box>
  </Layout>
);
Mobile.parameters = {
  viewport: {
    defaultViewport: "iphone6",
  },
};

export const Tablet: ComponentStory<typeof Layout> = (args) => (
  <Layout {...args}>
    <Box
      sx={{
        width: "100%",
        flexGrow: 1,
        minHeight: "92vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      Page content
    </Box>
  </Layout>
);
Tablet.parameters = {
  viewport: {
    defaultViewport: "ipad",
  },
};
