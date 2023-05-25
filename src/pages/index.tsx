import * as React from "react";
import { PageProps } from "gatsby";
import { Box } from "@mui/material";
import Home from "../features/Home";
import WrapRootElement from "../libs/wrapRootElement";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <WrapRootElement>
      <Home />
    </WrapRootElement>
  );
};

export default IndexPage;
