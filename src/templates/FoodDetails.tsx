import React, { useEffect } from "react";
import { FoodDetails as FoodDetailsComponent } from "@forkfacts/components";
import { useStore } from "../helpers/stores";
import { Food, NutritionFact, RDI, UsdaRdiNutrientMapping } from "@forkfacts/models";

const mappings = require("../../data/usda_rdi_nutrient_mapping.json");
import {
  getAgeRangesForLifeStage,
  getMappingFor,
  setDefaultSelectedAgeForGender,
} from "../helpers/utils/utils";

interface Props {
  pageContext: {
    recommendedDailyIntakes: RDI[];
    food: Food;
    seo: {
      title: string;
      description: string;
    };
    slug: string;
  };
}

export const getMappingsByNutrient: () => Map<string, UsdaRdiNutrientMapping> = () =>
  mappings!.reduce((acc: Map<string, UsdaRdiNutrientMapping>, mapping: UsdaRdiNutrientMapping) => {
    acc.set(mapping.rdiNutrientName, mapping);
    return acc;
  }, new Map<string, UsdaRdiNutrientMapping>());
const mappingsByNutrient = getMappingsByNutrient();

const getRdisForNutrient = (
  nutrient: string,
  rdis: RDI[],
  selectedLifeStage: string,
  selectedAge: { ageStart: number; ageEnd?: number; ageUnit: "Month" | "Year" }
): RDI[] => {
  const applicableFor = selectedLifeStage;
  const { ageStart, ageEnd } = selectedAge;
  let nutrientNameToSearch: string;
  switch (nutrient) {
    case "Total fat":
      nutrientNameToSearch = "Fat";
      break;
    case "Dietary fiber":
      nutrientNameToSearch = "Total Fiber";
      break;
    case "Carbohydrate, total":
      nutrientNameToSearch = "Carbohydrate";
      break;
    case "Pantothenic acid":
      nutrientNameToSearch = "Pantothenic Acid";
      break;
    default:
      nutrientNameToSearch = nutrient;
  }
  const rdisForLifeStageAndAge = rdis.filter((rdi) => {
    if (!rdi.ageEnd) {
      return (
        rdi.nutrient === nutrientNameToSearch &&
        rdi.applicableFor ===
          (applicableFor.toLowerCase() === "pregnant"
            ? "pregnancy"
            : applicableFor.toLowerCase()) &&
        rdi.ageStart === ageStart
      );
    } else {
      return (
        rdi.nutrient === nutrientNameToSearch &&
        rdi.applicableFor ===
          (applicableFor.toLowerCase() === "pregnant"
            ? "pregnancy"
            : applicableFor.toLowerCase()) &&
        rdi.ageStart === ageStart &&
        rdi.ageEnd === ageEnd
      );
    }
  });
  return rdisForLifeStageAndAge;
};

export const getNutrientRdiPercent = (
  nutritionFact: NutritionFact,
  rdi: RDI
): number | undefined => {
  const mapping = getMappingFor(nutritionFact.nutrient.name, mappingsByNutrient);
  if (!mapping) {
    return undefined;
  }
  const multiplier = mapping.usdaToRdiUnitMultiplier;
  const pDailyValue = ((nutritionFact.nutrient.amount * multiplier) / rdi.amount) * 100;
  return pDailyValue;
};

export const generateRdiForFood = (
  food: NutritionFact[] = [],
  rdis: RDI[],
  applicableFor: string,
  selectedAge: { ageStart: number; ageEnd?: number; ageUnit: "Month" | "Year" }
): NutritionFact[] => {
  const nutritionFacts: NutritionFact[] = [];
  const mergedFacts: Map<number, NutritionFact> = new Map();
  for (const nutritionFact of food) {
    const rdisForLifeStageAndAge = getRdisForNutrient(
      nutritionFact.nutrient.name,
      rdis,
      applicableFor,
      selectedAge
    );
    if (rdisForLifeStageAndAge.length < 1) {
      nutritionFacts.push(nutritionFact);
    }
    for (const rdi of rdisForLifeStageAndAge) {
      const percentDaily = getNutrientRdiPercent(nutritionFact, rdi);
      mergedFacts.set(nutritionFact.displayOrder, {
        ...nutritionFact,
        rdi: {
          ...rdi,
        },
        percentDaily,
        children: nutritionFact.children
          ? generateRdiForFood(nutritionFact.children, rdis, applicableFor, selectedAge)
          : undefined,
      });
    }
  }
  mergedFacts.forEach((fact) => {
    nutritionFacts.push(fact);
  });
  return nutritionFacts;
};

const FoodDetails: React.FC<Props> = ({ pageContext: { recommendedDailyIntakes, food, slug } }) => {
  const {
    setRecommendedDailyIntakes,
    setFood,
    selectedAge,
    setAge,
    selectedLifeStage,
    setSelectedAge,
  } = useStore((state) => state);
  const { ageUnit, start: ageStart, end: ageEnd } = selectedAge;
  const nutritionFacts = generateRdiForFood(
    food.nutrients,
    recommendedDailyIntakes,
    selectedLifeStage,
    { ageStart, ageEnd, ageUnit }
  );

  const ageRanges = getAgeRangesForLifeStage(selectedLifeStage);

  useEffect(() => {
    setRecommendedDailyIntakes(recommendedDailyIntakes);
    setFood(food, nutritionFacts);
  }, [
    recommendedDailyIntakes,
    food,
    setRecommendedDailyIntakes,
    setFood,
    selectedAge,
    selectedLifeStage,
  ]);

  useEffect(() => {
    if (selectedLifeStage) {
      setAge(ageRanges);
    }
  }, [selectedLifeStage]);

  useEffect(() => {
    setDefaultSelectedAgeForGender(selectedLifeStage, setSelectedAge);
  }, [selectedLifeStage, setSelectedAge]);

  return (
    <div id={`ff-page-${slug}`} data-json={JSON.stringify(nutritionFacts)}>
      <FoodDetailsComponent />
    </div>
  );
};

export default FoodDetails;
