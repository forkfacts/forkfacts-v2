import { Box, Grid } from "@mui/material";
import React from "react";
import { ForLoops } from "@forkfacts/helpers";
import { NutritionRate } from "@forkfacts/components";
import { NutritionRatesProps } from "@forkfacts/models";

const NutritionRates: React.FC<NutritionRatesProps> = ({ nutritionRatesItems }) => {
  return (
    <Box sx={{ width: "100%", mt: ({ spacing }) => spacing(1) }}>
      <Grid container justifyContent="space-between">
        <ForLoops each={nutritionRatesItems}>
          {(item, idx) => (
            <Grid key={idx} item>
              <NutritionRate percentage={item.percentage} weight={item.weight} name={item.name} />
            </Grid>
          )}
        </ForLoops>
      </Grid>
    </Box>
  );
};

export default NutritionRates;
