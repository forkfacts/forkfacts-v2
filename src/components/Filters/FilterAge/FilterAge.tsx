import React, { useEffect, useRef, useState } from "react";
import Checkbox from "@mui/material/Checkbox";
import { Box, Button, Typography, useMediaQuery, useTheme } from "@mui/material";
import DoneIcon from "@mui/icons-material/Done";
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
  const ref = useRef<HTMLDivElement>(null);
  const [selectedAgeIndex, setSelectedAgeIndex] = useState<number | null>(7);
  const [selectedItem, setSelectedItem] = useState("31-50 years");
  const [useSelectedAge, setSelectedUseAge] = useState<ageItem>({
    start: 31,
    end: 51,
    unit: "year",
  } as ageItem);
  const [open, setOpen] = useState(false);

  const handleSelectAge = (item: ageItem, index: number) => {
    let age = `${item.start + "-" + item.end} ${item.unit}`;
    let useAge;
    if (!item.start) {
      age = `>70 years`;
      useAge = {
        start: 0,
        end: item.end,
        unit: "year",
      };
    } else {
      age = `${item.start + "-" + item.end} ${item.unit}`;
      useAge = {
        start: item.start,
        end: item.end,
        unit: "year",
      };
    }
    setSelectedUseAge(useAge);
    setSelectedAgeIndex(index);
    setSelectedItem(age);
  };

  useEffect(() => {
    onSelectAgeItem(useSelectedAge);
  }, [selectedItem, useSelectedAge]);

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
    <Box sx={{ display: "block" }} ref={ref}>
      {isDropdown && (
        <Button
          variant={selectedItem ? "text" : "outlined"}
          onClick={() => setOpen(!open)}
          sx={{
            backgroundColor: selectedItem
              ? theme.palette.primary.light
              : theme.palette.background.default,
            borderColor: selectedItem ? theme.palette.primary.main : theme.palette.grey[700],

            whiteSpace: "nowrap",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: theme.spacing(1),
          }}
        >
          <Typography
            variant={mobile ? "labelMedium" : "labelLarge"}
            sx={{
              color: theme.palette.customGray.textDark,
              fontWeight: theme.typography.fontWeightRegular,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {selectedItem && (
              <DoneIcon
                sx={{
                  color: theme.palette.iconColors.main,
                  width: theme.spacing(2.25),
                  height: theme.spacing(2.25),
                  mr: theme.spacing(0.5),
                }}
              />
            )}
            {selectedItem ? selectedItem : "Age"}
          </Typography>
          {open ? (
            <ArrowDropUpIcon sx={{ color: theme.palette.iconColors.main }} />
          ) : (
            <ArrowDropDownIcon sx={{ color: theme.palette.iconColors.main }} />
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
                    {item.start || item.start === 0 ? (
                      <Typography
                        variant="bodyMedium"
                        sx={{
                          fontWeight: theme.typography.fontWeightLight,
                          color: theme.palette.customGray.textBlack,
                          cursor: "pointer",
                        }}
                      >
                        {item.start === undefined ? 0 : item.start + "-" + item.end} {item.unit}
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
                        <ChevronRightIcon
                          sx={{
                            width: theme.spacing(2),
                            height: theme.spacing(2),
                            ml: theme.spacing(2),
                          }}
                        />
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
