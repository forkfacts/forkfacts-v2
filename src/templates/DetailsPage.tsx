import React, { useEffect, useState } from "react";
import { PageProps } from "gatsby";
import { DetailsPageScreen } from "@forkfacts/screens";
import { SEO } from "@forkfacts/components";

import { generateRdiForFood, getAgeRangesForLifeStage } from "@forkfacts/helpers";
import { Box } from "@mui/material";
import {
  lifeStageItems,
  nutritionSummaryItems,
  sidebarItems,
  tabItems,
} from "../RealData/realData";
import { useStore } from "../store/store";

interface NutritionFactTable {
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

  const nutrientRdis: NutritionFactTable[] = generateRdiForFood(thisFood, allRdis);

  const groupedNutriTables = Object.entries(
    nutrientRdis.reduce((acc: any, item: any) => {
      if (!acc[item.nutrient.nutrientGroup]) {
        acc[item.nutrient.nutrientGroup] = [];
      }
      acc[item.nutrient.nutrientGroup].push({
        name: item?.nutrient?.name,
        dailyValue: parseInt(item?.percentDaily),
        amount: item?.nutrient?.amount + " " + item?.nutrient?.unit,
        rdi: {
          value: item?.rdi?.amount,
          weight: item?.rdi?.nutrientUnit,
        },
      });
      return acc;
    }, {})
  ).map(([nutrientGroup, nutrientContents]) => ({
    nutrientGroup,
    nutrientContents,
  }));
  useEffect(() => {
    const gender = selectedLifeStage;
    const age = selectedAge;
    const nutrients = !selectedNutrients.length ? food.nutrients : selectedNutrients;
    const nutrientsWithRdis = nutrients.map((nutrient: any, index: number) => {
      const nutrientWithRdi = nutrientRdis.filter(
        (nutrientRdi) =>
          nutrientRdi.nutrient.name.toLowerCase() === nutrient.name.toLowerCase() &&
          nutrientRdi.nutrient.unit === nutrient.unit &&
          age.start === nutrientRdi?.rdi?.ageStart &&
          age.end === nutrientRdi?.rdi?.ageEnd &&
          age?.ageUnit?.toLowerCase() === nutrientRdi?.rdi?.ageUnit &&
          gender.toLowerCase() === nutrientRdi?.rdi?.applicableFor.toLowerCase()
      )[0];
      const getValueRounded = (amount: number) => {
        return Math.round(amount * 100) / 100;
      };
      const factTableRow: any = {
        index: index,
        nutrient: nutrient.name,
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
  return (
    <>
      <Box sx={{ p: "8px" }}>
        <DetailsPageScreen
          sidebarItems={sidebarItems}
          DetailsPageTitlesItems={[]}
          detailsHeaderValues={{
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
          nutritionSummaryItems={nutritionSummaryItems}
          measurementFilterItems={[]}
          nutritionTableItems={rows}
          units={[]}
          values={[]}
          onSelectUnit={() => console.log(`Feature not available yet.`)}
          onSelectMeasurementItem={function (item: string): void {
            throw new Error("Function not implemented.");
          }}
          multipleSelectItems={[]}
          onSelectedValue={function (value: React.SetStateAction<string[]>): void {
            throw new Error("Function not implemented.");
          }}
        />
      </Box>
    </>
  );
};

export const Head = () => <SEO title="DetailPage" />;

export default DynamicPageTemplate;
