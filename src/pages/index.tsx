import * as React from "react";
import type { PageProps, HeadProps } from "gatsby";
import { SEO } from "../components";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main>
      <h1> Hello world</h1>
    </main>
  );
};

export const Head = (props: HeadProps) => {
  return <SEO title="Home Page" description="The site home page" />;
};

export default IndexPage;
