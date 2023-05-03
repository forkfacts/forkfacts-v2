import { writeJsonToFile } from "../helpers/shared";

const path = require("path");
const ff_nutrition_facts = require("../../data/foundation_food_nutrition_facts.json");
const sr_legacy_nutrition_facts = require("../../data/sr_legacy_food_nutrition_facts.json");
const recommendedDailyIntakes = require("../../data/rdi.json");

import { filterNutrient, generateSEOInfo, spaceToDashes } from "../Functions/PagesFunctions";
import { Food } from "../models/pages";

const ENERGY_NAME_ATWATER = "Energy (Atwater General Factors)";
const ENERGY_NAME = "Energy";
const ENERGY_UNIT = "KCAL";
const FAT_NAME = "Total lipid (fat)";
const FAT_UNIT = "G";
const CARBOHYDRATE_NAME = "Carbohydrate, by difference";
const CARBOHYDRATE_UNIT = "G";
const PROTEIN_NAME = "Protein";
const PROTEIN_UNIT = "G";

export const createDetailsPage = (createPage: any) => {
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

interface SearchIndexEntry {
  name: string;
  hap_name: string;
  category: string;
  url: string;
}
const createNutritionTable = ({ createPageFunction, foods, indexFileName }: any) => {
  let ffSearchIndex: SearchIndexEntry[] = [];
  const template = path.resolve("src/templates/DetailsPage.tsx");
  foods.forEach((food: Food) => {
    if (food.name) {
      let calories = filterNutrient(food, ENERGY_NAME_ATWATER, ENERGY_UNIT);
      calories = calories > 0 ? calories : filterNutrient(food, ENERGY_NAME, ENERGY_UNIT);
      const fat = filterNutrient(food, FAT_NAME, FAT_UNIT);
      const carbohydrates = filterNutrient(food, CARBOHYDRATE_NAME, CARBOHYDRATE_UNIT);
      const protein = filterNutrient(food, PROTEIN_NAME, PROTEIN_UNIT);
      const seoInfo = generateSEOInfo(food.name, calories, protein, carbohydrates, fat);
      const foodName = indexFileName === "ff_search_index" ? food.hap_name : food.name; // todo: until the point when we have SR Legacy name clean up
      const pagePath = spaceToDashes(foodName);
      const seo: { title: string; description: string; pagePath: string } = {
        title: seoInfo.title,
        description: seoInfo.description,
        pagePath,
      };
      createPageFunction({
        path: `${pagePath}`,
        component: template,
        context: {
          food,
          seo,
          recommendedDailyIntakes,
        },
      });
      ffSearchIndex.push({
        name: food.name,
        hap_name: foodName,
        category: food.category,
        url: `/${pagePath}`,
      });
      writeJsonToFile(`${indexFileName}.json`, ffSearchIndex);
    }
  });
};
