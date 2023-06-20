import React from "react";
const mappings = require("../../data/usda_rdi_nutrient_mapping.json");
import { Food, RDI, UsdaRdiNutrientMapping, NutritionFact } from "@forkfacts/models";
import ff_nutrition_facts from "../../data/foundation_food_nutrition_facts.json";
import sr_legacy_nutrition_facts from "../../data/sr_legacy_food_nutrition_facts.json";
import recommendedDailyIntakes from "../../data/rdi.json";

export const mappingsByNutrient = mappings!.reduce((acc: any, mapping: UsdaRdiNutrientMapping) => {
  const existingMappings = acc.get(mapping.usdaNutrientName) || [];
  existingMappings.push(mapping);
  acc.set(mapping.usdaNutrientName, existingMappings);
  return acc;
}, new Map());

export const getNutrientRdiPercent = (nutrient: NutritionFact, rdi: RDI) => {
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

export const generateRdiForFood = (food: NutritionFact[], rdis: RDI[]) => {
  const nutritionFacts = [];
  const unmatchedNutrients = new Set();
  const mergedFacts = new Map();

  for (const nutrient of food) {
    const mappings = mappingsByNutrient.get(nutrient.nutrient.name);
    if (!mappings) {
      unmatchedNutrients.add(nutrient.nutrient.name);
      nutritionFacts.push(nutrient);
      continue;
    }
    const rdisForLifeStageAndAge = rdis.filter((rdi: RDI) => {
      return mappings.some(
        (mapping: UsdaRdiNutrientMapping) => mapping.rdiNutrientName === rdi.nutrient
      );
    });
    for (const rdi of rdisForLifeStageAndAge) {
      const percentDaily = getNutrientRdiPercent(nutrient, rdi);
      const existingFact = mergedFacts.get(nutrient.displayOrder);
      if (existingFact) {
        existingFact.percentDaily += percentDaily;
      } else {
        mergedFacts.set(nutrient.displayOrder, {
          ...nutrient,
          rdi,
          percentDaily,
        });
      }
    }
  }

  mergedFacts.forEach((fact) => {
    nutritionFacts.push(fact);
  });

  return { nutritionFacts, unmatchedNutrients };
};

const Report = () => {
  const rdi: RDI[] = recommendedDailyIntakes as any;
  const nutrition: Food[] = [...ff_nutrition_facts, ...sr_legacy_nutrition_facts].flat();
  const all: NutritionFact[] = [];
  for (let nutri of nutrition) {
    for (let sub of nutri.nutrients) {
      all.push(sub);
    }
  }
  const unmatchedNutrients: any = generateRdiForFood(all, rdi).unmatchedNutrients;

  const myArray = Array.from(unmatchedNutrients);

  return (
    <div>
      <h2>Unmatched Nutrients Report</h2>
      <div>
        {myArray?.map((nutrient: any, index: number) => (
          <li key={index} className="text-textDark">
            {nutrient}
          </li>
        ))}
      </div>
    </div>
  );
};

export default Report;
