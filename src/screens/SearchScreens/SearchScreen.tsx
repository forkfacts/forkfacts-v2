import * as React from "react";
import { Box, TextField, AppBar, Toolbar, Typography, Theme } from "@mui/material";
import { SearchOutlined } from "@mui/icons-material";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { makeStyles } from "@mui/styles";
import InputAdornment from "@mui/material/InputAdornment";

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
  infoPage: {
    display: "grid",
    alignItems: "center",
    width: "100%",
    [theme.breakpoints.down("sm")]: {
      placeItem: "center",
      height: "100vh",
    },
  },
  infoPageWrraper: {
    [theme.breakpoints.down("sm")]: {
      marginTop: "-4em",
    },
  },
  mobilePageText: {
    color: theme.palette.customBlack?.main,
    lineHeight: "32px",
    textAlign: "center",
    fontSize: theme.typography.customFontSize.md.fontSize,
    fontWeight: 600,
    verticalAlign: "center",
  },
}));

export default function SearchScreen() {
  const styles = useStyles();
  return (
    <Box className={styles.root}>
      <AppBar color="transparent" sx={{ boxShadow: "none" }}>
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
      <Box className={styles.infoPage}>
        <Box className={styles.infoPageWrraper}>
          <Box sx={{ width: "100%", mb: "30px" }}>
            <Typography component="h2" className={styles.mobilePageText}>
              Forkfacts, Your Healthy diet search place.
            </Typography>
          </Box>
          <Box sx={{ width: "100%" }}>
            <TextField
              size="small"
              placeholder="Search"
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchOutlined />
                  </InputAdornment>
                ),
              }}
              sx={{
                "& fieldset": {
                  paddingLeft: (theme) => theme.spacing(2.5),
                  borderRadius: "10px",
                  width: "100%",
                },
              }}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
