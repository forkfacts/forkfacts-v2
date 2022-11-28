import * as React from "react";
import { Box, TextField, AppBar, Toolbar, Typography, Theme } from "@mui/material";
import { SearchOutlined } from "@mui/icons-material";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { makeStyles } from "@mui/styles";
import InputAdornment from "@mui/material/InputAdornment";

import styles from "./searchscreen.module.css";

const useStyles = makeStyles(({ spacing, typography, breakpoints }: Theme) => ({
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
      marginBottom: spacing(4.5),
    },
  },
}));

export default function SearchScreen() {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <AppBar color="transparent" sx={{ boxShadow: "none" }}>
        <Toolbar>
          <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 0.5 }}>
            <MenuIcon color="primary" />
          </IconButton>
          <Typography variant="h6" color="primary">
            Forkfacts
          </Typography>
        </Toolbar>
      </AppBar>
      {/* content */}
      <Box className={classes.infoPage}>
        <Box className={classes.infoPageWrraper}>
          <Box className={classes.spaceBottom}>
            <Typography className={styles.introText} color="common.black">
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
                  borderRadius: (theme) => theme.spacing(1.25),
                  width: "100%",
                  borderColor: "grey !important",
                },
              }}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
