import React, { useEffect, useState } from "react";
import Checkbox from "@mui/material/Checkbox";
import { Box, Typography, useTheme } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";

interface NutrientAvailableAmountsProps {
  availableAmounts: Array<string>;
  onSelectAvailableAmounts: (item: string) => void;
}

const NutrientAvailableAmounts: React.FC<NutrientAvailableAmountsProps> = ({
  availableAmounts,
  onSelectAvailableAmounts,
}) => {
  const theme = useTheme();
  const [open, setIsOpen] = useState(false);
  const [selectedAvailableAmounts, setSelectedAvailableAmounts] = useState("");

  const handleClick = (index: number, name: string) => {
    if (availableAmounts[index] === name) {
      setSelectedAvailableAmounts(name);
      setIsOpen(false);
    }
  };

  useEffect(() => {
    onSelectAvailableAmounts(selectedAvailableAmounts);
  }, [selectedAvailableAmounts]);

  return (
    <Box sx={{ minWidth: 210, cursor: "pointer", position: "relative" }}>
      <Typography
        sx={{ display: "flex", justifyContent: "flex-end", alignItems: "center" }}
        onClick={() => setIsOpen(!open)}
      >
        <Typography component="span" sx={{ fontSize: theme.typography.caption.fontSize }}>
          Amount per {selectedAvailableAmounts}
        </Typography>
        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
      </Typography>
      {open && (
        <Box
          component="div"
          sx={{
            position: "absolute",
            width: "100%",
            listStyle: "none",
            display: "block",
            paddingTop: theme.spacing(1.25),
            paddingLeft: theme.spacing(1.25),
            paddingRight: theme.spacing(4.375),
            zIndex: theme.zIndex.modal,
            backgroundColor: theme.palette.common.white,
          }}
          boxShadow={1}
        >
          <Box>
            <Typography variant="caption">SERVING SIZES</Typography>
          </Box>
          <Box
            component="ul"
            sx={{
              width: "100%",
              display: "flex",
              justifyItems: "flex-start",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            {availableAmounts.map((item, index) => (
              <Box
                component="li"
                key={index}
                sx={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  mr: theme.spacing(11),
                }}
                onClick={() => handleClick(index, item)}
              >
                <Checkbox
                  icon={<RadioButtonUncheckedIcon />}
                  checkedIcon={<RadioButtonCheckedIcon />}
                  checked={selectedAvailableAmounts === item ? true : false}
                />
                <Typography component="span" sx={{ fontSize: theme.typography.caption.fontSize }}>
                  {item}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default NutrientAvailableAmounts;
