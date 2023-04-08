import { Box, Typography } from "@mui/material";
import React from "react";
import { menuItems } from "../RealData/realData";
import { ToolsScreen } from "@forkfacts/screens";

const ToolsPage = () => {
  return (
    <Box>
      <ToolsScreen menuItems={menuItems} />
    </Box>
  );
};

export default ToolsPage;
