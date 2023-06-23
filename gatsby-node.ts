import { createPages } from "./src/gatsby/createPages";

exports.createPages = createPages;

exports.onCreateWebpackConfig = ({ stage, loaders, actions }: any) => {
  if (stage === "build-html") {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /offending-module/,
            use: loaders.null(),
          },
        ],
      },
    });
  }
};
