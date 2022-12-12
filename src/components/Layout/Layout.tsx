import React, { FC, PropsWithChildren, useState } from "react";
import { ThemeProvider, Theme, Box, CssBaseline, useTheme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { customTheme } from "../../themes/theme";
import { Header, SideBarDrawer } from "@forkfacts/components";
import { LayoutProps } from "@forkfacts/models";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: theme.palette.background.default,
  },
  main: {
    backgroundColor: theme.palette.background.default,
  },
}));

const LayoutComponent: FC<PropsWithChildren> = ({ children }) => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Box className={classes.main}>{children}</Box>
    </Box>
  );
};

const Layout: FC<LayoutProps> = ({ children, drawerItems }) => {
  const theme = useTheme();
  const drawerWidth = theme.spacing(13.5);
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <ThemeProvider theme={customTheme}>
      <Box>
        <Header handleToggleButton={handleDrawerToggle} />
      </Box>
      <LayoutComponent>
        <Box sx={{ display: { sm: "flex", xs: "block" } }}>
          <CssBaseline />
          <SideBarDrawer
            handleDrawerToggle={handleDrawerToggle}
            mobileOpen={mobileOpen}
            drawerWidth={drawerWidth}
            drawerItems={drawerItems}
          />
          <Box
            sx={{
              width: {
                sm: `calc(100% - ${drawerWidth}px)`,
                xs: "100%",
              },
            }}
          >
            {children}
          </Box>
        </Box>
      </LayoutComponent>
    </ThemeProvider>
  );
};

export default Layout;
