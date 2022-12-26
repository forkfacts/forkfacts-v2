import React, { useState } from "react";
import { Box, useTheme } from "@mui/material";
import Typography from "@mui/material/Typography";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { ForLoops } from "@forkfacts/helpers";
import { NutritionTableContentProps } from "@forkfacts/models";

const NutritionTableContent: React.FC<NutritionTableContentProps> = ({ nutritionTableItems }) => {
  const theme = useTheme();
  const [Index, setIndex] = React.useState<number>();
  const [isOpen, setIsOpen] = useState(true);

  const handleClick = (index: number) => {
    if (Index === index) {
      setIsOpen(!isOpen);
    }
  };

  return (
    <Box
      sx={{
        mt: theme.spacing(4),
        width: "100%",
      }}
    >
      <ForLoops each={nutritionTableItems}>
        {(item, index) => {
          return (
            <Box key={index}>
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  mt: theme.spacing(3),
                }}
              >
                <Box sx={{ mb: theme.spacing(2) }}>
                  <Typography
                    variant="subtitle2"
                    sx={{
                      color: theme.palette.common.black,
                      fontWeight: theme.typography.fontWeightBold,
                    }}
                  >
                    {item.title} {item.amount}
                    {item.amountUnit}
                  </Typography>
                </Box>
                <Box>
                  <Box
                    onClick={() => {
                      handleClick(index);
                      setIndex(index);
                    }}
                  >
                    {item.content.length > 2 && (
                      <Typography>
                        {isOpen || Index !== index ? (
                          <ExpandLess sx={{ cursor: "pointer" }} />
                        ) : (
                          <ExpandMore sx={{ cursor: "pointer" }} />
                        )}
                      </Typography>
                    )}
                  </Box>
                </Box>
              </Box>
              {(isOpen || Index !== index) && (
                <Box sx={{ ml: "auto", width: "95%" }}>
                  <ForLoops each={item.content}>
                    {(item2, index2) => {
                      return (
                        <Box
                          key={index2}
                          sx={{
                            width: "100%",
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                          }}
                        >
                          <Box>{item2.nutrient}</Box>
                          <Box>{item2.valuePercent}</Box>
                          <Box>{item2.rdi.amount}</Box>
                        </Box>
                      );
                    }}
                  </ForLoops>
                </Box>
              )}
            </Box>
          );
        }}
      </ForLoops>
    </Box>
  );
};

export default NutritionTableContent;
