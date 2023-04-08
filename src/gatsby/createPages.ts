import { GatsbyNode } from "gatsby";
import { createDetailPage } from "../generators/DetailsPageGenerator";
import { toolsDetailPage } from "../generators/ToolsGenerator";

export const createPages: GatsbyNode["createPages"] = async ({ graphql, actions }) => {
  const { createPage } = actions;
  createDetailPage(createPage);
  toolsDetailPage(createPage);
};
