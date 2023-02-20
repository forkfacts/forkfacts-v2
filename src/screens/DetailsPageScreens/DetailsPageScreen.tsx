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
  nutritionSummaryItems,
  lifeStageItems,
  ageItems,
  nutritionFilterItems,
  measurementFilterItems,
  multipleSelectItems,
  getSelectedNutrients,
  onSelectMeasurementItem,
  onSelectLifeStageItem,
  onSelectAgeItem,
  onSelectUnit,
  units,
  nutritionTableItems,
  onSelectNutritionFilterItem,
}) => {
  const classes = useStyles();
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("md"));
  const [_, setSelectedTitle] = useState("");
  const [selectedTabItem, setSelectedTabItem] = useState("Nutrition");

  return (
    <Layout sidebarItems={sidebarItems}>
      <Box className={classes.desktopScreenWrapper}>
        <Box sx={{ px: mobile ? 0 : theme.spacing(1.5) }}>
          <Button
            startIcon={<ArrowBackIosIcon />}
            sx={{
              fontWeight: theme.typography.fontWeightMedium,
              fontSize: theme.spacing(1.75),
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
              <NutritionDetailsTab
                nutritionSummaryItems={nutritionSummaryItems}
                lifeStageItems={lifeStageItems}
                onSelectLifeStageItem={onSelectLifeStageItem}
                ageItems={ageItems}
                onSelectAgeItem={onSelectAgeItem}
                nutritionFilterItems={nutritionFilterItems}
                measurementFilterItems={measurementFilterItems}
                onSelectMeasurementItem={onSelectMeasurementItem}
                onSelectUnit={onSelectUnit}
                units={units}
                nutritionTableItems={nutritionTableItems}
                onSelectNutritionFilterItem={onSelectNutritionFilterItem}
              />
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
                  multipleSelectItems={multipleSelectItems}
                  getSelectedNutrients={getSelectedNutrients}
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
