import React, { useEffect, useState } from "react";
import { Box, useTheme } from "@mui/material";
import {
  AutoCompleteSearch,
  Layout,
  NavBar,
  PopularFrequentSearchCategories,
  ComingSoon,
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

  useEffect(() => {
    if (!isMobileSearchOpen) {
      setSelectedMobileItem("Food");
    }
  }, [isMobileSearchOpen]);

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
            {selectedNavbarItem === "Recipes" || selectedNavbarItem === "Library" ? (
              <ComingSoon />
            ) : (
              <AutoCompleteSearch
                recommendations={recommendations}
                placeholder={`Search ${
                  isMobileSearchOpen
                    ? selectedMobileItem.toLowerCase()
                    : selectedNavbarItem.toLowerCase()
                }`}
                selectedSearchCategory={selectedMobileItem}
                openOnFocus={true}
                sourceId={sourceId}
                searchLocation={selectedNavbarItem ?? selectedMobileItem}
                onSelectCategory={setSelectedMobileItem}
                categoryOptions={categoryOptions}
                setIsMobileSearchOpen={setIsMobileSearchOpen}
              />
            )}
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
