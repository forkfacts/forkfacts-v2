import React from "react";
import { Box, Typography, useTheme } from "@mui/material";

interface MeasurementFilterProps {}

const MeasurementFilter: React.FC<MeasurementFilterProps> = () => {
  const theme = useTheme();
  return (
    <Box>
      <Typography
        component="span"
        sx={{
          fontSize: theme.typography.htmlFontSize,
          fontWeight: theme.typography.fontWeightBold,
          lineHeight: theme.spacing(3),
          paddingLeft: theme.spacing(1.5),
          paddingRight: theme.spacing(2.4),
        }}
      >
        Ages
      </Typography>
      <Box></Box>
    </Box>
  );
};

export default MeasurementFilter;
