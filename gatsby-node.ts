/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// adapted using https://gist.github.com/clarkdave/53cc050fa58d9a70418f8a76982dd6c8#gistcomment-3064797

"use strict";

require("ts-node").register({
  compilerOptions: {
    module: "commonjs",
    target: "es2017",
  },
});

exports.createPages = require("./src/gatsby/createPages").createPages;

/**
 * This solution is suggested in Gatsby forums to resolve the build error: "cannot resolve fs"
 * https://github.com/gatsbyjs/gatsby/issues/564#issuecomment-527891177
 */
