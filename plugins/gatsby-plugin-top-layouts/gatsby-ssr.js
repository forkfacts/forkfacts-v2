/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */
export { default as wrapRootElement } from "../../src/roots/wrapRootElement";
export { default as wrapPageElement } from "../../src/roots/wrapPageElement";
/**
 * Read  about it on gatsby website: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-browser/#wrapPageElement
 *
 * The export custom wrappers above allow us to have base index elements like we have in nextjs(_app.tsx | app.js) and react(app.js).
 *
 * This is useful for setting wrapper components around pages that won’t get unmounted on page changes. For setting Provider components, use wrapRootElement.
 *
 * This wrapPageElement serve as default wrapper for all the pages in this application. It can be very useful when we need to make complex routing of similar pages or provide themes to the entire pages components. It is currently providing MUI theme to the pages components.
 *
 *
 * This wrapRootElement does equally the same thing just that it provide functionality to very components in src folder. Without it, it would be impossible or difficult  to work with tools like redux, e.t.c.
 *
 *
 *
 * The src/roots helps with the wrapper functions so we can be able to use them without issues of exporting outside src.
 *
 * * Noted: This is for serverside rendering
 */
