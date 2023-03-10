import React, { useEffect, useRef, useState } from "react";
import { Box, Button, Typography, useMediaQuery, useTheme } from "@mui/material";
import { LifeStageProps } from "@forkfacts/models";
import CloseIcon from "@mui/icons-material/Close";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import { LifeStageItem } from "@forkfacts/components";
import { withDropdown, withoutDropdown } from "./lifeStageStyles";

const LifeStage: React.FC<LifeStageProps> = ({
  lifeStageItems,
  onSelectLifeStageItem,
  isDropdown,
}) => {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("md"));
  const [selectedItem, setSelectedItem] = useState<string>("");
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
          <Typography sx={{ fontSize: theme.typography.labelMedium.fontSize }}>
            {selectedItem ? selectedItem : "Life stage"}
          </Typography>
          {open ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
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
              variant="labelSmall"
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
                sx={{ width: theme.spacing(2), height: theme.spacing(2), cursor: "pointer" }}
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
              mt: theme.spacing(1.5),
            }}
          >
            {lifeStageItems.map((item, index) => (
              <LifeStageItem
                index={index}
                key={index}
                selectedItem={selectedItem}
                handleSelectedItem={handleSelectedItem}
                item={item}
              />
            ))}
          </Box>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
              my: theme.spacing(1),
            }}
          >
            <Typography
              variant="labelMedium"
              sx={{
                color: theme.palette.customGray.textDark,
                fontWeight: theme.typography.fontWeightRegular,
                cursor: "pointer",
              }}
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

export default LifeStage;
