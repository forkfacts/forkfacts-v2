import React from "react";
import { Button } from "@mui/material";
import { blue } from "@mui/material/colors";
import { MobileSearchCategoryProps } from "@forkfacts/models";
import { useStyles } from "./mobilesearchCategoryStyles";

export default function MobileSearchCategory({
  index,
  label,
  Icon,
  onSelectCategory,
  setSelectedIndex,
  selectedIndex,
}: MobileSearchCategoryProps) {
  const classes = useStyles();
  const item = {
    label,
    index,
    Icon,
  };
  const handleClick = () => {
    onSelectCategory(item);
    setSelectedIndex(index);
  };

  return (
    <Button
      className={classes.btn}
      variant="outlined"
      sx={{
        color: ({ palette }) =>
          selectedIndex === index ? palette.primary.dark : palette.grey[700],
        borderColor: ({ palette }) =>
          selectedIndex === index ? palette.primary.dark : palette.grey[700],
        backgroundColor: ({ palette }) =>
          selectedIndex === index ? blue["50"] : palette.background.default,
        textTransform: "capitalize",
      }}
      onClick={handleClick}
      size="small"
      startIcon={
        <Icon
          fontSize="medium"
          className={classes.icon}
          sx={{
            width: ({ spacing }) => spacing(1.9),
            height: ({ spacing }) => spacing(1.9),
          }}
        />
      }
    >
      {label}
    </Button>
  );
}
