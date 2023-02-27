import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import classnames from "classnames";
import MenuIcon from "@mui/icons-material/Menu";
import { useStyles } from "./headerStyles";
import { useMediaQuery, useTheme } from "@mui/material";

interface HeaderProps {
  handleToggleButton: () => void;
}

export default function Header({ handleToggleButton }: HeaderProps) {
  const classes = useStyles();
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Box>
      <AppBar
        position="fixed"
        sx={{
          boxShadow: "none",
          zIndex: (theme) => theme.zIndex.drawer + 1,
          backgroundColor: ({ palette }) => palette.common.white,
          paddingY: mobile ? theme.spacing(2) : theme.spacing(1),
          paddingX: theme.spacing(1),
        }}
      >
        <Toolbar sx={{ position: "relative" }}>
          <IconButton
            size="large"
            edge="start"
            aria-label="menu"
            sx={{ mr: 0.5 }}
            onClick={handleToggleButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            color="primary"
            variant={mobile ? "displayMedium" : "displayLarge"}
            className={classes.pageTitle}
          >
            Forkfacts
          </Typography>
          <Box className={classes.rightContent}>
            <Button
              size={mobile ? "medium" : "large"}
              color="primary"
              variant="contained"
              sx={{ py: theme.spacing(1), px: theme.spacing(3), borderRadius: theme.spacing(1.25) }}
            >
              Sign in
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
