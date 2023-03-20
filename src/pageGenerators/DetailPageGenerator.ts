const path = require("path");
import { spaceToDashes } from "@forkfacts/helpers";

const ff_nutrition_facts = require("../../data/foundation_food_nutrition_facts.json");
const sr_legacy_nutrition_facts = require("../../data/sr_legacy_food_nutrition_facts.json");
const rdis = require("../../data/rdi.json");

export const createDetailPage = (createPage: any) => {
  try {
    createNutritionTable({ createPageFunction: createPage, foods: ff_nutrition_facts });
    createNutritionTable({
      createPageFunction: createPage,
      foods: sr_legacy_nutrition_facts,
    });
  } catch (error: any) {
    throw new Error(error);
  }
};

const createNutritionTable = ({ createPageFunction, foods }: any) => {
  // let ffSearchIndex: SearchIndex = [];
  const template = path.resolve("src/templates/DetailsPage.tsx");
  foods.forEach((food: any) => {
    const pagePath = spaceToDashes(food["name"].toString());
    const seo: any = {
      title: food.name,
      description: `(food.name, food.category)`,
      slug: pagePath,
    };
    createPageFunction({
      path: pagePath,
      component: template,
      context: {
        food,
        rdis,
        seo,
      },
    });
  });
};
