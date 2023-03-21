// gatsby-node.js
import { GatsbyNode } from "gatsby";
import { createDetailPage } from "../pageGenerators/DetailsPageGenerator";

export const createPages: GatsbyNode["createPages"] = async ({ graphql, actions }) => {
  const { createPage } = actions;
  createDetailPage(createPage);
};
