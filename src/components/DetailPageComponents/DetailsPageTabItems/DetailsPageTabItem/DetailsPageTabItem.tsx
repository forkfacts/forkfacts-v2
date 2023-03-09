import React from "react";
import { Button, Typography, useMediaQuery, useTheme } from "@mui/material";
import { DetailsPageTabItemProps } from "@forkfacts/models";
import { useStyles } from "../detailsPageTabItemStyles";

export default function DetailsPageTabItem({
  index,
  item,
  setSelectedIndex,
  selectedIndex,
  onSelectDetailsPageTabItem,
}: DetailsPageTabItemProps) {
  const classes = useStyles();
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("md"));
  const desktop = useMediaQuery(theme.breakpoints.up("md"));
  const handleClick = () => {
    setSelectedIndex(index);
    onSelectDetailsPageTabItem(item.label);
  };

  return (
    <Button
      variant="text"
      sx={{
        color: ({ palette }) =>
          selectedIndex === index ? palette.primary.main : palette.customGray.main,
        backgroundColor: ({ palette }) =>
          selectedIndex === index ? palette.primary.light : palette.background.default,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        paddingLeft: theme.spacing(3),
        paddingRight: theme.spacing(3),
        border: `1px solid ${theme.palette.customGray.light}`,
        borderTopRightRadius: index === 4 ? theme.spacing(1) : 0,
        borderBottomRightRadius: index === 4 ? theme.spacing(1) : 0,
        borderTopLeftRadius: index === 0 ? theme.spacing(1) : 0,
        borderBottomLeftRadius: index === 0 ? theme.spacing(1) : 0,
        width: mobile ? "auto" : theme.spacing(29.2),
        height: theme.spacing(5),
        flexShrink: 0,
      }}
      onClick={handleClick}
      size="small"
      startIcon={
        <item.Icon
          fontSize="medium"
          className={classes.icon}
          sx={{
            width: theme.spacing(1.9),
            height: theme.spacing(1.9),
          }}
        />
      }
    >
      <Typography
        variant={mobile ? "labelMedium" : "titleMedium"}
        sx={{
          color: ({ palette }) =>
            selectedIndex === index ? palette.primary.main : palette.customGray.main,
          fontWeight: theme.typography.fontWeightRegular,
        }}
      >
        {item.label}
      </Typography>
    </Button>
  );
}
