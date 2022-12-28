import React, { useState } from "react";
import { Box, Typography, useTheme } from "@mui/material";
import { blue } from "@mui/material/colors";
import { ForLoops } from "@forkfacts/helpers";
import { MeasurementFilterProps } from "@forkfacts/models";

const MeasurementFilter: React.FC<MeasurementFilterProps> = ({
  onSelectMeasurementItem,
  measurementFilterItems,
}) => {
  const theme = useTheme();
  const [selectedItem, setSelectedItem] = useState<string>(measurementFilterItems[0]);

  const handleSelectedItem = (name: string, index: number) => {
    setSelectedItem(name);
    onSelectMeasurementItem(name);
  };

  return (
    <Box>
      <Typography
        component="span"
        sx={{
          fontSize: theme.typography.htmlFontSize,
          fontWeight: theme.typography.fontWeightBold,
          lineHeight: theme.spacing(3),
        }}
      >
        Measure Units
      </Typography>
      <Box
        boxShadow={1}
        sx={{
          display: "flex",
          alignItems: "center",
          borderRadius: theme.shape,
          mt: theme.spacing(3),
        }}
      >
        <ForLoops each={measurementFilterItems}>
          {(name, index) => {
            return (
              <Box
                onClick={() => handleSelectedItem(name, index)}
                key={index}
                sx={{
                  width: "50%",
                  height: theme.spacing(5.75),
                  borderColor: theme.palette.grey[400],
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "center",
                  cursor: "pointer",
                  backgroundColor: selectedItem === name ? blue[100] : "none",
                  color:
                    selectedItem === name ? theme.palette.primary.dark : theme.palette.common.black,
                }}
              >
                {name}
              </Box>
            );
          }}
        </ForLoops>
      </Box>
    </Box>
  );
};

export default MeasurementFilter;
