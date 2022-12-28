import React from "react";
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
  lifeStageItems,
  onSelectLifeStageItem,
  ageItems,
  onSelectAgeItem,
  nutritionFilterItems,
  onSelectNutritionFilterItem,
  onSelectMeasurementItem,
  measurementFilterItems,
}) => {
  const theme = useTheme();
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Box className={classes.headerStyles}>
        <ArrowBackIcon sx={{ cursor: "pointer" }} />
        <Typography sx={{ color: theme.palette.common.black }} variant="h5">
          Filter
        </Typography>
        <Box />
      </Box>
      <Box className={classes.boxWrapper}>
        <LifeStage lifeStageItems={lifeStageItems} onSelectLifeStageItem={onSelectLifeStageItem} />
      </Box>
      <Box className={classes.boxWrapper}>
        <FilterAge ageItems={ageItems} onSelectAgeItem={onSelectAgeItem} />
      </Box>
      <Box className={classes.boxWrapper}>
        <MeasurementFilter
          measurementFilterItems={measurementFilterItems}
          onSelectMeasurementItem={onSelectMeasurementItem}
        />
      </Box>
      <Box className={classes.boxWrapper}>
        <SearchNutritionFilter
          onSelectNutritionFilterItem={onSelectNutritionFilterItem}
          nutritionFilterItems={nutritionFilterItems}
        />
      </Box>
    </Box>
  );
};

export default FilterPage;
