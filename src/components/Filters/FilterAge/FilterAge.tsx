import React, { useEffect, useRef, useState } from "react";
import Checkbox from "@mui/material/Checkbox";
import { Box, Button, Typography, useTheme } from "@mui/material";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import CloseIcon from "@mui/icons-material/Close";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import { AgeItemsProps, ageItem } from "@forkfacts/models";
import { ForLoops } from "@forkfacts/helpers";
import { withDropdown, withoutDropdown } from "./filterAgeStyles";

const FilterAge: React.FC<AgeItemsProps> = ({ ageItems, onSelectAgeItem, isDropdown }) => {
  const theme = useTheme();
  const [selectedAgeIndex, setSelectedAgeIndex] = useState<number | null>(2);
  const [selectedItem, setSelectedItem] = useState("");
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const handleSelectAge = (item: ageItem, index: number) => {
    const age = `${item.start + "-" + item.end} ${item.unit}`;
    setSelectedAgeIndex(index);
    setSelectedItem(age);
  };

  const onClearSelectedItem = () => {
    setSelectedAgeIndex(null);
    onSelectAgeItem("");
    setSelectedItem("");
    setOpen(false);
  };

  useEffect(() => {
    onSelectAgeItem(selectedItem);
  }, [selectedItem]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);

  return (
    <Box sx={{ position: "relative" }} ref={ref}>
      {isDropdown && (
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
      )}
      {(open || !isDropdown) && (
        <Box
          component="div"
          sx={isDropdown ? withoutDropdown(theme) : withDropdown(theme)}
          boxShadow={isDropdown ? 1 : 0}
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
            {isDropdown && (
              <CloseIcon
                sx={{ width: theme.spacing(2), height: theme.spacing(2), cursor: "pointer" }}
                onClick={() => setOpen(false)}
              />
            )}
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
