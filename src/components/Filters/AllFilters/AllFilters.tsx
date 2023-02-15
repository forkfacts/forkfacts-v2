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
  selectedFilters,
  lifeStageItems,
  ageItems,
  nutritionFilterItems,
  measurementFilterItems,
  onSelectFilterPageData,
}) => {
  const theme = useTheme();
  const classes = useStyles();
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
  };

  const onClearFilter = () => {};

  return (
    <Box>
      {/* <Box sx={{ display: "flex", flexDirection: "column", position: "relative" }}>
        <Box sx={{ padding: { xs: theme.spacing(2.5) } }}>
          <LifeStage
            lifeStageItems={lifeStageItems}
            onSelectLifeStageItem={onSelectLifeStageItem}
          />
        </Box>
        <Box>
          <FilterAge ageItems={ageItems} onSelectAgeItem={onSelectAgeItem} />
        </Box>
        <Box>
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
      </Box> */}
    </Box>
  );
};

export default AllFilters;
