import * as React from "react";
import { PageProps } from "gatsby";
import { HomeScreen } from "@forkfacts/screens";
import { categoryOptions, navbarItems, sidebarItems } from "../RealData/realData";
import WrapRootElement from "../libs/wrapRootElement";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <WrapRootElement>
      <HomeScreen
        sidebarItems={sidebarItems}
        navbarItems={navbarItems}
        categoryOptions={categoryOptions}
        sourceId="forkfact-v2"
      />
    </WrapRootElement>
  );
};

export default IndexPage;
