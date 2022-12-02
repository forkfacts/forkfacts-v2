import React from "react";
import { Button } from "@mui/material";
import { SearchCategoryProps } from "@forkfacts/models";
import { useStyles } from "./styles";

export default function SearchCategory({
  index,
  label,
  Icon,
  onSelectCategory,
  setSelectedIndex,
  selectedIndex,
}: SearchCategoryProps) {
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
          selectedIndex === index ? palette.primary.main : palette.grey[700],
        borderColor: ({ palette }) =>
          selectedIndex === index ? palette.primary.main : palette.grey[700],
      }}
      onClick={handleClick}
      size="small"
      startIcon={
        <Icon
          fontSize={"medium"}
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
