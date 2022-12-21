import React from "react";
import { Button, Typography, useTheme } from "@mui/material";
import { blue } from "@mui/material/colors";
import { navigate } from "gatsby";
import { NavBarItemProps } from "@forkfacts/models";
import { useStyles } from "./navbarStyles";

export default function NavBarItem({
  index,
  item,
  setSelectedIndex,
  selectedIndex,
}: NavBarItemProps) {
  const classes = useStyles();
  const { spacing } = useTheme();

  const handleClick = () => {
    setSelectedIndex(index);
    navigate(item.link);
  };

  return (
    <Button
      className={classes.btn}
      variant="text"
      sx={{
        color: ({ palette }) =>
          selectedIndex === index ? palette.primary.dark : palette.grey[700],
        borderColor: ({ palette }) =>
          selectedIndex === index ? palette.primary.dark : palette.grey[700],
        backgroundColor: ({ palette }) =>
          selectedIndex === index ? blue["50"] : palette.background.default,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
      onClick={handleClick}
      size="small"
      startIcon={
        <item.Icon
          fontSize="medium"
          className={classes.icon}
          sx={{
            width: spacing(1.9),
            height: spacing(1.9),
            marginBottom: spacing(1.25),
          }}
        />
      }
    >
      <Typography variant="body1" sx={{ textTransform: "capitalize" }}>
        {item.label}
      </Typography>
    </Button>
  );
}
