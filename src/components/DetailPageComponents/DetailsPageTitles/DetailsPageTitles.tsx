import React, { useState } from "react";
import Checkbox from "@mui/material/Checkbox";
import { Box, Typography, useTheme } from "@mui/material";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import { DetailsPageTitlesProps } from "@forkfacts/models";
import { ForLoops } from "@forkfacts/helpers";

const DetailsPageTitles: React.FC<DetailsPageTitlesProps> = ({
  DetailsPageTitlesItems,
  onDetailsPageTitleItem,
}) => {
  const theme = useTheme();
  const [selectedAgeIndex, setSelectedAgeIndex] = useState<number | null>(2);

  const handleDetailsPageTitlesItem = (item: string, index: number) => {
    setSelectedAgeIndex(index);
    onDetailsPageTitleItem(item);
  };

  return (
    <Box>
      <Box
        component="div"
        sx={{
          width: "100%",
          display: "block",
          marginTop: theme.spacing(1.7),
        }}
      >
        <ForLoops each={DetailsPageTitlesItems}>
          {(item, index) => (
            <Box
              key={index}
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
              }}
              onClick={() => handleDetailsPageTitlesItem(item.title, index)}
            >
              <Checkbox
                icon={<RadioButtonUncheckedIcon />}
                checkedIcon={<RadioButtonCheckedIcon />}
                checked={selectedAgeIndex === index ? true : false}
              />
              <Typography variant="body1">{item.title}</Typography>
            </Box>
          )}
        </ForLoops>
      </Box>
    </Box>
  );
};

export default DetailsPageTitles;
