const path = require("path");
module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
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
    // using abolute import accessibility in our stories
    config.resolve.alias["@forkfacts/components"] = path.resolve(__dirname, "../src/components");
    config.resolve.alias["@forkfacts/helpers"] = path.resolve(__dirname, "../src/helpers");
    config.resolve.alias["@forkfacts/screens"] = path.resolve(__dirname, "../src/screens");
    config.resolve.alias["@forkfacts/styles"] = path.resolve(__dirname, "../src/styles");
    config.resolve.mainFields = ["browser", "module", "main"];
    return config;
  },
  resolve: {
    modules: [path.resolve(__dirname, "src"), "node_modules"],
  },
  staticDirs: ["../public", "../static"],
  framework: "@storybook/react",
  core: {
    builder: "@storybook/builder-webpack5",
  },
};
