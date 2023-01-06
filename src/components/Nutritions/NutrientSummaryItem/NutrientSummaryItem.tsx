import { Box, useTheme, Typography } from "@mui/material";
import React from "react";
import { CircularProgressbarWithChildren, buildStyles } from "react-circular-progressbar";
import { NutrientSummaryItemProps } from "@forkfacts/models";
import "react-circular-progressbar/dist/styles.css";

const NutrientSummaryItem: React.FC<NutrientSummaryItemProps> = ({ percentage, weight, name }) => {
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
        value={percentage}
        styles={buildStyles({
          textColor: theme.palette.grey[800],
          pathColor: theme.palette.primary.dark,
          trailColor: theme.palette.primary.light,
          textSize: theme.typography.fontSize,
        })}
      >
        <Typography
          sx={{
            lineHeight: theme.spacing(2.5),
            color: theme.palette.common.black,
            fontWeight: theme.typography.fontWeightBold,
          }}
        >
          {weight}
        </Typography>
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

export default NutrientSummaryItem;
