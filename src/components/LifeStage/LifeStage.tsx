import { Box, Typography, useTheme } from "@mui/material";
import ChildCareOutlinedIcon from "@mui/icons-material/ChildCareOutlined";
import EscalatorWarningOutlinedIcon from "@mui/icons-material/EscalatorWarningOutlined";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import PregnantWomanOutlinedIcon from "@mui/icons-material/PregnantWomanOutlined";
import { blue } from "@mui/material/colors";
import React, { useState } from "react";

interface LifeStageProps {}

const items = [
  {
    name: "Infant",
    icon: <ChildCareOutlinedIcon />,
  },
  {
    name: "Children",
    icon: <EscalatorWarningOutlinedIcon />,
  },
  {
    name: "Male",
    icon: <PregnantWomanOutlinedIcon />,
  },
  {
    name: "Female",
    icon: <EscalatorWarningOutlinedIcon />,
  },
  {
    name: "Pregnant",
    icon: <PregnantWomanOutlinedIcon />,
  },
  {
    name: "Location",
    icon: <Person2OutlinedIcon />,
  },
];
const LifeStage: React.FC<LifeStageProps> = () => {
  const theme = useTheme();
  const [selectedItem, setSelectedItem] = useState<string>();

  const handleSelectedItem = (name: string, index: number) => {
    setSelectedItem(name);
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
        {items.map((item, index) => (
          <Box
            key={index}
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
              color:
                selectedItem === item.name
                  ? theme.palette.primary.dark
                  : theme.palette.common.black,
              borderTopLeftRadius: index === 0 ? theme.spacing(2.5) : theme.spacing(0),
              borderBottomLeftRadius: index === 4 ? theme.spacing(2.5) : theme.spacing(0),
              borderTopRightRadius: index === 1 ? theme.spacing(2.5) : theme.spacing(0),
              borderBottomRightRadius: index === 5 ? theme.spacing(2.5) : theme.spacing(0),
            }}
          >
            <Box>
              {item.icon}
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
        ))}
      </Box>
    </Box>
  );
};

export default LifeStage;
