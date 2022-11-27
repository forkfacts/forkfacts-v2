import * as React from "react";
import { Link, PageProps } from "gatsby";
import useSiteMetadata from "../hooks/useSiteMetadata";

const IndexPage: React.FC<PageProps> = () => {
  const title = useSiteMetadata();
  console.log(title);
  return <main>hello</main>;
};

export default IndexPage;
