import { GatsbyNode } from "gatsby";
import { createDetailsPage } from "../generators/DetailsPageGenerator";
import { createToolsPage } from "../generators/ToolsGenerator";

export const createPages: GatsbyNode["createPages"] = async ({ graphql, actions }) => {
  const { createPage } = actions;
  createDetailsPage(createPage);
  createToolsPage(createPage);
};
