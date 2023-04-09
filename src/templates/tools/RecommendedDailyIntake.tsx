import { SEO } from "@forkfacts/components";
import { RecommendedDailyIntake } from "@forkfacts/screens";
import { Box } from "@mui/material";
import { menuItems, lifeStageItems } from "../../RealData/realData";
import * as React from "react";

interface Props {
  pageContext: {
    recommendedDailyIntakes: any;
    pageTitle: string;
  };
}

const RecommendedDailyIntakePage: React.FC<Props> = ({ pageContext }) => {
  const { recommendedDailyIntakes, pageTitle } = pageContext;

  return (
    <Box>
      <SEO title={pageTitle} />
      <RecommendedDailyIntake menuItems={menuItems} genders={lifeStageItems} />
    </Box>
  );
};

export default RecommendedDailyIntakePage;
