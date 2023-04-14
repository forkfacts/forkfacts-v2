import * as React from "react";
import { PageProps } from "gatsby";
import { HomeScreen } from "@forkfacts/screens";
import { categoryOptions, navbarItems, menuItems } from "../RealData/realData";
import { Box } from "@mui/material";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Box sx={{ p: "8px" }}>
      <HomeScreen
        sidebarItems={menuItems}
        navbarItems={navbarItems}
        categoryOptions={categoryOptions}
        sourceId="forkfact-v2"
      />
    </Box>
  );
};

export default IndexPage;
