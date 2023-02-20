import React, { useState } from "react";
import { Box, Button, Typography, useTheme } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import FilterListIcon from "@mui/icons-material/FilterList";
import { useStyles } from "./allFiltersStyles";

const AllFilters = ({ selectedAge, selectedLifeStage, selectedNutritionFilterItems }: any) => {
  const theme = useTheme();
  const classes = useStyles();

  const getAllFilterPageData = () => {
    const item = {
      selectedAge: selectedAge,
      selectedLifeStage: selectedLifeStage,
      selectedNutritionFilterItems: selectedNutritionFilterItems,
    };
  };

  let filterStatus = 0;
  if (
    Object.keys(selectedAge).length > 0 ||
    selectedLifeStage ||
    selectedNutritionFilterItems.length > 0
  ) {
    if (
      (Object.keys(selectedAge).length === 0 && !selectedLifeStage) ||
      (Object.keys(selectedAge).length === 0 && selectedNutritionFilterItems.length === 0) ||
      (!selectedLifeStage && selectedNutritionFilterItems.length === 0)
    ) {
      filterStatus = 1;
    } else if (
      Object.keys(selectedAge).length > 0 &&
      selectedLifeStage &&
      selectedNutritionFilterItems.length > 0
    ) {
      filterStatus = 3;
    } else {
      filterStatus = 2;
    }
  }

  return (
    <Box>
      <Button
        color="primary"
        sx={{
          fontSize: theme.typography.caption.fontSize,
          fontWeight: theme.typography.fontWeightBold,
          lineHeight: theme.spacing(2),
          letterSpacing: theme.spacing(0.05),
          textTransform: "capitalize",
          whiteSpace: "nowrap",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        startIcon={<FilterListIcon />}
      >
        All filters {filterStatus !== 0 ? filterStatus : null}
      </Button>
      <Box></Box>
    </Box>
  );
};

export default AllFilters;
