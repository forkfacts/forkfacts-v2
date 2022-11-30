import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { useStyles } from "./headerStyles";

export default function ButtonAppBar() {
  const styles = useStyles();
  return (
    <Box>
      <AppBar position="fixed" color="transparent" sx={{ boxShadow: "none" }}>
        <Toolbar sx={{ position: "relative" }}>
          <IconButton size="large" edge="start" color="primary" aria-label="menu" sx={{ mr: 0.5 }}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h5" color="primary">
            Forkfacts
          </Typography>
          <Box className={styles.rightContent}>
            <Button color="inherit" variant="contained" sx={{ shadow: 0 }}>
              Sign in
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
