import React from "react";
import { Box, Typography, useTheme } from "@mui/material";
import { NutrientHeaderProps } from "@forkfacts/models";
import { NutrientAvailableAmounts } from "@forkfacts/components";

const NutrientTopTableHeader: React.FC<NutrientHeaderProps> = ({
  availableAmounts,
  source,
  onSelectAvailableAmounts,
}) => {
  const theme = useTheme();

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "end",
        }}
      >
        <Box>
          <Typography variant="caption">Source:{source}</Typography>
        </Box>
        <NutrientAvailableAmounts
          onSelectAvailableAmounts={onSelectAvailableAmounts}
          availableAmounts={availableAmounts}
        />
      </Box>
      <Box
        sx={{
          backgroundColor: theme.palette.primary.dark,
          width: "100%",
          height: theme.spacing(1 / 4),
        }}
      />
    </Box>
  );
};

export default NutrientTopTableHeader;
