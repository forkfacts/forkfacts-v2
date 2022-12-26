import React from "react";
import { blue } from "@mui/material/colors";
import { lifeStageItem } from "@forkfacts/models";
import { Box, Typography, useTheme } from "@mui/material";

interface LifeStageItemProps {
  handleSelectedItem: (name: string, index: number) => void;
  item: lifeStageItem;
  selectedItem: string;
  index: number;
}

const LifeStageItem: React.FC<LifeStageItemProps> = ({
  index,
  item,
  selectedItem,
  handleSelectedItem,
}) => {
  const theme = useTheme();
  return (
    <Box
      boxShadow={2}
      onClick={() => handleSelectedItem(item.name, index)}
      sx={{
        width: "50%",
        height: theme.spacing(14.25),
        borderColor: theme.palette.grey[400],
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        cursor: "pointer",
        backgroundColor: selectedItem === item.name ? blue[100] : "none",
        color: selectedItem === item.name ? theme.palette.primary.dark : theme.palette.common.black,
        borderTopLeftRadius: index === 0 ? theme.spacing(2.5) : theme.spacing(0),
        borderBottomLeftRadius: index === 4 ? theme.spacing(2.5) : theme.spacing(0),
        borderTopRightRadius: index === 1 ? theme.spacing(2.5) : theme.spacing(0),
        borderBottomRightRadius: index === 5 ? theme.spacing(2.5) : theme.spacing(0),
      }}
    >
      <Box>
        <item.icon />
        <Typography
          sx={{
            fontSize: theme.typography.htmlFontSize,
            fontWeight: theme.typography.fontWeightMedium,
            lineHeight: theme.spacing(3),
          }}
        >
          {item.name}
        </Typography>
      </Box>
    </Box>
  );
};

export default LifeStageItem;
