const path = require("path");

module.exports = {
  setupFilesAfterEnv: [path.resolve(__dirname, "./jest-configs/setup-test-env.js")],
  transform: {
    // "^.+\\.(tsx?|jsx?)$": "ts-jest",
    // "\\.svg": "./jest-configs/__mocks__/svgTransform.js",
    "^.+\\.(tsx?|jsx?)$": `./jest-configs/jest-preprocess.js`,
  },
  moduleNameMapper: {
    // "\\.svg": `./jest-configs/__mocks__/file-mocks.js`,
    "\\.svg": `./jest-configs/__mocks__/svgTransform.js`,
    "typeface-*": "identity-obj-proxy",
    ".+\\.(css|styl|less|sass|scss)$": `identity-obj-proxy`,
    ".+\\.(jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": `./jest-configs/__mocks__/file-mocks.js`,
    "^@forkfacts/icons$": "<rootDir>/src/icons",
  },
  testPathIgnorePatterns: [`node_modules`, `.cache`, `public`],
  transformIgnorePatterns: [`node_modules/(?!(gatsby)/)`, `\\.svg`],
  globals: {
    __PATH_PREFIX__: ``,
  },
  testRegex: "(/__tests__/.*|\\.(test|spec))\\.(ts|tsx)$",
  moduleFileExtensions: ["ts", "tsx", "js"],
  collectCoverage: false,
  coverageReporters: ["lcov", "text", "html"],
};
