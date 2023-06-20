import React, { useEffect, useState } from "react";
import { FoodDetails as FoodDetailsComponent } from "@forkfacts/components";
import { useStore } from "../helpers/stores";
const mappings = require("../../data/usda_rdi_nutrient_mapping.json");
import { Food, RDI, NutritionFact, USDA } from "@forkfacts/models";
import {
  getAgeRangesForLifeStage,
  getValueRounded,
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

export const generateRdiForFood = (food: NutritionFact[] = [], rdis: RDI[]): NutritionFact[] => {
  const nutritionFacts: NutritionFact[] = [];
  const mergedFacts: Map<number, NutritionFact> = new Map();
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
  const {
    setRecommendedDailyIntakes,
    setFood,
    selectedAge,
    setAge,
    selectedLifeStage,
    setSelectedAge,
  } = useStore((state) => state);
  const nutrition = generateRdiForFood(food.nutrients, recommendedDailyIntakes);
  const [rows, setRows] = useState<NutritionFact[]>([]);
  const ageRanges = getAgeRangesForLifeStage(selectedLifeStage);

  useEffect(() => {
    setRecommendedDailyIntakes(recommendedDailyIntakes);
    setFood(food, rows);
  }, [recommendedDailyIntakes, food, setRecommendedDailyIntakes, setFood, rows]);

  useEffect(() => {
    const gender = selectedLifeStage;
    const age = selectedAge;
    if (!selectedLifeStage && !Object.keys(selectedAge).length) {
      setRows(food.nutrients);
    }
    const nutrientsWithRdis = food.nutrients.map((nutrient) => {
      const nutrientWithRdi = nutrition.filter(
        (nutrientRdi) =>
          nutrientRdi.nutrient.name.toLowerCase() === nutrient.nutrient.name.toLowerCase() &&
          age.start === nutrientRdi?.rdi?.ageStart &&
          age.end === nutrientRdi?.rdi?.ageEnd &&
          age?.ageUnit?.toLowerCase() === nutrientRdi?.rdi?.ageUnit &&
          gender.toLowerCase() === nutrientRdi?.rdi?.applicableFor.toLowerCase()
      )[0];
      const factTableRow: any = {
        ...nutrient,
        displayOrder: nutrient.displayOrder,
        nutrient: {
          name: nutrient.nutrient.name,
          amount: nutrient.nutrient.amount,
          unit: nutrient.nutrient.unit,
        },
        percentDaily: nutrientWithRdi?.percentDaily
          ? getValueRounded(Number(nutrientWithRdi?.percentDaily))
          : undefined,
        rdi: {
          pct: nutrientWithRdi?.rdi?.pct as number,
          unit: nutrient.rdi?.unit,
          ageStart: nutrient.rdi?.ageStart,
          ageEnd: nutrient.rdi?.ageEnd,
          ageUnit: nutrient.rdi?.ageUnit,
          applicableFor: nutrient.rdi?.applicableFor as string,
        },
      };
      return factTableRow;
    });
    setRows(nutrientsWithRdis);
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
