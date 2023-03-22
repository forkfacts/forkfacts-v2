// import fs from "fs";

const mappings: any = require("../../data/usda_rdi_nutrient_mapping.json");
import { allAges, lifeStageItems } from "../RealData/realData";

const ARTIFACT_PATH = ".raw";

/**
 * The purpose is to use `-` as separator in the URL naming scheme.
 * This is important for SEO purposes
 * Watch https://www.youtube.com/watch?v=AQcSFsQyct8 to learn more
 * @param name
 */
export const spaceToDashes = (name: string) => {
  const pathname = name
    .toLowerCase()
    .trim()
    .replace(/[^\w]+/g, "-");
  return pathname.endsWith("-") ? pathname.substr(0, pathname.length - 1) : pathname;
};

// export const writeJsonToFile = (fileName: string, jsonData: Object[]) => {
//   if (!fs.existsSync(ARTIFACT_PATH)) fs.mkdirSync(ARTIFACT_PATH);
//   fs.writeFile(`${ARTIFACT_PATH}/${fileName}`, JSON.stringify(jsonData), (err) => {
//     if (err) throw err;
//     console.log(`Done writing to file ${fileName}`);
//   });
// };

export const generateSEOTitle = (foodName: string) => {
  const name = foodName.replace(/\s*\([^)]*\)\s*/g, "");
  return `Nutrition facts - ${name}`;
};

export const generateSEOMetaDescription = (foodName: string, category: string) => {
  return `Nutrient facts from USDA and NIH with the option to filter by nutrients, age and gender for 100gm of  ${foodName} in ${category} category.`;
};

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
export const generateRdiForFood = (food: any, rdis: any[]): any[] => {
  return food.nutrients
    .map((nutrient: any) => {
      const mappedRdi = mappingsByNutrient.get(nutrient.name);
      if (!mappedRdi) return { nutrient };
      const nutrientRdisForGenderAge = rdis.filter(
        (rdi) => rdi.nutrient === mappedRdi.rdiNutrientName
      );
      return nutrientRdisForGenderAge.map((rdi) => {
        const percentDaily = getNutrientRdiPercent(nutrient, rdi);
        return { nutrient, rdi, percentDaily };
      });
    })
    .flat();
};

export function getAgeRangesForLifeStage(selectedLifeStageName: string = "Females"): any[] {
  const selectedLifeStage = lifeStageItems.find((item) => item.name === selectedLifeStageName);
  if (!selectedLifeStage) {
    return [];
  }
  const ageRanges = allAges.map((ageRange) => {
    switch (selectedLifeStageName) {
      case "Infants":
        return ageRange.ageUnit === "month" && ageRange.start >= 0 && ageRange?.end! <= 12
          ? ageRange
          : null;
      case "Children":
        return ageRange.ageUnit === "year" && ageRange.start >= 1 && ageRange?.end! <= 8
          ? ageRange
          : null;

      case "Males":
        return ageRange.ageUnit === "year" && ageRange.start >= 9 ? ageRange : null;
      case "Females":
        return ageRange.ageUnit === "year" && ageRange.start >= 9 ? ageRange : null;
      case "Pregnant":
        return ageRange.ageUnit === "year" && ageRange.start >= 14 && ageRange.end <= 50
          ? ageRange
          : null;
      case "Lactation":
        return ageRange.ageUnit === "year" && ageRange.start >= 14 && ageRange.end <= 50
          ? ageRange
          : null;

      default:
        return null;
    }
  });
  return ageRanges.filter((range) => range !== null);
}
