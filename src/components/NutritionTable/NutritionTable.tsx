import React, { useState } from "react";
import { AllNutrientSelects, NutritionTableContent } from "@forkfacts/components";
import { NutritionTableProps } from "@forkfacts/models";
import { Box, useTheme } from "@mui/material";

const NutritionTable: React.FC<NutritionTableProps> = ({
  nutritionTableItems,
  allNutrients,
  getSelectedNutrients,
}) => {
  return (
    <>
      <Box style={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
        <Box>
          <AllNutrientSelects
            allNutrients={allNutrients}
            getSelectedNutrients={getSelectedNutrients}
          />
        </Box>
        <Box>%value</Box>
        <Box>RDI</Box>
      </Box>
      <NutritionTableContent nutritionTableItems={nutritionTableItems} />
    </>
  );
};

export default NutritionTable;
