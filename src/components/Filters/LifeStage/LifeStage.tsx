import React, { useEffect, useRef, useState } from "react";
import { Box, Button, Typography, useMediaQuery, useTheme } from "@mui/material";
import { lifeStageItem, LifeStageProps } from "@forkfacts/models";
import CloseIcon from "@mui/icons-material/Close";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import { LifeStageItem } from "@forkfacts/components";
import { withDropdown, withoutDropdown } from "./lifeStageStyles";
import DoneIcon from "@mui/icons-material/Done";

const LifeStage: React.FC<LifeStageProps> = ({
  lifeStageItems,
  onSelectLifeStageItem,
  isDropdown,
}) => {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("md"));
  const [selectedItem, setSelectedItem] = useState<string>("Children");
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const handleSelectedItem = (name: string, index: number) => {
    setSelectedItem(name);
  };

  const onClearSelectedItem = () => {
    setSelectedItem("");
    onSelectLifeStageItem("");
    setOpen(false);
  };

  useEffect(() => {
    onSelectLifeStageItem(selectedItem);
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
            {selectedItem ? selectedItem : "Life stage"}
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
          sx={isDropdown ? withoutDropdown(theme, mobile) : withDropdown(theme)}
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
              }}
            >
              LIFE STAGE
            </Typography>
            {isDropdown && (
              <CloseIcon
                sx={{
                  width: theme.spacing(2),
                  height: theme.spacing(2),
                  cursor: "pointer",
                  color: theme.palette.customGray.main,
                }}
                onClick={() => setOpen(false)}
              />
            )}
          </Box>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexWrap: "wrap",
              mt: theme.spacing(2.7),
            }}
          >
            {lifeStageItems.map((item: lifeStageItem, index) => (
              <LifeStageItem
                index={index}
                key={index}
                selectedItem={selectedItem}
                handleSelectedItem={handleSelectedItem}
                item={item}
              />
            ))}
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default LifeStage;
