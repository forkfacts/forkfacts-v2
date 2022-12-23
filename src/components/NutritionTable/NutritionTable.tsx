import React, { useState } from "react";
import { AllNutrientSelects } from "@forkfacts/components";
import { Box, useTheme } from "@mui/material";
import Typography from "@mui/material/Typography";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";

interface NutritionTableProps {}

interface content {
  nutrient: string;
  valuePercent: string;
  rdi: {
    amount: string;
    unit: string;
  };
}
interface NutritionTableItem {
  title: string;
  amount: number;
  amountUnit: string;
  content: Array<content>;
}

const data: NutritionTableItem[] = [
  {
    title: "Total Carbohydrate",
    amount: 4,
    amountUnit: "g",
    content: [
      {
        nutrient: "Carbohydrate  2g",
        valuePercent: "17.67%",
        rdi: {
          amount: "130",
          unit: "g",
        },
      },
      {
        nutrient: "Sugar  2g",
        valuePercent: "",
        rdi: { amount: "15", unit: "g" },
      },
      {
        nutrient: "Starch  2g",
        valuePercent: "",
        rdi: {
          amount: "12.6",
          unit: "g",
        },
      },
    ],
  },
  {
    title: "Protein",
    amount: 11,
    amountUnit: "g",
    content: [{ nutrient: "Protein 2g", valuePercent: "1.61%", rdi: { amount: "46", unit: "g" } }],
  },
];

const NutritionTable: React.FC<NutritionTableProps> = ({}) => {
  const theme = useTheme();
  const [Index, setIndex] = React.useState<number>();
  const [isOpen, setIsOpen] = useState(true);

  const handleClick = (index: number) => {
    if (Index === index) {
      setIsOpen(!isOpen);
    }
  };

  return (
    <Box>
      <Box style={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
        <Box>
          <AllNutrientSelects />
        </Box>
        <Box>%value</Box>
        <Box>RDI</Box>
      </Box>
      <Box
        sx={{
          mt: theme.spacing(4),
          width: "100%",
        }}
      >
        {data.map((item, index) => {
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
                  {item.content.map((item2, index2) => {
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
                  })}
                </Box>
              )}
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default NutritionTable;
