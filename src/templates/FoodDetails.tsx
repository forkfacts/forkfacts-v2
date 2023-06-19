import React, { useEffect } from "react";
import { FoodDetails as FoodDetailsComponent } from "@forkfacts/components";
import { useStore } from "../helpers/stores";
const mappings = require("../../data/usda_rdi_nutrient_mapping.json");
import { Food, RDI, NutritionFact, USDA } from "@forkfacts/models";

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

export const mappingsByNutrient: Map<string, USDA[]> = mappings!.reduce(
  (acc: Map<string, USDA[]>, mapping: USDA) => {
    const existingMappings = acc.get(mapping.usdaNutrientName) || [];
    existingMappings.push(mapping);
    acc.set(mapping.usdaNutrientName, existingMappings);
    return acc;
  },
  new Map<string, USDA[]>()
);

export const getNutrientRdiPercent = (nutrient: NutritionFact, rdi: RDI): number | undefined => {
  const mappings = mappingsByNutrient.get(nutrient.nutrient.name);
  if (!mappings || rdi.amount < 0) {
    return undefined;
  }
  let highestPercentDaily = -Infinity;
  for (const mapping of mappings) {
    const multiplier = mapping.usdaToRdiUnitMultiplier;
    const percentDaily = ((nutrient.nutrient.amount * multiplier) / rdi.amount) * 100;
    if (percentDaily > highestPercentDaily) {
      highestPercentDaily = percentDaily;
    }
  }
  return highestPercentDaily;
};

export const generateRdiForFood = (food: NutritionFact[], rdis: RDI[]): NutritionFact[] => {
  const nutritionFacts: NutritionFact[] = [];
  const mergedFacts: Map<number, NutritionFact> = new Map();
  if (!food.length)
    for (const nutrient of food) {
      const mappings = mappingsByNutrient.get(nutrient.nutrient.name);
      if (!mappings) {
        nutritionFacts.push(nutrient);
        continue;
      }
      const rdisForLifeStageAndAge = rdis.filter((rdi) => {
        return mappings.some((mapping) => mapping.rdiNutrientName === rdi.nutrient);
      });
      for (const rdi of rdisForLifeStageAndAge) {
        const percentDaily = getNutrientRdiPercent(nutrient, rdi);
        const existingFact = mergedFacts.get(nutrient.displayOrder);
        if (existingFact?.percentDaily) {
          existingFact.percentDaily = percentDaily as number;
        } else {
          mergedFacts.set(nutrient.displayOrder, {
            ...nutrient,
            rdi: {
              ...rdi,
              amount: percentDaily as number,
            },
            percentDaily,
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
  const { setRecommendedDailyIntakes, setFood } = useStore((state) => state);
  const data = generateRdiForFood(food.nutrition, recommendedDailyIntakes);
  useEffect(() => {
    setRecommendedDailyIntakes(recommendedDailyIntakes);
    setFood(food, data);
  }, [recommendedDailyIntakes, food, setRecommendedDailyIntakes, setFood]);

  return (
    <div>
      <FoodDetailsComponent />
    </div>
  );
};

export default FoodDetails;
