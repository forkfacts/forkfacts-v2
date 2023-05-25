import path from "path";
import type { GatsbyConfig } from "gatsby";
import { siteMetadata } from "./src/gatsby/siteMetaData";

require("dotenv").config();

const config: GatsbyConfig = {
  siteMetadata: siteMetadata,
  graphqlTypegen: true,
  plugins: [
    `gatsby-plugin-postcss`,
    `gatsby-theme-material-ui`,
    `gatsby-plugin-material-ui`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    "gatsby-plugin-sitemap",
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
          "@forkfacts/icons": path.resolve(__dirname, "src/DesignIcons"),
          "@forkfacts/generate-pages": path.resolve(__dirname, "src/pageGenerators"),
        },
        extensions: [".js", ".jsx", ".ts", ".tsx", ".css"],
      },
    },
    "gatsby-transformer-json",
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
    {
      resolve: `gatsby-plugin-typescript`,
      options: {
        isTSX: true,
        jsxPragma: `jsx`,
        allExtensions: true,
      },
    },
    {
      resolve: "gatsby-plugin-seo",
      options: {
        siteName: "Forkfacts",
        defaultSiteImage: path.resolve("static/icon.png"),
        siteUrl: "https://www.forkfacts.app/",
        twitterCreator: "@ayomiku222",
        twitterSite: "@ayomiku222",
        globalSchema: `{
            "@type": "WebSite",
            "@id": "https://www.forkfacts.app/",
            "url": "https://www.forkfacts.app/",
            "name": "Forkfacts",
            "publisher": {
              "@id": "https://bonsaiilabs.com/"
            },
            "image": {
              "@type": "ImageObject",
              "@id": "https://example.com/#logo",
              "url": "https://example.com/img/logo.png",
              "caption": "Example Company Logo"
            }
          }`,
      },
    },
  ],
};

export default config;
