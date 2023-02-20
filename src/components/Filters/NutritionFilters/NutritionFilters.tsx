import React, { useEffect, useState } from "react";
import { Box, useTheme } from "@mui/material";
import "react-multi-carousel/lib/styles.css";
import { FilterAge, SearchNutritionFilter, LifeStage, AllFilters } from "@forkfacts/components";
import { ageItem, NutritionFilterProps, SearchNutritionFilterItem } from "@forkfacts/models";

const NutritionFilters: React.FC<NutritionFilterProps> = ({
  lifeStageItems,
  onSelectLifeStageItem,
  ageItems,
  onSelectAgeItem,
  nutritionFilterItems,
  onSelectNutritionFilterItem,
}) => {
  const theme = useTheme();
  const [selectedAge, setSelectedAge] = useState<ageItem>({} as ageItem);
  const [selectedLifeStage, setLifeStage] = useState("");
  const [selectedNutritionFilterItems, setSelectedNutritionFilterItems] = useState<
    SearchNutritionFilterItem[]
  >([]);
  const handleSelectedAge = (value: ageItem) => {
    setSelectedAge(value);
    onSelectAgeItem(value);
  };

  const handleLifeStage = (value: string) => {
    setLifeStage(value);
    onSelectLifeStageItem(value);
  };

  const handleSelectNutritionFilterItem = (value: SearchNutritionFilterItem[] | any[]) => {
    onSelectNutritionFilterItem(value);
    setSelectedNutritionFilterItems(value);
  };

  return (
    <Box sx={{ display: "flex", alignItems: "center", columnGap: "10px" }}>
      <AllFilters
        selectedAge={selectedAge}
        selectedLifeStage={selectedLifeStage}
        selectedNutritionFilterItems={selectedNutritionFilterItems}
        ageItems={ageItems}
        handleSelectedAge={handleSelectedAge}
        lifeStageItems={lifeStageItems}
        handleLifeStage={handleLifeStage}
        nutritionFilterItems={nutritionFilterItems}
        handleSelectNutritionFilterItem={handleSelectNutritionFilterItem}
      />
      <LifeStage
        lifeStageItems={lifeStageItems}
        onSelectLifeStageItem={handleLifeStage}
        isDropdown
      />
      <FilterAge ageItems={ageItems} onSelectAgeItem={handleSelectedAge} isDropdown />
      <SearchNutritionFilter
        onSelectNutritionFilterItem={handleSelectNutritionFilterItem}
        nutritionFilterItems={nutritionFilterItems}
        isDropdown
      />
    </Box>
  );
};

export default NutritionFilters;
