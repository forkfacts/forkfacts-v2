import React from "react";
import { Button, Typography, useMediaQuery, useTheme } from "@mui/material";
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
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("md"));

  const handleClick = () => {
    setSelectedIndex(index);
    onselectNavbarItem(item.label);
  };

  return (
    <Button
      className={classes.btn}
      variant="text"
      sx={{
        color: selectedIndex === index ? theme.palette.primary.main : theme.palette.customGray.main,
        backgroundColor:
          selectedIndex === index ? theme.palette.primary.light : theme.palette.background.default,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        width: "100%",
        paddingTop: theme.spacing(1.25),
        paddingBottom: theme.spacing(1.25),
        paddingLeft: theme.spacing(3),
        paddingRight: theme.spacing(3),
        border: `1px solid ${theme.palette.customGray.light}`,
        borderTopRightRadius: index === 2 ? theme.spacing(1) : 0,
        borderBottomRightRadius: index === 2 ? theme.spacing(1) : 0,
        borderTopLeftRadius: index === 0 ? theme.spacing(1) : 0,
        borderBottomLeftRadius: index === 0 ? theme.spacing(1) : 0,
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
        variant={mobile ? "titleSmall" : "titleMedium"}
        sx={{
          textTransform: "capitalize",
          fontWeight: theme.typography.fontWeightRegular,
          color:
            selectedIndex === index ? theme.palette.primary.main : theme.palette.customGray.main,
        }}
      >
        {item.label}
      </Typography>
    </Button>
  );
}
