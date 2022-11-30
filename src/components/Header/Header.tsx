import React from "react";
import { Box, AppBar, Toolbar, Typography, Theme, IconButton } from "@mui/material";
import { makeStyles } from "@mui/styles";
import MenuIcon from "@mui/icons-material/Menu";

const useStyles = makeStyles(({ spacing, breakpoints }: Theme) => ({
  root: {
    width: "100%",
    flexGrow: 1,
  },
  infoPage: {
    display: "block",
    width: "100%",
    [breakpoints.down("sm")]: {
      marginTop: spacing(20),
    },
  },
  infoPageWrraper: {
    [breakpoints.down("sm")]: {
      marginTop: spacing(4.5),
    },
  },
  spaceBottom: {
    [breakpoints.down("sm")]: {
      marginBottom: spacing(7),
    },
  },
}));

export default function Header() {
  return (
    <Box>
      <AppBar color="transparent" sx={{ boxShadow: "none" }}>
        <Toolbar>
          <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 0.5 }}>
            <MenuIcon color="primary" />
          </IconButton>
          <Typography variant="h5" color="primary">
            Forkfacts
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
