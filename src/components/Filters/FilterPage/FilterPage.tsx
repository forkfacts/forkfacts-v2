import React, { useState } from "react";
import { Box, Typography, useTheme } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import {
  LifeStage,
  FilterAge,
  SearchNutritionFilter,
  MeasurementFilter,
} from "@forkfacts/components";
import { FilterPageProps } from "@forkfacts/models";
import { useStyles } from "./filterPageStyles";

const FilterPage: React.FC<FilterPageProps> = ({
  selectedFilters,
  lifeStageItems,
  onSelectLifeStageItem,
  ageItems,
  onSelectAgeItem,
  nutritionFilterItems,
  onSelectNutritionFilterItem,
  onSelectMeasurementItem,
  measurementFilterItems,
  openMobilePage,
  setOpenMobilePage,
}) => {
  const theme = useTheme();
  const classes = useStyles({ openMobilePage });

  console.log("selectedFilters", selectedFilters);

  return (
    <Box className={classes.root}>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Box className={classes.headerStyles}>
          <ArrowBackIcon sx={{ cursor: "pointer" }} onClick={() => setOpenMobilePage(false)} />
          <Typography sx={{ color: theme.palette.common.black }} variant="h5">
            Filter
          </Typography>
          <Box />
        </Box>
        {selectedFilters.includes("Life stage") || selectedFilters[0] === "All filters" ? (
          <Box className={classes.boxWrapper}>
            <LifeStage
              lifeStageItems={lifeStageItems}
              onSelectLifeStageItem={onSelectLifeStageItem}
            />
          </Box>
        ) : null}
        {selectedFilters.includes("Age") || selectedFilters[0] === "All filters" ? (
          <Box className={classes.boxWrapper}>
            <FilterAge ageItems={ageItems} onSelectAgeItem={onSelectAgeItem} />
          </Box>
        ) : null}
        {selectedFilters.includes("Measure Units") || selectedFilters[0] === "All filters" ? (
          <Box className={classes.boxWrapper}>
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
      </Box>
      <Box className={classes.footerStyles}></Box>
    </Box>
  );
};

export default FilterPage;
