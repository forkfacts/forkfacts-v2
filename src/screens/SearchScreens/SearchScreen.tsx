import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: "100%",
    flexGrow: 1,
  },
  pageTitle: {
    flexGrow: 1,
    color: theme.palette.customGreen?.main,
    fontSize: theme.typography.customFontSize.md.fontSize,
    fontWeight: theme.typography.fontWeightMedium,
  },
  icon: {
    fontWeight: theme.typography.fontWeightBold,
    color: theme.palette.customGreen?.main,
  },
}));

export default function SearchScreen() {
  const styles = useStyles();
  return (
    <Box className={styles.root}>
      <AppBar color="transparent" sx={{ border: 0, boxShadow: "none" }}>
        <Toolbar>
          <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 1 }}>
            <MenuIcon className={styles.icon} />
          </IconButton>
          <Typography variant="h1" className={styles.pageTitle}>
            Forkfacts
          </Typography>
        </Toolbar>
      </AppBar>
      {/* content */}
      <Box>
        <Box>
          <Typography></Typography>
        </Box>
      </Box>
    </Box>
  );
}
