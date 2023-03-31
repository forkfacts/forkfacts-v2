import { GatsbyNode } from "gatsby";
import { createDetailPage } from "../generators/DetailsPageGenerator";

export const createPages: GatsbyNode["createPages"] = async ({ graphql, actions }) => {
  const { createPage } = actions;
  createDetailPage(createPage);
};
