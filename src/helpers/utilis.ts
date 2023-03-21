// import fs from "fs";

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

const mappings: any = require("../../data/usda_rdi_nutrient_mapping.json");

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
