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
        mt: theme.spacing(2),
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Typography
        variant={mobile ? "labelMedium" : "titleLarge"}
        sx={{
          textAlign: "center",
          mb: theme.spacing(1.5),
          color: theme.palette.customGray.main,
          fontWeight: theme.typography.fontWeightRegular,
          textTransform: "uppercase",
        }}
      >
        {name}
      </Typography>
      <Box
        sx={{
          width: mobile ? theme.spacing(6.25) : theme.spacing(16.5),
          height: mobile ? theme.spacing(6.25) : theme.spacing(16.5),
        }}
      >
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
            variant={mobile ? "labelMedium" : "titleLarge"}
            sx={{
              lineHeight: mobile ? "28px" : theme.spacing(2.5),
              color: theme.palette.customGray.main,
              fontWeight: theme.typography.fontWeightRegular,
            }}
          >
            {weight}
          </Typography>
        </CircularProgressbarWithChildren>
      </Box>
      <Typography
        variant={mobile ? "labelMedium" : "titleMedium"}
        sx={{
          textAlign: "center",
          mt: theme.spacing(1),
          color: theme.palette.customGray.main,
          fontWeight: theme.typography.fontWeightRegular,
        }}
      >
        {percentage}%
      </Typography>
    </Box>
  );
};

export default NutrientSummaryItem;
