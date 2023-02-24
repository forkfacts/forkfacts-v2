import React from "react";
import { Box, Button, Typography, useTheme } from "@mui/material";
import { SearchCategoryProps } from "@forkfacts/models";
import { useStyles } from "./searchCategoryStyles";

export default function SearchCategory({
  index,
  label,
  Icon,
  onSelectCategory,
  setSelectedIndex,
  selectedIndex,
}: SearchCategoryProps) {
  const classes = useStyles();
  const theme = useTheme();
  const item = {
    label,
    index,
    Icon,
  };
  const handleClick = () => {
    onSelectCategory(item.label);
    setSelectedIndex(index);
  };

  return (
    <Box
      className={classes.btn}
      sx={{
        color: selectedIndex === index ? theme.palette.primary.main : theme.palette.grey[700],
        borderBottom:
          selectedIndex === index
            ? `2px solid ${theme.palette.primary.main}`
            : theme.palette.grey[700],
        textTransform: "capitalize",
        borderTop: 0,
        borderLeft: 0,
        borderRight: 0,
        width: "132px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        pb: theme.spacing(1),
      }}
      onClick={handleClick}
    >
      <Icon
        fontSize="medium"
        className={classes.icon}
        sx={{
          width: ({ spacing }) => spacing(1.9),
          height: ({ spacing }) => spacing(1.9),
          mr: theme.spacing(1),
        }}
      />
      <Typography
        variant="titleSmall"
        sx={{
          color: theme.palette.customGray.main,
          fontWeight: theme.typography.fontWeightRegular,
        }}
      >
        {label}
      </Typography>
    </Box>
  );
}
