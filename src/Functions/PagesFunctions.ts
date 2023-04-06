import { Food } from "../models/index";

export function filterNutrient(food: Food, name: string, unit: string): number {
  const nutrient = food.nutrients.find(
    (nutrient) => nutrient.name === name && nutrient.unit === unit
  );
  /*if (nutrient && name.startsWith("Energy")) {
        console.log([food.name, food.fdcId, nutrient?.name, nutrient?.unit], [name, unit], [nutrient?.amount])
    }*/
  return nutrient ? nutrient.amount : 0;
}

export function generateSEOInfo(
  name: string,
  calories: number,
  protein: number,
  carbohydrates: number,
  fat: number
): { title: string; description: string } {
  const title = `${name} Nutrition Facts: Calories, Protein, Carbs, and Fat`;
  const description = `Learn about the nutrition facts of ${name}. ${calories} calories, ${protein}g protein, ${carbohydrates}g carbs, and ${fat}g fat per serving.`;
  return { title, description };
}

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
