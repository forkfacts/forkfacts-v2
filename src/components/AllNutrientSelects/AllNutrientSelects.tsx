import React, { useCallback, useState } from "react";
import Checkbox from "@mui/material/Checkbox";
import { Box, Typography, useTheme } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const names: string[] = [
  "Protein",
  "Carbohydrate",
  "Water",
  "Vitamin",
  "Fats",
  "Fiber",
  "Minerals",
];

interface AllNutrientSelectsProps {}

const AllNutrientSelects: React.FC<AllNutrientSelectsProps> = ({}) => {
  const theme = useTheme();
  const [open, setIsOpen] = useState(false);
  const [selectedNutrients, setSelectNutrients] = useState<string[]>([]);
  const [selectedAll, setSelectedAll] = useState(false);

  const onSelectButtonItem = (name: string, index: number) => {
    if (selectedNutrients.includes(name)) {
      setSelectNutrients(selectedNutrients.filter((item) => item !== name));
    } else {
      setSelectNutrients((prev) => [...prev, name]);
    }
  };

  const onSelectAll = () => {
    setSelectedAll(true);
    setSelectNutrients([...names]);
  };

  console.log(selectedNutrients);

  const onDoneFilter = () => {
    setIsOpen(false);
  };

  return (
    <Box sx={{ cursor: "pointer", position: "relative" }}>
      <Typography
        sx={{ display: "flex", justifyContent: "flex-end", alignItems: "center" }}
        onClick={() => setIsOpen(!open)}
      >
        <Typography component="span" sx={{ fontSize: theme.typography.caption.fontSize }}>
          All nutrients
        </Typography>
        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
      </Typography>
      {open && (
        <Box
          component="div"
          sx={{
            position: "absolute",
            width: "100%",
            display: "block",
            minWidth: 260,
            mt: theme.spacing(1.1),
            paddingTop: theme.spacing(1.25),
            paddingLeft: theme.spacing(1.25),
            paddingRight: theme.spacing(4.375),
          }}
          boxShadow={1}
        >
          <Box>
            <Typography variant="caption">NUTRIENTS</Typography>
          </Box>
          <Box
            component="ul"
            sx={{
              width: "100%",
              display: "flex",
              justifyItems: "flex-start",
              alignItems: "center",
              listStyle: "none",
              flexDirection: "column",
            }}
          >
            {names.map((item, index) => (
              <Box
                component="li"
                key={index}
                sx={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  mr: theme.spacing(12),
                }}
                onClick={() => onSelectButtonItem(item, index)}
              >
                <Box>
                  {selectedAll && <Checkbox defaultChecked />}
                  {!selectedAll && <Checkbox />}
                  <Typography component="span" sx={{ fontSize: theme.typography.caption.fontSize }}>
                    {item}
                  </Typography>
                </Box>
                <Typography
                  component="span"
                  sx={{
                    mr: theme.spacing(-7),
                  }}
                >
                  {index > 3 ? index : null}
                </Typography>
              </Box>
            ))}
            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                mr: theme.spacing(10),
                mt: theme.spacing(5),
              }}
            >
              <Box>
                <Typography color="primary" onClick={onSelectAll}>
                  Select All
                </Typography>
              </Box>
              <Box
                color="primary"
                sx={{
                  mr: theme.spacing(-7),
                }}
              >
                <Typography color="primary.dark" onClick={onDoneFilter}>
                  Done
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default AllNutrientSelects;
