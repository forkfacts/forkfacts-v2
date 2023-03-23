import React from "react";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Layout } from "@forkfacts/components";
import EggAltOutlinedIcon from "@mui/icons-material/EggAltOutlined";
import EmojiFoodBeverageOutlinedIcon from "@mui/icons-material/EmojiFoodBeverageOutlined";
import LibraryBooksOutlinedIcon from "@mui/icons-material/LibraryBooksOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import AutoStoriesOutlinedIcon from "@mui/icons-material/AutoStoriesOutlined";
import { MenuItem } from "@forkfacts/models";
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
    handleToggleButton: () => console.log("toggle sidebar"),
  },
} as ComponentMeta<typeof Layout>;

const sidebarItems: MenuItem[] = [
  { label: "Food", Icon: EggAltOutlinedIcon, link: "/food" },
  { label: "Recipes", Icon: EmojiFoodBeverageOutlinedIcon, link: "/recipe" },
  { label: "Library", Icon: LibraryBooksOutlinedIcon, link: "/library" },
  { label: "Cookbook", Icon: AutoStoriesOutlinedIcon, link: "/cookbook" },
  { label: "Grocery List", Icon: ShoppingCartOutlinedIcon, link: "grocery list" },
];

export const Desktop: ComponentStory<typeof Layout> = (args) => (
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

Desktop.args = {
  menuItems: sidebarItems,
};

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
    defaultViewport: "iphonexr",
  },
};

Mobile.args = {
  menuItems: sidebarItems,
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

Tablet.args = {
  menuItems: sidebarItems,
};
