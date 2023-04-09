import { SEO } from "@forkfacts/components";
import { RecommendedDailyIntake } from "@forkfacts/screens";
import { Box } from "@mui/material";
import { MenuItem, RdiAge, RdiNutritionTableRow, lifeStageItem } from "@forkfacts/models";
import { menuItems, lifeStageItems, allAges } from "../../RealData/realData";
import { getAgeRangesForLifeStage, setSelectedAgeByGender } from "@forkfacts/helpers";
import React, { useEffect, useState } from "react";

interface NutrientRequirement {
  applicableFor: string;
  ageStart: number;
  ageEnd: number | null;
  ageUnit: string;
  importTable: string;
  nutrient: string;
  amount: number;
  nutrientUnit: string;
}

interface Props {
  pageContext: {
    recommendedDailyIntakes: NutrientRequirement[];
    pageTitle: string;
  };
}

const RecommendedDailyIntakePage: React.FC<Props> = ({ pageContext }) => {
  const { recommendedDailyIntakes, pageTitle } = pageContext;
  const [selectedAge, setSelectedAge] = useState<RdiAge>({} as RdiAge);
  const [selectedGender, setSelectedGender] = useState("");
  const [rows, setRows] = useState<RdiNutritionTableRow[]>([]);
  useEffect(() => {
    setSelectedAgeByGender(selectedGender, setSelectedAge);
  }, [selectedGender, setSelectedAge]);

  const ageRanges = getAgeRangesForLifeStage(selectedGender);

  useEffect(() => {
    const filteredRows: NutrientRequirement[] = recommendedDailyIntakes.filter((nutrient) => {
      if (
        nutrient.ageStart === selectedAge.start &&
        (nutrient.ageEnd === selectedAge.end || nutrient.ageEnd === null) &&
        nutrient.ageUnit.toLowerCase() === selectedAge.ageUnit.toLowerCase() &&
        nutrient.applicableFor.toLowerCase() === selectedGender.toLowerCase()
      ) {
        return nutrient;
      }
      return false;
    });

    const mappedRows: RdiNutritionTableRow[] = filteredRows.map((nutrient) => {
      return {
        nutrient: nutrient.nutrient,
        recommendedAmount: nutrient.amount,
        recommendedUnit: nutrient.nutrientUnit,
        nutrientGroup: nutrient.nutrient,
      };
    });

    setRows(mappedRows);
  }, [selectedAge, selectedGender, recommendedDailyIntakes]);

  console.log(rows);

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
        ages={selectedGender ? ageRanges : allAges}
        rows={rows}
      />
    </Box>
  );
};

export default RecommendedDailyIntakePage;
