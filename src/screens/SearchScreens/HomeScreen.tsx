import React, { useState } from "react";
import { Box, useMediaQuery, useTheme } from "@mui/material";
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
  collectionGroupedItems,
  categoryOptions,
  sourceId,
  recommendations,
}: HomeScreenProps) {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("md"));
  const [selectedNavbarItem, setSelectedNavbarItem] = useState("Food");
  const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false);
  const [selectedMobileItem, setSelectedMobileItem] = useState("Food");
  const classes = useStyles();

  return (
    <Layout sidebarItems={sidebarItems}>
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
            recommendations={recommendations}
            placeholder={`Search ${
              isMobileSearchOpen
                ? selectedMobileItem.toLowerCase()
                : selectedNavbarItem.toLowerCase()
            }`}
            openOnFocus={true}
            sourceId={sourceId}
            onSelectCategory={setSelectedMobileItem}
            categoryOptions={categoryOptions}
            collectionGroupedItems={collectionGroupedItems}
            setIsMobileSearchOpen={setIsMobileSearchOpen}
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
    </Layout>
  );
}
