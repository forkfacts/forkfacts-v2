import * as React from "react";
import { PageProps } from "gatsby";
import { HomeScreen } from "@forkfacts/screens";
import { categoryOptions, navbarItems, sidebarItems } from "../RealData/realData";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <>
      <HomeScreen
        sidebarItems={sidebarItems}
        navbarItems={navbarItems}
        categoryOptions={categoryOptions}
        sourceId="forkfact-v2"
      />
    </>
  );
};

export default IndexPage;
