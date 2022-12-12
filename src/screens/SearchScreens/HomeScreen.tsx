import React, { CSSProperties, useState, useEffect } from "react";
import { Box, TextField, Typography, useTheme } from "@mui/material";
import { SearchOutlined } from "@mui/icons-material";
import InputAdornment from "@mui/material/InputAdornment";
import { Layout } from "@forkfacts/components";
import { HomeScreenProps } from "@forkfacts/models";

import { useStyles } from "./searchScreenStyles";

export default function HomeScreen({ sidebarItems, onSelectItem }: HomeScreenProps) {
  const theme = useTheme();
  const [appBarHeight, setAppBarHeight] = useState<CSSProperties>();
  useEffect(() => {
    setAppBarHeight(theme.mixins.toolbar);
  }, [theme.mixins.toolbar]);
  const classes = useStyles(appBarHeight?.minHeight);

  return (
    <Layout sidebarItems={sidebarItems} onSelectItem={onSelectItem}>
      <Box className={classes.root}>
        <Box>
          <Box className={classes.spaceBottom}>
            <Typography variant="h5" className={classes.searchTitle}>
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
