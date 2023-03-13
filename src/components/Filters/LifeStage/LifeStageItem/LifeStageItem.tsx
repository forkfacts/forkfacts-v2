import React from "react";
import { blue } from "@mui/material/colors";
import { lifeStageItem } from "@forkfacts/models";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";

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
  const mobile = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Box
      onClick={() => handleSelectedItem(item.name, index)}
      sx={{
        width: mobile ? theme.spacing(12.5) : theme.spacing(18.25),
        height: mobile ? theme.spacing(12.5) : theme.spacing(18.25),
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        cursor: "pointer",
        backgroundColor: selectedItem === item.name ? "#F2EFFF" : "none",
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
        <item.icon
          styles={{
            color: "red",
            width: theme.spacing(3.75),
            height: theme.spacing(3.75),
          }}
        />
        <Typography
          variant={mobile ? "labelMedium" : "subhead1"}
          sx={{
            color:
              selectedItem === item.name ? theme.palette.primary.main : theme.palette.common.black,
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
