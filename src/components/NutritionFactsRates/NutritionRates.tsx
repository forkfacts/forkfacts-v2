import { Box, Grid } from "@mui/material";
import React from "react";
import { useStyles } from "./nutritionRatesStyles";
import { ForLoops } from "@forkfacts/helpers";
import { NutritionRate } from "@forkfacts/components";

interface rateItem {
  name: string;
  percentage: string;
  weight: string;
}

interface NutritionRatesProps {
  nutritionRatesItems: Array<rateItem>;
}

const NutritionRates: React.FC<NutritionRatesProps> = ({ nutritionRatesItems }) => {
  const classes = useStyles();
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
