import React from "react";
import { Box, Theme, Typography, useTheme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { SearchStatus, FactRecentSearchLists, SearchHeader } from "@forkfacts/components";

const useStyles = makeStyles((theme: Theme) => ({}));

const SearchResultsScreen: React.FC = ({}) => {
  const classes = useStyles();
  const theme = useTheme();

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

  return (
    <Box>
      <SearchHeader />
      <Box sx={{ mt: theme.spacing(10) }}>
        <SearchStatus status="ResultsScreen" />
        <FactRecentSearchLists recentLists={recentLists} />
      </Box>
    </Box>
  );
};

export default SearchResultsScreen;
