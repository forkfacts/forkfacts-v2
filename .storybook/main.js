const path = require("path");

module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-controls",
    "@storybook/addon-viewport",
  ],
  webpackFinal: async (config) => {
    // Transpile Gatsby module because Gatsby includes un-transpiled ES6 code.
    config.module.rules[0].exclude = [/node_modules\/(?!(gatsby|gatsby-script)\/)/];

    // Remove core-js to prevent issues with Storybook
    config.module.rules[0].exclude = [/core-js/];

    // Use babel-plugin-remove-graphql-queries to remove static queries from components when rendering in storybook
    config.module.rules[0].use[0].options.plugins.push(
      require.resolve("babel-plugin-remove-graphql-queries")
    );

    // using absolute import accessibility in our stories
    config.resolve.alias["@forkfacts/components"] = path.resolve(__dirname, "../src/components");
    config.resolve.alias["@forkfacts/helpers"] = path.resolve(__dirname, "../src/helpers");
    config.resolve.alias["@forkfacts/screens"] = path.resolve(__dirname, "../src/screens");
    config.resolve.alias["@forkfacts/models"] = path.resolve(__dirname, "../src/models");
    config.resolve.alias["@forkfacts/styles"] = path.resolve(__dirname, "../src/styles/");
    config.resolve.alias["@forkfacts/icons"] = path.resolve(__dirname, "../src/DesignIcons");

    // Load the JSON file as a module
    config.module.rules.push({
      test: /\.json$/,
      loader: "json-loader",
      type: "javascript/auto",
      include: path.resolve(__dirname, "../data"),
    });

    // Set the resolve.modules property to include the directory where the JSON file is located
    config.resolve.modules.push(path.resolve(__dirname, "../data"));

    config.resolve.mainFields = ["browser", "module", "main"];
    return config;
  },
  resolve: {
    modules: [path.resolve(__dirname, "src"), "node_modules"],
  },
  staticDir: "../static",
  framework: "@storybook/react",
  core: {
    builder: "@storybook/builder-webpack5",
  },
};
