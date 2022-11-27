import * as React from "react";
import { PageProps } from "gatsby";
import { useTheme } from "@mui/material";

const IndexPage: React.FC<PageProps> = () => {
  const theme = useTheme();
  console.log(theme);
  return <main>hello</main>;
};

export default IndexPage;
