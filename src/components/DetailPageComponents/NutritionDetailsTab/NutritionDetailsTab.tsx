import React, { useState } from "react";
import { AllFilters, NutritionSummary } from "@forkfacts/components";
import { NutritionDetailsTabProps } from "@forkfacts/models";
import { Box } from "@mui/material";

const NutritionDetailsTab: React.FC<NutritionDetailsTabProps> = ({
  nutritionSummaryItems,
  lifeStageItems,
  ageItems,
  nutritionFilterItems,
  measurementFilterItems,
  onSelectFilterPageData,
}) => {
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

  const handleFilterItems = (items: string[]) => {
    setSelectedFilters(items);
  };

  return (
    <Box>
      <AllFilters
        selectedFilters={selectedFilters}
        lifeStageItems={lifeStageItems}
        ageItems={ageItems}
        nutritionFilterItems={nutritionFilterItems}
        measurementFilterItems={measurementFilterItems}
        onSelectFilterPageData={onSelectFilterPageData}
      />
      <NutritionSummary nutritionSummaryItems={nutritionSummaryItems} />
    </Box>
  );
};

export default NutritionDetailsTab;
