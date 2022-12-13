import React from "react";
import { Button, Typography } from "@mui/material";
import { blue } from "@mui/material/colors";
import { SearchCategoryProps } from "@forkfacts/models";
import { useStyles } from "./searchCategoryStyles";

export default function SearchCategory({
  index,
  label,
  Icon,
  onSelectCategory,
  setSelectedIndex,
  selectedIndex,
  as = "category",
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
      variant={as === "navCategory" ? "text" : "outlined"}
      sx={{
        color: ({ palette }) =>
          selectedIndex === index ? palette.primary.dark : palette.grey[700],
        borderColor: ({ palette }) =>
          selectedIndex === index && as !== "navCategory"
            ? palette.primary.dark
            : palette.grey[700],
        backgroundColor: ({ palette }) =>
          selectedIndex === index && as !== "navCategory" ? blue["50"] : palette.background.default,
        display: "flex",
        flexDirection: as === "navCategory" ? "column" : "row",
        alignItems: "center",
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
            marginBottom: ({ spacing }) => (as === "navCategory" ? spacing(1.25) : spacing(0)),
          }}
        />
      }
    >
      <Typography variant="body1">{label}</Typography>
    </Button>
  );
}
