import React, { useEffect, useState } from "react";
import { PageProps } from "gatsby";
import { DetailsPageScreen } from "@forkfacts/screens";
import { SEO } from "@forkfacts/components";

import { generateRdiForFood, getAgeRangesForLifeStage, getValueRounded } from "@forkfacts/helpers";
import { Box } from "@mui/material";
import { lifeStageItems, menuItems, tabItems } from "../RealData/realData";
import { useStore } from "../store/store";
import {
  NutrientGroup,
  NutrientItem,
  NutritionFact,
  NutritionTableRow,
  SelectedNutrient,
} from "@forkfacts/models";

const DynamicPageTemplate = ({ pageContext }: PageProps) => {
  const { food, recommendedDailyIntakes } = pageContext as any;
  const [rows, setRows] = useState<any[]>([]);
  const { selectedLifeStage, selectedAge, selectedNutrients, setSelectedAge } = useStore(
    (state) => state
  );
  const thisFood = food as any;
  const allRdis = recommendedDailyIntakes as any[];
  const nutritionFacts: NutritionFact[] = generateRdiForFood(thisFood, allRdis);

  const getSelectedNutrients = (nutrients: SelectedNutrient[]) => {
    const selectedNutrientsWithRows = [...nutrients]
      .map((item) => {
        const data: NutrientItem[] = [];
        if (item?.rows) {
          item?.rows?.map((item: any) => {
            data.push(item);
          });
        }
        return data;
      })
      .flat();
    const unSelectedNutrientsRows = selectedNutrients
      .map((item) => {
        if (!item.rows?.length) {
          return item;
        }
      })
      .filter((item) => item !== undefined);
    return [...selectedNutrientsWithRows, ...unSelectedNutrientsRows].filter(
      (item) => item !== undefined
    );
  };

  useEffect(() => {
    const gender = selectedLifeStage;
    const age = selectedAge;
    if (!selectedNutrients.length) {
      const nutrientsWithRdis = food.nutrients.map((nutrient: any) => {
        const nutrientWithRdi = nutritionFacts.filter(
          (nutrientRdi) =>
            nutrientRdi.nutrient.name.toLowerCase() === nutrient.name.toLowerCase() &&
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
      const nutrientsWithRdis = getSelectedNutrients(selectedNutrients)?.map((nutrient: any) => {
        const nutrientWithRdi: any = nutritionFacts?.filter(
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
        acc[index]?.rows?.push(item);
      }
      return acc;
    },
    []
  );

  const filteredNutritionFilterItems =
    nutrientGroups
      .filter((item: any) => item.nutrientGroup !== "")
      .map((item) => {
        return {
          ...item,
          checked: false,
          nutrientGroup: item.nutrientGroup,
          name: item.nutrientGroup,
          rows: item?.rows?.map((row) => {
            return {
              ...row,
              checked: false,
            };
          }),
        };
      }) || [];

  const emptyNutrientGroupItems =
    nutrientGroups
      ?.filter((item: any) => item.nutrientGroup === "")[0]
      ?.rows?.map((flatRow) => {
        return {
          ...flatRow,
          checked: false,
          rows: [],
        };
      }) || [];
  const nutrients = [
    ...filteredNutritionFilterItems,
    ...emptyNutrientGroupItems,
  ] as SelectedNutrient[];

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
          nutritionFilterItems={[...nutrients]}
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
            throw new Error(`Feature is not available yet.`);
          }}
        />
      </Box>
    </>
  );
};

export const Head = () => <SEO title="DetailPage" />;

export default DynamicPageTemplate;
