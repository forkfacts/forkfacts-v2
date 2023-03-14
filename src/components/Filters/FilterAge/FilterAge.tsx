import React, { useEffect, useState } from "react";
import Checkbox from "@mui/material/Checkbox";
import { Box, Button, Typography, useMediaQuery, useTheme } from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import CloseIcon from "@mui/icons-material/Close";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import { AgeItemsProps, ageItem } from "@forkfacts/models";
import { ForLoops } from "@forkfacts/helpers";
import { withDropdown, withoutDropdown } from "./filterAgeStyles";

const FilterAge: React.FC<AgeItemsProps> = ({
  ageItems,
  onSelectAgeItem,
  isDropdown,
  margin = 0,
}) => {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("md"));
  const [selectedAgeIndex, setSelectedAgeIndex] = useState<number | null>(2);
  const [selectedItem, setSelectedItem] = useState("19 -30 Years");
  const [open, setOpen] = useState(false);

  const handleSelectAge = (item: ageItem, index: number) => {
    let age = `${item.start + "-" + item.end} ${item.unit}`;
    if (!item.start) {
      age = `${item.end} ${item.unit}`;
    } else {
      age = `${item.start + "-" + item.end} ${item.unit}`;
    }
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

  console.log("selectedItem", selectedItem);

  return (
    <Box sx={{ position: "relative" }}>
      {isDropdown && (
        <Button
          variant={selectedItem ? "text" : "outlined"}
          onClick={() => setOpen(!open)}
          sx={{
            backgroundColor: selectedItem
              ? theme.palette.primary.light
              : theme.palette.background.default,
            borderColor: selectedItem ? theme.palette.primary.main : theme.palette.grey[700],
            textTransform: "capitalize",
            whiteSpace: "nowrap",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: theme.spacing(1),
          }}
        >
          <Typography
            variant="labelLarge"
            sx={{
              color: theme.palette.customGray.textDark,
              fontWeight: theme.typography.fontWeightRegular,
            }}
          >
            {selectedItem ? selectedItem : "Age"}
          </Typography>
          {open ? (
            <ArrowDropUpIcon sx={{ color: theme.palette.customGray.main }} />
          ) : (
            <ArrowDropDownIcon sx={{ color: theme.palette.customGray.main }} />
          )}
        </Button>
      )}
      {(open || !isDropdown) && (
        <Box
          component="div"
          sx={isDropdown ? withDropdown(theme, { mobile, margin }) : withoutDropdown(theme)}
          boxShadow={isDropdown ? 1 : 0}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
              alignItems: "center",
            }}
          >
            <Typography
              variant="labelMedium"
              sx={{
                color: theme.palette.customGray.textDark,
                fontWeight: theme.typography.fontWeightRegular,
                textTransform: "uppercase",
                ml: theme.spacing(1.5),
              }}
            >
              AGE
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
              mt: theme.spacing(1),
            }}
          >
            <ForLoops each={ageItems}>
              {(item, index) => {
                return (
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
                    {item.start ? (
                      <Typography
                        variant="bodyMedium"
                        sx={{
                          fontWeight: theme.typography.fontWeightLight,
                          color: theme.palette.customGray.textBlack,
                        }}
                      >
                        {item.start + "-" + item.end} {item.unit}
                      </Typography>
                    ) : (
                      <Typography
                        variant="bodyMedium"
                        sx={{
                          fontWeight: theme.typography.fontWeightLight,
                          color: theme.palette.customGray.textBlack,
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          ml: theme.spacing(-2.5),
                        }}
                      >
                        {item.end >= 70 && !item.start ? (
                          <ChevronRightIcon
                            sx={{
                              width: theme.spacing(2),
                              height: theme.spacing(2),
                              ml: theme.spacing(2),
                            }}
                          />
                        ) : null}
                        <Typography
                          variant="bodyMedium"
                          sx={{
                            fontWeight: theme.typography.fontWeightLight,
                            color: theme.palette.customGray.textBlack,
                          }}
                        >
                          {item.end} {item.unit}
                        </Typography>
                      </Typography>
                    )}
                  </Box>
                );
              }}
            </ForLoops>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default FilterAge;
