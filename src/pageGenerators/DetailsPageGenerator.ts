const path = require("path");

const ff_nutrition_facts = require("../../data/foundation_food_nutrition_facts.json");
const sr_legacy_nutrition_facts = require("../../data/sr_legacy_food_nutrition_facts.json");

const spaceToDashes = (name: string) => {
  const pathname = name
    .toLowerCase()
    .trim()
    .replace(/[^\w]+/g, "-");
  return pathname.endsWith("-") ? pathname.substr(0, pathname.length - 1) : pathname;
};

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
  let ffSearchIndex: any = [];
  const template = path.resolve("src/templates/DetailsPage.tsx");
  foods.forEach((food: any) => {
    if (food.name) {
      const pagePath = spaceToDashes(food["name"].toString());
      const seo: any = {
        title: food.name,
        description: `${food.name}, ${food.category}`,
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
    }
  });
  // writeJsonToFile(`${indexFileName}.json`, ffSearchIndex);
};
