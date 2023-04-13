import { ComingSoon, Layout } from "@forkfacts/components";
import { Box, useTheme } from "@mui/material";
import React from "react";
import { menuItems } from "../RealData/realData";

const Grocery = () => {
  const theme = useTheme();
  return (
    <Layout menuItems={menuItems}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItem: "center",
          justifyContent: "center",
          height: "100vh",
        }}
      >
        <ComingSoon />
      </Box>
    </Layout>
  );
};

export default Grocery;
