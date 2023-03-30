import React, { useState } from "react";
import { Box, useMediaQuery, useTheme } from "@mui/material";
import {
  AutoCompleteSearch,
  Layout,
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
  categoryOptions,
  sourceId,
  recommendations,
}: HomeScreenProps) {
  const theme = useTheme();
  const [selectedNavbarItem, setSelectedNavbarItem] = useState<string>("Food");
  const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false);
  const [selectedMobileItem, setSelectedMobileItem] = useState("Food");
  const classes = useStyles();

  return (
    <>
      <Layout menuItems={sidebarItems}>
        <Box className={classes.desktopScreenWrapper}>
          <Box
            component="img"
            src="/homeImg.svg"
            alt="home page image"
            className={classes.img}
            sx={{ maxWidth: "100%" }}
          />
          {!isMobileSearchOpen ? (
            <Box className={classNames(classes.navbarStyles)}>
              <NavBar navbarItems={navbarItems} onselectNavbarItem={setSelectedNavbarItem} />
            </Box>
          ) : null}
          <Box className={classNames(classes.searchInputStyles)}>
            <AutoCompleteSearch
              recommendations={recommendations}
              placeholder={`Search ${
                isMobileSearchOpen
                  ? selectedMobileItem.toLowerCase()
                  : selectedNavbarItem.toLowerCase()
              }`}
              openOnFocus={true}
              searchLocation={selectedNavbarItem}
              sourceId={sourceId}
              onSelectCategory={setSelectedMobileItem}
              categoryOptions={categoryOptions}
              setIsMobileSearchOpen={setIsMobileSearchOpen}
            />
          </Box>
          {!isMobileSearchOpen ? (
            <>
              {PopularFrequentSearchItems && PopularFrequentSearchItems.length ? (
                <Box className={classNames(classes.PopularFrequentStyles)}>
                  <PopularFrequentSearchCategories
                    PopularFrequentSearchItems={PopularFrequentSearchItems}
                  />
                </Box>
              ) : null}
            </>
          ) : null}
        </Box>
      </Layout>
    </>
  );
}
