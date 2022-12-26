import React, { useState } from "react";
import { Box, Typography, useTheme } from "@mui/material";
import { LifeStageProps, lifeStageItem } from "@forkfacts/models";
import { LifeStageItem } from "@forkfacts/components";

const LifeStage: React.FC<LifeStageProps> = ({ lifeStageItems, onSelectLifeStageItem }) => {
  const theme = useTheme();
  const [selectedItem, setSelectedItem] = useState<string>("");

  const handleSelectedItem = (name: string, index: number) => {
    setSelectedItem(name);
    onSelectLifeStageItem(name);
  };

  return (
    <Box>
      <Box>
        <Typography
          sx={{
            fontSize: theme.typography.htmlFontSize,
            fontWeight: theme.typography.fontWeightBold,
            lineHeight: theme.spacing(3),
          }}
        >
          Life Stage
        </Typography>
      </Box>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexWrap: "wrap",
          mt: theme.spacing(3),
        }}
      >
        {lifeStageItems.map((item, index) => (
          <LifeStageItem
            index={index}
            key={index}
            selectedItem={selectedItem}
            handleSelectedItem={handleSelectedItem}
            item={item}
          />
        ))}
      </Box>
    </Box>
  );
};

export default LifeStage;
