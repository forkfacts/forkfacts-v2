import { Box } from "@mui/material";
import React, { ReactNode } from "react";

const wrapRootElement = ({ element }: { element: ReactNode }) => {
  return <Box>{element}</Box>;
};

export default wrapRootElement;
