import { Box, Grid } from "@mui/material";
import React from "react";
import { ForLoops } from "@forkfacts/helpers";
import { NutrientSummaryItem } from "@forkfacts/components";
import { NutritionSummaryProps } from "@forkfacts/models";

const NutritionSummary: React.FC<NutritionSummaryProps> = ({ nutritionSummaryItems }) => {
  return (
    <Box
      sx={{
        width: "100%",
        overflowX: "auto",
        scrollbarWidth: "none",
        "&::-webkit-scrollbar": {
          width: "0px",
          background: "transparent",
        },
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <ForLoops each={nutritionSummaryItems}>
          {(item, idx) => (
            <Box key={idx}>
              <NutrientSummaryItem
                percentage={item.percentage}
                weight={item.weight}
                name={item.name}
              />
            </Box>
          )}
        </ForLoops>
      </Box>
    </Box>
  );
};

export default NutritionSummary;
