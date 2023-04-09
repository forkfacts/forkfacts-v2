import { SEO } from "@forkfacts/components";
import { RecommendedDailyIntake } from "@forkfacts/screens";
import { Box } from "@mui/material";
import { MenuItem, RdiAge, lifeStageItem } from "@forkfacts/models";
import { menuItems, lifeStageItems } from "../../RealData/realData";
import { getAgeRangesForLifeStage, setSelectedAgeByGender } from "@forkfacts/helpers";
import React, { useEffect, useState } from "react";

interface Props {
  pageContext: {
    recommendedDailyIntakes: any;
    pageTitle: string;
  };
}

const RecommendedDailyIntakePage: React.FC<Props> = ({ pageContext }) => {
  const { recommendedDailyIntakes, pageTitle } = pageContext;
  const [selectedAge, setSelectedAge] = useState<RdiAge>({} as RdiAge);
  const [selectedGender, setSelectedGender] = useState("Females");
  useEffect(() => {
    setSelectedAgeByGender(selectedGender, setSelectedAge);
  }, [selectedGender, setSelectedAge]);

  const ageRanges = getAgeRangesForLifeStage(selectedGender);
  return (
    <Box>
      <SEO title={pageTitle} />
      <RecommendedDailyIntake
        menuItems={menuItems}
        genders={lifeStageItems}
        setSelectedAge={setSelectedAge}
        selectedAge={selectedAge}
        selectedGender={selectedGender}
        setSelectedGender={setSelectedGender}
        ages={ageRanges}
      />
    </Box>
  );
};

export default RecommendedDailyIntakePage;
