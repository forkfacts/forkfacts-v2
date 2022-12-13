import React from "react";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import EggAltOutlinedIcon from "@mui/icons-material/EggAltOutlined";
import EmojiFoodBeverageOutlinedIcon from "@mui/icons-material/EmojiFoodBeverageOutlined";
import LibraryBooksOutlinedIcon from "@mui/icons-material/LibraryBooksOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import AutoStoriesOutlinedIcon from "@mui/icons-material/AutoStoriesOutlined";
import { sidebarItem, PopularFrequentSearchProps } from "@forkfacts/models";
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

const sidebarItems: sidebarItem[] = [
  { label: "Food", Icon: EggAltOutlinedIcon },
  { label: "Recipe", Icon: EmojiFoodBeverageOutlinedIcon },
  { label: "Library", Icon: LibraryBooksOutlinedIcon },
  { label: "Cookbook", Icon: AutoStoriesOutlinedIcon },
  { label: "Grocery List", Icon: ShoppingCartOutlinedIcon },
];

const navbarItems = [
  { label: "Food", Icon: EggAltOutlinedIcon },
  { label: "Recipes", Icon: EmojiFoodBeverageOutlinedIcon },
  { label: "Library", Icon: LibraryBooksOutlinedIcon },
];

const { PopularFrequentSearchTitle, PopularFrequentSearchItems }: PopularFrequentSearchProps = {
  PopularFrequentSearchTitle: "Popular Foods",
  PopularFrequentSearchItems: [
    {
      searchImg: "/popular.png",
      searchName: "Flax seeds",
      searchLabels: ["Gluten-free", "Dairy-free"],
      extraInfo: [
        { name: "Calories", weight: "23g" },
        { name: "Fats", weight: "10g" },
        { name: "Proteins", weight: "5g" },
      ],
    },
  ],
};

const Template: ComponentStory<typeof HomeScreen> = (args) => <HomeScreen {...args} />;

export const Desktop = Template.bind({});

Desktop.args = {
  sidebarItems: sidebarItems,
  navbarItems: navbarItems,
  PopularFrequentSearchItems: PopularFrequentSearchItems,
  PopularFrequentSearchTitle: PopularFrequentSearchTitle,
};

export const Mobile = Template.bind({});
Mobile.parameters = {
  viewport: {
    defaultViewport: "iphone6",
  },
};

Mobile.args = {
  sidebarItems: sidebarItems,
};

export const Tablet = Template.bind({});
Tablet.parameters = {
  viewport: {
    defaultViewport: "ipad",
  },
};

Tablet.args = {
  sidebarItems: sidebarItems,
};
