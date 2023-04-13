const path = require("path");
const recommendedDailyIntakes = require("../../data/rdi.json");

export const createToolsPage = (createPageFunction: any) => {
  try {
    const template = path.resolve("src/templates/tools/ToolsPage.tsx");
    createPageFunction({
      path: "/tools",
      component: template,
      context: {
        pageTitle: "Tools",
      },
    });

    // Create a child page for the "tools" pages
    const childPageTemplate = path.resolve("src/templates/tools/RecommendedDailyIntake.tsx");
    createPageFunction({
      path: "/tools/recommended-daily-intake",
      component: childPageTemplate,
      context: {
        recommendedDailyIntakes,
        seo: {
          pageTitle:
            "Discover Your Daily Recommended Intake and Top Food Sources for Every Nutrient with Forkfacts",
          description:
            "Forkfacts provides personalized recommended daily intake as per NIH guidelines for all age groups, including infants, children, females, males, pregnant and lactating mothers. Find the best food sources for each nutrient and optimize your diet for a healthier life. Start your journey towards a well-nourished lifestyle with Forkfacts today!",
        },
      },
    });
  } catch (error: any) {
    throw new Error(error);
  }
};
