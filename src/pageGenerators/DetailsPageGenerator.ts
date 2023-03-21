const path = require("path");
import { spaceToDashes, generateSEOTitle, generateSEOMetaDescription } from "../helpers";
import { SearchIndex } from "../models/pages";
import { SeoProps } from "../models/seo";

const ff_nutrition_facts = require("../../data/foundation_food_nutrition_facts.json");
const sr_legacy_nutrition_facts = require("../../data/sr_legacy_food_nutrition_facts.json");

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

const createNutritionTable = ({ createPageFunction, foods, indexFileName }: any) => {
  let ffSearchIndex: SearchIndex = [];
  const template = path.resolve("src/templates/DetailsPage.tsx");
  foods.forEach((food: any) => {
    const pagePath = spaceToDashes(food["name"].toString());
    const seo: SeoProps = {
      title: generateSEOTitle(food.name),
      description: generateSEOMetaDescription(food.name, food.category),
      slug: pagePath,
    };
    createPageFunction({
      path: pagePath,
      component: template,
      context: {
        food,
        seo,
      },
    });
    ffSearchIndex.push({
      name: food.name,
      category: food.category,
      url: `/${pagePath}`,
    });
  });
  // writeJsonToFile(`${indexFileName}.json`, ffSearchIndex);
};
