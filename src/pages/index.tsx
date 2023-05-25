import * as React from "react";
import { PageProps } from "gatsby";
import { Box } from "@mui/material";
import Home from "../Features/Home";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Box sx={{ p: "8px" }}>
      <Home />
    </Box>
  );
};

export default IndexPage;
