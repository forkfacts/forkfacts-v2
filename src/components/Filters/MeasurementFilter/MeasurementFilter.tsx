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
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          width: theme.spacing(19.875),
        }}
      >
        <ForLoops each={measurementFilterItems}>
          {(name, index) => {
            return (
              <Box
                onClick={() => handleSelectedItem(name, index)}
                key={index}
                boxShadow={1}
                sx={{
                  width: "50%",
                  height: theme.spacing(5),
                  borderColor: theme.palette.grey[400],
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "center",
                  cursor: "pointer",
                  borderTopLeftRadius: index === 0 ? theme.spacing(0.5) : 0,
                  borderBottomLeftRadius: index === 0 ? theme.spacing(0.5) : 0,
                  borderTopRightRadius: index === 1 ? theme.spacing(0.5) : 0,
                  borderBottomRightRadius: index === 1 ? theme.spacing(0.5) : 0,
                  backgroundColor: selectedItem === name ? theme.palette.primary.main : "none",
                  color: selectedItem === name ? "#fff" : theme.palette.common.black,
                }}
              >
                {name}
              </Box>
            );
          }}
        </ForLoops>
      </Box>
    </>
  );
};

export default MeasurementFilter;
