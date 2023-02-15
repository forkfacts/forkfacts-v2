import {
  DetailsPageHeader,
  DetailsPageTitles,
  Layout,
  DetailsPageTabItems,
  ComparingDetailsTab,
  NutritionDetailsTab,
} from "@forkfacts/components";
import { DetailsPageScreenProps } from "@forkfacts/models";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { Box, Button, useMediaQuery, useTheme } from "@mui/material";
import React, { useState } from "react";
import { useStyles } from "./detailspageStyles";

const DetailsPageScreen: React.FC<DetailsPageScreenProps> = ({
  sidebarItems,
  DetailsPageTitlesItems,
  detailsHeaderValues,
  tabItems,
  compareTableItems,
  compareTableDetails,
}) => {
  const classes = useStyles();
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("md"));
  const [_, setSelectedTitle] = useState("");
  const [selectedTabItem, setSelectedTabItem] = useState("Compare foods");

  return (
    <Layout sidebarItems={sidebarItems}>
      <Box className={classes.desktopScreenWrapper}>
        <Box sx={{ px: mobile ? 0 : theme.spacing(1.5) }}>
          <Button startIcon={<ArrowBackIosIcon />}>Go back</Button>
        </Box>
        <Box>
          <Box sx={{ display: "flex", flexDirection: mobile ? "column-reverse" : "column" }}>
            <Box sx={{ mt: mobile ? theme.spacing(1) : theme.spacing(3) }}>
              <DetailsPageTitles
                onSelectDetailsPageTitleItem={setSelectedTitle}
                DetailsPageTitlesItems={DetailsPageTitlesItems}
              />
            </Box>
            <Box
              sx={{
                px: mobile ? 0 : theme.spacing(1.5),
                mt: mobile ? theme.spacing(3) : theme.spacing(5),
              }}
            >
              <DetailsPageHeader detailsHeaderValues={detailsHeaderValues} />
            </Box>
          </Box>
          <Box
            sx={{
              px: mobile ? 0 : theme.spacing(1.5),
              mt: mobile ? theme.spacing(1) : theme.spacing(5),
              width: "100%",
            }}
          >
            <DetailsPageTabItems tabItems={tabItems} onselectTabItem={setSelectedTabItem} />
          </Box>
          <Box
            sx={{
              px: mobile ? 0 : theme.spacing(1.5),
              mt: mobile ? theme.spacing(3) : theme.spacing(5),
              width: "100%",
            }}
          >
            {selectedTabItem === "Nutrition" ? (
              <NutritionDetailsTab />
            ) : selectedTabItem === "Recipes" ? (
              <Box>Recipes</Box>
            ) : selectedTabItem === "Emissions" ? (
              <Box>Emissions</Box>
            ) : selectedTabItem === "Tips" ? (
              <Box>Tips</Box>
            ) : selectedTabItem === "Compare foods" ? (
              <ComparingDetailsTab
                compareTableItems={compareTableItems}
                compareTableDetails={compareTableDetails}
              />
            ) : null}
          </Box>
        </Box>
      </Box>
    </Layout>
  );
};

export default DetailsPageScreen;
