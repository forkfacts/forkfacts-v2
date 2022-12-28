import {
  NutritionFilters,
  NutrientTopTableHeader,
  NutritionRates,
  NutritionTable,
  FilterPage,
} from "@forkfacts/components";
import { NutritionScreenProps } from "@forkfacts/models";
import { Box, useTheme } from "@mui/material";
import React from "react";

const NutritionScreen: React.FC<NutritionScreenProps> = ({
  filters,
  onSelectFilterItems,
  availableAmounts,
  source,
  nutritionRatesItems,
  nutritionTableItems,
  allNutrients,
  getSelectedNutrients,
  onSelectAvailableAmounts,
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
  return (
    <Box>
      <NutritionFilters onSelectFilterItems={onSelectFilterItems} filters={filters} />
      <Box sx={{ mt: theme.spacing(4) }}>
        <NutrientTopTableHeader
          availableAmounts={availableAmounts}
          source={source}
          onSelectAvailableAmounts={onSelectAvailableAmounts}
        />
      </Box>
      <Box sx={{ mt: theme.spacing(4) }}>
        <NutritionRates nutritionRatesItems={nutritionRatesItems} />
      </Box>
      <Box sx={{ mt: theme.spacing(11) }}>
        <NutritionTable
          nutritionTableItems={nutritionTableItems}
          allNutrients={allNutrients}
          getSelectedNutrients={getSelectedNutrients}
        />
      </Box>
      <FilterPage
        lifeStageItems={lifeStageItems}
        onSelectLifeStageItem={onSelectLifeStageItem}
        ageItems={ageItems}
        onSelectAgeItem={onSelectAgeItem}
        nutritionFilterItems={nutritionFilterItems}
        onSelectNutritionFilterItem={onSelectNutritionFilterItem}
        onSelectMeasurementItem={onSelectMeasurementItem}
        measurementFilterItems={measurementFilterItems}
      />
    </Box>
  );
};

export default NutritionScreen;
