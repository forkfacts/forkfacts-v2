import { Box, useTheme } from "@mui/material";
import { spacing } from "@mui/system";
import React from "react";
import { CircularProgressbarWithChildren, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

interface NutritionRateProps {
  weight: string;
  percentage: string;
  name: string;
}

const NutritionRate: React.FC<NutritionRateProps> = ({ percentage, weight, name }) => {
  const theme = useTheme();
  return (
    <Box sx={{ width: theme.spacing(8.25), height: theme.spacing(8.25) }}>
      <Box
        sx={{
          textAlign: "center",
          mb: theme.spacing(3),
          color: theme.palette.common.black,
          fontSize: theme.typography.caption.fontSize,
          fontWeight: theme.typography.fontWeightBold,
          lineHeight: theme.spacing(2),
          letterSpacing: theme.spacing(0.05),
          textTransform: "uppercase",
        }}
      >
        {name}
      </Box>
      <CircularProgressbarWithChildren
        value={parseInt(percentage.split("%")[0])}
        styles={buildStyles({
          textColor: theme.palette.grey[800],
          pathColor: "#3E4A36",
          trailColor: " #CDFFB1",
          textSize: theme.typography.fontSize,
        })}
      >
        <Box
          sx={{
            lineHeight: theme.spacing(2.5),
            color: theme.palette.common.black,
            fontWeight: theme.typography.fontWeightBold,
          }}
        >
          {weight}
        </Box>
      </CircularProgressbarWithChildren>
      <Box
        sx={{
          textAlign: "center",
          mt: theme.spacing(1),
          color: theme.palette.grey[600],
          fontSize: theme.typography.caption.fontSize,
          fontWeight: theme.typography.fontWeightBold,
        }}
      >
        {percentage}
      </Box>
    </Box>
  );
};

export default NutritionRate;
