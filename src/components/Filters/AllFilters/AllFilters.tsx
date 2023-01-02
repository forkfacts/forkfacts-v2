import React, { useState } from "react";
import { Box, Button, Typography, useTheme } from "@mui/material";
import classname from "classnames";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import {
  LifeStage,
  FilterAge,
  SearchNutritionFilter,
  MeasurementFilter,
} from "@forkfacts/components";
import { AllFiltersProps, ageItem, SearchNutritionFilterItem } from "@forkfacts/models";
import { useStyles } from "./allFiltersStyles";

const AllFilters: React.FC<AllFiltersProps> = ({
  filtersTotal,
  selectedFilters,
  lifeStageItems,
  ageItems,
  nutritionFilterItems,
  measurementFilterItems,
  openMobilePage,
  setOpenMobilePage,
  onSelectFilterPageData,
}) => {
  const theme = useTheme();
  const classes = useStyles({ openMobilePage });
  const [selectedAge, setSelectedAge] = useState<ageItem>({} as ageItem);
  const [selectedLifeStage, setSelectedLifeStage] = useState("");
  const [selectedMeasurementItem, setSelectedMeasurement] = useState("");
  const [selectedNutritionFilterItems, setSelectedNutritionFilterItems] = useState<
    SearchNutritionFilterItem[]
  >([]);

  const onSelectAgeItem = (item: ageItem) => {
    setSelectedAge(item);
  };
  const onSelectLifeStageItem = (item: string) => {
    setSelectedLifeStage(item);
  };
  const onSelectMeasurementItem = (item: string) => {
    setSelectedMeasurement(item);
  };

  const onSelectNutritionFilterItem = (items: SearchNutritionFilterItem[]) => {
    setSelectedNutritionFilterItems(items);
  };

  const getAllFilterPageData = () => {
    const item = {
      selectedAge: selectedAge,
      selectedLifeStage: selectedLifeStage,
      selectedMeasurementItem: selectedMeasurementItem,
      selectedNutritionFilterItems: selectedNutritionFilterItems,
    };
    onSelectFilterPageData(item);
    setOpenMobilePage(false);
  };

  const onClearFilter = () => {};

  return (
    <Box className={classes.root}>
      <Box sx={{ display: "flex", flexDirection: "column", position: "relative" }}>
        <Box className={classes.headerStyles}>
          <ArrowBackIcon sx={{ cursor: "pointer" }} onClick={() => setOpenMobilePage(false)} />
          <Typography sx={{ color: theme.palette.common.black }} variant="h5">
            All filters
          </Typography>
          <Box />
        </Box>
        {selectedFilters.includes("Life stage") || selectedFilters[0] === "All filters" ? (
          <Box sx={{ padding: { xs: theme.spacing(2.5) } }}>
            <LifeStage
              lifeStageItems={lifeStageItems}
              onSelectLifeStageItem={onSelectLifeStageItem}
            />
          </Box>
        ) : null}
        {selectedFilters.includes("Age") || selectedFilters[0] === "All filters" ? (
          <Box className={classname(classes.boxWrapper, classes.borderLine)}>
            <FilterAge ageItems={ageItems} onSelectAgeItem={onSelectAgeItem} />
          </Box>
        ) : null}
        {selectedFilters.includes("Measure Units") || selectedFilters[0] === "All filters" ? (
          <Box className={classname(classes.boxWrapper, classes.borderLine)}>
            <MeasurementFilter
              measurementFilterItems={measurementFilterItems}
              onSelectMeasurementItem={onSelectMeasurementItem}
            />
          </Box>
        ) : null}
        {selectedFilters.includes("Nutrients") || selectedFilters[0] === "All filters" ? (
          <Box className={classes.boxWrapper}>
            <SearchNutritionFilter
              onSelectNutritionFilterItem={onSelectNutritionFilterItem}
              nutritionFilterItems={nutritionFilterItems}
            />
          </Box>
        ) : null}
        <Box boxShadow={1} className={classes.footerStyles}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
              padding: theme.spacing(2.5),
            }}
          >
            <Typography
              sx={{
                textTransform: "capitalize",
                color: theme.palette.grey[600],
                letterSpacing: theme.spacing(0.0125),
              }}
            >
              {selectedFilters.includes("All filters") ? filtersTotal : selectedFilters.length}{" "}
              results
            </Typography>
            <Box>
              <Button
                variant="text"
                color="primary"
                onClick={onClearFilter}
                sx={{
                  textTransform: "capitalize",
                  mr: theme.spacing(3),
                  fontSize: theme.typography.fontSize,
                  fontWeight: theme.typography.fontWeightBold,
                }}
              >
                Clear all
              </Button>
              <Button
                variant="contained"
                onClick={() => getAllFilterPageData()}
                sx={{
                  textTransform: "capitalize",
                  borderRadius: theme.spacing(12.5),
                  px: theme.spacing(3),
                  py: theme.spacing(0.75),
                }}
              >
                Done
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default AllFilters;
