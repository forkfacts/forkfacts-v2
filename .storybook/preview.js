import "@storybook/addon-console";
import { action } from "@storybook/addon-actions";
import { CssBaseline } from "@mui/material";
import "@storybook/addon-actions/register";
import { addDecorator } from "@storybook/react";
import { withConsole, setConsoleOptions } from "@storybook/addon-console";
import { ThemeProvider } from "@mui/material";
import { ThemeProvider as Emotion10ThemeProvider } from "@emotion/react";
import "@storybook/addon-actions/register";
import "@fontsource/poppins"; // Defaults to weight 400.
import { customTheme } from "../src/themes/theme";

const optionsCallback = (options) => ({ panelExclude: [...options.panelExclude, /Warning/] });
addDecorator((storyFn, context) => withConsole(optionsCallback)(storyFn)(context));

const panelExclude = setConsoleOptions({}).panelExclude;
setConsoleOptions({
  panelExclude: [...panelExclude, /deprecated/],
});

global.___loader = {
  enqueue: () => {},
  hovering: () => {},
};
global.__BASE_PATH__ = "/";

window.___navigate = (pathname) => {
  action("NavigateTo:")(pathname);
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
};

export const withMuiTheme = (Story) => (
  <Emotion10ThemeProvider theme={customTheme}>
    <ThemeProvider theme={customTheme}>
      <CssBaseline />
      <Story />
    </ThemeProvider>
  </Emotion10ThemeProvider>
);

export const decorators = [withMuiTheme];
