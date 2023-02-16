import React from "react";
import { Button, Typography, useMediaQuery, useTheme } from "@mui/material";
import { DetailsPageTabItemProps, NavBarItemProps } from "@forkfacts/models";
import { useStyles } from "../detailsPageTabItemStyles";

export default function DetailsPageTabItem({
  index,
  item,
  setSelectedIndex,
  selectedIndex,
  onSelectDetailsPageTabItem,
}: DetailsPageTabItemProps) {
  const classes = useStyles();
  const { spacing, palette, typography, breakpoints } = useTheme();
  const mobile = useMediaQuery(breakpoints.down("md"));

  const handleClick = () => {
    setSelectedIndex(index);
    onSelectDetailsPageTabItem(item.label);
  };

  return (
    <Button
      className={classes.btn}
      variant="text"
      sx={{
        color: ({ palette }) =>
          selectedIndex === index ? palette.primary.main : palette.customGray.main,
        backgroundColor: ({ palette }) =>
          selectedIndex === index ? palette.primary.light : palette.background.default,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        paddingLeft: spacing(3),
        paddingRight: spacing(3),
        border: `1px solid ${palette.customGray.light}`,
        borderTopRightRadius: index === 4 ? spacing(1) : 0,
        borderBottomRightRadius: index === 4 ? spacing(1) : 0,
        borderTopLeftRadius: index === 0 ? spacing(1) : 0,
        borderBottomLeftRadius: index === 0 ? spacing(1) : 0,
        fontWeight: typography.fontWeightBold,
        width: mobile ? "auto" : spacing(29.2),
        height: spacing(5),
        flexShrink: 0,
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
          }}
        />
      }
    >
      <Typography variant="body1">{item.label}</Typography>
    </Button>
  );
}
