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

const getMappingFor = (nutrient: string) => {
  let nutrientNameToSearch;
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
      // todo: change name when addressing https://app.clickup.com/t/860r5fh4b
      nutrientNameToSearch = "Panthothenic Acid";
      break;
    default:
      nutrientNameToSearch = nutrient;
  }
  const mapping = mappingsByNutrient.get(nutrientNameToSearch);
  // console.log(`${nutrient} => ${mapping}`);
  return mapping;
};

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
  // console.log(`Finding RDIs for '${nutrient} (${nutrientNameToSearch})'`);
  const rdisForLifeStageAndAge = rdis.filter((rdi) => {
    return (
      rdi.nutrient === nutrientNameToSearch &&
      rdi.applicableFor === "females" &&
      rdi.ageStart === 31 &&
      rdi.ageEnd === 50
    );
  });

  // console.log(rdisForLifeStageAndAge);
  return rdisForLifeStageAndAge;
};

export const getNutrientRdiPercent = (
  nutritionFact: NutritionFact,
  rdi: RDI
): number | undefined => {
  if (nutritionFact.nutrient.unit === "NOT_AVAILABLE" || rdi.amount < 0) {
    // console.log(`CASE 1: Nutrient Unit / RDI Amount unavailable`);
    return undefined;
  }

  const mapping = getMappingFor(nutritionFact.nutrient.name);
  if (!mapping) {
    // console.log(`CASE 2: No mapping available for ${nutritionFact.nutrient.name}`);
    return undefined;
  }

  if (nutritionFact.nutrient.unit.toLowerCase() !== mapping.rdiNutrientUnit.toLowerCase()) {
    /*console.log(
                  `CASE 3: Units do not match => conversion needed for '${
                    nutritionFact.nutrient.name
                  }' from '${nutritionFact.nutrient.unit.toLowerCase()}' to '${rdi.nutrientUnit.toLowerCase()}' using multiplier '${
                    mapping.usdaToRdiUnitMultiplier
                  }'`
                );*/
  }
  const multiplier = mapping.usdaToRdiUnitMultiplier;
  const pDailyValue = ((nutritionFact.nutrient.amount * multiplier) / rdi.amount) * 100;
  console.log(
    `${nutritionFact.nutrient.name} => ${nutritionFact.nutrient.amount}/${rdi.amount} => ${pDailyValue}`
  );
  return pDailyValue;
};

export const generateRdiForFood = (food: NutritionFact[] = [], rdis: RDI[]): NutritionFact[] => {
  console.log(mappingsByNutrient);
  const nutritionFacts: NutritionFact[] = [];
  const mergedFacts: Map<number, NutritionFact> = new Map();
  for (const nutritionFact of food) {
    const rdisForLifeStageAndAge = getRdisForNutrient(nutritionFact.nutrient.name, rdis);
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
