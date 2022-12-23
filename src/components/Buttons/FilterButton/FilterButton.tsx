import React, { useState } from "react";
import Button from "@mui/material/Button";
import TuneIcon from "@mui/icons-material/Tune";
import { blue } from "@mui/material/colors";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { Typography, useTheme } from "@mui/material";

interface FilterButtonProps {
  name: string;
  onSelectItem: (item: string, index: number) => void;
  index: number;
  selectedItemArrays: string[];
}

const FilterButton: React.FC<FilterButtonProps> = ({
  name,
  onSelectItem,
  index,
  selectedItemArrays,
}) => {
  const theme = useTheme();
  const [selectedName, setSelectedName] = useState<string>();

  const onSelectButtonItem = () => {
    onSelectItem(name, index);
    setSelectedName(name);
    if (selectedName === name) {
      setSelectedName("");
    }
  };

  return (
    <Button
      variant={name == selectedName ? "text" : "outlined"}
      onClick={onSelectButtonItem}
      sx={{
        color: theme.palette.grey[700],
        fontSize: theme.typography.caption.fontSize,
        fontWeight: theme.typography.fontWeightBold,
        lineHeight: theme.spacing(2),
        letterSpacing: theme.spacing(0.05),
        textTransform: "capitalize",
        whiteSpace: "nowrap",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderColor: name == selectedName ? theme.palette.primary.dark : theme.palette.grey[700],
        backgroundColor: name == selectedName ? blue["50"] : theme.palette.background.default,
      }}
    >
      {index === 0 && (
        <TuneIcon
          sx={{
            width: theme.spacing(2.9),
            height: theme.spacing(2.9),
          }}
        />
      )}
      {index === 0 ? (
        selectedItemArrays.length === 0 ? (
          "All filters"
        ) : (
          <Typography variant="subtitle2" sx={{ ml: theme.spacing(1) }}>
            {selectedItemArrays.length}
          </Typography>
        )
      ) : (
        name
      )}
      {index > 0 && (
        <ArrowDropDownIcon
          sx={{
            width: theme.spacing(2.9),
            height: theme.spacing(2.9),
          }}
        />
      )}
    </Button>
  );
};

export default FilterButton;
