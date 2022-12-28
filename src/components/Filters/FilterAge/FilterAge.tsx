import React, { useState } from "react";
import Checkbox from "@mui/material/Checkbox";
import { Box, Typography, useTheme } from "@mui/material";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import { AgeItemsProps, ageItem } from "@forkfacts/models";
import { ForLoops } from "@forkfacts/helpers";
const FilterAge: React.FC<AgeItemsProps> = ({ ageItems, onSelectAgeItem }) => {
  const theme = useTheme();
  const [selectedAgeIndex, setSelectedAgeIndex] = useState<number | null>(null);

  const handleSelectAge = (item: ageItem, index: number) => {
    setSelectedAgeIndex(index);
    onSelectAgeItem(item);
  };

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
      <Box
        component="div"
        sx={{
          width: "100%",
          display: "block",
          marginTop: theme.spacing(1.7),
        }}
      >
        <ForLoops each={ageItems}>
          {(item, index) => (
            <Box
              key={index}
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
              }}
              onClick={() => handleSelectAge(item, index)}
            >
              <Checkbox
                icon={<RadioButtonUncheckedIcon />}
                checkedIcon={<RadioButtonCheckedIcon />}
                checked={selectedAgeIndex === index ? true : false}
              />
              <Typography variant="body1">
                {item.start + "-" + item.end} {item.unit}
              </Typography>
            </Box>
          )}
        </ForLoops>
      </Box>
    </Box>
  );
};

export default FilterAge;
