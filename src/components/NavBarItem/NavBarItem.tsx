import React from "react";
import { Button, Typography, useTheme } from "@mui/material";
import { NavBarItemProps } from "@forkfacts/models";
import { useStyles } from "./navbarStyles";

export default function NavBarItem({
  index,
  item,
  setSelectedIndex,
  selectedIndex,
  onselectNavbarItem,
}: NavBarItemProps) {
  const classes = useStyles();
  const { spacing, palette, typography } = useTheme();

  const handleClick = () => {
    setSelectedIndex(index);
    onselectNavbarItem(item.label);
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
        width: "100%",
        paddingTop: spacing(1.25),
        paddingBottom: spacing(1.25),
        paddingLeft: spacing(3),
        paddingRight: spacing(3),
        border: `1px solid ${palette.customGray.light}`,
        borderTopRightRadius: index === 2 ? spacing(1) : 0,
        borderBottomRightRadius: index === 2 ? spacing(1) : 0,
        borderTopLeftRadius: index === 0 ? spacing(1) : 0,
        borderBottomLeftRadius: index === 0 ? spacing(1) : 0,
        fontWeight: typography.fontWeightBold,
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
      <Typography variant="body1" sx={{ textTransform: "capitalize" }}>
        {item.label}
      </Typography>
    </Button>
  );
}
