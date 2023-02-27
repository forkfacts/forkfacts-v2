import {
  DetailsPageHeader,
  DetailsPageTitles,
  Layout,
  DetailsPageTabItems,
  ComparingDetailsTab,
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
  values,
  onSelectedValue,
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
          <Button
            startIcon={<ArrowBackIosIcon />}
            sx={{
              fontWeight: theme.typography.fontWeightMedium,
              fontSize: mobile ? theme.typography.labelMedium : theme.typography.labelLarge,
              lineHeight: theme.spacing(2.5),
            }}
          >
            Go back
          </Button>
        </Box>
        <Box>
          <Box sx={{ display: "flex", flexDirection: mobile ? "column-reverse" : "column" }}>
            <Box sx={{ mt: mobile ? theme.spacing(1) : theme.spacing(0) }}>
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
              <Box>Nutrition</Box>
            ) : selectedTabItem === "Recipes" ? (
              <Box>Recipes</Box>
            ) : selectedTabItem === "Emissions" ? (
              <Box>Emissions</Box>
            ) : selectedTabItem === "Tips" ? (
              <Box>Tips</Box>
            ) : selectedTabItem === "Compare foods" ? (
              <Box>
                <ComparingDetailsTab
                  compareTableItems={compareTableItems}
                  compareTableDetails={compareTableDetails}
                  values={values}
                  onSelectedValue={onSelectedValue}
                />
              </Box>
            ) : null}
          </Box>
        </Box>
      </Box>
    </Layout>
  );
};

export default DetailsPageScreen;
