import * as React from "react";
import { PageProps } from "gatsby";
import EggAltOutlinedIcon from "@mui/icons-material/EggAltOutlined";
import EmojiFoodBeverageOutlinedIcon from "@mui/icons-material/EmojiFoodBeverageOutlined";
import LibraryBooksOutlinedIcon from "@mui/icons-material/LibraryBooksOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import AutoStoriesOutlinedIcon from "@mui/icons-material/AutoStoriesOutlined";
import { HomeScreen } from "@forkfacts/screens";
import { sidebarItem } from "@forkfacts/models";

const IndexPage: React.FC<PageProps> = () => {
  const sidebarItems: sidebarItem[] = [
    { label: "Food", Icon: EggAltOutlinedIcon, link: "/food" },
    { label: "Recipes", Icon: EmojiFoodBeverageOutlinedIcon, link: "/recipe" },
    { label: "Library", Icon: LibraryBooksOutlinedIcon, link: "/library" },
    { label: "Cookbook", Icon: AutoStoriesOutlinedIcon, link: "/Cookbook" },
    { label: "Grocery List", Icon: ShoppingCartOutlinedIcon, link: "/grocery-list" },
  ];

  const navbarItems = [
    { label: "Food", Icon: EggAltOutlinedIcon, link: "/food" },
    { label: "Recipes", Icon: EmojiFoodBeverageOutlinedIcon, link: "/recipe" },
    { label: "Library", Icon: LibraryBooksOutlinedIcon, link: "/library" },
  ];

  const categoryOptions = [
    { label: "Food", Icon: EggAltOutlinedIcon },
    { label: "Recipe", Icon: EmojiFoodBeverageOutlinedIcon },
    { label: "Library", Icon: LibraryBooksOutlinedIcon },
  ];

  return (
    <>
      <HomeScreen
        sidebarItems={sidebarItems}
        navbarItems={navbarItems}
        categoryOptions={categoryOptions}
        sourceId="forkfact-v2"
      />
    </>
  );
};

export default IndexPage;
