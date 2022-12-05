import * as React from "react";
import { Box, TextField, Typography } from "@mui/material";
import { SearchOutlined } from "@mui/icons-material";
import InputAdornment from "@mui/material/InputAdornment";
import { Layout } from "@forkfacts/components";
import { useStyles } from "./searchScreenStyles";

export default function SearchScreen() {
  const classes = useStyles();
  return (
    <Layout>
      <Box className={classes.root}>
        <Box>
          <Box className={classes.spaceBottom}>
            <Typography variant="subtitle1" className={classes.searchtitle}>
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
                  borderColor: "grey[100] !important",
                  "&:hover": {
                    borderColor: "grey[100] !important",
                    outlineColor: "grey[100] !important",
                  },
                },
                "&:focus fieldset": {
                  borderColor: "grey[100] !important",
                },
              }}
            />
          </Box>
        </Box>
      </Box>
    </Layout>
  );
}
