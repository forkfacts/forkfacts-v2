import React, { useState } from "react";
import { NutritionSummary, NutritionFilters, MeasurementFilter } from "@forkfacts/components";
import { NutritionDetailsTabProps } from "@forkfacts/models";
import { Box, useTheme } from "@mui/material";

const NutritionDetailsTab: React.FC<NutritionDetailsTabProps> = ({
  nutritionSummaryItems,
  lifeStageItems,
  onSelectLifeStageItem,
  onSelectAgeItem,
  ageItems,
  nutritionFilterItems,
  onSelectNutritionFilterItem,
  measurementFilterItems,
  onSelectMeasurementItem,
}) => {
  const theme = useTheme();
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

  const handleFilterItems = (items: string[]) => {
    setSelectedFilters(items);
  };

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: theme.spacing(7),
          flexWrap: "wrap",
        }}
      >
        <NutritionFilters
          lifeStageItems={lifeStageItems}
          onSelectLifeStageItem={onSelectLifeStageItem}
          ageItems={ageItems}
          onSelectAgeItem={onSelectAgeItem}
          nutritionFilterItems={nutritionFilterItems}
          onSelectNutritionFilterItem={onSelectNutritionFilterItem}
        />
        <MeasurementFilter
          measurementFilterItems={measurementFilterItems}
          onSelectMeasurementItem={onSelectMeasurementItem}
        />
      </Box>
      <NutritionSummary nutritionSummaryItems={nutritionSummaryItems} />
    </Box>
  );
};

export default NutritionDetailsTab;
