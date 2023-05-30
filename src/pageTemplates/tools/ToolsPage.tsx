import React from "react";
// import { menuItems } from "../../RealData/realData";
// import { ToolsScreen } from "@forkfacts/screens";
// import { SEO } from "@forkfacts/components";

interface Props {
  pageContext: {
    pageTitle: string;
  };
}

const ToolsPage: React.FC<Props> = ({ pageContext }) => {
  const { pageTitle } = pageContext;
  return (
    <div>
      {/* <SEO title={pageTitle} />
      <ToolsScreen menuItems={menuItems} />  */}
      tools
    </div>
  );
};

export default ToolsPage;
