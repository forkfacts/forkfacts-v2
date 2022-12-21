import path from "path";
import type { GatsbyConfig } from "gatsby";
import { siteMetadata } from "./src/gatsby/siteMetaData";

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

const config: GatsbyConfig = {
  siteMetadata: siteMetadata,
  graphqlTypegen: true,
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    "gatsby-plugin-sitemap",
    "gatsby-plugin-mui-emotion",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-plugin-mdx",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          "@forkfacts/components": path.resolve(__dirname, "src/components"),
          "@forkfacts/helpers": path.resolve(__dirname, "src/helpers"),
          "@forkfacts/models": path.resolve(__dirname, "src/models"),
          "@forkfacts/screens": path.resolve(__dirname, "src/screens"),
          "@forkfacts/styles": path.resolve(__dirname, "src/styles"),
        },
        extensions: [".js", ".jsx", ".ts", ".tsx", ".css"],
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
  ],
};

export default config;
