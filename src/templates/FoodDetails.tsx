import React, { useEffect } from "react";
import { FoodDetails as FoodDetailsComponent } from "@forkfacts/components";
import { useStore } from "../helpers/stores";
import { Food, NutritionFact, RDI, UsdaRdiNutrientMapping } from "@forkfacts/models";

const mappings = require("../../data/usda_rdi_nutrient_mapping.json");

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

export const getNutrientRdiPercent = (
  nutritionFact: NutritionFact,
  rdi: RDI
): number | undefined => {
  if (nutritionFact.nutrient.unit === "NOT_AVAILABLE" || rdi.amount < 0) {
    console.log(`CASE 1: Nutrient Unit / RDI Amount unavailable`);
    return undefined;
  }

  const mapping = mappingsByNutrient.get(nutritionFact.nutrient.name);
  if (!mapping) {
    console.log(`CASE 2: No mapping available for ${nutritionFact.nutrient.name}`);
    return undefined;
  }

  if (nutritionFact.nutrient.unit.toLowerCase() !== mapping.rdiNutrientUnit.toLowerCase()) {
    console.log(
      `CASE 3: Units do not match => conversion needed for '${
        nutritionFact.nutrient.name
      }' from '${nutritionFact.nutrient.unit.toLowerCase()}' to '${rdi.nutrientUnit.toLowerCase()}' using multiplier '${
        mapping.usdaToRdiUnitMultiplier
      }'`
    );
  }
  const multiplier = mapping.usdaToRdiUnitMultiplier;
  return ((nutritionFact.nutrient.amount * multiplier) / rdi.amount) * 100;
};

export const generateRdiForFood = (food: NutritionFact[] = [], rdis: RDI[]): NutritionFact[] => {
  console.log(mappingsByNutrient);
  const nutritionFacts: NutritionFact[] = [];
  const mergedFacts: Map<number, NutritionFact> = new Map();
  for (const nutritionFact of food) {
    const rdisForLifeStageAndAge = rdis.filter(
      (rdi) => rdi.nutrient === nutritionFact.nutrient.name
    );
    if (rdisForLifeStageAndAge.length < 1) nutritionFacts.push(nutritionFact);
    // console.log(`rdisForLifeStageAndAge=${JSON.stringify(rdisForLifeStageAndAge)}`)

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
