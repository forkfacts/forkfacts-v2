import {
  DetailsPageHeader,
  DetailsPageTitles,
  Layout,
  DetailsPageTabItems,
  ComparingDetailsTab,
} from "@forkfacts/components";
import { DetailsPageScreenProps } from "@forkfacts/models";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { Box, Button, useTheme } from "@mui/material";
import React, { useState } from "react";
import { useStyles } from "./detailspageStyles";

const DetailsPageScreen: React.FC<DetailsPageScreenProps> = ({
  sidebarItems,
  DetailsPageTitlesItems,
  detailsHeaderValues,
  tabItems,
  compareTableItems,
}) => {
  const classes = useStyles();
  const theme = useTheme();
  const [selectedTitle, setSelectedTitle] = useState("");
  const [selectedTabItem, setSelectedTabItem] = useState("Compare foods");

  return (
    <Layout sidebarItems={sidebarItems}>
      <Box className={classes.desktopScreenWrapper}>
        <Box sx={{ px: theme.spacing(1.5) }}>
          <Button startIcon={<ArrowBackIosIcon />}>Go back</Button>
        </Box>
        <Box>
          <Box sx={{ mt: theme.spacing(3) }}>
            <DetailsPageTitles
              onSelectDetailsPageTitleItem={setSelectedTitle}
              DetailsPageTitlesItems={DetailsPageTitlesItems}
            />
          </Box>
          <Box sx={{ px: theme.spacing(1.5), mt: theme.spacing(5) }}>
            <DetailsPageHeader detailsHeaderValues={detailsHeaderValues} />
          </Box>
          <Box sx={{ px: theme.spacing(1.5), mt: theme.spacing(5), width: "100%" }}>
            <DetailsPageTabItems tabItems={tabItems} onselectTabItem={setSelectedTabItem} />
          </Box>
          <Box sx={{ px: theme.spacing(1.5), mt: theme.spacing(5), width: "100%" }}>
            {selectedTabItem === "Nutrition" ? (
              <Box>Nutrition</Box>
            ) : selectedTabItem === "Recipes" ? (
              <Box>Recipes</Box>
            ) : selectedTabItem === "Emissions" ? (
              <Box>Emissions</Box>
            ) : selectedTabItem === "Tips" ? (
              <Box>Tips</Box>
            ) : selectedTabItem === "Compare foods" ? (
              <Box>
                <ComparingDetailsTab compareTableItems={compareTableItems} />
              </Box>
            ) : null}
          </Box>
        </Box>
      </Box>
    </Layout>
  );
};

export default DetailsPageScreen;
