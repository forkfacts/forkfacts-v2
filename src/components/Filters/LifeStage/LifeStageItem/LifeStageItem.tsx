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
      onClick={() => handleSelectedItem(item.name, index)}
      sx={{
        width: "50%",
        height: theme.spacing(14.25),
        borderColor: theme.palette.grey[200],
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        cursor: "pointer",
        backgroundColor: selectedItem === item.name ? blue[100] : "none",
        color: selectedItem === item.name ? theme.palette.primary.dark : theme.palette.common.black,
        border: "1px solid #F2EFFF",
        p: theme.spacing(1.25),
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <item.icon styles={{ color: "#929094" }} />
        <Typography
          variant="subhead1"
          sx={{
            color: theme.palette.customGray.main,
            fontWeight: theme.typography.fontWeightRegular,
            mt: theme.spacing(1),
          }}
        >
          {item.name}
        </Typography>
      </Box>
    </Box>
  );
};

export default LifeStageItem;
