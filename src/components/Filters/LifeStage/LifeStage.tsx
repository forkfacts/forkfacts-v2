import React, { useEffect, useState } from "react";
import { Box, Button, Typography, useTheme } from "@mui/material";
import { LifeStageProps } from "@forkfacts/models";
import CloseIcon from "@mui/icons-material/Close";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { LifeStageItem } from "@forkfacts/components";

const LifeStage: React.FC<LifeStageProps> = ({ lifeStageItems, onSelectLifeStageItem }) => {
  const theme = useTheme();
  const [selectedItem, setSelectedItem] = useState<string>("");
  const [open, setOpen] = useState(false);

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
        <Typography> {selectedItem ? selectedItem : "Life stage"}</Typography>
        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
      </Button>
      {open && (
        <Box
          component="div"
          sx={{
            position: "absolute",
            display: "block",
            width: 300,
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
            sx={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexWrap: "wrap",
              mt: theme.spacing(3),
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

export default LifeStage;
