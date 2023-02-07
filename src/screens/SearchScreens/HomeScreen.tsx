import React, { CSSProperties, useState, useEffect } from "react";
import { Box, Typography, useTheme } from "@mui/material";
import {
  Layout,
  AutoCompleteSearch,
  NavBar,
  PopularFrequentSearchCategories,
} from "@forkfacts/components";
import { HomeScreenProps } from "@forkfacts/models";
import classNames from "classnames";
import { useStyles } from "./searchScreenStyles";

export default function HomeScreen({
  sidebarItems,
  navbarItems,
  PopularFrequentSearchItems,
  PopularFrequentSearchTitle,
  onSelectPopularItem,
  onSelectCategory,
  collectionGroupedItems,
  categoryOptions,
  sourceId,
}: HomeScreenProps) {
  const theme = useTheme();
  const [selectedNavbarItem, setSelectedNavbarItem] = useState("food");
  const classes = useStyles();

  return (
    <Layout sidebarItems={sidebarItems}>
      <Box className={classes.root}>
        <Box className={classes.desktopScreenWrapper}>
          <Box
            component="img"
            src="/homeImg.svg"
            alt="home page image"
            className={classes.img}
            sx={{ maxWidth: "100%" }}
          />
          <Box className={classNames(classes.navbarStyles)}>
            <NavBar navbarItems={navbarItems} onselectNavbarItem={setSelectedNavbarItem} />
          </Box>
          <Box className={classNames(classes.searchInputStyles)}>
            <AutoCompleteSearch
              placeholder={`Search ${selectedNavbarItem}`}
              openOnFocus={true}
              sourceId={sourceId}
              onSelectCategory={onSelectCategory}
              categoryOptions={categoryOptions}
              collectionGroupedItems={collectionGroupedItems}
            />
          </Box>
          <Box className={classNames(classes.PopularFrequentStyles)}>
            <PopularFrequentSearchCategories
              PopularFrequentSearchTitle={PopularFrequentSearchTitle}
              PopularFrequentSearchItems={PopularFrequentSearchItems}
              onSelectPopularItem={onSelectPopularItem}
            />
          </Box>
        </Box>
      </Box>
    </Layout>
  );
}
