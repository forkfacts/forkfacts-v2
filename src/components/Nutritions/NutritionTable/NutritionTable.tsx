import React, { useState } from "react";
import { SelectNutrients, NutritionTableContent } from "@forkfacts/components";
import { NutritionTableProps } from "@forkfacts/models";
import { Box, useTheme } from "@mui/material";
import { useStyles } from "./nutritionTableStyles";

const NutritionTable: React.FC<NutritionTableProps> = ({
  nutritionTableItems,
  allNutrients,
  getSelectedNutrients,
}) => {
  const theme = useTheme();
  const classes = useStyles();
  return (
    <>
      <Box style={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
        <Box>
          <SelectNutrients
            allNutrients={allNutrients}
            getSelectedNutrients={getSelectedNutrients}
          />
        </Box>
        <Box className={classes.tableTitle}>%Daily value</Box>
        <Box className={classes.tableTitle}>RDI</Box>
      </Box>
      <NutritionTableContent nutritionTableItems={nutritionTableItems} />
    </>
  );
};

export default NutritionTable;
