import { GatsbyNode } from "gatsby";
import { createDetailsPage } from "../generators/FoodDetails/DetailsPageGenerator";

export const createPages: GatsbyNode["createPages"] = async ({ graphql, actions }) => {
  const { createPage } = actions;
  createDetailsPage(createPage);
};
