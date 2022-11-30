import * as React from "react";
import { PageProps } from "gatsby";
import { useTheme } from "@mui/material";
import { FactSearchLists } from "@forkfacts/components";

const recentLists = [
  { image: "/recentImg.png", name: "Kidney beans light, Legume", path: "/:id" },
  { image: "/recentImg.png", name: "Grape fruit juices", path: "/:id" },
  {
    image: "/recentImg.png",
    name: "Baked white bread, Baked products",
    path: "/:id",
  },
  {
    image: "/recentImg.png",
    name: "Grape fruit juice unsweentened, Fruit ...",
    path: "/:id",
  },
  {
    image: "/recentImg.png",
    name: "Banana dehydrated/ banana powder",
    path: "/:id",
  },
];

const groupListsTypes = [
  { groupTitle: "FRUIT AND FRUIT JUICES", listItems: recentLists },
  { groupTitle: "BABY FOODS", listItems: recentLists.slice(0, 1) },
  { groupTitle: "SWEETS", listItems: recentLists.slice(0, 2) },
];

const IndexPage: React.FC<PageProps> = () => {
  const theme = useTheme();
  console.log(theme);
  return (
    <main>
      <FactSearchLists groupLists={groupListsTypes} grouped />
    </main>
  );
};

export default IndexPage;
