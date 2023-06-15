import { writeJsonToFile } from "../../helpers/shared";
const path = require("path");
const ff_nutrition_facts = require("../../../data/foundation_food_nutrition_facts.json");
const sr_legacy_nutrition_facts = require("../../../data/sr_legacy_food_nutrition_facts.json");
const recommendedDailyIntakes = require("../../../data/rdi.json");
import { spaceToDashes } from "../Functions/PagesFunctions";
import { Food } from "../../models";

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
  const template = path.resolve("src/templates/FoodDetails.tsx");
  foods.forEach((food: Food) => {
    if (food.name) {
      const pagePath = spaceToDashes(food.name);
      createPageFunction({
        path: `${pagePath}`,
        component: template,
        context: {
          food,
          recommendedDailyIntakes,
        },
      });
      ffSearchIndex.push({
        name: food.name,
        hap_name: food.name,
        category: food.category,
        url: `/${pagePath}`,
      });
    }
  });
  writeJsonToFile(`${indexFileName}.json`, ffSearchIndex);
};
