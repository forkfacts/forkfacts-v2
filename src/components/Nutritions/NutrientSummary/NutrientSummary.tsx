import { Box, Grid } from "@mui/material";
import React from "react";
import { ForLoops } from "@forkfacts/helpers";
import { NutrientSummaryItem } from "@forkfacts/components";
import { NutritionSummaryProps } from "@forkfacts/models";

const NutritionSummary: React.FC<NutritionSummaryProps> = ({ nutritionSummaryItems }) => {
  return (
    <Box sx={{ width: "100%", mt: ({ spacing }) => spacing(1) }}>
      <Grid container justifyContent="space-between">
        <ForLoops each={nutritionSummaryItems}>
          {(item, idx) => (
            <Grid key={idx} item>
              <NutrientSummaryItem
                percentage={item.percentage}
                weight={item.weight}
                name={item.name}
              />
            </Grid>
          )}
        </ForLoops>
      </Grid>
    </Box>
  );
};

export default NutritionSummary;
