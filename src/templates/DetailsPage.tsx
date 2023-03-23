import React, { useEffect, useState } from "react";
import { PageProps } from "gatsby";
import { DetailsPageScreen } from "@forkfacts/screens";
import { SEO } from "@forkfacts/components";

import { generateRdiForFood, getAgeRangesForLifeStage } from "@forkfacts/helpers";
import { Box } from "@mui/material";
import { lifeStageItems, nutritionSummaryItems, menuItems, tabItems } from "../RealData/realData";
import { useStore } from "../store/store";
import { NutritionTableRow } from "@forkfacts/models";

export interface NutritionFact {
  nutrient: {
    amount: number;
    name: string;
    unit: string;
    displayName: string;
    nutrientGroup: string;
  };
  percentDaily: string;
  rdi: {
    ageStart: number;
    ageEnd: number;
    ageUnit: string;
    amount: number;
    nutrient: string;
    nutrientUnit: string;
    applicableFor: string;
  };
}

const DynamicPageTemplate = ({ pageContext }: PageProps) => {
  const { food, recommendedDailyIntakes } = pageContext as any;
  const [rows, setRows] = useState<any[]>([]);
  const { selectedLifeStage, selectedAge, selectedNutrients, setSelectedAge } = useStore(
    (state) => state
  );
  const thisFood = food as any;
  const allRdis = recommendedDailyIntakes as any[];
  const nutritionFacts: NutritionFact[] = generateRdiForFood(thisFood, allRdis);

  const nutritionFactsByNutrient = Object.entries(
    nutritionFacts.reduce((acc: any, nutritionFact: any) => {
      const nutrient = nutritionFact.nutrient;
      if (!acc[nutrient.nutrientGroup]) {
        acc[nutrient.nutrientGroup] = [];
      }
      acc[nutrient.nutrientGroup].push({
        name: nutrient.displayName ? nutrient.displayName : nutrient.name,
        dailyValue: parseInt(nutritionFact?.percentDaily),
        amount: nutrient.amount + " " + nutrient.unit,
        rdi: {
          value: nutritionFact?.rdi?.amount,
          weight: nutritionFact?.rdi?.nutrientUnit,
        },
      });
      return acc;
    }, {})
  ).map(([nutrientGroup, nutrientContents]) => ({
    nutrientGroup,
    nutrientContents,
  }));

  console.log({ nutritionFactsByNutrient });

  useEffect(() => {
    const gender = selectedLifeStage;
    const age = selectedAge;
    const nutrients = !selectedNutrients.length ? food.nutrients : selectedNutrients;
    const getValueRounded = (amount: number) => {
      return Math.round(amount * 100) / 100;
    };
    const nutrientsWithRdis = nutrients.map((nutrient: any, index: number) => {
      const nutrientWithRdi = nutritionFacts.filter(
        (nutrientRdi) =>
          nutrientRdi.nutrient.name.toLowerCase() === nutrient.name.toLowerCase() &&
          nutrientRdi.nutrient.unit === nutrient.unit &&
          age.start === nutrientRdi?.rdi?.ageStart &&
          age.end === nutrientRdi?.rdi?.ageEnd &&
          age?.ageUnit?.toLowerCase() === nutrientRdi?.rdi?.ageUnit &&
          gender.toLowerCase() === nutrientRdi?.rdi?.applicableFor.toLowerCase()
      )[0];
      const factTableRow: NutritionTableRow = {
        //index: index,
        nutrient: nutrient.name,
        nutrientGroup: nutrient.nutrientGroup,
        amount: nutrient?.amount,
        amountUnit: nutrient?.unit?.toLowerCase(),
        dailyValue: nutrientWithRdi?.percentDaily
          ? getValueRounded(Number(nutrientWithRdi?.percentDaily))
          : undefined,
        rdi: {
          value: nutrientWithRdi?.rdi?.amount ? Math.abs(nutrientWithRdi?.rdi?.amount) : undefined,
          weight: nutrientWithRdi?.rdi?.nutrientUnit,
        },
        nutrientContents: [],
      };
      return factTableRow;
    });
    setRows(nutrientsWithRdis);
  }, [selectedAge, selectedLifeStage, selectedNutrients]);

  useEffect(() => {
    const selectedGender = selectedLifeStage;
    if (selectedGender === "Infants")
      setSelectedAge({
        start: 0,
        end: 6,
        ageUnit: "month",
      });
    else if (selectedGender === "Children")
      setSelectedAge({
        start: 1,
        end: 3,
        ageUnit: "year",
      });
    else if (selectedGender === "Males")
      setSelectedAge({
        start: 9,
        end: 13,
        ageUnit: "year",
      });
    else if (selectedGender === "Females")
      setSelectedAge({
        start: 31,
        end: 50,
        ageUnit: "year",
      });
    else if (selectedGender === "Pregnant" || selectedGender === "Lactation")
      setSelectedAge({
        start: 14,
        end: 18,
        ageUnit: "year",
      });
  }, [selectedLifeStage]);

  const ageRanges = getAgeRangesForLifeStage(selectedLifeStage);
  const dataNutrients = food.nutrients.map(
    (item: { checked: boolean; name: string; unit: string }) => {
      return {
        checked: false,
        name: item.name,
        unit: item.unit,
      };
    }
  );
  console.log({ dataNutrients });
  return (
    <>
      <Box sx={{ p: "8px" }}>
        <DetailsPageScreen
          menuItems={menuItems}
          foodsWithSameNames={[]}
          foodOverview={{
            name: food.name,
            category: food.category,
          }}
          tabItems={tabItems}
          compareTableItems={[]}
          compareTableDetails={{
            name: "",
            quantityAmount: "",
          }}
          ageItems={ageRanges}
          lifeStageItems={lifeStageItems}
          nutritionFilterItems={dataNutrients}
          nutritionSummaryItems={[]} // todo(h2): Feature not available yet.
          measurementFilterItems={[]} // todo(h2): Feature not available yet.
          nutritionTableRows={rows}
          units={[]} // todo(h2): Feature not available yet.
          values={[]} // todo(h2): Feature not available yet.
          onSelectUnit={() => console.log(`Feature not available yet.`)}
          onSelectMeasurementItem={function (item: string): void {
            throw new Error(`Feature not available yet.`);
          }}
          multipleSelectItems={[]} // todo(h2): Feature not available yet.
          onSelectedValue={function (value: React.SetStateAction<string[]>): void {
            throw new Error(`Feature not available yet.`);
          }}
        />
      </Box>
    </>
  );
};

export const Head = () => <SEO title="DetailPage" />;

export default DynamicPageTemplate;
