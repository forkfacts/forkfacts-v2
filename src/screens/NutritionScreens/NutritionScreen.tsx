import {
  NutritionFilters,
  NutrientTopTableHeader,
  NutritionRates,
  NutritionTable,
  FilterPage,
} from "@forkfacts/components";
import { NutritionScreenProps } from "@forkfacts/models";
import { Box, useTheme } from "@mui/material";
import React, { useState } from "react";

const NutritionScreen: React.FC<NutritionScreenProps> = ({
  filters,
  availableAmounts,
  source,
  nutritionRatesItems,
  nutritionTableItems,
  allNutrients,
  getSelectedNutrients,
  onSelectAvailableAmounts,
  lifeStageItems,
  ageItems,
  nutritionFilterItems,
  measurementFilterItems,
}) => {
  const theme = useTheme();
  const [openMobilePage, setOpenMobilePage] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState<string[]>([...filters]);

  const handleFilterItems = (items: string[]) => {
    setSelectedFilters(items);
  };

  return (
    <Box>
      <NutritionFilters
        onSelectFilterItems={handleFilterItems}
        filters={filters}
        setOpenMobilePage={setOpenMobilePage}
      />
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
        selectedFilters={selectedFilters}
        lifeStageItems={lifeStageItems}
        ageItems={ageItems}
        nutritionFilterItems={nutritionFilterItems}
        measurementFilterItems={measurementFilterItems}
        openMobilePage={openMobilePage}
        setOpenMobilePage={setOpenMobilePage}
      />
    </Box>
  );
};

export default NutritionScreen;
