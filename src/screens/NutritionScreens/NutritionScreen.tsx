import {
  NutritionFilters,
  NutrientTopTableHeader,
  NutritionRates,
  NutritionTable,
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
    </Box>
  );
};

export default NutritionScreen;
