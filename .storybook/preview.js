import "@storybook/addon-console";
import { action } from "@storybook/addon-actions";
import { CssBaseline } from "@mui/material";
import { addDecorator } from "@storybook/react";
import { withConsole, setConsoleOptions } from "@storybook/addon-console";
import { ThemeProvider } from "@mui/material/styles";
import "@storybook/addon-actions/register";
import "@fontsource/poppins/500.css";
import { customTheme } from "../src/themes/theme";
import { MINIMAL_VIEWPORTS } from "@storybook/addon-viewport";

const optionsCallback = (options) => ({ panelExclude: [...options.panelExclude, /Warning/] });
addDecorator((storyFn, context) => withConsole(optionsCallback)(storyFn)(context));

const panelExclude = setConsoleOptions({}).panelExclude;
setConsoleOptions({
  panelExclude: [...panelExclude, /deprecated/],
});
/**
 *
 * This was installed automatically with storybook when using with typescript project(https://www.gatsbyjs.com/docs/how-to/testing/visual-testing-with-storybook/).
 *
 */
global.___loader = {
  enqueue: () => {},
  hovering: () => {},
};
global.__BASE_PATH__ = "/";

window.___navigate = (pathname) => {
  action("NavigateTo:")(pathname);
};

const customViewports = {
  iphone8: {
    name: "iphone8",
    styles: {
      width: "414px",
      height: "100%",
    },
  },
  iphone8X: {
    name: "iphone8X",
    styles: {
      width: "533px",
      height: "100%",
    },
  },
};

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    expanded: true, // Adds the description and default columns
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  options: {
    storySort: (a, b) =>
      a[1].kind === b[1].kind ? 0 : a[1].id.localeCompare(b[1].id, undefined, { numeric: true }),
  },
  viewport: {
    viewports: {
      ...MINIMAL_VIEWPORTS,
      ...customViewports,
    },
  },
};
/**
 *
 * Storybook global styles for all the components stories
 *
 */
export const globalTypes = {
  theme: {
    name: "Theme",
    title: "Theme",
    description: "Theme for your components",
    defaultValue: "light",
    toolbar: {
      icon: "paintbrush",
      dynamicTitle: true,
      items: [
        { value: "light", left: "☀️", title: "Light mode" },
        { value: "dark", left: "🌙", title: "Dark mode" },
      ],
    },
  },
};
/**
 *
 * Serve our storybook components and also provide MUI theme to the components
 *
 */
export const decorators = [
  (Story) => (
    <ThemeProvider theme={customTheme}>
      <CssBaseline />
      <Story />
    </ThemeProvider>
  ),
];
