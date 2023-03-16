import React, { useState } from "react";
import { Box, useMediaQuery, useTheme } from "@mui/material";
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
  const mobile = useMediaQuery(theme.breakpoints.down("sm"));
  const tablet = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const [selectedAge, setSelectedAge] = useState<ageItem>({} as ageItem);
  const [selectedLifeStage, setLifeStage] = useState("");
  const [open, setOpen] = useState(false);
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

  const onClick = () => {
    setOpen(!open);
  };

  const handleSelectNutritionFilterItem = (value: SearchNutritionFilterItem[] | any[]) => {
    onSelectNutritionFilterItem(value);
    setSelectedNutritionFilterItems(value);
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        width: "100%",
        columnGap: mobile ? theme.spacing(1) : theme.spacing(2),
        justifyContent: mobile ? "space-between" : tablet ? "flex-start" : "normal",
        overflowX: "auto",
        scrollbarWidth: "none",
        "&::-webkit-scrollbar": {
          width: "0px",
          background: "transparent",
        },
        flexDirection: "row",
      }}
    >
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

      <FilterAge
        ageItems={ageItems}
        onSelectAgeItem={handleSelectedAge}
        isDropdown
        margin={theme.spacing(-15.5)}
      />

      <SearchNutritionFilter
        onSelectNutritionFilterItem={handleSelectNutritionFilterItem}
        nutritionFilterItems={nutritionFilterItems}
        isDropdown
        margin={theme.spacing(-23.5)}
      />
    </Box>
  );
};

export default NutritionFilters;
