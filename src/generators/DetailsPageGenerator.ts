export const spaceToDashes = (name: string) => {
  const pathname = name
    .toLowerCase()
    .trim()
    .replace(/[^\w]+/g, "-");
  return pathname.endsWith("-") ? pathname.substr(0, pathname.length - 1) : pathname;
};

export const generateSEOTitle = (foodName: string) => {
  const name = foodName.replace(/\s*\([^)]*\)\s*/g, "");
  return `Nutrition facts - ${name}`;
};

export const generateSEOMetaDescription = (foodName: string, category: string) => {
  return `Nutrient facts from USDA and NIH with the option to filter by nutrients, age and gender for 100gm of  ${foodName} in ${category} category.`;
};

const path = require("path");

const ff_nutrition_facts = require("../../data/foundation_food_nutrition_facts.json");
const sr_legacy_nutrition_facts = require("../../data/sr_legacy_food_nutrition_facts.json");

const recommendedDailyIntakes = require("../../data/rdi.json");

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
        title: generateSEOTitle(food.name),
        description: generateSEOMetaDescription(food.name, food.category),
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
