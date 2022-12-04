import { Box } from "@mui/material";
import React, { ReactNode } from "react";

const wrapRootElement = ({ element }: { element: ReactNode }) => {
  // this wrapper supply dynamic tools like redux provider, react-query e.t.c
  return <Box>{element}</Box>;
};

export default wrapRootElement;
