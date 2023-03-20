import {
  DetailsPageHeader,
  DetailsPageTitles,
  Layout,
  DetailsPageTabItems,
  ComparingDetailsTab,
  NutritionDetailsTab,
  ComingSoon,
} from "@forkfacts/components";
import { DetailsPageScreenProps } from "@forkfacts/models";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { Box, Button, Typography, useMediaQuery, useTheme } from "@mui/material";
import React, { useState } from "react";
import { navigate } from "gatsby";
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
  values,
  onSelectedValue,
}) => {
  const classes = useStyles();
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("md"));
  const [_, setSelectedTitle] = useState("");
  const [selectedTabItem, setSelectedTabItem] = useState("Nutrition");

  const onSelectItem = () => {
    navigate("/");
  };

  return (
    <Layout sidebarItems={sidebarItems}>
      <Box className={classes.desktopScreenWrapper}>
        <Box sx={{ px: mobile ? 0 : theme.spacing(1.5), cursor: "pointer" }}>
          <Button startIcon={<ArrowBackIosIcon />} onClick={onSelectItem}>
            <Typography
              variant={mobile ? "labelMedium" : "labelLarge"}
              sx={{
                fontWeight: theme.typography.fontWeightRegular,
                ml: theme.spacing(-1),
              }}
            >
              Go back
            </Typography>
          </Button>
        </Box>
        <Box>
          <Box sx={{ display: "flex", flexDirection: mobile ? "column-reverse" : "column" }}>
            <Box sx={{ mt: mobile ? theme.spacing(1) : theme.spacing(0), display: "none" }}>
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
              <Box>
                <ComingSoon />
              </Box>
            ) : selectedTabItem === "Emissions" ? (
              <Box>
                <ComingSoon />
              </Box>
            ) : selectedTabItem === "Tips" ? (
              <Box>
                <ComingSoon />
              </Box>
            ) : selectedTabItem === "Compare foods" ? (
              <Box>
                <ComingSoon />
                {/* <ComparingDetailsTab
                  compareTableItems={compareTableItems}
                  compareTableDetails={compareTableDetails}
                  values={values}
                  onSelectedValue={onSelectedValue}
                /> */}
              </Box>
            ) : null}
          </Box>
        </Box>
      </Box>
    </Layout>
  );
};

export default DetailsPageScreen;
