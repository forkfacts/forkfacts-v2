import React, { CSSProperties, useState, useEffect } from "react";
import { Box, Typography, useTheme } from "@mui/material";
import {
  Layout,
  SearchInputField,
  NavBar,
  PopularFrequentSearchCategories,
} from "@forkfacts/components";
import { HomeScreenProps, sidebarItem } from "@forkfacts/models";
import classNames from "classnames";
import { useStyles } from "./searchScreenStyles";

export default function HomeScreen({
  sidebarItems,
  onSelectCategory,
  navbarItems,
  PopularFrequentSearchItems,
  PopularFrequentSearchTitle,
  onSelectPopularItem,
}: HomeScreenProps) {
  const theme = useTheme();
  const [appBarHeight, setAppBarHeight] = useState<CSSProperties>();
  useEffect(() => {
    setAppBarHeight(theme.mixins.toolbar);
  }, [theme.mixins.toolbar]);
  const classes = useStyles(appBarHeight?.minHeight);

  const onSelectSideBarItem = (item: sidebarItem) => {
    console.log(item);
    onSelectCategory(item);
  };

  return (
    <Layout sidebarItems={sidebarItems} onSelectItem={onSelectSideBarItem}>
      <Box className={classes.root}>
        <Box>
          <Box className={classes.spaceBottom}>
            <Typography variant="h5" className={classes.searchTitle}>
              Forkfacts, Your Healthy diet search place.
            </Typography>
          </Box>
          <Box className={classes.homeScreenWrapper}>
            <Box className={classes.showDesktop}>
              <img src="/homeImg.svg" alt="home page image" className={classes.img} />
            </Box>
            <Typography
              variant="h4"
              className={classNames(classes.selectedSearchTitle, classes.showDesktop)}
            >
              Foods
            </Typography>
            <Box className={classes.searchInputStyles}>
              <SearchInputField />
            </Box>
            <Box className={classNames(classes.showDesktop, classes.categoriesStyle)}>
              <NavBar onSelectCategory={onSelectSideBarItem} navbarItems={navbarItems} />
            </Box>
            <Box className={classNames(classes.showDesktop, classes.PopularFrequentStyles)}>
              <PopularFrequentSearchCategories
                PopularFrequentSearchTitle={PopularFrequentSearchTitle}
                PopularFrequentSearchItems={PopularFrequentSearchItems}
                onSelectPopularItem={onSelectPopularItem}
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </Layout>
  );
}
