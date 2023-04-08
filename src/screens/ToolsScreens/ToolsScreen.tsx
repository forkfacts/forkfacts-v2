import { Box, Grid, Typography, useTheme } from "@mui/material";
import React from "react";
import { Layout } from "@forkfacts/components";
import { ToolsScreenProps } from "@forkfacts/models";
import { useStyles } from "./toolsScrenStyles";
import { Balance } from "@forkfacts/icons";
import { customTheme } from "../../themes/theme";

const ToolsScreen: React.FC<ToolsScreenProps> = ({ menuItems }) => {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <Layout menuItems={menuItems}>
      <Box className={classes.desktopScreenWrapper}>
        <Typography variant="headline4" sx={{ fontWeight: 400 }}>
          Tools
        </Typography>
        <Grid container sx={{ mt: theme.spacing(5) }}>
          <Grid item md={4} sm={12}>
            <Box>
              <Box
                sx={{
                  px: "8px",
                  py: "16px",
                  display: "flex",
                  border: " 1px solid #8582FF",
                  borderRadius: theme.spacing(1),
                  cursor: "pointer",
                }}
              >
                <Balance />
                <Box
                  sx={{ display: "flex", flexDirection: "column", justifyContent: "flex-start" }}
                >
                  <Typography
                    variant="titleMedium"
                    sx={{ fontWeight: 500, color: customTheme.palette.customGray.main }}
                  >
                    Recommended daily intake
                  </Typography>
                  <Typography
                    variant="labelSmall"
                    sx={{
                      mt: theme.spacing(1),
                      color: customTheme.palette.customGray.dark,
                      fontWeight: 500,
                    }}
                  >
                    Check the values you need to take per day for all nutrients
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Layout>
  );
};

export default ToolsScreen;
