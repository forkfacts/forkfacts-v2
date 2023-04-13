import { Box, Typography } from "@mui/material";
import React from "react";
import { menuItems } from "../../RealData/realData";
import { ToolsScreen } from "@forkfacts/screens";
import { SEO } from "@forkfacts/components";

interface Props {
  pageContext: {
    pageTitle: string;
  };
}

const ToolsPage: React.FC<Props> = ({ pageContext }) => {
  const { pageTitle } = pageContext;
  return (
    <Box>
      <SEO title={pageTitle} />
      <ToolsScreen menuItems={menuItems} />
    </Box>
  );
};

export default ToolsPage;
