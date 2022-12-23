import React, { useState } from "react";
import { Box, Typography, useTheme } from "@mui/material";
import { NutrientAvailableAmounts } from "@forkfacts/components";

interface NutrientHeaderProps {
  availableAmounts: Array<string>;
  source: string;
}

const NutrientHeader: React.FC<NutrientHeaderProps> = ({ availableAmounts, source }) => {
  const theme = useTheme();
  const [selectedAvailableAmounts, setSelectedAvailableAmounts] = useState<string>("");

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
          selectedAvailableAmounts={selectedAvailableAmounts}
          setSelectedAvailableAmounts={setSelectedAvailableAmounts}
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

export default NutrientHeader;
