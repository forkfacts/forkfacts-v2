import React, { useEffect, useState } from "react";
import { PageProps } from "gatsby";
import { DetailsPageScreen } from "@forkfacts/screens";
import { SEO } from "gatsby-plugin-seo";
import {
  getAgeRangesForLifeStage,
  getValueRounded,
  getFilterNutrients,
  setSelectedAgeByGender,
} from "@forkfacts/helpers";
import { Box } from "@mui/material";
import { lifeStageItems, menuItems, tabItems } from "../RealData/realData";
const mappings = require("../../data/usda_rdi_nutrient_mapping.json");
import { useStore } from "../store/store";
import {
  DetailsPageTemplateContext,
  NutrientGroup,
  NutrientItem,
  NutritionFact,
  NutritionTableRow,
  SelectedNutrient,
} from "@forkfacts/models";

export const mappingsByNutrient: Map<string, any> = mappings!.reduce((acc: any, mapping: any) => {
  acc.set(mapping.usdaNutrientName, mapping);
  return acc;
}, new Map<string, any>());

export const getNutrientRdiPercent = (nutrient: any, rdi: any): number | undefined => {
  // rdi value of < 0 means that there is no data provided by NIH
  if (!mappingsByNutrient.has(nutrient.name) || rdi.amount < 0) return undefined;

  const multiplier = mappingsByNutrient.get(nutrient.name).usdaToRdiUnitMultiplier;
  return ((nutrient.amount * multiplier) / rdi.amount) * 100;
};
export const generateRdiForFood = (food: any, rdis: any[]): NutritionFact[] => {
  return food.nutrients
    .map((nutrient: any) => {
      const mappedRdi = mappingsByNutrient.get(nutrient.name);
      if (!mappedRdi) return { nutrient };
      const rdisForLifeStageAndAge = rdis.filter(
        (rdi) => rdi.nutrient === mappedRdi.rdiNutrientName
      );
      return rdisForLifeStageAndAge.map((rdi) => {
        const percentDaily = getNutrientRdiPercent(nutrient, rdi);
        return { nutrient, rdi, percentDaily };
      });
    })
    .flat();
};

const DetailsPageTemplate = ({ pageContext }: PageProps) => {
  const { food, recommendedDailyIntakes, seo } = pageContext as DetailsPageTemplateContext;
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
            age.start === nutrientRdi?.rdi?.ageStart &&
            age.end === nutrientRdi?.rdi?.ageEnd &&
            age?.ageUnit?.toLowerCase() === nutrientRdi?.rdi?.ageUnit &&
            gender.toLowerCase() === nutrientRdi?.rdi?.applicableFor.toLowerCase()
        )[0];
        const factTableRow: NutritionTableRow = {
          nutrient: !nutrient.displayName ? nutrient.name : nutrient.displayName,
          nutrientGroup: nutrient.nutrientGroup,
          amount: nutrient?.amount,
          amountUnit: nutrient?.unit?.toLowerCase(),
          dailyValue: nutrientWithRdi?.percentDaily
            ? getValueRounded(Number(nutrientWithRdi?.percentDaily))
            : undefined,
          rdi: {
            servingUnitSize: nutrientWithRdi?.rdi?.amount
              ? Math.abs(nutrientWithRdi?.rdi?.amount)
              : undefined,
            servingSizeUnit: nutrientWithRdi?.rdi?.nutrientUnit,
          },
        };
        return factTableRow;
      });
      setRows(nutrientsWithRdis);
    } else {
      const nutrientsWithRdis = getFilterNutrients(selectedNutrients)?.map((nutrient: any) => {
        const nutrientWithRdi: any = nutritionFacts?.filter(
          (nutrientRdi) => nutrientRdi.nutrient.name.toLowerCase() === nutrient.name.toLowerCase()
        )[0];
        const factTableRow: NutritionTableRow = {
          nutrient: !nutrient.displayName ? nutrient.name : nutrient.displayName,
          nutrientGroup: nutrient.nutrientGroup,
          amount: nutrientWithRdi?.nutrient?.amount,
          amountUnit: nutrientWithRdi?.nutrient.unit?.toLowerCase(),
          dailyValue: nutrientWithRdi?.percentDaily
            ? getValueRounded(Number(nutrientWithRdi?.percentDaily))
            : undefined,
          rdi: {
            servingUnitSize: nutrientWithRdi?.rdi?.amount
              ? Math.abs(nutrientWithRdi?.rdi?.amount)
              : undefined,
            servingSizeUnit: nutrientWithRdi?.rdi?.nutrientUnit,
          },
        };
        return factTableRow;
      });
      setRows(nutrientsWithRdis);
    }
  }, [selectedAge, selectedLifeStage, selectedNutrients]);

  useEffect(() => {
    setSelectedAgeByGender(selectedLifeStage, setSelectedAge);
  }, [selectedLifeStage, setSelectedAge]);

  const ageRanges = getAgeRangesForLifeStage(selectedLifeStage);

  const nutrientGroups: NutrientGroup[] = food.nutrients.reduce(
    (acc: NutrientGroup[], item: NutrientItem) => {
      const index = acc.findIndex((group) => group.nutrientGroup === item.nutrientGroup);
      if (index === -1) {
        const group: NutrientGroup = {
          nutrientGroup: item.nutrientGroup,
          name: item.nutrientGroup,
          displayName: item.displayName,
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
          displayName: item.displayName,
          rows: item?.rows?.map((row) => {
            return {
              ...row,
              checked: false,
              displayName: row.displayName,
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
      <SEO
        title={seo.title}
        description={seo.description}
        pagePath={seo.pagePath}
        appleTouch="/icon.png"
        favicon32="/icon.png"
        favicon16="/icon.png"
        htmlLanguage="en"
        locale="en_US"
        schema={`{
          "@context": "http://schema.org",
          "@type": "WebPage",
          "mainEntity": {
            "@type": "Organization",
            "name": "Forkacts",
            "image": "https://forkfacts-v2.vercel.app/homeImg.svg"
          }
        }`}
      />
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

export default DetailsPageTemplate;
