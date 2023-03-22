import React, { useState } from "react";
import { Box, useMediaQuery, useTheme } from "@mui/material";
import "react-multi-carousel/lib/styles.css";
import { FilterAge, SearchNutritionFilter, LifeStage, AllFilters } from "@forkfacts/components";
import { NutritionFilterProps, SearchNutritionFilterItem } from "@forkfacts/models";

const NutritionFilters: React.FC<NutritionFilterProps> = ({
  lifeStageItems,
  ageItems,
  nutritionFilterItems,
}) => {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("sm"));
  const tablet = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const [selectedNutritionFilterItems, setSelectedNutritionFilterItems] = useState<
    SearchNutritionFilterItem[]
  >([]);

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
          height: "0px",
        },
        flexDirection: "row",
      }}
    >
      <AllFilters
        ageItems={ageItems}
        lifeStageItems={lifeStageItems}
        nutritionFilterItems={nutritionFilterItems}
      />
      <LifeStage lifeStageItems={lifeStageItems} isDropdown />
      <FilterAge ageItems={ageItems} isDropdown margin={theme.spacing(-15.5)} />
      <SearchNutritionFilter
        nutritionFilterItems={nutritionFilterItems}
        isDropdown
        margin={theme.spacing(-23.5)}
      />
    </Box>
  );
};

export default NutritionFilters;
