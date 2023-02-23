import React, { FC, PropsWithChildren, useState } from "react";
import { Box, CssBaseline, useTheme } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { customTheme } from "../../themes/theme";
import { Header, SideBar } from "@forkfacts/components";
import { LayoutProps } from "@forkfacts/models";


const Layout: FC<LayoutProps> = ({ children, sidebarItems }) => {
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
                                                                                    <Box sx={{ display: { sm: "flex", xs: "block" } }}>
                                                                                            <CssBaseline />
                                                                                                    <SideBar
                                                                                                              handleDrawerToggle={handleDrawerToggle}
                                                                                                                        mobileOpen={mobileOpen}
                                                                                                                                  drawerWidth={drawerWidth}
                                                                                                                                            sidebarItems={sidebarItems}
                                                                                                                                                      drawerWidthExpanded={drawerWidthExpanded}
                                                                                                                                                              />
                                                                                                                                                                      <Box
                                                                                                                                                                                sx={{
                                                                                                                                                                                            width: {
                                                                                                                                                                                                          md: `calc(100% - ${drawerWidth}px)`,
                                                                                                                                                                                                                        xs: "100%",
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
