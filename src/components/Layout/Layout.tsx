import React, { FC, PropsWithChildren, useState, useEffect } from "react";
import { ThemeProvider, Theme, Box, CssBaseline, useTheme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { customTheme } from "../../themes/theme";
import { Header, SideBar } from "@forkfacts/components";
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

const Layout: FC<LayoutProps> = ({ children, sidebarItems, onSelectItem }) => {
  const theme = useTheme();
  const [drawerWidth, setDrawerWidth] = useState(theme.spacing(12.25));
  const [drawerWidthExpanded, setDrawerWidthExpanded] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
    if (!mobileOpen) {
      setDrawerWidth(theme.spacing(28.25));
      setDrawerWidthExpanded(true);
    } else {
      setDrawerWidth(theme.spacing(16.5));
      setDrawerWidthExpanded(false);
    }
  };

  return (
    <ThemeProvider theme={customTheme}>
      <Box>
        <Header handleToggleButton={handleDrawerToggle} />
      </Box>
      <LayoutComponent>
        <Box sx={{ display: { sm: "flex", xs: "block" } }}>
          <CssBaseline />
          <SideBar
            handleDrawerToggle={handleDrawerToggle}
            mobileOpen={mobileOpen}
            drawerWidth={drawerWidth}
            sidebarItems={sidebarItems}
            drawerWidthExpanded={drawerWidthExpanded}
            onSelectItem={onSelectItem}
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
