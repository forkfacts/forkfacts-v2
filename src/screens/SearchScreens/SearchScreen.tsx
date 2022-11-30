import * as React from "react";
import { Box, TextField, Typography, Theme } from "@mui/material";
import { SearchOutlined } from "@mui/icons-material";
import { makeStyles } from "@mui/styles";
import InputAdornment from "@mui/material/InputAdornment";
import styles from "./searchscreen.module.css";
import { Header } from "@forkfacts/components";

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

export default function SearchScreen() {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Header />
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
