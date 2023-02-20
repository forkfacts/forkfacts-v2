import React, { useState } from "react";
import Checkbox from "@mui/material/Checkbox";
import { Box, Button, Typography, useTheme } from "@mui/material";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import CloseIcon from "@mui/icons-material/Close";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import { AgeItemsProps, ageItem } from "@forkfacts/models";
import { ForLoops } from "@forkfacts/helpers";

const FilterAge: React.FC<AgeItemsProps> = ({ ageItems, onSelectAgeItem }) => {
  const theme = useTheme();
  const [selectedAgeIndex, setSelectedAgeIndex] = useState<number | null>(2);
  const [selectedItem, setSelectedItem] = useState("");
  const [open, setOpen] = useState(false);

  const handleSelectAge = (item: ageItem, index: number) => {
    const age = `${item.start + "-" + item.end} ${item.unit}`;
    setSelectedAgeIndex(index);
    onSelectAgeItem(item);
    setSelectedItem(age);
  };

  const onClearSelectedItem = () => {
    setSelectedAgeIndex(null);
    onSelectAgeItem("");
    setSelectedItem("");
    setOpen(false);
  };

  return (
    <Box sx={{ position: "relative" }}>
      <Button
        variant={selectedItem ? "text" : "outlined"}
        onClick={() => setOpen(!open)}
        sx={{
          color: theme.palette.grey[900],
          backgroundColor: selectedItem
            ? theme.palette.primary.light
            : theme.palette.background.default,
          borderColor: selectedItem ? theme.palette.primary.main : theme.palette.grey[700],
          fontSize: theme.typography.caption.fontSize,
          fontWeight: theme.typography.fontWeightBold,
          lineHeight: theme.spacing(2),
          letterSpacing: theme.spacing(0.05),
          textTransform: "capitalize",
          whiteSpace: "nowrap",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography>{selectedItem ? selectedItem : "Age"}</Typography>
        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
      </Button>
      {open && (
        <Box
          component="div"
          sx={{
            position: "absolute",
            display: "block",
            width: 300,
            mt: theme.spacing(1.1),
            py: theme.spacing(2),
            px: theme.spacing(1),
            zIndex: theme.zIndex.modal,
            backgroundColor: theme.palette.common.white,
          }}
          boxShadow={1}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
              alignItems: "center",
              mt: theme.spacing(3),
            }}
          >
            <Typography
              variant="caption"
              sx={{
                color: theme.palette.grey[600],
                fontWeight: theme.typography.fontWeightMedium,
                lineHeight: theme.spacing(2),
                letterSpacing: theme.spacing(0.05),
                textTransform: "uppercase",
              }}
            >
              LIFE STAGE
            </Typography>
            <CloseIcon
              sx={{ width: theme.spacing(2), height: theme.spacing(2), cursor: "pointer" }}
              onClick={() => setOpen(false)}
            />
          </Box>
          <Box
            component="div"
            sx={{
              width: "100%",
              display: "block",
              marginTop: theme.spacing(1.7),
            }}
          >
            <ForLoops each={ageItems}>
              {(item, index) => (
                <Box
                  key={index}
                  sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center",
                  }}
                  onClick={() => handleSelectAge(item, index)}
                >
                  <Checkbox
                    icon={<RadioButtonUncheckedIcon />}
                    checkedIcon={<RadioButtonCheckedIcon />}
                    checked={selectedAgeIndex === index ? true : false}
                  />
                  <Typography variant="body1">
                    {item.start + "-" + item.end} {item.unit}
                  </Typography>
                </Box>
              )}
            </ForLoops>
          </Box>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
              my: theme.spacing(2),
            }}
          >
            <Typography
              sx={{ fontWeight: theme.typography.fontWeightRegular, cursor: "pointer" }}
              onClick={onClearSelectedItem}
            >
              Clear selection
            </Typography>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default FilterAge;
