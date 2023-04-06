import React, { FC, useEffect, useState } from "react";
import { Box, CssBaseline, useTheme } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { customTheme } from "../../themes/theme";
import { Header, SideBar } from "@forkfacts/components";
import { LayoutProps } from "@forkfacts/models";
import "@fontsource/poppins";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";

const Layout: FC<LayoutProps> = ({ children, menuItems }) => {
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

  useEffect(() => {
    if (!drawerWidthExpanded) {
      setDrawerWidth(theme.spacing(12.5));
    }
  }, [drawerWidthExpanded]);

  return (
    <ThemeProvider theme={customTheme}>
      <CssBaseline />
      <Header handleToggleButton={handleDrawerToggle} />
      <Box sx={{ display: { sm: "flex", xs: "block" }, overflow: "hidden", width: "100%" }}>
        <SideBar
          handleDrawerToggle={handleDrawerToggle}
          mobileOpen={mobileOpen}
          drawerWidth={drawerWidth}
          sidebarItems={menuItems}
          drawerWidthExpanded={drawerWidthExpanded}
        />
        <Box
          sx={{
            width: {
              sm: `calc(100% - ${Number(drawerWidth.split("px")[0])}px)`,
              xs: "100%",
            },
            marginLeft: {
              sm: `${drawerWidth}px`,
              xs: 0,
            },
          }}
        >
          {children}
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default Layout;
