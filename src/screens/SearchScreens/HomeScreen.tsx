import React, { CSSProperties, useState, useEffect } from "react";
import { Box, Typography, useTheme } from "@mui/material";
import {
  Layout,
  AutoCompleteSearch,
  SearchInputField,
  NavBar,
  PopularFrequentSearchCategories,
} from "@forkfacts/components";
import { HomeScreenProps, sidebarItem } from "@forkfacts/models";
import classNames from "classnames";
import { useStyles } from "./searchScreenStyles";

export default function HomeScreen({
  sidebarItems,
  navbarItems,
  PopularFrequentSearchItems,
  PopularFrequentSearchTitle,
  onSelectPopularItem,
  collectionGroupedItems,
  categoryOptions,
  handleViewMore,
  onSelectCategory,
}: HomeScreenProps) {
  const theme = useTheme();
  const [appBarHeight, setAppBarHeight] = useState<CSSProperties>();
  useEffect(() => {
    setAppBarHeight(theme.mixins.toolbar);
  }, [theme.mixins.toolbar]);
  const classes = useStyles(appBarHeight?.minHeight);

  return (
    <Layout sidebarItems={sidebarItems}>
      <Box className={classes.root}>
        <Box>
          <Box className={classes.spaceBottom}>
            <Typography variant="h5" className={classes.searchTitle}>
              Forkfacts, Your Healthy diet search place.
            </Typography>
          </Box>
          <Box className={classes.desktopScreenWrapper}>
            <Box className={classes.showDesktop}>
              <img src="/homeImg.svg" alt="home page image" className={classes.img} />
            </Box>
            <Typography
              variant="h4"
              className={classNames(classes.selectedSearchTitle, classes.showDesktop)}
            >
              Foods
            </Typography>
            <Box className={classNames(classes.searchInputStyles)}>
              <AutoCompleteSearch
                placeholder="Search food, recipes & library"
                openOnFocus={true}
                sourceId="forkfact-v2"
              />
            </Box>
            <Box className={classNames(classes.showDesktop, classes.navbarStyles)}>
              <NavBar navbarItems={navbarItems} />
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
