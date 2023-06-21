import React, { useEffect, useState } from "react";
import { FoodDetails as FoodDetailsComponent } from "@forkfacts/components";
import { useStore } from "../helpers/stores";
import { Food, NutritionFact, RDI, UsdaRdiNutrientMapping } from "@forkfacts/models";

const mappings = require("../../data/usda_rdi_nutrient_mapping.json");
import {
  filterByRDI,
  getAgeRangesForLifeStage,
  getMappingFor,
  setSelectedAgeByGender,
} from "../helpers/utils";

interface Props {
  pageContext: {
    recommendedDailyIntakes: RDI[];
    food: Food;
    seo: {
      title: string;
      description: string;
    };
  };
}

export const getMappingsByNutrient: () => Map<string, UsdaRdiNutrientMapping> = () =>
  mappings!.reduce((acc: Map<string, UsdaRdiNutrientMapping>, mapping: UsdaRdiNutrientMapping) => {
    acc.set(mapping.rdiNutrientName, mapping);
    return acc;
  }, new Map<string, UsdaRdiNutrientMapping>());
const mappingsByNutrient = getMappingsByNutrient();

const getRdisForNutrient = (nutrient: string, rdis: RDI[]): RDI[] => {
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
  console.log(`Finding RDIs for '${nutrient} (${nutrientNameToSearch})'`);
  const rdisForLifeStageAndAge = rdis.filter((rdi) => {
    return (
      rdi.nutrient === nutrientNameToSearch &&
      rdi.applicableFor === "females" &&
      rdi.ageStart === 31 &&
      rdi.ageEnd === 50
    );
  });
  return rdisForLifeStageAndAge;
};

export const getNutrientRdiPercent = (
  nutritionFact: NutritionFact,
  rdi: RDI
): number | undefined => {
  if (nutritionFact.nutrient.unit === "NOT_AVAILABLE" || rdi.amount < 0) {
    console.log(`CASE 1: Nutrient Unit / RDI Amount unavailable`);
    return undefined;
  }

  const mapping = getMappingFor(nutritionFact.nutrient.name, mappingsByNutrient);
  if (!mapping) {
    console.log(`CASE 2: No mapping available for ${nutritionFact.nutrient.name}`);
    return undefined;
  }
  const multiplier = mapping.usdaToRdiUnitMultiplier;
  const pDailyValue = ((nutritionFact.nutrient.amount * multiplier) / rdi.amount) * 100;
  return pDailyValue;
};

export const generateRdiForFood = (food: NutritionFact[] = [], rdis: RDI[]): NutritionFact[] => {
  const nutritionFacts: NutritionFact[] = [];
  const mergedFacts: Map<number, NutritionFact> = new Map();
  for (const nutritionFact of food) {
    const rdisForLifeStageAndAge = getRdisForNutrient(nutritionFact.nutrient.name, rdis);
    if (rdisForLifeStageAndAge.length < 1) nutritionFacts.push(nutritionFact);
    for (const rdi of rdisForLifeStageAndAge) {
      const percentDaily = getNutrientRdiPercent(nutritionFact, rdi);

      const existingFact = mergedFacts.get(nutritionFact.displayOrder);
      if (existingFact?.percentDaily) {
        existingFact.percentDaily = percentDaily as number;
      } else {
        mergedFacts.set(nutritionFact.displayOrder, {
          ...nutritionFact,
          rdi: {
            ...rdi,
            amount: percentDaily as number,
          },
          percentDaily,
          children: nutritionFact.children
            ? generateRdiForFood(nutritionFact.children, rdis)
            : undefined,
        });
      }
    }
  }
  mergedFacts.forEach((fact) => {
    nutritionFacts.push(fact);
  });
  return nutritionFacts;
};

const FoodDetails: React.FC<Props> = ({ pageContext: { recommendedDailyIntakes, food } }) => {
  const {
    setRecommendedDailyIntakes,
    setFood,
    selectedAge,
    setAge,
    selectedLifeStage,
    setSelectedAge,
  } = useStore((state) => state);
  const nutritionFacts = generateRdiForFood(food.nutrients, recommendedDailyIntakes);
  const [rows, setRows] = useState<NutritionFact[]>([]);
  const ageRanges = getAgeRangesForLifeStage(selectedLifeStage);

  useEffect(() => {
    setRecommendedDailyIntakes(recommendedDailyIntakes);
    setFood(food, rows);
  }, [recommendedDailyIntakes, food, setRecommendedDailyIntakes, setFood, rows]);

  useEffect(() => {
    const applicableFor = selectedLifeStage;
    const { start: ageStart, end: ageEnd } = selectedAge;
    const filteredData = filterByRDI(nutritionFacts, {
      ageStart,
      ageEnd,
      applicableFor,
    });
    setRows(filteredData);
  }, [selectedAge, selectedLifeStage]);

  useEffect(() => {
    if (selectedLifeStage) {
      setAge(ageRanges);
    }
  }, [selectedLifeStage]);

  useEffect(() => {
    setSelectedAgeByGender(selectedLifeStage, setSelectedAge);
  }, [selectedLifeStage, setSelectedAge]);

  return (
    <div>
      <FoodDetailsComponent />
    </div>
  );
};

export default FoodDetails;
