const path = require("path");
const recommendedDailyIntakes = require("../../data/rdi.json");

export const toolsDetailPage = (createPageFunction: any) => {
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
        pageTitle: "Recommended daily intake",
      },
    });
  } catch (error: any) {
    throw new Error(error);
  }
};
