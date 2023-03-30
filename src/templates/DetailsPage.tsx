import React, { useEffect, useState } from "react";
import { PageProps } from "gatsby";
import { DetailsPageScreen } from "@forkfacts/screens";
import { SEO } from "@forkfacts/components";

import { generateRdiForFood, getAgeRangesForLifeStage } from "@forkfacts/helpers";
import { Box } from "@mui/material";
import { lifeStageItems, menuItems, tabItems } from "../RealData/realData";
import { useStore } from "../store/store";
import { NutritionTableRow, SelectedNutrient } from "@forkfacts/models";

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

type NutrientGroup = {
  nutrientGroup: string;
  name: string;
  rows: NutrientItem[];
};

type NutrientItem = {
  amount: number;
  displayName: string;
  name: string;
  nutrientGroup: string;
  unit: string;
};

const getValueRounded = (amount: number) => {
  return Math.round(amount * 100) / 100;
};

const DynamicPageTemplate = ({ pageContext }: PageProps) => {
  const { food, recommendedDailyIntakes } = pageContext as any;
  const [rows, setRows] = useState<any[]>([]);
  const { selectedLifeStage, selectedAge, selectedNutrients, setSelectedAge } = useStore(
    (state) => state
  );
  const thisFood = food as any;
  const allRdis = recommendedDailyIntakes as any[];
  const nutritionFacts: NutritionFact[] = generateRdiForFood(thisFood, allRdis);

  useEffect(() => {
    const gender = selectedLifeStage;
    const age = selectedAge;
    if (!selectedNutrients.length) {
      const nutrientsWithRdis = food.nutrients.map((nutrient: any) => {
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
          nutrient: nutrient.name,
          nutrientGroup: nutrient.nutrientGroup,
          amount: nutrient?.amount,
          amountUnit: nutrient?.unit?.toLowerCase(),
          dailyValue: nutrientWithRdi?.percentDaily
            ? getValueRounded(Number(nutrientWithRdi?.percentDaily))
            : undefined,
          rdi: {
            value: nutrientWithRdi?.rdi?.amount
              ? Math.abs(nutrientWithRdi?.rdi?.amount)
              : undefined,
            weight: nutrientWithRdi?.rdi?.nutrientUnit,
          },
        };
        return factTableRow;
      });
      setRows(nutrientsWithRdis);
    } else {
      const flatRows = [...selectedNutrients]
        .map((item) => {
          const data: NutrientItem[] = [];
          if (item?.rows) {
            item?.rows?.map((item: NutrientItem) => {
              data.push(item);
            });
          }
          return data;
        })
        .flat();
      const whenNoRows = selectedNutrients
        .map((item) => {
          if (!item.rows?.length) {
            return item;
          }
        })
        .filter((item) => item !== undefined);
      const getAllSelectedNutrients = [...flatRows, ...whenNoRows].filter(
        (item) => item !== undefined
      );
      console.log(getAllSelectedNutrients);
      const nutrientsWithRdis = getAllSelectedNutrients?.map((nutrient: any) => {
        const nutrientWithRdi: any = nutritionFacts.filter(
          (nutrientRdi) => nutrientRdi.nutrient.name.toLowerCase() === nutrient.name.toLowerCase()
        )[0];
        const factTableRow: NutritionTableRow = {
          nutrient: nutrient.name,
          nutrientGroup: nutrient.nutrientGroup,
          amount: nutrientWithRdi?.nutrient?.amount,
          amountUnit: nutrientWithRdi?.nutrient.unit?.toLowerCase(),
          dailyValue: nutrientWithRdi?.percentDaily
            ? getValueRounded(Number(nutrientWithRdi?.percentDaily))
            : undefined,
          rdi: {
            value: nutrientWithRdi?.rdi?.amount
              ? Math.abs(nutrientWithRdi?.rdi?.amount)
              : undefined,
            weight: nutrientWithRdi?.rdi?.nutrientUnit,
          },
        };
        return factTableRow;
      });
      setRows(nutrientsWithRdis);
    }
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

  const nutrientGroups: NutrientGroup[] = food.nutrients.reduce(
    (acc: NutrientGroup[], item: NutrientItem) => {
      const index = acc.findIndex((group) => group.nutrientGroup === item.nutrientGroup);
      if (index === -1) {
        const group: NutrientGroup = {
          nutrientGroup: item.nutrientGroup,
          name: item.nutrientGroup,
          rows: [item],
        };
        acc.push(group);
      } else {
        acc[index].rows.push(item);
      }
      return acc;
    },
    []
  );

  const filteredNutritionFilterItems: any = nutrientGroups
    .filter((item: any) => item.nutrientGroup !== "")
    .map((item) => {
      return {
        ...item,
        check: false,
        nutrientGroup: item.nutrientGroup,
        name: item.nutrientGroup,
        rows: item?.rows?.map((row) => {
          return {
            ...row,
            checked: false,
          };
        }),
      };
    });

  const emptyNutrientGroupItems: any = nutrientGroups
    .filter((item: any) => item.nutrientGroup === "")[0]
    .rows.map((flatRow) => {
      return {
        ...flatRow,
        checked: false,
        rows: [],
      };
    });

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
          nutritionFilterItems={[...filteredNutritionFilterItems, ...emptyNutrientGroupItems]}
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
