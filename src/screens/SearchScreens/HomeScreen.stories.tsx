import React from "react";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import EggAltOutlinedIcon from "@mui/icons-material/EggAltOutlined";
import EmojiFoodBeverageOutlinedIcon from "@mui/icons-material/EmojiFoodBeverageOutlined";
import LibraryBooksOutlinedIcon from "@mui/icons-material/LibraryBooksOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import AutoStoriesOutlinedIcon from "@mui/icons-material/AutoStoriesOutlined";
import { drawerItem } from "@forkfacts/models";
import { HomeScreen } from "@forkfacts/screens";

export default {
  title: "Screens/SearchScreen/HomeScreen",
  component: HomeScreen,
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
    },
  },
} as ComponentMeta<typeof HomeScreen>;

const Template: ComponentStory<typeof HomeScreen> = (args) => <HomeScreen {...args} />;

const drawerItems: drawerItem[] = [
  { label: "Food", Icon: EggAltOutlinedIcon },
  { label: "Recipe", Icon: EmojiFoodBeverageOutlinedIcon },
  { label: "Library", Icon: LibraryBooksOutlinedIcon },
  { label: "Cookbook", Icon: AutoStoriesOutlinedIcon },
  { label: "Grocery List", Icon: ShoppingCartOutlinedIcon },
];

export const Mobile = Template.bind({});
Mobile.parameters = {
  viewport: {
    defaultViewport: "iphone6",
  },
};

Mobile.args = {
  drawerItems: drawerItems,
};

export const Tablet = Template.bind({});
Tablet.parameters = {
  viewport: {
    defaultViewport: "ipad",
  },
};

Tablet.args = {
  drawerItems: drawerItems,
};
