import React, { useEffect, useState } from "react";
import Checkbox from "@mui/material/Checkbox";
import { Box, Typography, useTheme } from "@mui/material";
import { NutrientServingSizeProps } from "@forkfacts/models";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";

const NutrientServingSize: React.FC<NutrientServingSizeProps> = ({
  servingSizeAmounts,
  onSelectServingSizeAmount,
}) => {
  const theme = useTheme();
  const [open, setIsOpen] = useState(false);
  const [selectedAvailableAmounts, setSelectedAvailableAmounts] = useState(
    servingSizeAmounts[servingSizeAmounts.length - 1]
  );

  const handleSelectItem = (index: number, name: string) => {
    if (servingSizeAmounts[index] === name) {
      setSelectedAvailableAmounts(name);
      setIsOpen(false);
    }
  };

  useEffect(() => {
    onSelectServingSizeAmount(selectedAvailableAmounts);
  }, [selectedAvailableAmounts]);

  return (
    <Box sx={{ minWidth: 210, cursor: "pointer", position: "relative" }}>
      <Typography
        sx={{ display: "flex", justifyContent: "flex-end", alignItems: "center" }}
        onClick={() => setIsOpen(!open)}
      >
        <Typography
          variant="caption"
          sx={{
            color: theme.palette.grey[600],
            fontWeight: theme.typography.fontWeightRegular,
            lineHeight: theme.spacing(2),
            letterSpacing: theme.spacing(0.05),
          }}
        >
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
            marginTop: theme.spacing(1.5),
          }}
          boxShadow={1}
        >
          <Box>
            <Typography
              variant="caption"
              sx={{
                color: theme.palette.grey[600],
                fontWeight: theme.typography.fontWeightRegular,
                lineHeight: theme.spacing(2),
                letterSpacing: theme.spacing(0.05),
              }}
            >
              SERVING SIZES
            </Typography>
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
            {servingSizeAmounts.map((item, index) => (
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
                onClick={() => handleSelectItem(index, item)}
              >
                <Checkbox
                  icon={<RadioButtonUncheckedIcon />}
                  checkedIcon={<RadioButtonCheckedIcon />}
                  checked={selectedAvailableAmounts === item ? true : false}
                />
                <Typography
                  sx={{
                    fontSize: theme.typography.caption.fontSize,
                    color: theme.palette.common.black,
                    fontWeight: theme.typography.fontWeightBold,
                  }}
                >
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

export default NutrientServingSize;
