import React from "react";
import { Box, Typography, useTheme } from "@mui/material";
import { NutrientHeaderProps } from "@forkfacts/models";
import { NutrientServingSize } from "@forkfacts/components";

const NutrientTopTableHeader: React.FC<NutrientHeaderProps> = ({
  servingSizeAmounts,
  source,
  onSelectServingSizeAmount,
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
          <Typography
            variant="caption"
            sx={{
              color: theme.palette.grey[600],
              fontWeight: theme.typography.fontWeightRegular,
              lineHeight: theme.spacing(2),
              letterSpacing: theme.spacing(0.05),
            }}
          >
            Source: {source}
          </Typography>
        </Box>
        <NutrientServingSize
          onSelectServingSizeAmount={onSelectServingSizeAmount}
          servingSizeAmounts={servingSizeAmounts}
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
