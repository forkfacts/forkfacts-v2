(self.webpackChunkforkfacts_v2 = self.webpackChunkforkfacts_v2 || []).push([
  [179],
  {
    "./.storybook/preview.js-generated-config-entry.js": (
      __unused_webpack_module,
      __unused_webpack___webpack_exports__,
      __webpack_require__
    ) => {
      "use strict";
      var preview_namespaceObject = {};
      __webpack_require__.r(preview_namespaceObject),
        __webpack_require__.d(preview_namespaceObject, {
          __namedExportsOrder: () => __namedExportsOrder,
          decorators: () => decorators,
          parameters: () => parameters,
          withMuiTheme: () => withMuiTheme,
        });
      __webpack_require__("./node_modules/core-js/modules/es.object.keys.js"),
        __webpack_require__("./node_modules/core-js/modules/es.symbol.js"),
        __webpack_require__("./node_modules/core-js/modules/es.array.filter.js"),
        __webpack_require__(
          "./node_modules/core-js/modules/es.object.get-own-property-descriptor.js"
        ),
        __webpack_require__("./node_modules/core-js/modules/es.array.for-each.js"),
        __webpack_require__("./node_modules/core-js/modules/web.dom-collections.for-each.js"),
        __webpack_require__(
          "./node_modules/core-js/modules/es.object.get-own-property-descriptors.js"
        ),
        __webpack_require__("./node_modules/core-js/modules/es.object.define-properties.js"),
        __webpack_require__("./node_modules/core-js/modules/es.object.define-property.js");
      var ClientApi = __webpack_require__(
          "./node_modules/@storybook/client-api/dist/esm/ClientApi.js"
        ),
        dist =
          (__webpack_require__("./node_modules/core-js/modules/es.array.concat.js"),
          __webpack_require__("./node_modules/core-js/modules/es.array.is-array.js"),
          __webpack_require__("./node_modules/core-js/modules/es.symbol.description.js"),
          __webpack_require__("./node_modules/core-js/modules/es.object.to-string.js"),
          __webpack_require__("./node_modules/core-js/modules/es.symbol.iterator.js"),
          __webpack_require__("./node_modules/core-js/modules/es.string.iterator.js"),
          __webpack_require__("./node_modules/core-js/modules/es.array.iterator.js"),
          __webpack_require__("./node_modules/core-js/modules/web.dom-collections.iterator.js"),
          __webpack_require__("./node_modules/core-js/modules/es.array.from.js"),
          __webpack_require__("./node_modules/core-js/modules/es.array.slice.js"),
          __webpack_require__("./node_modules/core-js/modules/es.function.name.js"),
          __webpack_require__("./node_modules/@storybook/addon-console/dist/index.js")),
        esm = __webpack_require__("./node_modules/@storybook/addon-actions/dist/esm/index.js"),
        CssBaseline = __webpack_require__(
          "./node_modules/@mui/material/esm/CssBaseline/CssBaseline.js"
        ),
        client =
          (__webpack_require__("./node_modules/@storybook/addon-actions/register.js"),
          __webpack_require__("./node_modules/@storybook/react/dist/esm/client/index.js")),
        ThemeProvider = __webpack_require__(
          "./node_modules/@mui/system/esm/ThemeProvider/ThemeProvider.js"
        ),
        customTheme =
          (__webpack_require__("./node_modules/@fontsource/poppins/index.css"),
          (0, __webpack_require__("./node_modules/@mui/material/esm/styles/createTheme.js").Z)({
            typography: { fontFamily: "Poppins" },
          })),
        jsx_runtime = __webpack_require__("./node_modules/react/jsx-runtime.js");
      function _toConsumableArray(arr) {
        return (
          (function _arrayWithoutHoles(arr) {
            if (Array.isArray(arr)) return _arrayLikeToArray(arr);
          })(arr) ||
          (function _iterableToArray(iter) {
            if (
              ("undefined" != typeof Symbol && null != iter[Symbol.iterator]) ||
              null != iter["@@iterator"]
            )
              return Array.from(iter);
          })(arr) ||
          (function _unsupportedIterableToArray(o, minLen) {
            if (!o) return;
            if ("string" == typeof o) return _arrayLikeToArray(o, minLen);
            var n = Object.prototype.toString.call(o).slice(8, -1);
            "Object" === n && o.constructor && (n = o.constructor.name);
            if ("Map" === n || "Set" === n) return Array.from(o);
            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
              return _arrayLikeToArray(o, minLen);
          })(arr) ||
          (function _nonIterableSpread() {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function _arrayLikeToArray(arr, len) {
        (null == len || len > arr.length) && (len = arr.length);
        for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
        return arr2;
      }
      var optionsCallback = function optionsCallback(options) {
        return { panelExclude: [].concat(_toConsumableArray(options.panelExclude), [/Warning/]) };
      };
      (0, client.addDecorator)(function (storyFn, context) {
        return (0, dist.A5)(optionsCallback)(storyFn)(context);
      });
      var panelExclude = (0, dist.H5)({}).panelExclude;
      (0, dist.H5)({ panelExclude: [].concat(_toConsumableArray(panelExclude), [/deprecated/]) }),
        (__webpack_require__.g.___loader = {
          enqueue: function enqueue() {},
          hovering: function hovering() {},
        }),
        (__webpack_require__.g.__BASE_PATH__ = "/"),
        (window.___navigate = function (pathname) {
          (0, esm.action)("NavigateTo:")(pathname);
        });
      var parameters = {
          actions: { argTypesRegex: "^on[A-Z].*" },
          controls: { expanded: !0, matchers: { color: /(background|color)$/i, date: /Date$/ } },
          options: {
            storySort: function storySort(a, b) {
              return a[1].kind === b[1].kind
                ? 0
                : a[1].id.localeCompare(b[1].id, void 0, { numeric: !0 });
            },
          },
        },
        withMuiTheme = function withMuiTheme(Story) {
          return (0, jsx_runtime.jsxs)(ThemeProvider.Z, {
            theme: customTheme,
            children: [(0, jsx_runtime.jsx)(CssBaseline.ZP, {}), (0, jsx_runtime.jsx)(Story, {})],
          });
        };
      withMuiTheme.displayName = "withMuiTheme";
      var decorators = [withMuiTheme],
        __namedExportsOrder = ["parameters", "withMuiTheme", "decorators"];
      function ownKeys(object, enumerableOnly) {
        var keys = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var symbols = Object.getOwnPropertySymbols(object);
          enumerableOnly &&
            (symbols = symbols.filter(function (sym) {
              return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            })),
            keys.push.apply(keys, symbols);
        }
        return keys;
      }
      function _defineProperty(obj, key, value) {
        return (
          key in obj
            ? Object.defineProperty(obj, key, {
                value,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (obj[key] = value),
          obj
        );
      }
      (withMuiTheme.__docgenInfo = { description: "", methods: [], displayName: "withMuiTheme" }),
        "undefined" != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES[".storybook/preview.js"] = {
            name: "withMuiTheme",
            docgenInfo: withMuiTheme.__docgenInfo,
            path: ".storybook/preview.js",
          }),
        Object.keys(preview_namespaceObject).forEach(function (key) {
          var value = preview_namespaceObject[key];
          switch (key) {
            case "args":
              return (0, ClientApi.uc)(value);
            case "argTypes":
              return (0, ClientApi.v9)(value);
            case "decorators":
              return value.forEach(function (decorator) {
                return (0, ClientApi.$9)(decorator, !1);
              });
            case "loaders":
              return value.forEach(function (loader) {
                return (0, ClientApi.HZ)(loader, !1);
              });
            case "parameters":
              return (0, ClientApi.h1)(
                (function _objectSpread(target) {
                  for (var i = 1; i < arguments.length; i++) {
                    var source = null != arguments[i] ? arguments[i] : {};
                    i % 2
                      ? ownKeys(Object(source), !0).forEach(function (key) {
                          _defineProperty(target, key, source[key]);
                        })
                      : Object.getOwnPropertyDescriptors
                      ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source))
                      : ownKeys(Object(source)).forEach(function (key) {
                          Object.defineProperty(
                            target,
                            key,
                            Object.getOwnPropertyDescriptor(source, key)
                          );
                        });
                  }
                  return target;
                })({}, value),
                !1
              );
            case "argTypesEnhancers":
              return value.forEach(function (enhancer) {
                return (0, ClientApi.My)(enhancer);
              });
            case "argsEnhancers":
              return value.forEach(function (enhancer) {
                return (0, ClientApi._C)(enhancer);
              });
            case "render":
              return (0, ClientApi.$P)(value);
            case "globals":
            case "globalTypes":
              var v = {};
              return (v[key] = value), (0, ClientApi.h1)(v, !1);
            case "__namedExportsOrder":
            case "decorateStory":
            case "renderToDOM":
              return null;
            default:
              return console.log(key + " was not supported :( !");
          }
        });
    },
    "./src/components/FactSearchLists/FactRecentSearchLists.stories.tsx": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      "use strict";
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Grouped: () => Grouped,
          Lists: () => Lists,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => __WEBPACK_DEFAULT_EXPORT__,
        });
      __webpack_require__("./node_modules/core-js/modules/es.array.slice.js"),
        __webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),
        __webpack_require__("./node_modules/react/index.js");
      var _storybook_addon_viewport__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          "./node_modules/@storybook/addon-viewport/dist/esm/preview.js"
        ),
        _forkfacts_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          "./src/components/index.tsx"
        ),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          "./node_modules/react/jsx-runtime.js"
        );
      const __WEBPACK_DEFAULT_EXPORT__ = {
        title: "Components/FactSearchLists",
        component: _forkfacts_components__WEBPACK_IMPORTED_MODULE_4__.dK,
        parameters: {
          viewport: { viewports: _storybook_addon_viewport__WEBPACK_IMPORTED_MODULE_3__.p },
        },
      };
      var recentLists = [
          { image: "/recentImg.png", name: "Kidney beans light, Legume", path: "/:id" },
          { image: "/recentImg.png", name: "Grape fruit juices", path: "/:id" },
          { image: "/recentImg.png", name: "Baked white bread, Baked products", path: "/:id" },
          {
            image: "/recentImg.png",
            name: "Grape fruit juice unsweentened, Fruit ...",
            path: "/:id",
          },
          { image: "/recentImg.png", name: "Banana dehydrated/ banana powder", path: "/:id" },
        ],
        groupListsTypes = [
          { groupTitle: "FRUIT AND FRUIT JUICES", listItems: recentLists },
          { groupTitle: "BABY FOODS", listItems: recentLists.slice(0, 1) },
          { groupTitle: "SWEETS", listItems: recentLists.slice(0, 2) },
        ],
        Grouped = function Grouped(args) {
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(
            _forkfacts_components__WEBPACK_IMPORTED_MODULE_4__.dK,
            Object.assign({}, args)
          );
        };
      (Grouped.displayName = "Grouped"),
        (Grouped.parameters = { viewport: { defaultViewport: "iphone5" } }),
        (Grouped.args = { groupLists: groupListsTypes, grouped: !0 });
      var Lists = function Lists(args) {
        return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(
          _forkfacts_components__WEBPACK_IMPORTED_MODULE_4__.dK,
          Object.assign({}, args)
        );
      };
      (Lists.displayName = "Lists"),
        (Lists.parameters = { viewport: { defaultViewport: "iphone5" } }),
        (Lists.args = { recentLists }),
        (Grouped.parameters = Object.assign(
          { storySource: { source: "(args) => (\n  <FactSearchLists {...args} />\n)" } },
          Grouped.parameters
        )),
        (Lists.parameters = Object.assign(
          { storySource: { source: "(args) => (\n  <FactSearchLists {...args} />\n)" } },
          Lists.parameters
        ));
      var __namedExportsOrder = ["Grouped", "Lists"];
    },
    "./src/components/FactTable/FactTable.stories.tsx": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      "use strict";
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Desktop: () => Desktop,
          Mobile: () => Mobile,
          Tablet: () => Tablet,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => __WEBPACK_DEFAULT_EXPORT__,
        });
      __webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),
        __webpack_require__("./node_modules/react/index.js");
      var _storybook_addon_viewport__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          "./node_modules/@storybook/addon-viewport/dist/esm/preview.js"
        ),
        _forkfacts_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          "./src/components/index.tsx"
        ),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          "./node_modules/react/jsx-runtime.js"
        );
      const __WEBPACK_DEFAULT_EXPORT__ = {
        title: "Components/FactTable",
        component: _forkfacts_components__WEBPACK_IMPORTED_MODULE_3__.BP,
        parameters: {
          viewport: { viewports: _storybook_addon_viewport__WEBPACK_IMPORTED_MODULE_2__.p },
        },
      };
      var rows = [
          {
            id: 1,
            nutrient: "Water",
            amount: 72.3,
            rdiAmount: 10,
            amountUnit: "g",
            dailyValue: 2.68,
          },
          {
            id: 2,
            nutrient: "Energy",
            amount: 167,
            rdiAmount: 200,
            amountUnit: "kcal",
            dailyValue: 0.12,
          },
          {
            id: 3,
            nutrient: "Protein",
            amount: 1.96,
            rdiAmount: 20,
            amountUnit: "g",
            dailyValue: 5.01,
          },
          { id: 4, nutrient: "Sugars, total including NLEA", amount: 0.3, amountUnit: "g" },
          {
            id: 5,
            nutrient: "Calcium, Ca",
            amount: 1300,
            rdiAmount: 1600,
            amountUnit: "mg",
            dailyValue: 7,
          },
          {
            id: 6,
            nutrient: "MUFA 22:1 n-9",
            amount: 196,
            rdiAmount: 565,
            amountUnit: "g",
            dailyValue: 15.01,
          },
          {
            id: 7,
            nutrient: "MUFA 24:1 c",
            amount: 2.3,
            rdiAmount: 2134,
            amountUnit: "g",
            dailyValue: 0.23,
          },
          {
            id: 8,
            nutrient: "Carotene, beta",
            amount: 300,
            rdiAmount: 1500,
            amountUnit: "mg",
            dailyValue: 67,
          },
        ],
        Desktop = function Desktop() {
          return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(
            _forkfacts_components__WEBPACK_IMPORTED_MODULE_3__.BP,
            { rows }
          );
        };
      Desktop.displayName = "Desktop";
      var Mobile = function Mobile() {
        return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(
          _forkfacts_components__WEBPACK_IMPORTED_MODULE_3__.BP,
          { rows }
        );
      };
      (Mobile.displayName = "Mobile"),
        (Mobile.parameters = { viewport: { defaultViewport: "iphone5" } });
      var Tablet = function Tablet() {
        return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(
          _forkfacts_components__WEBPACK_IMPORTED_MODULE_3__.BP,
          { rows }
        );
      };
      (Tablet.displayName = "Tablet"),
        (Tablet.parameters = { viewport: { defaultViewport: "ipad" } }),
        (Desktop.parameters = Object.assign(
          { storySource: { source: "() => <FactTable rows={rows} />" } },
          Desktop.parameters
        )),
        (Mobile.parameters = Object.assign(
          { storySource: { source: "() => <FactTable rows={rows} />" } },
          Mobile.parameters
        )),
        (Tablet.parameters = Object.assign(
          { storySource: { source: "() => <FactTable rows={rows} />" } },
          Tablet.parameters
        ));
      var __namedExportsOrder = ["Desktop", "Mobile", "Tablet"];
    },
    "./src/components/SearchCategory/SearchCategory.stories.tsx": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      "use strict";
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Mobile: () => Mobile,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => __WEBPACK_DEFAULT_EXPORT__,
        });
      __webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),
        __webpack_require__("./node_modules/react/index.js");
      var _storybook_addon_viewport__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          "./node_modules/@storybook/addon-viewport/dist/esm/preview.js"
        ),
        _forkfacts_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          "./src/components/index.tsx"
        ),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          "./node_modules/react/jsx-runtime.js"
        );
      const __WEBPACK_DEFAULT_EXPORT__ = {
        title: "Components/SearchCategory",
        component: _forkfacts_components__WEBPACK_IMPORTED_MODULE_3__.B8,
        parameters: {
          viewport: { viewports: _storybook_addon_viewport__WEBPACK_IMPORTED_MODULE_2__.p },
        },
      };
      var Mobile = function Mobile() {
        return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(
          _forkfacts_components__WEBPACK_IMPORTED_MODULE_3__.B8,
          {}
        );
      };
      (Mobile.displayName = "Mobile"),
        (Mobile.parameters = { viewport: { defaultViewport: "iphone5" } }),
        (Mobile.parameters = Object.assign(
          { storySource: { source: "() => <SearchCategory />" } },
          Mobile.parameters
        ));
      var __namedExportsOrder = ["Mobile"];
    },
    "./src/components/SearchHeader/SearchHeader.stories.tsx": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      "use strict";
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Mobile: () => Mobile,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => __WEBPACK_DEFAULT_EXPORT__,
        });
      __webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),
        __webpack_require__("./node_modules/react/index.js");
      var _storybook_addon_viewport__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          "./node_modules/@storybook/addon-viewport/dist/esm/preview.js"
        ),
        _forkfacts_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          "./src/components/index.tsx"
        ),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          "./node_modules/react/jsx-runtime.js"
        );
      const __WEBPACK_DEFAULT_EXPORT__ = {
        title: "Components/SearchHeader",
        component: _forkfacts_components__WEBPACK_IMPORTED_MODULE_3__.s8,
        parameters: {
          viewport: { viewports: _storybook_addon_viewport__WEBPACK_IMPORTED_MODULE_2__.p },
        },
      };
      var Mobile = function Mobile(args) {
        return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(
          _forkfacts_components__WEBPACK_IMPORTED_MODULE_3__.s8,
          Object.assign({}, args)
        );
      };
      (Mobile.displayName = "Mobile"),
        (Mobile.parameters = { viewport: { defaultViewport: "iphone5" } }),
        (Mobile.parameters = Object.assign(
          { storySource: { source: "(args) => <SearchHeader {...args} />" } },
          Mobile.parameters
        ));
      var __namedExportsOrder = ["Mobile"];
    },
    "./src/components/SearchStatus/SearchStatus.stories.tsx": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      "use strict";
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Mobile: () => Mobile,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => __WEBPACK_DEFAULT_EXPORT__,
        });
      __webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),
        __webpack_require__("./node_modules/react/index.js");
      var _storybook_addon_viewport__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          "./node_modules/@storybook/addon-viewport/dist/esm/preview.js"
        ),
        _forkfacts_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          "./src/components/index.tsx"
        ),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          "./node_modules/react/jsx-runtime.js"
        );
      const __WEBPACK_DEFAULT_EXPORT__ = {
        title: "Components/SearchStatus",
        component: _forkfacts_components__WEBPACK_IMPORTED_MODULE_3__.SV,
        parameters: {
          viewport: { viewports: _storybook_addon_viewport__WEBPACK_IMPORTED_MODULE_2__.p },
        },
        argTypes: { status: { control: "select", options: ["recentScreen", "ResultsScreen"] } },
      };
      var Mobile = function Mobile(args) {
        return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(
          _forkfacts_components__WEBPACK_IMPORTED_MODULE_3__.SV,
          Object.assign({}, args)
        );
      };
      (Mobile.displayName = "Mobile"),
        (Mobile.parameters = { viewport: { defaultViewport: "iphone5" } }),
        (Mobile.args = { status: "recentScreen" }),
        (Mobile.parameters = Object.assign(
          { storySource: { source: "(args) => <SearchStatus {...args} />" } },
          Mobile.parameters
        ));
      var __namedExportsOrder = ["Mobile"];
    },
    "./src/screens/SearchScreens/RecentSearch/RecentSearch.stories.tsx": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      "use strict";
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Mobile: () => Mobile,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => __WEBPACK_DEFAULT_EXPORT__,
        });
      __webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),
        __webpack_require__("./node_modules/react/index.js");
      var _storybook_addon_viewport__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          "./node_modules/@storybook/addon-viewport/dist/esm/preview.js"
        ),
        _forkfacts_screens__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__("./src/screens/index.tsx"),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          "./node_modules/react/jsx-runtime.js"
        );
      const __WEBPACK_DEFAULT_EXPORT__ = {
        title: "Screens/SearchScreen/RecentSearchScreen",
        component: _forkfacts_screens__WEBPACK_IMPORTED_MODULE_3__._W,
        parameters: {
          viewport: { viewports: _storybook_addon_viewport__WEBPACK_IMPORTED_MODULE_2__.p },
        },
      };
      var Mobile = function Mobile(args) {
        return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(
          _forkfacts_screens__WEBPACK_IMPORTED_MODULE_3__._W,
          Object.assign({}, args)
        );
      };
      (Mobile.displayName = "Mobile"),
        (Mobile.parameters = { viewport: { defaultViewport: "iphone5" } }),
        (Mobile.args = { status: "ResultsScreen" }),
        (Mobile.parameters = Object.assign(
          { storySource: { source: "(args) => (\n  <RecentSearchScreen {...args} />\n)" } },
          Mobile.parameters
        ));
      var __namedExportsOrder = ["Mobile"];
    },
    "./src/screens/SearchScreens/SearchResults/SearchResults.stories.tsx": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      "use strict";
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Mobile: () => Mobile,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => __WEBPACK_DEFAULT_EXPORT__,
        });
      __webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),
        __webpack_require__("./node_modules/react/index.js");
      var _storybook_addon_viewport__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          "./node_modules/@storybook/addon-viewport/dist/esm/preview.js"
        ),
        _forkfacts_screens__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__("./src/screens/index.tsx"),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          "./node_modules/react/jsx-runtime.js"
        );
      const __WEBPACK_DEFAULT_EXPORT__ = {
        title: "Screens/SearchScreen/SearchResultsScreen",
        component: _forkfacts_screens__WEBPACK_IMPORTED_MODULE_3__.rS,
        parameters: {
          viewport: { viewports: _storybook_addon_viewport__WEBPACK_IMPORTED_MODULE_2__.p },
        },
      };
      var Mobile = function Mobile(args) {
        return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(
          _forkfacts_screens__WEBPACK_IMPORTED_MODULE_3__.rS,
          Object.assign({}, args)
        );
      };
      (Mobile.displayName = "Mobile"),
        (Mobile.parameters = { viewport: { defaultViewport: "iphone5" } }),
        (Mobile.args = { status: "ResultsScreen" }),
        (Mobile.parameters = Object.assign(
          { storySource: { source: "(args) => (\n  <SearchResultsScreen {...args} />\n)" } },
          Mobile.parameters
        ));
      var __namedExportsOrder = ["Mobile"];
    },
    "./src/screens/SearchScreens/SearchScreen.stories.tsx": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      "use strict";
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          Mobile: () => Mobile,
          __namedExportsOrder: () => __namedExportsOrder,
          default: () => __WEBPACK_DEFAULT_EXPORT__,
        });
      __webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),
        __webpack_require__("./node_modules/react/index.js");
      var _storybook_addon_viewport__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          "./node_modules/@storybook/addon-viewport/dist/esm/preview.js"
        ),
        _forkfacts_screens__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__("./src/screens/index.tsx"),
        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          "./node_modules/react/jsx-runtime.js"
        );
      const __WEBPACK_DEFAULT_EXPORT__ = {
        title: "Screens/SearchScreen/Home",
        component: _forkfacts_screens__WEBPACK_IMPORTED_MODULE_3__.Lo,
        parameters: {
          viewport: { viewports: _storybook_addon_viewport__WEBPACK_IMPORTED_MODULE_2__.p },
        },
      };
      var Mobile = function Mobile() {
        return (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(
          _forkfacts_screens__WEBPACK_IMPORTED_MODULE_3__.Lo,
          {}
        );
      };
      (Mobile.displayName = "Mobile"),
        (Mobile.parameters = { viewport: { defaultViewport: "iphone5" } }),
        (Mobile.parameters = Object.assign(
          { storySource: { source: "() => <SearchScreen />" } },
          Mobile.parameters
        ));
      var __namedExportsOrder = ["Mobile"];
    },
    "./src/components/index.tsx": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      "use strict";
      __webpack_require__.d(__webpack_exports__, {
        dK: () => FactSearchLists_FactRecentSearchLists,
        BP: () => components_FactTable_FactTable,
        B8: () => SearchCategory,
        s8: () => components_SearchHeader_SearchHeader,
        SV: () => SearchStatus,
      });
      __webpack_require__("./node_modules/core-js/modules/es.symbol.js"),
        __webpack_require__("./node_modules/core-js/modules/es.symbol.description.js");
      var react = __webpack_require__("./node_modules/react/index.js");
      __webpack_require__("./node_modules/gatsby/cache-dir/gatsby-browser-entry.js");
      var jsx_runtime = __webpack_require__("./node_modules/react/jsx-runtime.js");
      try {
        (Seo.displayName = "Seo"),
          (Seo.__docgenInfo = {
            description: "",
            displayName: "Seo",
            props: {
              title: {
                defaultValue: null,
                description: "",
                name: "title",
                required: !0,
                type: { name: "string" },
              },
              description: {
                defaultValue: null,
                description: "",
                name: "description",
                required: !1,
                type: { name: "string" },
              },
              image: {
                defaultValue: null,
                description: "",
                name: "image",
                required: !1,
                type: { name: "string" },
              },
              siteUrl: {
                defaultValue: null,
                description: "",
                name: "siteUrl",
                required: !1,
                type: { name: "string" },
              },
              pathname: {
                defaultValue: null,
                description: "",
                name: "pathname",
                required: !1,
                type: { name: "string" },
              },
            },
          }),
          "undefined" != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES["src/components/Seo/Seo.tsx#Seo"] = {
              docgenInfo: Seo.__docgenInfo,
              name: "Seo",
              path: "src/components/Seo/Seo.tsx#Seo",
            });
      } catch (__react_docgen_typescript_loader_error) {}
      __webpack_require__("./node_modules/core-js/modules/es.number.to-fixed.js"),
        __webpack_require__("./node_modules/core-js/modules/es.array.is-array.js"),
        __webpack_require__("./node_modules/core-js/modules/es.object.to-string.js"),
        __webpack_require__("./node_modules/core-js/modules/es.symbol.iterator.js"),
        __webpack_require__("./node_modules/core-js/modules/es.string.iterator.js"),
        __webpack_require__("./node_modules/core-js/modules/es.array.iterator.js"),
        __webpack_require__("./node_modules/core-js/modules/web.dom-collections.iterator.js"),
        __webpack_require__("./node_modules/core-js/modules/es.array.slice.js"),
        __webpack_require__("./node_modules/core-js/modules/es.function.name.js"),
        __webpack_require__("./node_modules/core-js/modules/es.array.from.js");
      var DataGrid = __webpack_require__("./node_modules/@mui/x-data-grid/DataGrid/DataGrid.js"),
        Typography = __webpack_require__(
          "./node_modules/@mui/material/esm/Typography/Typography.js"
        ),
        Box = __webpack_require__("./node_modules/@mui/material/esm/Box/Box.js"),
        makeStyles = __webpack_require__("./node_modules/@mui/styles/makeStyles/makeStyles.js");
      function _slicedToArray(arr, i) {
        return (
          (function _arrayWithHoles(arr) {
            if (Array.isArray(arr)) return arr;
          })(arr) ||
          (function _iterableToArrayLimit(arr, i) {
            var _i =
              null == arr
                ? null
                : ("undefined" != typeof Symbol && arr[Symbol.iterator]) || arr["@@iterator"];
            if (null == _i) return;
            var _s,
              _e,
              _arr = [],
              _n = !0,
              _d = !1;
            try {
              for (
                _i = _i.call(arr);
                !(_n = (_s = _i.next()).done) && (_arr.push(_s.value), !i || _arr.length !== i);
                _n = !0
              );
            } catch (err) {
              (_d = !0), (_e = err);
            } finally {
              try {
                _n || null == _i.return || _i.return();
              } finally {
                if (_d) throw _e;
              }
            }
            return _arr;
          })(arr, i) ||
          (function _unsupportedIterableToArray(o, minLen) {
            if (!o) return;
            if ("string" == typeof o) return _arrayLikeToArray(o, minLen);
            var n = Object.prototype.toString.call(o).slice(8, -1);
            "Object" === n && o.constructor && (n = o.constructor.name);
            if ("Map" === n || "Set" === n) return Array.from(o);
            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
              return _arrayLikeToArray(o, minLen);
          })(arr, i) ||
          (function _nonIterableRest() {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function _arrayLikeToArray(arr, len) {
        (null == len || len > arr.length) && (len = arr.length);
        for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
        return arr2;
      }
      (0, makeStyles.Z)(function () {
        return {
          root: {
            "& .MuiDataGrid-columnsContainer": { backgroundColor: "black", color: "white" },
            "& .MuiDataGrid-sortIcon": { fill: "white" },
            "& .MuiDataGrid-columnSeparator": { backgroundColor: "black" },
            "& .MuiDataGrid-iconSeparator": { fill: "black" },
          },
        };
      });
      var getHeader = function getHeader(name) {
        return (0, jsx_runtime.jsx)(Typography.Z, { fontWeight: "bold", children: name });
      };
      getHeader.displayName = "getHeader";
      var columns = [
          {
            field: "nutrient",
            flex: 1,
            minWidth: 220,
            renderHeader: function renderHeader() {
              return getHeader("Nutrient");
            },
            renderCell: function renderCell(params) {
              var row = params.row;
              return (0, jsx_runtime.jsx)(Typography.Z, {
                flexWrap: "wrap",
                children: row.nutrient,
              });
            },
          },
          {
            field: "dailyValue",
            width: 155,
            renderHeader: function renderHeader() {
              return getHeader("% Daily Value");
            },
            renderCell: function renderCell(params) {
              var row = params.row;
              return (0, jsx_runtime.jsx)(Box.Z, {
                sx: { display: "flex" },
                ml: 4,
                children: (0, jsx_runtime.jsx)(Typography.Z, {
                  children:
                    row.dailyValue &&
                    (0, jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                      children: [row.dailyValue.toFixed(2), " %"],
                    }),
                }),
              });
            },
          },
          {
            field: "amount",
            width: 200,
            type: "number",
            sortable: !1,
            renderHeader: function renderHeader() {
              return getHeader("Amount (per 100g)");
            },
            renderCell: function renderCell(params) {
              var row = params.row;
              return (0, jsx_runtime.jsxs)(Box.Z, {
                sx: { display: "flex" },
                children: [
                  (0, jsx_runtime.jsx)(Typography.Z, { children: row.amount }),
                  (0, jsx_runtime.jsx)(Typography.Z, {
                    pl: 1,
                    children: "ug" === row.amountUnit ? "µg" : row.amountUnit,
                  }),
                ],
              });
            },
          },
          {
            field: "rdi",
            width: 100,
            type: "number",
            sortable: !1,
            renderHeader: function renderHeader() {
              return getHeader("RDI");
            },
            renderCell: function renderCell(params) {
              var _row$rdiUnit,
                _row$rdiUnit2,
                row = params.row,
                rdiAmount =
                  null != row && row.rdiAmount && (null == row ? void 0 : row.rdiAmount) > 0
                    ? null == row
                      ? void 0
                      : row.rdiAmount
                    : "",
                rdiUnit = rdiAmount
                  ? "ug" ===
                    (null == row || null === (_row$rdiUnit = row.rdiUnit) || void 0 === _row$rdiUnit
                      ? void 0
                      : _row$rdiUnit.toLowerCase())
                    ? "µg"
                    : null == row ||
                      null === (_row$rdiUnit2 = row.rdiUnit) ||
                      void 0 === _row$rdiUnit2
                    ? void 0
                    : _row$rdiUnit2.toLowerCase()
                  : "";
              return row.rdiAmount
                ? (0, jsx_runtime.jsxs)(Box.Z, {
                    sx: { display: "flex" },
                    children: [
                      (0, jsx_runtime.jsx)(Typography.Z, { children: rdiAmount }),
                      (0, jsx_runtime.jsx)(Typography.Z, { pl: 1, children: rdiUnit }),
                    ],
                  })
                : null;
            },
          },
        ],
        FactTable_FactTable = function FactTable(_ref) {
          var rows = _ref.rows,
            _ref$nutrientsFilterA = _ref.nutrientsFilterApplied,
            nutrientsFilterApplied = void 0 !== _ref$nutrientsFilterA && _ref$nutrientsFilterA,
            _React$useState2 = _slicedToArray(
              react.useState([{ field: "dailyValue", sort: "desc" }]),
              2
            ),
            sortModel = _React$useState2[0],
            setSortModel = _React$useState2[1];
          return (0, jsx_runtime.jsx)("div", {
            style: { height: 500, width: "100%" },
            children: (0, jsx_runtime.jsx)("div", {
              style: { display: "flex", height: "100%" },
              children: (0, jsx_runtime.jsx)("div", {
                style: { flexGrow: 1 },
                children: (0, jsx_runtime.jsx)(DataGrid._, {
                  autoHeight: nutrientsFilterApplied,
                  rows,
                  columns,
                  components: {
                    Footer: function Footer() {
                      return (0, jsx_runtime.jsx)(Box.Z, {
                        py: 4,
                        pl: 3,
                        children: (0, jsx_runtime.jsxs)(Typography.Z, {
                          fontSize: "xs",
                          color: "gray.700",
                          children: [rows.length, " Nutrients"],
                        }),
                      });
                    },
                  },
                  sortModel,
                  onSortModelChange: function onSortModelChange(model) {
                    return setSortModel(model);
                  },
                }),
              }),
            }),
          });
        };
      FactTable_FactTable.displayName = "FactTable";
      const components_FactTable_FactTable = FactTable_FactTable;
      try {
        (FactTable_FactTable.displayName = "FactTable"),
          (FactTable_FactTable.__docgenInfo = {
            description: "",
            displayName: "FactTable",
            props: {
              rows: {
                defaultValue: null,
                description: "",
                name: "rows",
                required: !0,
                type: { name: "FactTableRow[]" },
              },
              nutrientsFilterApplied: {
                defaultValue: { value: "false" },
                description: "",
                name: "nutrientsFilterApplied",
                required: !1,
                type: { name: "boolean" },
              },
            },
          }),
          "undefined" != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES["src/components/FactTable/FactTable.tsx#FactTable"] = {
              docgenInfo: FactTable_FactTable.__docgenInfo,
              name: "FactTable",
              path: "src/components/FactTable/FactTable.tsx#FactTable",
            });
      } catch (__react_docgen_typescript_loader_error) {}
      __webpack_require__("./node_modules/core-js/modules/es.array.map.js");
      var List = __webpack_require__("./node_modules/@mui/material/esm/List/List.js"),
        ListItem = __webpack_require__("./node_modules/@mui/material/esm/ListItem/ListItem.js"),
        ListItemText = __webpack_require__(
          "./node_modules/@mui/material/esm/ListItemText/ListItemText.js"
        ),
        FactlListItem_useStyles = (0, makeStyles.Z)(function (_ref) {
          var _listItem,
            _listWrapper,
            _ListItemText,
            spacing = _ref.spacing,
            breakpoints = _ref.breakpoints;
          return {
            listItem:
              ((_listItem = {}),
              (_listItem[breakpoints.down("sm")] = { width: "100%", padding: 0 }),
              _listItem),
            listWrapper:
              ((_listWrapper = {}),
              (_listWrapper[breakpoints.down("sm")] = { display: "flex", alignItems: "center" }),
              _listWrapper),
            ListItemText:
              ((_ListItemText = {}),
              (_ListItemText[breakpoints.down("sm")] = {
                marginLeft: spacing(2),
                lineHeight: spacing(3),
                fontSize: spacing(2),
              }),
              _ListItemText),
          };
        });
      function FactlListItem(_ref2) {
        var item = _ref2.item,
          styles = FactlListItem_useStyles();
        return (0, jsx_runtime.jsx)(ListItem.ZP, {
          className: styles.listItem,
          children: (0, jsx_runtime.jsxs)(Box.Z, {
            className: styles.listWrapper,
            children: [
              (0, jsx_runtime.jsx)("img", { src: item.image, alt: item.name }),
              (0, jsx_runtime.jsx)(ListItemText.Z, {
                className: styles.ListItemText,
                primary: (0, jsx_runtime.jsx)(Typography.Z, {
                  variant: "body1",
                  children: item.name,
                }),
              }),
            ],
          }),
        });
      }
      FactlListItem.displayName = "FactlListItem";
      try {
        (FactlListItem.displayName = "FactlListItem"),
          (FactlListItem.__docgenInfo = {
            description: "",
            displayName: "FactlListItem",
            props: {
              item: {
                defaultValue: null,
                description: "",
                name: "item",
                required: !0,
                type: { name: "listItemTypes" },
              },
            },
          }),
          "undefined" != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              "src/components/FactSearchLists/FactlListItem.tsx#FactlListItem"
            ] = {
              docgenInfo: FactlListItem.__docgenInfo,
              name: "FactlListItem",
              path: "src/components/FactSearchLists/FactlListItem.tsx#FactlListItem",
            });
      } catch (__react_docgen_typescript_loader_error) {}
      __webpack_require__("./node_modules/core-js/modules/es.number.constructor.js");
      var addSpacing = function addSpacing(spacing, value) {
          return Number(spacing().slice(0, -2)) + value + "px";
        },
        Button = __webpack_require__("./node_modules/@mui/material/esm/Button/Button.js"),
        ExpandMore = __webpack_require__("./node_modules/@mui/icons-material/ExpandMore.js"),
        ViewMoreLists_useStyles = (0, makeStyles.Z)(function (_ref) {
          var _btn,
            spacing = _ref.spacing,
            typography = _ref.typography;
          return {
            btn:
              ((_btn = {}),
              (_btn[_ref.breakpoints.down("sm")] = {
                fontWeight: typography.fontWeightBold,
                fontSize: addSpacing(spacing, 4),
                textTransform: "capitalize",
              }),
              _btn),
            icon: { fontWeight: typography.fontWeightBold },
          };
        });
      function ViewMoreListsBtn() {
        var styles = ViewMoreLists_useStyles();
        return (0, jsx_runtime.jsx)(Box.Z, {
          children: (0, jsx_runtime.jsxs)(Button.Z, {
            variant: "text",
            color: "primary",
            className: styles.btn,
            children: ["View More", (0, jsx_runtime.jsx)(ExpandMore.Z, { className: styles.icon })],
          }),
        });
      }
      ViewMoreListsBtn.displayName = "ViewMoreListsBtn";
      var FactRecentSearchLists_useStyles = (0, makeStyles.Z)(function (_ref) {
          var _groupTitle,
            spacing = _ref.spacing;
          return {
            root: { width: "100%" },
            groupTitle:
              ((_groupTitle = {}),
              (_groupTitle[_ref.breakpoints.down("sm")] = { fontSize: addSpacing(spacing, 4) }),
              _groupTitle),
          };
        }),
        FactRecentSearchLists_FactSearchLists = function FactSearchLists(_ref2) {
          var recentLists = _ref2.recentLists,
            grouped = _ref2.grouped,
            groupLists = _ref2.groupLists,
            styles = FactRecentSearchLists_useStyles();
          return (0, jsx_runtime.jsx)(Box.Z, {
            className: styles.root,
            children: (0, jsx_runtime.jsx)(Box.Z, {
              children: grouped
                ? (0, jsx_runtime.jsx)(Box.Z, {
                    children: groupLists.map(function (item, index) {
                      return (0, jsx_runtime.jsxs)(
                        Box.Z,
                        {
                          sx: {
                            mt: function mt(theme) {
                              return theme.spacing(3.5);
                            },
                          },
                          children: [
                            (0, jsx_runtime.jsx)(Typography.Z, {
                              color: "text.secondary",
                              className: styles.groupTitle,
                              children: item.groupTitle,
                            }),
                            (0, jsx_runtime.jsx)(List.Z, {
                              children: item.listItems.map(function (item, index) {
                                return (0, jsx_runtime.jsx)(FactlListItem, { item }, index);
                              }),
                            }),
                            (0, jsx_runtime.jsx)(ViewMoreListsBtn, {}),
                          ],
                        },
                        index
                      );
                    }),
                  })
                : (0, jsx_runtime.jsxs)(Box.Z, {
                    children: [
                      (0, jsx_runtime.jsx)(List.Z, {
                        children: recentLists.map(function (item, index) {
                          return (0, jsx_runtime.jsx)(FactlListItem, { item }, index);
                        }),
                      }),
                      (0, jsx_runtime.jsx)(ViewMoreListsBtn, {}),
                    ],
                  }),
            }),
          });
        };
      FactRecentSearchLists_FactSearchLists.displayName = "FactSearchLists";
      const FactSearchLists_FactRecentSearchLists = FactRecentSearchLists_FactSearchLists;
      try {
        (FactRecentSearchLists.displayName = "FactRecentSearchLists"),
          (FactRecentSearchLists.__docgenInfo = {
            description: "",
            displayName: "FactRecentSearchLists",
            props: {
              recentLists: {
                defaultValue: null,
                description: "",
                name: "recentLists",
                required: !1,
                type: { name: "listItemTypes[]" },
              },
              grouped: {
                defaultValue: null,
                description: "",
                name: "grouped",
                required: !1,
                type: { name: "boolean" },
              },
              groupLists: {
                defaultValue: null,
                description: "",
                name: "groupLists",
                required: !1,
                type: { name: "GroupListsTypes[]" },
              },
            },
          }),
          "undefined" != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              "src/components/FactSearchLists/FactRecentSearchLists.tsx#FactRecentSearchLists"
            ] = {
              docgenInfo: FactRecentSearchLists.__docgenInfo,
              name: "FactRecentSearchLists",
              path: "src/components/FactSearchLists/FactRecentSearchLists.tsx#FactRecentSearchLists",
            });
      } catch (__react_docgen_typescript_loader_error) {}
      var ArrowBack = __webpack_require__("./node_modules/@mui/icons-material/ArrowBack.js"),
        AppBar = __webpack_require__("./node_modules/@mui/material/esm/AppBar/AppBar.js"),
        TextField = __webpack_require__("./node_modules/@mui/material/esm/TextField/TextField.js"),
        InputAdornment = __webpack_require__(
          "./node_modules/@mui/material/esm/InputAdornment/InputAdornment.js"
        ),
        Close = __webpack_require__("./node_modules/@mui/icons-material/Close.js"),
        SearchHeader_useStyles = (0, makeStyles.Z)(function (_ref) {
          var _underline,
            _icon,
            typography = _ref.typography,
            spacing = _ref.spacing,
            breakpoints = _ref.breakpoints;
          return {
            underline:
              ((_underline = {}),
              (_underline[breakpoints.down("sm")] = {
                "&&&:before": { borderBottom: "none" },
                "&&:after": { borderBottom: "none" },
              }),
              _underline),
            icon:
              ((_icon = {}),
              (_icon[breakpoints.down("sm")] = {
                fontWeight: typography.fontWeightBold,
                width: spacing(3),
                height: spacing(3),
                cursor: "pointer",
              }),
              _icon),
          };
        }),
        SearchHeader_SearchHeader = function SearchHeader(_ref2) {
          var openCloseBtn = _ref2.openCloseBtn,
            _ref2$showBorderBotto = _ref2.showBorderBottom,
            showBorderBottom = void 0 === _ref2$showBorderBotto || _ref2$showBorderBotto,
            classes = SearchHeader_useStyles();
          return (0, jsx_runtime.jsx)(Box.Z, {
            children: (0, jsx_runtime.jsx)(AppBar.Z, {
              sx: {
                boxShadow: showBorderBottom ? 1 : 0,
                zIndex: function zIndex(_ref3) {
                  return _ref3.zIndex.appBar;
                },
                bgcolor: "background.paper",
                py: { xs: "15px" },
                pr: { xs: "20px" },
                pl: { xs: "11px" },
              },
              children: (0, jsx_runtime.jsx)(Box.Z, {
                children: (0, jsx_runtime.jsx)(TextField.Z, {
                  id: "filled-start-adornment",
                  type: "text",
                  sx: { width: "100%", borderBottom: "none" },
                  InputProps: {
                    startAdornment: (0, jsx_runtime.jsx)(InputAdornment.Z, {
                      position: "start",
                      children: (0, jsx_runtime.jsx)(ArrowBack.Z, {
                        className: classes.icon,
                        color: "success",
                      }),
                    }),
                    endAdornment: (0, jsx_runtime.jsx)(InputAdornment.Z, {
                      position: "end",
                      children: openCloseBtn
                        ? (0, jsx_runtime.jsx)(Close.Z, {
                            className: classes.icon,
                            color: "success",
                          })
                        : null,
                    }),
                    classes,
                  },
                  placeholder: "Search for food product",
                  variant: "standard",
                }),
              }),
            }),
          });
        };
      SearchHeader_SearchHeader.displayName = "SearchHeader";
      const components_SearchHeader_SearchHeader = SearchHeader_SearchHeader;
      try {
        (SearchHeader_SearchHeader.displayName = "SearchHeader"),
          (SearchHeader_SearchHeader.__docgenInfo = {
            description: "",
            displayName: "SearchHeader",
            props: {
              showBorderBottom: {
                defaultValue: { value: "true" },
                description: "",
                name: "showBorderBottom",
                required: !1,
                type: { name: "boolean" },
              },
              openCloseBtn: {
                defaultValue: null,
                description: "",
                name: "openCloseBtn",
                required: !1,
                type: { name: "boolean" },
              },
            },
          }),
          "undefined" != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES["src/components/SearchHeader/SearchHeader.tsx#SearchHeader"] =
              {
                docgenInfo: SearchHeader_SearchHeader.__docgenInfo,
                name: "SearchHeader",
                path: "src/components/SearchHeader/SearchHeader.tsx#SearchHeader",
              });
      } catch (__react_docgen_typescript_loader_error) {}
      function SearchStatus(_ref) {
        var status = _ref.status;
        return (0, jsx_runtime.jsx)(Box.Z, {
          sx: {
            width: "100%",
            my: {
              xs: function xs(_ref2) {
                return (0, _ref2.spacing)(3);
              },
            },
          },
          children:
            "recentScreen" === status
              ? (0, jsx_runtime.jsxs)(Box.Z, {
                  sx: { display: "flex", justifyContent: "space-between" },
                  children: [
                    (0, jsx_runtime.jsx)(Typography.Z, {
                      color: "text.secondary",
                      variant: "subtitle2",
                      children: "Recent search",
                    }),
                    (0, jsx_runtime.jsx)(Typography.Z, {
                      color: "primary",
                      variant: "caption",
                      children: "Clear all",
                    }),
                  ],
                })
              : (0, jsx_runtime.jsxs)(Box.Z, {
                  children: [
                    " ",
                    (0, jsx_runtime.jsx)(Typography.Z, {
                      color: "text.secondary",
                      variant: "body2",
                      children: "I’m searching for",
                    }),
                  ],
                }),
        });
      }
      SearchStatus.displayName = "SearchStatus";
      try {
        (SearchStatus.displayName = "SearchStatus"),
          (SearchStatus.__docgenInfo = {
            description: "",
            displayName: "SearchStatus",
            props: {
              status: {
                defaultValue: null,
                description: "",
                name: "status",
                required: !0,
                type: {
                  name: "enum",
                  value: [{ value: '"recentScreen"' }, { value: '"ResultsScreen"' }],
                },
              },
            },
          }),
          "undefined" != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES["src/components/SearchStatus/SearchStatus.tsx#SearchStatus"] =
              {
                docgenInfo: SearchStatus.__docgenInfo,
                name: "SearchStatus",
                path: "src/components/SearchStatus/SearchStatus.tsx#SearchStatus",
              });
      } catch (__react_docgen_typescript_loader_error) {}
      var Grid = __webpack_require__("./node_modules/@mui/material/esm/Grid/Grid.js"),
        EggAlt = __webpack_require__("./node_modules/@mui/icons-material/EggAlt.js");
      function SearchCategory() {
        return (0, jsx_runtime.jsx)(Box.Z, {
          sx: {
            width: "100%",
            mt: function mt(_ref) {
              return (0, _ref.spacing)(3);
            },
          },
          children: (0, jsx_runtime.jsx)(Grid.ZP, {
            container: !0,
            justifyContent: "space-between",
            children: ["Food", "Recipe", "Library"].map(function (value, index) {
              return (0, jsx_runtime.jsx)(
                Grid.ZP,
                {
                  item: !0,
                  children: (0, jsx_runtime.jsx)(Button.Z, {
                    sx: {
                      textTransform: "capitalize",
                      backgroundColor: 0 === index ? "success.light" : "text.200",
                      color: 0 === index ? "success.main" : "text.secondary",
                      fontWeight: function fontWeight(_ref2) {
                        return _ref2.typography.fontWeightBold;
                      },
                      borderColor: 0 === index ? "success.main" : "text.secondary",
                      " &:hover": { borderColor: 0 === index ? "success.main" : "text.secondary" },
                    },
                    variant: "outlined",
                    size: "small",
                    startIcon: (0, jsx_runtime.jsx)(EggAlt.Z, {
                      sx: {
                        color: "grey.300",
                        width: "15px",
                        height: "15px",
                        fontSize: function fontSize(_ref3) {
                          return _ref3.typography.fontSize;
                        },
                      },
                    }),
                    children: value,
                  }),
                },
                index
              );
            }),
          }),
        });
      }
      SearchCategory.displayName = "SearchCategory";
      try {
        (SEO.displayName = "SEO"),
          (SEO.__docgenInfo = {
            description: "",
            displayName: "SEO",
            props: {
              title: {
                defaultValue: null,
                description: "",
                name: "title",
                required: !0,
                type: { name: "string" },
              },
              description: {
                defaultValue: null,
                description: "",
                name: "description",
                required: !1,
                type: { name: "string" },
              },
              image: {
                defaultValue: null,
                description: "",
                name: "image",
                required: !1,
                type: { name: "string" },
              },
              siteUrl: {
                defaultValue: null,
                description: "",
                name: "siteUrl",
                required: !1,
                type: { name: "string" },
              },
              pathname: {
                defaultValue: null,
                description: "",
                name: "pathname",
                required: !1,
                type: { name: "string" },
              },
            },
          }),
          "undefined" != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES["src/components/index.tsx#SEO"] = {
              docgenInfo: SEO.__docgenInfo,
              name: "SEO",
              path: "src/components/index.tsx#SEO",
            });
      } catch (__react_docgen_typescript_loader_error) {}
      try {
        (FactTable.displayName = "FactTable"),
          (FactTable.__docgenInfo = {
            description: "",
            displayName: "FactTable",
            props: {
              rows: {
                defaultValue: null,
                description: "",
                name: "rows",
                required: !0,
                type: { name: "FactTableRow[]" },
              },
              nutrientsFilterApplied: {
                defaultValue: { value: "false" },
                description: "",
                name: "nutrientsFilterApplied",
                required: !1,
                type: { name: "boolean" },
              },
            },
          }),
          "undefined" != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES["src/components/index.tsx#FactTable"] = {
              docgenInfo: FactTable.__docgenInfo,
              name: "FactTable",
              path: "src/components/index.tsx#FactTable",
            });
      } catch (__react_docgen_typescript_loader_error) {}
      try {
        (FactSearchLists.displayName = "FactSearchLists"),
          (FactSearchLists.__docgenInfo = {
            description: "",
            displayName: "FactSearchLists",
            props: {
              recentLists: {
                defaultValue: null,
                description: "",
                name: "recentLists",
                required: !1,
                type: { name: "listItemTypes[]" },
              },
              grouped: {
                defaultValue: null,
                description: "",
                name: "grouped",
                required: !1,
                type: { name: "boolean" },
              },
              groupLists: {
                defaultValue: null,
                description: "",
                name: "groupLists",
                required: !1,
                type: { name: "GroupListsTypes[]" },
              },
            },
          }),
          "undefined" != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES["src/components/index.tsx#FactSearchLists"] = {
              docgenInfo: FactSearchLists.__docgenInfo,
              name: "FactSearchLists",
              path: "src/components/index.tsx#FactSearchLists",
            });
      } catch (__react_docgen_typescript_loader_error) {}
      try {
        (SearchHeader.displayName = "SearchHeader"),
          (SearchHeader.__docgenInfo = {
            description: "",
            displayName: "SearchHeader",
            props: {
              showBorderBottom: {
                defaultValue: { value: "true" },
                description: "",
                name: "showBorderBottom",
                required: !1,
                type: { name: "boolean" },
              },
              openCloseBtn: {
                defaultValue: null,
                description: "",
                name: "openCloseBtn",
                required: !1,
                type: { name: "boolean" },
              },
            },
          }),
          "undefined" != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES["src/components/index.tsx#SearchHeader"] = {
              docgenInfo: SearchHeader.__docgenInfo,
              name: "SearchHeader",
              path: "src/components/index.tsx#SearchHeader",
            });
      } catch (__react_docgen_typescript_loader_error) {}
      try {
        (components.displayName = "components"),
          (components.__docgenInfo = {
            description: "",
            displayName: "components",
            props: {
              status: {
                defaultValue: null,
                description: "",
                name: "status",
                required: !0,
                type: {
                  name: "enum",
                  value: [{ value: '"recentScreen"' }, { value: '"ResultsScreen"' }],
                },
              },
            },
          }),
          "undefined" != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES["src/components/index.tsx#components"] = {
              docgenInfo: components.__docgenInfo,
              name: "components",
              path: "src/components/index.tsx#components",
            });
      } catch (__react_docgen_typescript_loader_error) {}
    },
    "./src/screens/index.tsx": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      "use strict";
      __webpack_require__.d(__webpack_exports__, {
        _W: () => RecentSearch_RecentSearch,
        rS: () => SearchResults_SearchResults,
        Lo: () => SearchScreen,
      });
      __webpack_require__("./node_modules/react/index.js");
      var Box = __webpack_require__("./node_modules/@mui/material/esm/Box/Box.js"),
        AppBar = __webpack_require__("./node_modules/@mui/material/esm/AppBar/AppBar.js"),
        Toolbar = __webpack_require__("./node_modules/@mui/material/esm/Toolbar/Toolbar.js"),
        Typography = __webpack_require__(
          "./node_modules/@mui/material/esm/Typography/Typography.js"
        ),
        TextField = __webpack_require__("./node_modules/@mui/material/esm/TextField/TextField.js"),
        SearchOutlined = __webpack_require__(
          "./node_modules/@mui/icons-material/esm/SearchOutlined.js"
        ),
        IconButton = __webpack_require__(
          "./node_modules/@mui/material/esm/IconButton/IconButton.js"
        ),
        Menu = __webpack_require__("./node_modules/@mui/icons-material/Menu.js"),
        makeStyles = __webpack_require__("./node_modules/@mui/styles/makeStyles/makeStyles.js"),
        InputAdornment = __webpack_require__(
          "./node_modules/@mui/material/esm/InputAdornment/InputAdornment.js"
        ),
        injectStylesIntoStyleTag = __webpack_require__(
          "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"
        ),
        injectStylesIntoStyleTag_default = __webpack_require__.n(injectStylesIntoStyleTag),
        searchscreen_module = __webpack_require__(
          "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/screens/SearchScreens/searchscreen.module.css"
        ),
        options = { insert: "head", singleton: !1 };
      injectStylesIntoStyleTag_default()(searchscreen_module.Z, options);
      const SearchScreens_searchscreen_module = searchscreen_module.Z.locals || {};
      var jsx_runtime = __webpack_require__("./node_modules/react/jsx-runtime.js"),
        useStyles = (0, makeStyles.Z)(function (_ref) {
          var _infoPage,
            _infoPageWrraper,
            _spaceBottom,
            spacing = _ref.spacing,
            breakpoints = _ref.breakpoints;
          return {
            root: { width: "100%", flexGrow: 1 },
            infoPage:
              ((_infoPage = { display: "block", width: "100%" }),
              (_infoPage[breakpoints.down("sm")] = { marginTop: spacing(20) }),
              _infoPage),
            infoPageWrraper:
              ((_infoPageWrraper = {}),
              (_infoPageWrraper[breakpoints.down("sm")] = { marginTop: spacing(4.5) }),
              _infoPageWrraper),
            spaceBottom:
              ((_spaceBottom = {}),
              (_spaceBottom[breakpoints.down("sm")] = { marginBottom: spacing(7) }),
              _spaceBottom),
          };
        });
      function SearchScreen() {
        var classes = useStyles();
        return (0, jsx_runtime.jsxs)(Box.Z, {
          className: classes.root,
          children: [
            (0, jsx_runtime.jsx)(AppBar.Z, {
              color: "transparent",
              sx: { boxShadow: "none" },
              children: (0, jsx_runtime.jsxs)(Toolbar.Z, {
                children: [
                  (0, jsx_runtime.jsx)(IconButton.Z, {
                    size: "large",
                    edge: "start",
                    color: "inherit",
                    "aria-label": "menu",
                    sx: { mr: 0.5 },
                    children: (0, jsx_runtime.jsx)(Menu.Z, { color: "primary" }),
                  }),
                  (0, jsx_runtime.jsx)(Typography.Z, {
                    variant: "h5",
                    color: "primary",
                    children: "Forkfacts",
                  }),
                ],
              }),
            }),
            (0, jsx_runtime.jsx)(Box.Z, {
              className: classes.infoPage,
              children: (0, jsx_runtime.jsxs)(Box.Z, {
                className: classes.infoPageWrraper,
                children: [
                  (0, jsx_runtime.jsx)(Box.Z, {
                    className: classes.spaceBottom,
                    children: (0, jsx_runtime.jsx)(Typography.Z, {
                      className: SearchScreens_searchscreen_module.introText,
                      color: "common.black",
                      children: "Forkfacts, Your Healthy diet search place.",
                    }),
                  }),
                  (0, jsx_runtime.jsx)(Box.Z, {
                    sx: { width: "100%" },
                    children: (0, jsx_runtime.jsx)(TextField.Z, {
                      size: "small",
                      placeholder: "Search",
                      fullWidth: !0,
                      InputProps: {
                        startAdornment: (0, jsx_runtime.jsx)(InputAdornment.Z, {
                          position: "start",
                          children: (0, jsx_runtime.jsx)(SearchOutlined.Z, {}),
                        }),
                      },
                      sx: {
                        "& fieldset": {
                          paddingLeft: function paddingLeft(theme) {
                            return theme.spacing(2.5);
                          },
                          borderRadius: function borderRadius(theme) {
                            return theme.spacing(1.25);
                          },
                          width: "100%",
                          borderColor: "grey !important",
                        },
                      },
                    }),
                  }),
                ],
              }),
            }),
          ],
        });
      }
      SearchScreen.displayName = "SearchScreen";
      var components = __webpack_require__("./src/components/index.tsx");
      var RecentSearch_RecentSearchScreen = function RecentSearchScreen(_ref) {
        !(function _objectDestructuringEmpty(obj) {
          if (null == obj) throw new TypeError("Cannot destructure " + obj);
        })(_ref);
        return (0, jsx_runtime.jsxs)(Box.Z, {
          children: [
            (0, jsx_runtime.jsx)(components.s8, { showBorderBottom: !1, openCloseBtn: !1 }),
            (0, jsx_runtime.jsx)(Box.Z, {
              sx: {
                mt: function mt(_ref2) {
                  return (0, _ref2.spacing)(6.5);
                },
              },
              children: (0, jsx_runtime.jsx)(components.SV, { status: "recentScreen" }),
            }),
            (0, jsx_runtime.jsx)(Box.Z, {
              sx: {
                mt: function mt(_ref3) {
                  return (0, _ref3.spacing)(2);
                },
              },
              children: (0, jsx_runtime.jsx)(components.dK, {
                recentLists: [
                  { image: "/recentImg.png", name: "Kidney beans light, Legume", path: "/:id" },
                  { image: "/recentImg.png", name: "Grape fruit juices", path: "/:id" },
                  {
                    image: "/recentImg.png",
                    name: "Baked white bread, Baked products",
                    path: "/:id",
                  },
                  {
                    image: "/recentImg.png",
                    name: "Grape fruit juice unsweentened, Fruit ...",
                    path: "/:id",
                  },
                  {
                    image: "/recentImg.png",
                    name: "Banana dehydrated/ banana powder",
                    path: "/:id",
                  },
                ],
              }),
            }),
          ],
        });
      };
      RecentSearch_RecentSearchScreen.displayName = "RecentSearchScreen";
      const RecentSearch_RecentSearch = RecentSearch_RecentSearchScreen;
      try {
        (RecentSearch.displayName = "RecentSearch"),
          (RecentSearch.__docgenInfo = { description: "", displayName: "RecentSearch", props: {} }),
          "undefined" != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              "src/screens/SearchScreens/RecentSearch/RecentSearch.tsx#RecentSearch"
            ] = {
              docgenInfo: RecentSearch.__docgenInfo,
              name: "RecentSearch",
              path: "src/screens/SearchScreens/RecentSearch/RecentSearch.tsx#RecentSearch",
            });
      } catch (__react_docgen_typescript_loader_error) {}
      __webpack_require__("./node_modules/core-js/modules/es.array.slice.js");
      var SearchResults_SearchResultsScreen = function SearchResultsScreen() {
        var recentLists = [
            { image: "/recentImg.png", name: "Kidney beans light, Legume", path: "/:id" },
            { image: "/recentImg.png", name: "Grape fruit juices", path: "/:id" },
            { image: "/recentImg.png", name: "Baked white bread, Baked products", path: "/:id" },
            {
              image: "/recentImg.png",
              name: "Grape fruit juice unsweentened, Fruit ...",
              path: "/:id",
            },
            { image: "/recentImg.png", name: "Banana dehydrated/ banana powder", path: "/:id" },
          ],
          groupListsTypes = [
            { groupTitle: "FRUIT AND FRUIT JUICES", listItems: recentLists },
            { groupTitle: "BABY FOODS", listItems: recentLists.slice(0, 1) },
            { groupTitle: "SWEETS", listItems: recentLists.slice(0, 2) },
          ];
        return (0, jsx_runtime.jsxs)(Box.Z, {
          children: [
            (0, jsx_runtime.jsx)(components.s8, { showBorderBottom: !1, openCloseBtn: !0 }),
            (0, jsx_runtime.jsxs)(Box.Z, {
              sx: {
                mt: function mt(_ref) {
                  return (0, _ref.spacing)(7);
                },
              },
              children: [
                (0, jsx_runtime.jsx)(components.SV, { status: "ResultsScreen" }),
                (0, jsx_runtime.jsx)(components.B8, {}),
                (0, jsx_runtime.jsx)(components.dK, { groupLists: groupListsTypes, grouped: !0 }),
              ],
            }),
          ],
        });
      };
      SearchResults_SearchResultsScreen.displayName = "SearchResultsScreen";
      const SearchResults_SearchResults = SearchResults_SearchResultsScreen;
      try {
        (SearchResults.displayName = "SearchResults"),
          (SearchResults.__docgenInfo = {
            description: "",
            displayName: "SearchResults",
            props: {},
          }),
          "undefined" != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES[
              "src/screens/SearchScreens/SearchResults/SearchResults.tsx#SearchResults"
            ] = {
              docgenInfo: SearchResults.__docgenInfo,
              name: "SearchResults",
              path: "src/screens/SearchScreens/SearchResults/SearchResults.tsx#SearchResults",
            });
      } catch (__react_docgen_typescript_loader_error) {}
      try {
        (RecentSearchScreen.displayName = "RecentSearchScreen"),
          (RecentSearchScreen.__docgenInfo = {
            description: "",
            displayName: "RecentSearchScreen",
            props: {},
          }),
          "undefined" != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES["src/screens/index.tsx#RecentSearchScreen"] = {
              docgenInfo: RecentSearchScreen.__docgenInfo,
              name: "RecentSearchScreen",
              path: "src/screens/index.tsx#RecentSearchScreen",
            });
      } catch (__react_docgen_typescript_loader_error) {}
      try {
        (SearchResultsScreen.displayName = "SearchResultsScreen"),
          (SearchResultsScreen.__docgenInfo = {
            description: "",
            displayName: "SearchResultsScreen",
            props: {},
          }),
          "undefined" != typeof STORYBOOK_REACT_CLASSES &&
            (STORYBOOK_REACT_CLASSES["src/screens/index.tsx#SearchResultsScreen"] = {
              docgenInfo: SearchResultsScreen.__docgenInfo,
              name: "SearchResultsScreen",
              path: "src/screens/index.tsx#SearchResultsScreen",
            });
      } catch (__react_docgen_typescript_loader_error) {}
    },
    "./storybook-init-framework-entry.js": (
      __unused_webpack_module,
      __unused_webpack___webpack_exports__,
      __webpack_require__
    ) => {
      "use strict";
      __webpack_require__("./node_modules/@storybook/react/dist/esm/client/index.js");
    },
    "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./src/screens/SearchScreens/searchscreen.module.css":
      (module, __webpack_exports__, __webpack_require__) => {
        "use strict";
        __webpack_require__.d(__webpack_exports__, { Z: () => __WEBPACK_DEFAULT_EXPORT__ });
        var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ =
            __webpack_require__("./node_modules/css-loader/dist/runtime/cssWithMappingToString.js"),
          _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default =
            __webpack_require__.n(
              _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__
            ),
          _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ =
            __webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),
          ___CSS_LOADER_EXPORT___ = __webpack_require__.n(
            _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__
          )()(
            _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()
          );
        ___CSS_LOADER_EXPORT___.push([
          module.id,
          "@media (max-width: 414px) {\n  .DkROrc3uLUaATmWIUk54jA\\=\\= {\n    font-weight: 600 !important;\n    font-size: 24px !important;\n    line-height: 32px !important;\n    display: flex;\n    align-items: center;\n    text-align: center;\n  }\n}\n",
          "",
          {
            version: 3,
            sources: ["webpack://./src/screens/SearchScreens/searchscreen.module.css"],
            names: [],
            mappings:
              "AAAA;EACE;IACE,2BAA2B;IAC3B,0BAA0B;IAC1B,4BAA4B;IAC5B,aAAa;IACb,mBAAmB;IACnB,kBAAkB;EACpB;AACF",
            sourcesContent: [
              "@media (max-width: 414px) {\n  .introText {\n    font-weight: 600 !important;\n    font-size: 24px !important;\n    line-height: 32px !important;\n    display: flex;\n    align-items: center;\n    text-align: center;\n  }\n}\n",
            ],
            sourceRoot: "",
          },
        ]),
          (___CSS_LOADER_EXPORT___.locals = { introText: "DkROrc3uLUaATmWIUk54jA==" });
        const __WEBPACK_DEFAULT_EXPORT__ = ___CSS_LOADER_EXPORT___;
      },
    "./src sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$":
      (module, __unused_webpack_exports, __webpack_require__) => {
        var map = {
          "./components/FactSearchLists/FactRecentSearchLists.stories.tsx":
            "./src/components/FactSearchLists/FactRecentSearchLists.stories.tsx",
          "./components/FactTable/FactTable.stories.tsx":
            "./src/components/FactTable/FactTable.stories.tsx",
          "./components/SearchCategory/SearchCategory.stories.tsx":
            "./src/components/SearchCategory/SearchCategory.stories.tsx",
          "./components/SearchHeader/SearchHeader.stories.tsx":
            "./src/components/SearchHeader/SearchHeader.stories.tsx",
          "./components/SearchStatus/SearchStatus.stories.tsx":
            "./src/components/SearchStatus/SearchStatus.stories.tsx",
          "./screens/SearchScreens/RecentSearch/RecentSearch.stories.tsx":
            "./src/screens/SearchScreens/RecentSearch/RecentSearch.stories.tsx",
          "./screens/SearchScreens/SearchResults/SearchResults.stories.tsx":
            "./src/screens/SearchScreens/SearchResults/SearchResults.stories.tsx",
          "./screens/SearchScreens/SearchScreen.stories.tsx":
            "./src/screens/SearchScreens/SearchScreen.stories.tsx",
        };
        function webpackContext(req) {
          var id = webpackContextResolve(req);
          return __webpack_require__(id);
        }
        function webpackContextResolve(req) {
          if (!__webpack_require__.o(map, req)) {
            var e = new Error("Cannot find module '" + req + "'");
            throw ((e.code = "MODULE_NOT_FOUND"), e);
          }
          return map[req];
        }
        (webpackContext.keys = function webpackContextKeys() {
          return Object.keys(map);
        }),
          (webpackContext.resolve = webpackContextResolve),
          (module.exports = webpackContext),
          (webpackContext.id =
            "./src sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$");
      },
    "./src sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.mdx)$":
      (module) => {
        function webpackEmptyContext(req) {
          var e = new Error("Cannot find module '" + req + "'");
          throw ((e.code = "MODULE_NOT_FOUND"), e);
        }
        (webpackEmptyContext.keys = () => []),
          (webpackEmptyContext.resolve = webpackEmptyContext),
          (webpackEmptyContext.id =
            "./src sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.mdx)$"),
          (module.exports = webpackEmptyContext);
      },
    "?4b14": () => {},
    "?76aa": () => {},
    "?4f7e": () => {},
    "./generated-stories-entry.cjs": (module, __unused_webpack_exports, __webpack_require__) => {
      "use strict";
      (module = __webpack_require__.nmd(module)),
        (0,
        __webpack_require__("./node_modules/@storybook/react/dist/esm/client/index.js").configure)(
          [
            __webpack_require__(
              "./src sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.mdx)$"
            ),
            __webpack_require__(
              "./src sync recursive ^\\.(?:(?:^%7C\\/%7C(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$"
            ),
          ],
          module,
          !1
        );
    },
  },
  (__webpack_require__) => {
    var __webpack_exec__ = (moduleId) => __webpack_require__((__webpack_require__.s = moduleId));
    __webpack_require__.O(
      0,
      [436],
      () => (
        __webpack_exec__("./node_modules/@storybook/core-client/dist/esm/globals/polyfills.js"),
        __webpack_exec__("./node_modules/@storybook/core-client/dist/esm/globals/globals.js"),
        __webpack_exec__("./storybook-init-framework-entry.js"),
        __webpack_exec__(
          "./node_modules/@storybook/react/dist/esm/client/docs/config-generated-config-entry.js"
        ),
        __webpack_exec__(
          "./node_modules/@storybook/react/dist/esm/client/preview/config-generated-config-entry.js"
        ),
        __webpack_exec__(
          "./node_modules/@storybook/addon-links/preview.js-generated-config-entry.js"
        ),
        __webpack_exec__(
          "./node_modules/@storybook/addon-docs/preview.js-generated-config-entry.js"
        ),
        __webpack_exec__(
          "./node_modules/@storybook/addon-actions/preview.js-generated-config-entry.js"
        ),
        __webpack_exec__(
          "./node_modules/@storybook/addon-backgrounds/preview.js-generated-config-entry.js"
        ),
        __webpack_exec__(
          "./node_modules/@storybook/addon-measure/preview.js-generated-config-entry.js"
        ),
        __webpack_exec__(
          "./node_modules/@storybook/addon-outline/preview.js-generated-config-entry.js"
        ),
        __webpack_exec__(
          "./node_modules/@storybook/addon-interactions/preview.js-generated-config-entry.js"
        ),
        __webpack_exec__("./.storybook/preview.js-generated-config-entry.js"),
        __webpack_exec__("./generated-stories-entry.cjs")
      )
    );
    __webpack_require__.O();
  },
]);
