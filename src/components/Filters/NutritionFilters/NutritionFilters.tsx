import React, { useEffect, useState } from "react";
import { Box, useTheme } from "@mui/material";
import "react-multi-carousel/lib/styles.css";
import { FilterAge, SearchNutritionFilter, LifeStage, AllFilters } from "@forkfacts/components";
import { NutritionFilterProps } from "@forkfacts/models";

const NutritionFilters: React.FC<NutritionFilterProps> = ({
  lifeStageItems,
  onSelectLifeStageItem,
  ageItems,
  onSelectAgeItem,
  nutritionFilterItems,
  onSelectNutritionFilterItem,
}) => {
  const theme = useTheme();
  const [selectedItemArrays, setSelectedItemArray] = useState<string[]>([]);

  return (
    <Box sx={{ display: "flex", alignItems: "center", columnGap: "10px" }}>
      <LifeStage lifeStageItems={lifeStageItems} onSelectLifeStageItem={onSelectLifeStageItem} />
      <FilterAge ageItems={ageItems} onSelectAgeItem={onSelectAgeItem} />
      <SearchNutritionFilter
        onSelectNutritionFilterItem={onSelectNutritionFilterItem}
        nutritionFilterItems={nutritionFilterItems}
      />
    </Box>
  );
};

export default NutritionFilters;
