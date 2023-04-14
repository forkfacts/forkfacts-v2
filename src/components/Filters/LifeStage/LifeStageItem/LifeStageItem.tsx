import React from "react";
import { lifeStageItem } from "@forkfacts/models";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import { Email } from "@forkfacts/icons";

interface LifeStageItemProps {
  handleSelectedItem: (name: string) => void;
  item: lifeStageItem;
  selectedItem: string;
  index: number;
}

const LifeStageItem: React.FC<LifeStageItemProps> = ({
  item,
  selectedItem,
  handleSelectedItem,
}) => {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Box
      onClick={() => handleSelectedItem(item.name)}
      sx={{
        width: mobile ? theme.spacing(12.5) : theme.spacing(18.25),
        height: mobile ? theme.spacing(12.5) : theme.spacing(18.25),
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        cursor: "pointer",
        backgroundColor:
          selectedItem.toLowerCase() === item.name.toLowerCase() ? "#F2EFFF" : "none",
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
          color={
            selectedItem.toLowerCase() === item.name.toLowerCase()
              ? theme.palette.primary.main
              : theme.palette.customGray.textLight
          }
          style={{
            width: theme.spacing(3.75),
            height: theme.spacing(3.75),
          }}
        />
        <Typography
          variant={mobile ? "labelMedium" : "subhead1"}
          sx={{
            color:
              selectedItem.toLowerCase() === item.name.toLowerCase()
                ? theme.palette.primary.main
                : theme.palette.customGray.main,
            fontWeight: theme.typography.fontWeightRegular,
            mt: theme.spacing(1),
            textTransform: "capitalize",
          }}
        >
          {item.name}
        </Typography>
      </Box>
    </Box>
  );
};

export default LifeStageItem;
