import {
  FoodOverview,
  FoodsWithSameName,
  Layout,
  DetailPageTabs,
  NutritionDetailsTab,
  ComingSoon,
} from "@forkfacts/components";
import { DetailsPageScreenProps, MenuItem } from "@forkfacts/models";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { Box, Button, Typography, useMediaQuery, useTheme } from "@mui/material";
import React, { useState } from "react";
import { navigate } from "gatsby";
import { useStyles } from "./detailspageStyles";

const DetailsPageScreen: React.FC<DetailsPageScreenProps> = ({
  menuItems,
  foodsWithSameNames,
  foodOverview,
  tabItems,
  compareTableItems,
  compareTableDetails,
  nutritionSummaryItems,
  lifeStageItems,
  ageItems,
  nutritionFilterItems,
  measurementFilterItems,
  multipleSelectItems,
  onSelectMeasurementItem,
  onSelectUnit,
  units,
  nutritionTableRows,
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

  const GoBack = () => (
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
  );

  const Overview = () => (
    <Box sx={{ display: "flex", flexDirection: mobile ? "column-reverse" : "column" }}>
      <Box sx={{ mt: mobile ? theme.spacing(1) : theme.spacing(0), display: "none" }}>
        <FoodsWithSameName
          onSelectFoodWithSameName={setSelectedTitle}
          foodsWithSameNames={foodsWithSameNames}
        />
      </Box>
      <Box
        sx={{
          px: mobile ? 0 : theme.spacing(1.5),
          mt: mobile ? theme.spacing(3) : theme.spacing(5),
        }}
      >
        <FoodOverview values={foodOverview} />
      </Box>
    </Box>
  );

  return (
    <Layout menuItems={menuItems}>
      <Box className={classes.desktopScreenWrapper}>
        <Box>
          <GoBack />
          <Box>
            <Overview />
            <Box
              sx={{
                px: mobile ? 0 : theme.spacing(1.5),
                mt: mobile ? theme.spacing(1) : theme.spacing(2),
                width: "100%",
              }}
            >
              <DetailPageTabs tabItems={tabItems} onselectTabItem={setSelectedTabItem} />
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
                  ageItems={ageItems}
                  nutritionTableItems={nutritionTableRows}
                  nutritionFilterItems={nutritionFilterItems}
                  measurementFilterItems={measurementFilterItems}
                  onSelectMeasurementItem={onSelectMeasurementItem}
                  onSelectUnit={onSelectUnit}
                  units={units}
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
      </Box>
    </Layout>
  );
};

export default DetailsPageScreen;
