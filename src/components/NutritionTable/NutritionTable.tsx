import React, { useState } from "react";
import { AllNutrientSelects, NutritionTableContent } from "@forkfacts/components";
import { NutritionTableProps } from "@forkfacts/models";
import { Box, useTheme } from "@mui/material";

const NutritionTable: React.FC<NutritionTableProps> = ({ nutritionTableItems }) => {
  return (
    <Box>
      <Box style={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
        <Box>
          <AllNutrientSelects />
        </Box>
        <Box>%value</Box>
        <Box>RDI</Box>
      </Box>
      <NutritionTableContent nutritionTableItems={nutritionTableItems} />
    </Box>
  );
};

export default NutritionTable;
