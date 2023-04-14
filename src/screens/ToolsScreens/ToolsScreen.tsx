import { Box, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import { Layout } from "@forkfacts/components";
import { ToolsScreenProps } from "@forkfacts/models";
import { useStyles } from "./toolsScrenStyles";
import { Balance } from "@forkfacts/icons";
import { customTheme } from "../../themes/theme";
import { navigate } from "gatsby";

const ToolsScreen: React.FC<ToolsScreenProps> = ({ menuItems }) => {
  const classes = useStyles();
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("md"));
  const onRoute = () => {
    navigate("/tools/recommended-daily-intake");
  };

  return (
    <Layout menuItems={menuItems}>
      <Box className={classes.desktopScreenWrapper}>
        <Box sx={{ p: mobile ? theme.spacing(2) : 0 }}>
          <Typography
            variant={mobile ? "headline6" : "headline4"}
            sx={{
              fontWeight: customTheme.typography.fontWeightLight,
              color: customTheme.palette.customGray.main,
            }}
          >
            Tools
          </Typography>
          <Grid container sx={{ mt: theme.spacing(3.5) }}>
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
                    columnGap: theme.spacing(3),
                    width: mobile ? "auto" : "456px",
                  }}
                  onClick={onRoute}
                >
                  <Balance />
                  <Box
                    sx={{ display: "flex", flexDirection: "column", justifyContent: "flex-start" }}
                  >
                    <Typography
                      variant={mobile ? "titleSmall" : "titleMedium"}
                      sx={{
                        fontWeight: customTheme.typography.fontWeightRegular,
                        color: customTheme.palette.customGray.main,
                      }}
                    >
                      Recommended daily intake
                    </Typography>
                    <Typography
                      variant="labelSmall"
                      sx={{
                        mt: theme.spacing(1),
                        color: customTheme.palette.customGray.dark,
                        fontWeight: customTheme.typography.fontWeightRegular,
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
      </Box>
    </Layout>
  );
};

export default ToolsScreen;
