const path = require("path");
const recommendedDailyIntakes = require("../../data/rdi.json");

export const toolsDetailPage = (createPageFunction: any) => {
  try {
    const template = path.resolve("src/templates/ToolsPage.tsx");
    createPageFunction({
      path: "/tools",
      component: template,
      context: {
        recommendedDailyIntakes,
      },
    });
  } catch (error: any) {
    throw new Error(error);
  }
};
