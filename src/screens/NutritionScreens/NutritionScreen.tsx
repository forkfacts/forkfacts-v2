import {
  NutritionFilter,
  NutrientTopTableHeader,
  NutritionSummary,
  NutritionTable,
  AllFilters,
} from "@forkfacts/components";
import { NutritionScreenProps } from "@forkfacts/models";
import { Box, useTheme } from "@mui/material";
import React, { useState } from "react";

const NutritionScreen: React.FC<NutritionScreenProps> = ({
  filters,
  servingSizeAmounts,
  source,
  nutritionSummaryItems,
  nutritionTableItems,
  allNutrients,
  getSelectedNutrients,
  onSelectServingSizeAmount,
  lifeStageItems,
  ageItems,
  nutritionFilterItems,
  measurementFilterItems,
  onSelectFilterPageData,
}) => {
  const theme = useTheme();
  const [openMobilePage, setOpenMobilePage] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

  const handleFilterItems = (items: string[]) => {
    setSelectedFilters(items);
  };

  return (
    <Box>
      <NutritionFilter
        onSelectFilterItems={handleFilterItems}
        filters={filters}
        setOpenMobilePage={setOpenMobilePage}
      />
      <Box sx={{ mt: theme.spacing(4) }}>
        <NutrientTopTableHeader
          servingSizeAmounts={servingSizeAmounts}
          source={source}
          onSelectServingSizeAmount={onSelectServingSizeAmount}
        />
      </Box>
      <Box sx={{ mt: theme.spacing(4) }}>
        <NutritionSummary nutritionSummaryItems={nutritionSummaryItems} />
      </Box>
      <Box sx={{ mt: theme.spacing(11) }}>
        <NutritionTable
          nutritionTableItems={nutritionTableItems}
          allNutrients={allNutrients}
          getSelectedNutrients={getSelectedNutrients}
        />
      </Box>
      <AllFilters
        filtersTotal={filters.length}
        selectedFilters={selectedFilters}
        lifeStageItems={lifeStageItems}
        ageItems={ageItems}
        nutritionFilterItems={nutritionFilterItems}
        measurementFilterItems={measurementFilterItems}
        openMobilePage={openMobilePage}
        setOpenMobilePage={setOpenMobilePage}
        onSelectFilterPageData={onSelectFilterPageData}
      />
    </Box>
  );
};

export default NutritionScreen;
