import { Box, useTheme, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import { CircularProgressbarWithChildren, buildStyles } from "react-circular-progressbar";
import { NutrientSummaryItemProps } from "@forkfacts/models";
import "react-circular-progressbar/dist/styles.css";

const NutrientSummaryItem: React.FC<NutrientSummaryItemProps> = ({ percentage, weight, name }) => {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Box
      sx={{
        width: mobile ? theme.spacing(6.25) : theme.spacing(16.5),
        mt: theme.spacing(2),
      }}
    >
      <Typography
        sx={{
          textAlign: "center",
          mb: theme.spacing(1.5),
          color: theme.palette.common.black,
          fontSize: mobile
            ? theme.typography.labelMedium.fontSize
            : theme.typography.titleLarge.fontSize,
          fontWeight: theme.typography.fontWeightMedium,
          lineHeight: theme.spacing(2),
          letterSpacing: theme.spacing(0.05),
          textTransform: "uppercase",
        }}
      >
        {name}
      </Typography>
      <CircularProgressbarWithChildren
        strokeWidth={mobile ? 10 : 12}
        value={percentage}
        styles={buildStyles({
          textColor: theme.palette.grey[800],
          pathColor: theme.palette.primary.main,
          trailColor: "#C9C5CA",
          textSize: theme.typography.fontSize,
        })}
      >
        <Typography
          sx={{
            lineHeight: theme.spacing(2.5),
            color: theme.palette.common.black,
            fontWeight: theme.typography.fontWeightMedium,
            fontSize: mobile
              ? theme.typography.labelMedium.fontSize
              : theme.typography.caption.fontSize,
          }}
        >
          {weight}
        </Typography>
      </CircularProgressbarWithChildren>
      <Typography
        sx={{
          textAlign: "center",
          mt: theme.spacing(1),
          color: theme.palette.common.black,
          fontSize: mobile
            ? theme.typography.labelMedium.fontSize
            : theme.typography.caption.fontSize,
          fontWeight: theme.typography.fontWeightMedium,
        }}
      >
        {percentage}%
      </Typography>
    </Box>
  );
};

export default NutrientSummaryItem;
