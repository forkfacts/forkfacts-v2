import React, { useEffect } from "react";
import { FoodDetails as FoodDetailsComponent } from "@forkfacts/components";
import { useStore } from "../helpers/stores";

const mappings = require("../../data/usda_rdi_nutrient_mapping.json");
import { Food, RDI, NutritionFact, UsdaRdiNutrientMapping } from "@forkfacts/models";

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

export const mappingsByNutrient: Map<string, UsdaRdiNutrientMapping[]> = mappings!.reduce(
  (acc: Map<string, UsdaRdiNutrientMapping[]>, mapping: UsdaRdiNutrientMapping) => {
    const existingMappings = acc.get(mapping.usdaNutrientName) || [];
    existingMappings.push(mapping);
    acc.set(mapping.usdaNutrientName, existingMappings);
    return acc;
  },
  new Map<string, UsdaRdiNutrientMapping[]>()
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

export const generateRdiForFood = (food: NutritionFact[] = [], rdis: RDI[]): NutritionFact[] => {
  const nutritionFacts: NutritionFact[] = [];
  const mergedFacts: Map<number, NutritionFact> = new Map();
  for (const nutritionFact of food) {
    // console.log(JSON.stringify(Object.fromEntries(mappingsByNutrient)))
    /*const mappings = mappingsByNutrient.get(nutritionFact.nutrient.name);
        if (!mappings) {
          nutritionFacts.push(nutritionFact);
          continue;
        }
        const rdisForLifeStageAndAge = rdis.filter((rdi) => {
          return mappings.some((mapping) => mapping.rdiNutrientName === rdi.nutrient);
        });*/

    const rdisForLifeStageAndAge = rdis.filter(
      (rdi) => rdi.nutrient === nutritionFact.nutrient.name
    );
    if (rdisForLifeStageAndAge.length < 1) nutritionFacts.push(nutritionFact);
    // console.log(`rdisForLifeStageAndAge=${JSON.stringify(rdisForLifeStageAndAge)}`)

    for (const rdi of rdisForLifeStageAndAge) {
      if (nutritionFact.nutrient.unit !== rdi.nutrientUnit) {
        console.log(
          `Nutrient=${nutritionFact.nutrient.name} / NF Unit = ${nutritionFact.nutrient.unit} / RDI Unit=${rdi.nutrientUnit}, needs conversion`
        );
      }
      const percentDaily =
        nutritionFact.nutrient.unit === "NOT_AVAILABLE"
          ? undefined
          : (nutritionFact.nutrient.amount / rdi.amount) * 100;
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
  const nutrition = generateRdiForFood(food.nutrients, recommendedDailyIntakes);
  /*
      console.log(`food=>${JSON.stringify(food)}`)
      console.log(`nutrition=>${JSON.stringify(nutrition)}`)
      console.log(`rdi=>${JSON.stringify(recommendedDailyIntakes)}`)
    */
  useEffect(() => {
    setRecommendedDailyIntakes(recommendedDailyIntakes);
    setFood(food, nutrition);
  }, [recommendedDailyIntakes, food, setRecommendedDailyIntakes, setFood]);

  return (
    <div>
      <FoodDetailsComponent />
    </div>
  );
};

export default FoodDetails;
