import { Box } from "@mui/material";
import React, { ReactNode } from "react";

const wrapRootElement = ({ element }: { element: ReactNode }) => {
  // the wrapper supply dynamic tool like redux providers, e.t.c
  return <Box>{element}</Box>;
};

export default wrapRootElement;
