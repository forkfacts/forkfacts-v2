export const spaceToDashes = (name: string) => {
  const pathname = name
    .toLowerCase()
    .trim()
    .replace(/[^\w]+/g, "-");
  return pathname.endsWith("-") ? pathname.substr(0, pathname.length - 1) : pathname;
};

const path = require("path");
const ff_nutrition_facts = require("../../data/foundation_food_nutrition_facts.json");
const sr_legacy_nutrition_facts = require("../../data/sr_legacy_food_nutrition_facts.json");
const recommendedDailyIntakes = require("../../data/rdi.json");
interface Food {
  category: string;
  name: string;
  fdcId: number;
  nutrients: {
    amount: number;
    name: string;
    unit: string;
    displayName: string;
    nutrientGroup: string;
  }[];
}

const ENERGY_NAME = "Energy (Atwater General Factors)";
const ENERGY_UNIT = "KCAL";
const FAT_NAME = "Total lipid (fat)";
const FAT_UNIT = "G";
const CARBOHYDRATE_NAME = "Carbohydrate, by difference";
const CARBOHYDRATE_UNIT = "G";
const PROTEIN_NAME = "Protein";
const PROTEIN_UNIT = "G";

export const createDetailPage = (createPage: any) => {
  try {
    createNutritionTable({
      createPageFunction: createPage,
      foods: ff_nutrition_facts,
      indexFileName: "ff_search_index",
    });
    createNutritionTable({
      createPageFunction: createPage,
      foods: sr_legacy_nutrition_facts,
      indexFileName: "sr_search_index",
    });
  } catch (error: any) {
    throw new Error(error);
  }
};

const createNutritionTable = ({ createPageFunction, foods }: any) => {
  let ffSearchIndex: any = [];
  const template = path.resolve("src/templates/DetailsPage.tsx");
  foods.forEach((food: Food) => {
    if (food.name) {
      function filterNutrient(food: Food, name: string, unit: string): number {
        const nutrient = food.nutrients.find(
          (nutrient) => nutrient.name === name && nutrient.unit === unit
        );
        return nutrient ? nutrient.amount : 0;
      }
      function generateSEOInfo(
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
      const calories = filterNutrient(food, ENERGY_NAME, ENERGY_UNIT);
      const fat = filterNutrient(food, FAT_NAME, FAT_UNIT);
      const carbohydrates = filterNutrient(food, CARBOHYDRATE_NAME, CARBOHYDRATE_UNIT);
      const protein = filterNutrient(food, PROTEIN_NAME, PROTEIN_UNIT);
      const seoInfo = generateSEOInfo(food.name, calories, protein, carbohydrates, fat);
      const pagePath = spaceToDashes(food["name"].toString());
      const seo: any = {
        title: seoInfo.title,
        description: seoInfo.description,
        pagePath,
      };
      createPageFunction({
        path: pagePath,
        component: template,
        context: {
          food,
          seo,
          recommendedDailyIntakes,
        },
      });
      ffSearchIndex.push({
        name: food.name,
        category: food.category,
        url: `/${pagePath}`,
      });
    }
  });
};
