/*! For license information please see 730.fc1580c3.iframe.bundle.js.LICENSE.txt */
"use strict";
(self.webpackChunkforkfacts_v2 = self.webpackChunkforkfacts_v2 || []).push([
  [730],
  {
    "./node_modules/@storybook/addon-docs/dist/esm/blocks/index.js": (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, {
          AddContext: () => AddContext,
          Anchor: () => Anchor,
          AnchorMdx: () => AnchorMdx,
          ArgsTable: () => ArgsTable,
          CURRENT_SELECTION: () => CURRENT_SELECTION,
          Canvas: () => Canvas,
          CodeOrSourceMdx: () => CodeOrSourceMdx,
          ColorItem: () => index_681e4b07.aP,
          ColorPalette: () => index_681e4b07.aQ,
          ComponentsTable: () => ComponentsTable,
          Description: () => DescriptionContainer,
          DescriptionType: () => DescriptionType,
          DocsContainer: () => DocsContainer,
          DocsContext: () => DocsContext,
          DocsPage: () => DocsPage,
          DocsStory: () => DocsStory,
          HeaderMdx: () => HeaderMdx,
          HeadersMdx: () => HeadersMdx,
          Heading: () => Heading,
          IconGallery: () => index_681e4b07.aS,
          IconItem: () => index_681e4b07.aR,
          Meta: () => Meta,
          PRIMARY_STORY: () => PRIMARY_STORY,
          Preview: () => Preview,
          Primary: () => Primary,
          Props: () => Props,
          Source: () => Source,
          SourceContainer: () => SourceContainer,
          SourceContext: () => SourceContext,
          SourceState: () => SourceState,
          Stories: () => Stories,
          Story: () => Story,
          StoryTable: () => StoryTable,
          Subheading: () => Subheading,
          Subtitle: () => Subtitle,
          Title: () => Title,
          Typeset: () => index_681e4b07.aO,
          Wrapper: () => Wrapper,
          anchorBlockIdFromId: () => anchorBlockIdFromId,
          assertIsFn: () => assertIsFn,
          extractComponentArgTypes: () => extractComponentArgTypes,
          extractTitle: () => extractTitle,
          getComponent: () => getComponent,
          getDescriptionProps: () => getDescriptionProps,
          getSourceProps: () => getSourceProps,
          getStoryId: () => getStoryId,
          getStoryProps: () => getStoryProps,
          lookupStoryId: () => lookupStoryId,
          storyBlockIdFromId: () => storyBlockIdFromId,
        });
      var index_681e4b07 = __webpack_require__(
          "./node_modules/@storybook/components/dist/esm/index-681e4b07.js"
        ),
        react = __webpack_require__("./node_modules/react/index.js"),
        anchorBlockIdFromId = function anchorBlockIdFromId(storyId) {
          return "anchor--".concat(storyId);
        },
        Anchor = function Anchor(_ref) {
          var storyId = _ref.storyId,
            children = _ref.children;
          return react.createElement("div", { id: anchorBlockIdFromId(storyId) }, children);
        };
      (Anchor.__docgenInfo = { description: "", methods: [], displayName: "Anchor" }),
        "undefined" != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES["node_modules/@storybook/addon-docs/dist/esm/blocks/Anchor.js"] =
            {
              name: "Anchor",
              docgenInfo: Anchor.__docgenInfo,
              path: "node_modules/@storybook/addon-docs/dist/esm/blocks/Anchor.js",
            });
      __webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),
        __webpack_require__("./node_modules/core-js/modules/es.object.define-property.js"),
        __webpack_require__("./node_modules/core-js/modules/es.array.slice.js"),
        __webpack_require__("./node_modules/core-js/modules/es.object.to-string.js"),
        __webpack_require__("./node_modules/core-js/modules/es.function.name.js"),
        __webpack_require__("./node_modules/core-js/modules/es.array.from.js"),
        __webpack_require__("./node_modules/core-js/modules/es.string.iterator.js"),
        __webpack_require__("./node_modules/core-js/modules/es.symbol.js"),
        __webpack_require__("./node_modules/core-js/modules/es.symbol.description.js"),
        __webpack_require__("./node_modules/core-js/modules/es.symbol.iterator.js"),
        __webpack_require__("./node_modules/core-js/modules/es.array.iterator.js"),
        __webpack_require__("./node_modules/core-js/modules/web.dom-collections.iterator.js"),
        __webpack_require__("./node_modules/core-js/modules/es.array.is-array.js"),
        __webpack_require__("./node_modules/core-js/modules/es.array.includes.js"),
        __webpack_require__("./node_modules/core-js/modules/es.string.includes.js"),
        __webpack_require__("./node_modules/core-js/modules/es.array.sort.js"),
        __webpack_require__("./node_modules/core-js/modules/es.array.find.js"),
        __webpack_require__("./node_modules/core-js/modules/es.object.values.js"),
        __webpack_require__("./node_modules/core-js/modules/es.regexp.exec.js");
      var mapValues = __webpack_require__("./node_modules/lodash/mapValues.js"),
        mapValues_default = __webpack_require__.n(mapValues),
        esm = __webpack_require__("./node_modules/@storybook/addons/dist/esm/index.js"),
        filterArgTypes = __webpack_require__(
          "./node_modules/@storybook/store/dist/esm/filterArgTypes.js"
        ),
        dist_esm = __webpack_require__("./node_modules/@storybook/core-events/dist/esm/index.js"),
        global_window = __webpack_require__("./node_modules/global/window.js"),
        window_default = __webpack_require__.n(global_window);
      global_window.window &&
        void 0 === global_window.window.__DOCS_CONTEXT__ &&
        ((global_window.window.__DOCS_CONTEXT__ = (0, react.createContext)({})),
        (global_window.window.__DOCS_CONTEXT__.displayName = "DocsContext"));
      var DocsContext = global_window.window
          ? global_window.window.__DOCS_CONTEXT__
          : (0, react.createContext)({}),
        CURRENT_SELECTION = ".",
        PRIMARY_STORY = "^",
        getComponentName =
          (__webpack_require__("./node_modules/core-js/modules/es.array.join.js"),
          __webpack_require__("./node_modules/core-js/modules/es.array.map.js"),
          __webpack_require__("./node_modules/core-js/modules/es.string.split.js"),
          function getComponentName(component) {
            if (component)
              return "string" == typeof component
                ? component.includes("-")
                  ? (function titleCase(str) {
                      return str
                        .split("-")
                        .map(function (part) {
                          return part.charAt(0).toUpperCase() + part.slice(1);
                        })
                        .join("");
                    })(component)
                  : component
                : component.__docgenInfo && component.__docgenInfo.displayName
                ? component.__docgenInfo.displayName
                : component.name;
          });
      function scrollToElement(element) {
        var block = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "start";
        element.scrollIntoView({ behavior: "smooth", block, inline: "nearest" });
      }
      __webpack_require__("./node_modules/core-js/modules/es.promise.js"),
        __webpack_require__("./node_modules/core-js/modules/es.array.concat.js"),
        __webpack_require__("./node_modules/core-js/modules/es.object.keys.js"),
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
        __webpack_require__("./node_modules/core-js/modules/es.array.index-of.js");
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
      function _objectSpread2(target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = null != arguments[i] ? arguments[i] : {};
          i % 2
            ? ownKeys(Object(source), !0).forEach(function (key) {
                _defineProperty(target, key, source[key]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source))
            : ownKeys(Object(source)).forEach(function (key) {
                Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
              });
        }
        return target;
      }
      function _objectWithoutProperties(source, excluded) {
        if (null == source) return {};
        var key,
          i,
          target = (function _objectWithoutPropertiesLoose(source, excluded) {
            if (null == source) return {};
            var key,
              i,
              target = {},
              sourceKeys = Object.keys(source);
            for (i = 0; i < sourceKeys.length; i++)
              (key = sourceKeys[i]), excluded.indexOf(key) >= 0 || (target[key] = source[key]);
            return target;
          })(source, excluded);
        if (Object.getOwnPropertySymbols) {
          var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
          for (i = 0; i < sourceSymbolKeys.length; i++)
            (key = sourceSymbolKeys[i]),
              excluded.indexOf(key) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(source, key) &&
                  (target[key] = source[key]));
        }
        return target;
      }
      var MDXContext = react.createContext({}),
        useMDXComponents = function useMDXComponents(components) {
          var contextComponents = react.useContext(MDXContext),
            allComponents = contextComponents;
          return (
            components &&
              (allComponents = (function isFunction(obj) {
                return "function" == typeof obj;
              })(components)
                ? components(contextComponents)
                : _objectSpread2(_objectSpread2({}, contextComponents), components)),
            allComponents
          );
        },
        MDXProvider = function MDXProvider(props) {
          var allComponents = useMDXComponents(props.components);
          return react.createElement(MDXContext.Provider, { value: allComponents }, props.children);
        },
        DEFAULTS = {
          inlineCode: "code",
          wrapper: function wrapper(_ref) {
            var children = _ref.children;
            return react.createElement(react.Fragment, {}, children);
          },
        },
        MDXCreateElement = react.forwardRef(function (props, ref) {
          var propComponents = props.components,
            mdxType = props.mdxType,
            originalType = props.originalType,
            parentName = props.parentName,
            etc = _objectWithoutProperties(props, [
              "components",
              "mdxType",
              "originalType",
              "parentName",
            ]),
            components = useMDXComponents(propComponents),
            type = mdxType,
            Component =
              components["".concat(parentName, ".").concat(type)] ||
              components[type] ||
              DEFAULTS[type] ||
              originalType;
          return propComponents
            ? react.createElement(
                Component,
                _objectSpread2(_objectSpread2({ ref }, etc), {}, { components: propComponents })
              )
            : react.createElement(Component, _objectSpread2({ ref }, etc));
        });
      (MDXCreateElement.displayName = "MDXCreateElement"),
        (MDXProvider.__docgenInfo = { description: "", methods: [], displayName: "MDXProvider" }),
        "undefined" != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES[
            "node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/dist/esm.js"
          ] = {
            name: "MDXProvider",
            docgenInfo: MDXProvider.__docgenInfo,
            path: "node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/dist/esm.js",
          });
      var dist = __webpack_require__("./node_modules/@storybook/csf/dist/index.js");
      __webpack_require__("./node_modules/core-js/modules/es.array.reduce.js"),
        __webpack_require__("./node_modules/core-js/modules/es.symbol.async-iterator.js"),
        __webpack_require__("./node_modules/core-js/modules/es.symbol.to-string-tag.js"),
        __webpack_require__("./node_modules/core-js/modules/es.math.to-string-tag.js"),
        __webpack_require__("./node_modules/core-js/modules/es.json.to-string-tag.js"),
        __webpack_require__("./node_modules/core-js/modules/es.object.create.js"),
        __webpack_require__("./node_modules/core-js/modules/es.object.get-prototype-of.js"),
        __webpack_require__("./node_modules/core-js/modules/es.object.set-prototype-of.js"),
        __webpack_require__("./node_modules/core-js/modules/es.array.reverse.js"),
        __webpack_require__("./node_modules/regenerator-runtime/runtime.js");
      function _regeneratorRuntime() {
        _regeneratorRuntime = function _regeneratorRuntime() {
          return exports;
        };
        var exports = {},
          Op = Object.prototype,
          hasOwn = Op.hasOwnProperty,
          defineProperty =
            Object.defineProperty ||
            function (obj, key, desc) {
              obj[key] = desc.value;
            },
          $Symbol = "function" == typeof Symbol ? Symbol : {},
          iteratorSymbol = $Symbol.iterator || "@@iterator",
          asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator",
          toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
        function define(obj, key, value) {
          return (
            Object.defineProperty(obj, key, {
              value,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            obj[key]
          );
        }
        try {
          define({}, "");
        } catch (err) {
          define = function define(obj, key, value) {
            return (obj[key] = value);
          };
        }
        function wrap(innerFn, outerFn, self, tryLocsList) {
          var protoGenerator =
              outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator,
            generator = Object.create(protoGenerator.prototype),
            context = new Context(tryLocsList || []);
          return (
            defineProperty(generator, "_invoke", {
              value: makeInvokeMethod(innerFn, self, context),
            }),
            generator
          );
        }
        function tryCatch(fn, obj, arg) {
          try {
            return { type: "normal", arg: fn.call(obj, arg) };
          } catch (err) {
            return { type: "throw", arg: err };
          }
        }
        exports.wrap = wrap;
        var ContinueSentinel = {};
        function Generator() {}
        function GeneratorFunction() {}
        function GeneratorFunctionPrototype() {}
        var IteratorPrototype = {};
        define(IteratorPrototype, iteratorSymbol, function () {
          return this;
        });
        var getProto = Object.getPrototypeOf,
          NativeIteratorPrototype = getProto && getProto(getProto(values([])));
        NativeIteratorPrototype &&
          NativeIteratorPrototype !== Op &&
          hasOwn.call(NativeIteratorPrototype, iteratorSymbol) &&
          (IteratorPrototype = NativeIteratorPrototype);
        var Gp =
          (GeneratorFunctionPrototype.prototype =
          Generator.prototype =
            Object.create(IteratorPrototype));
        function defineIteratorMethods(prototype) {
          ["next", "throw", "return"].forEach(function (method) {
            define(prototype, method, function (arg) {
              return this._invoke(method, arg);
            });
          });
        }
        function AsyncIterator(generator, PromiseImpl) {
          function invoke(method, arg, resolve, reject) {
            var record = tryCatch(generator[method], generator, arg);
            if ("throw" !== record.type) {
              var result = record.arg,
                value = result.value;
              return value && "object" == typeof value && hasOwn.call(value, "__await")
                ? PromiseImpl.resolve(value.__await).then(
                    function (value) {
                      invoke("next", value, resolve, reject);
                    },
                    function (err) {
                      invoke("throw", err, resolve, reject);
                    }
                  )
                : PromiseImpl.resolve(value).then(
                    function (unwrapped) {
                      (result.value = unwrapped), resolve(result);
                    },
                    function (error) {
                      return invoke("throw", error, resolve, reject);
                    }
                  );
            }
            reject(record.arg);
          }
          var previousPromise;
          defineProperty(this, "_invoke", {
            value: function value(method, arg) {
              function callInvokeWithMethodAndArg() {
                return new PromiseImpl(function (resolve, reject) {
                  invoke(method, arg, resolve, reject);
                });
              }
              return (previousPromise = previousPromise
                ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg)
                : callInvokeWithMethodAndArg());
            },
          });
        }
        function makeInvokeMethod(innerFn, self, context) {
          var state = "suspendedStart";
          return function (method, arg) {
            if ("executing" === state) throw new Error("Generator is already running");
            if ("completed" === state) {
              if ("throw" === method) throw arg;
              return doneResult();
            }
            for (context.method = method, context.arg = arg; ; ) {
              var delegate = context.delegate;
              if (delegate) {
                var delegateResult = maybeInvokeDelegate(delegate, context);
                if (delegateResult) {
                  if (delegateResult === ContinueSentinel) continue;
                  return delegateResult;
                }
              }
              if ("next" === context.method) context.sent = context._sent = context.arg;
              else if ("throw" === context.method) {
                if ("suspendedStart" === state) throw ((state = "completed"), context.arg);
                context.dispatchException(context.arg);
              } else "return" === context.method && context.abrupt("return", context.arg);
              state = "executing";
              var record = tryCatch(innerFn, self, context);
              if ("normal" === record.type) {
                if (
                  ((state = context.done ? "completed" : "suspendedYield"),
                  record.arg === ContinueSentinel)
                )
                  continue;
                return { value: record.arg, done: context.done };
              }
              "throw" === record.type &&
                ((state = "completed"), (context.method = "throw"), (context.arg = record.arg));
            }
          };
        }
        function maybeInvokeDelegate(delegate, context) {
          var method = delegate.iterator[context.method];
          if (void 0 === method) {
            if (((context.delegate = null), "throw" === context.method)) {
              if (
                delegate.iterator.return &&
                ((context.method = "return"),
                (context.arg = void 0),
                maybeInvokeDelegate(delegate, context),
                "throw" === context.method)
              )
                return ContinueSentinel;
              (context.method = "throw"),
                (context.arg = new TypeError("The iterator does not provide a 'throw' method"));
            }
            return ContinueSentinel;
          }
          var record = tryCatch(method, delegate.iterator, context.arg);
          if ("throw" === record.type)
            return (
              (context.method = "throw"),
              (context.arg = record.arg),
              (context.delegate = null),
              ContinueSentinel
            );
          var info = record.arg;
          return info
            ? info.done
              ? ((context[delegate.resultName] = info.value),
                (context.next = delegate.nextLoc),
                "return" !== context.method && ((context.method = "next"), (context.arg = void 0)),
                (context.delegate = null),
                ContinueSentinel)
              : info
            : ((context.method = "throw"),
              (context.arg = new TypeError("iterator result is not an object")),
              (context.delegate = null),
              ContinueSentinel);
        }
        function pushTryEntry(locs) {
          var entry = { tryLoc: locs[0] };
          1 in locs && (entry.catchLoc = locs[1]),
            2 in locs && ((entry.finallyLoc = locs[2]), (entry.afterLoc = locs[3])),
            this.tryEntries.push(entry);
        }
        function resetTryEntry(entry) {
          var record = entry.completion || {};
          (record.type = "normal"), delete record.arg, (entry.completion = record);
        }
        function Context(tryLocsList) {
          (this.tryEntries = [{ tryLoc: "root" }]),
            tryLocsList.forEach(pushTryEntry, this),
            this.reset(!0);
        }
        function values(iterable) {
          if (iterable) {
            var iteratorMethod = iterable[iteratorSymbol];
            if (iteratorMethod) return iteratorMethod.call(iterable);
            if ("function" == typeof iterable.next) return iterable;
            if (!isNaN(iterable.length)) {
              var i = -1,
                next = function next() {
                  for (; ++i < iterable.length; )
                    if (hasOwn.call(iterable, i))
                      return (next.value = iterable[i]), (next.done = !1), next;
                  return (next.value = void 0), (next.done = !0), next;
                };
              return (next.next = next);
            }
          }
          return { next: doneResult };
        }
        function doneResult() {
          return { value: void 0, done: !0 };
        }
        return (
          (GeneratorFunction.prototype = GeneratorFunctionPrototype),
          defineProperty(Gp, "constructor", {
            value: GeneratorFunctionPrototype,
            configurable: !0,
          }),
          defineProperty(GeneratorFunctionPrototype, "constructor", {
            value: GeneratorFunction,
            configurable: !0,
          }),
          (GeneratorFunction.displayName = define(
            GeneratorFunctionPrototype,
            toStringTagSymbol,
            "GeneratorFunction"
          )),
          (exports.isGeneratorFunction = function (genFun) {
            var ctor = "function" == typeof genFun && genFun.constructor;
            return (
              !!ctor &&
              (ctor === GeneratorFunction ||
                "GeneratorFunction" === (ctor.displayName || ctor.name))
            );
          }),
          (exports.mark = function (genFun) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype)
                : ((genFun.__proto__ = GeneratorFunctionPrototype),
                  define(genFun, toStringTagSymbol, "GeneratorFunction")),
              (genFun.prototype = Object.create(Gp)),
              genFun
            );
          }),
          (exports.awrap = function (arg) {
            return { __await: arg };
          }),
          defineIteratorMethods(AsyncIterator.prototype),
          define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
            return this;
          }),
          (exports.AsyncIterator = AsyncIterator),
          (exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
            void 0 === PromiseImpl && (PromiseImpl = Promise);
            var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
            return exports.isGeneratorFunction(outerFn)
              ? iter
              : iter.next().then(function (result) {
                  return result.done ? result.value : iter.next();
                });
          }),
          defineIteratorMethods(Gp),
          define(Gp, toStringTagSymbol, "Generator"),
          define(Gp, iteratorSymbol, function () {
            return this;
          }),
          define(Gp, "toString", function () {
            return "[object Generator]";
          }),
          (exports.keys = function (val) {
            var object = Object(val),
              keys = [];
            for (var key in object) keys.push(key);
            return (
              keys.reverse(),
              function next() {
                for (; keys.length; ) {
                  var key = keys.pop();
                  if (key in object) return (next.value = key), (next.done = !1), next;
                }
                return (next.done = !0), next;
              }
            );
          }),
          (exports.values = values),
          (Context.prototype = {
            constructor: Context,
            reset: function reset(skipTempReset) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = void 0),
                (this.done = !1),
                (this.delegate = null),
                (this.method = "next"),
                (this.arg = void 0),
                this.tryEntries.forEach(resetTryEntry),
                !skipTempReset)
              )
                for (var name in this)
                  "t" === name.charAt(0) &&
                    hasOwn.call(this, name) &&
                    !isNaN(+name.slice(1)) &&
                    (this[name] = void 0);
            },
            stop: function stop() {
              this.done = !0;
              var rootRecord = this.tryEntries[0].completion;
              if ("throw" === rootRecord.type) throw rootRecord.arg;
              return this.rval;
            },
            dispatchException: function dispatchException(exception) {
              if (this.done) throw exception;
              var context = this;
              function handle(loc, caught) {
                return (
                  (record.type = "throw"),
                  (record.arg = exception),
                  (context.next = loc),
                  caught && ((context.method = "next"), (context.arg = void 0)),
                  !!caught
                );
              }
              for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                var entry = this.tryEntries[i],
                  record = entry.completion;
                if ("root" === entry.tryLoc) return handle("end");
                if (entry.tryLoc <= this.prev) {
                  var hasCatch = hasOwn.call(entry, "catchLoc"),
                    hasFinally = hasOwn.call(entry, "finallyLoc");
                  if (hasCatch && hasFinally) {
                    if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
                    if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
                  } else if (hasCatch) {
                    if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
                  } else {
                    if (!hasFinally) throw new Error("try statement without catch or finally");
                    if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
                  }
                }
              }
            },
            abrupt: function abrupt(type, arg) {
              for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                var entry = this.tryEntries[i];
                if (
                  entry.tryLoc <= this.prev &&
                  hasOwn.call(entry, "finallyLoc") &&
                  this.prev < entry.finallyLoc
                ) {
                  var finallyEntry = entry;
                  break;
                }
              }
              finallyEntry &&
                ("break" === type || "continue" === type) &&
                finallyEntry.tryLoc <= arg &&
                arg <= finallyEntry.finallyLoc &&
                (finallyEntry = null);
              var record = finallyEntry ? finallyEntry.completion : {};
              return (
                (record.type = type),
                (record.arg = arg),
                finallyEntry
                  ? ((this.method = "next"),
                    (this.next = finallyEntry.finallyLoc),
                    ContinueSentinel)
                  : this.complete(record)
              );
            },
            complete: function complete(record, afterLoc) {
              if ("throw" === record.type) throw record.arg;
              return (
                "break" === record.type || "continue" === record.type
                  ? (this.next = record.arg)
                  : "return" === record.type
                  ? ((this.rval = this.arg = record.arg),
                    (this.method = "return"),
                    (this.next = "end"))
                  : "normal" === record.type && afterLoc && (this.next = afterLoc),
                ContinueSentinel
              );
            },
            finish: function finish(finallyLoc) {
              for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                var entry = this.tryEntries[i];
                if (entry.finallyLoc === finallyLoc)
                  return (
                    this.complete(entry.completion, entry.afterLoc),
                    resetTryEntry(entry),
                    ContinueSentinel
                  );
              }
            },
            catch: function _catch(tryLoc) {
              for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                var entry = this.tryEntries[i];
                if (entry.tryLoc === tryLoc) {
                  var record = entry.completion;
                  if ("throw" === record.type) {
                    var thrown = record.arg;
                    resetTryEntry(entry);
                  }
                  return thrown;
                }
              }
              throw new Error("illegal catch attempt");
            },
            delegateYield: function delegateYield(iterable, resultName, nextLoc) {
              return (
                (this.delegate = { iterator: values(iterable), resultName, nextLoc }),
                "next" === this.method && (this.arg = void 0),
                ContinueSentinel
              );
            },
          }),
          exports
        );
      }
      function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
        try {
          var info = gen[key](arg),
            value = info.value;
        } catch (error) {
          return void reject(error);
        }
        info.done ? resolve(value) : Promise.resolve(value).then(_next, _throw);
      }
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
      function useStory(storyId, context) {
        var stories = useStories([storyId], context);
        return stories && stories[0];
      }
      function useStories(storyIds, context) {
        var initialStoriesById = context.componentStories().reduce(function (acc, story) {
            return (acc[story.id] = story), acc;
          }, {}),
          _useState2 = _slicedToArray((0, react.useState)(initialStoriesById), 2),
          storiesById = _useState2[0],
          setStories = _useState2[1];
        return (
          (0, react.useEffect)(function () {
            Promise.all(
              storyIds.map(
                (function () {
                  var _ref = (function _asyncToGenerator(fn) {
                    return function () {
                      var self = this,
                        args = arguments;
                      return new Promise(function (resolve, reject) {
                        var gen = fn.apply(self, args);
                        function _next(value) {
                          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
                        }
                        function _throw(err) {
                          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
                        }
                        _next(void 0);
                      });
                    };
                  })(
                    _regeneratorRuntime().mark(function _callee(storyId) {
                      var story;
                      return _regeneratorRuntime().wrap(function _callee$(_context) {
                        for (;;)
                          switch ((_context.prev = _context.next)) {
                            case 0:
                              return (_context.next = 2), context.loadStory(storyId);
                            case 2:
                              (story = _context.sent),
                                setStories(function (current) {
                                  return current[storyId] === story
                                    ? current
                                    : Object.assign(
                                        {},
                                        current,
                                        ((value = story),
                                        (key = storyId) in (obj = {})
                                          ? Object.defineProperty(obj, key, {
                                              value,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0,
                                            })
                                          : (obj[key] = value),
                                        obj)
                                      );
                                  var obj, key, value;
                                });
                            case 4:
                            case "end":
                              return _context.stop();
                          }
                      }, _callee);
                    })
                  );
                  return function (_x) {
                    return _ref.apply(this, arguments);
                  };
                })()
              )
            );
          }),
          storyIds.map(function (storyId) {
            return storiesById[storyId];
          })
        );
      }
      function Story_slicedToArray(arr, i) {
        return (
          (function Story_arrayWithHoles(arr) {
            if (Array.isArray(arr)) return arr;
          })(arr) ||
          (function Story_iterableToArrayLimit(arr, i) {
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
          (function Story_unsupportedIterableToArray(o, minLen) {
            if (!o) return;
            if ("string" == typeof o) return Story_arrayLikeToArray(o, minLen);
            var n = Object.prototype.toString.call(o).slice(8, -1);
            "Object" === n && o.constructor && (n = o.constructor.name);
            if ("Map" === n || "Set" === n) return Array.from(o);
            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
              return Story_arrayLikeToArray(o, minLen);
          })(arr, i) ||
          (function Story_nonIterableRest() {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function Story_arrayLikeToArray(arr, len) {
        (null == len || len > arr.length) && (len = arr.length);
        for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
        return arr2;
      }
      var storyBlockIdFromId = function storyBlockIdFromId(storyId) {
          return "story--".concat(storyId);
        },
        lookupStoryId = function lookupStoryId(storyName, _ref) {
          var mdxStoryNameToKey = _ref.mdxStoryNameToKey,
            mdxComponentAnnotations = _ref.mdxComponentAnnotations;
          return (0, dist.toId)(
            mdxComponentAnnotations.id || mdxComponentAnnotations.title,
            (0, dist.storyNameFromExport)(mdxStoryNameToKey[storyName])
          );
        },
        getStoryId = function getStoryId(props, context) {
          var id = props.id,
            name = props.name;
          return (id === CURRENT_SELECTION ? context.id : id) || lookupStoryId(name, context);
        },
        getStoryProps = function getStoryProps(_ref4, story, context, onStoryFnCalled) {
          var height = _ref4.height,
            inline = _ref4.inline,
            storyName = story.name,
            parameters = story.parameters,
            _parameters$docs = parameters.docs,
            docs = void 0 === _parameters$docs ? {} : _parameters$docs;
          if (docs.disable) return null;
          var _docs$inlineStories = docs.inlineStories,
            inlineStories = void 0 !== _docs$inlineStories && _docs$inlineStories,
            _docs$iframeHeight = docs.iframeHeight,
            iframeHeight = void 0 === _docs$iframeHeight ? 100 : _docs$iframeHeight,
            prepareForInline = docs.prepareForInline,
            storyIsInline = "boolean" == typeof inline ? inline : inlineStories;
          if (storyIsInline && !prepareForInline)
            throw new Error(
              "Story '".concat(
                storyName,
                "' is set to render inline, but no 'prepareForInline' function is implemented in your docs configuration!"
              )
            );
          var boundStoryFn = function boundStoryFn() {
            var storyResult = story.unboundStoryFn(
              Object.assign({}, context.getStoryContext(story), {
                loaded: {},
                abortSignal: void 0,
                canvasElement: void 0,
              })
            );
            return onStoryFnCalled(), storyResult;
          };
          return Object.assign(
            {
              inline: storyIsInline,
              id: story.id,
              height: height || (storyIsInline ? void 0 : iframeHeight),
              title: storyName,
            },
            storyIsInline && {
              parameters,
              storyFn: function storyFn() {
                return prepareForInline(boundStoryFn, context.getStoryContext(story));
              },
            }
          );
        };
      function makeGate() {
        var open;
        return [
          new Promise(function (r) {
            open = r;
          }),
          open,
        ];
      }
      var Story = function Story(props) {
        var context = (0, react.useContext)(DocsContext),
          channel = esm.KP.getChannel(),
          storyRef = (0, react.useRef)(),
          storyId = getStoryId(props, context),
          story = useStory(storyId, context),
          _useState2 = Story_slicedToArray((0, react.useState)(!0), 2),
          showLoader = _useState2[0],
          setShowLoader = _useState2[1];
        (0, react.useEffect)(
          function () {
            var cleanup;
            if (story && storyRef.current) {
              var element = storyRef.current;
              (cleanup = context.renderStoryToElement(story, element)), setShowLoader(!1);
            }
            return function () {
              return cleanup && cleanup();
            };
          },
          [story]
        );
        var _makeGate2 = Story_slicedToArray(makeGate(), 2),
          storyFnRan = _makeGate2[0],
          onStoryFnRan = _makeGate2[1],
          _makeGate4 = Story_slicedToArray(makeGate(), 2),
          rendered = _makeGate4[0],
          onRendered = _makeGate4[1];
        if (((0, react.useEffect)(onRendered), !story))
          return react.createElement(index_681e4b07.aM, null);
        var storyProps = getStoryProps(props, story, context, onStoryFnRan);
        if (!storyProps) return null;
        if (storyProps.inline) {
          var _global$FEATURES;
          if (
            null !== window_default() &&
            void 0 !== window_default() &&
            null !== (_global$FEATURES = window_default().FEATURES) &&
            void 0 !== _global$FEATURES &&
            _global$FEATURES.modernInlineRender
          ) {
            var height = storyProps.height;
            return react.createElement(
              "div",
              { id: storyBlockIdFromId(story.id) },
              react.createElement(
                MDXProvider,
                { components: index_681e4b07.C },
                height
                  ? react.createElement(
                      "style",
                      null,
                      "#story--"
                        .concat(story.id, " { min-height: ")
                        .concat(height, "; transform: translateZ(0); overflow: auto }")
                    )
                  : null,
                showLoader && react.createElement(index_681e4b07.aM, null),
                react.createElement("div", {
                  ref: storyRef,
                  "data-name": story.name,
                  dangerouslySetInnerHTML: { __html: "<span></span>" },
                })
              )
            );
          }
          Promise.all([storyFnRan, rendered]).then(function () {
            channel.emit(dist_esm.default.STORY_RENDERED, storyId);
          });
        }
        return react.createElement(
          "div",
          { id: storyBlockIdFromId(story.id) },
          react.createElement(
            MDXProvider,
            { components: index_681e4b07.C },
            react.createElement(index_681e4b07.aL, storyProps)
          )
        );
      };
      function ArgsTable_extends() {
        return (
          (ArgsTable_extends =
            Object.assign ||
            function (target) {
              for (var i = 1; i < arguments.length; i++) {
                var source = arguments[i];
                for (var key in source)
                  Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key]);
              }
              return target;
            }),
          ArgsTable_extends.apply(this, arguments)
        );
      }
      function ArgsTable_defineProperty(obj, key, value) {
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
      function ArgsTable_slicedToArray(arr, i) {
        return (
          (function ArgsTable_arrayWithHoles(arr) {
            if (Array.isArray(arr)) return arr;
          })(arr) ||
          (function ArgsTable_iterableToArrayLimit(arr, i) {
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
          (function ArgsTable_unsupportedIterableToArray(o, minLen) {
            if (!o) return;
            if ("string" == typeof o) return ArgsTable_arrayLikeToArray(o, minLen);
            var n = Object.prototype.toString.call(o).slice(8, -1);
            "Object" === n && o.constructor && (n = o.constructor.name);
            if ("Map" === n || "Set" === n) return Array.from(o);
            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
              return ArgsTable_arrayLikeToArray(o, minLen);
          })(arr, i) ||
          (function ArgsTable_nonIterableRest() {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function ArgsTable_arrayLikeToArray(arr, len) {
        (null == len || len > arr.length) && (len = arr.length);
        for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
        return arr2;
      }
      (Story.defaultProps = { children: null, name: null }),
        (Story.__docgenInfo = {
          description: "",
          methods: [],
          displayName: "Story",
          props: {
            children: { defaultValue: { value: "null", computed: !1 }, required: !1 },
            name: { defaultValue: { value: "null", computed: !1 }, required: !1 },
          },
        }),
        "undefined" != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES["node_modules/@storybook/addon-docs/dist/esm/blocks/Story.js"] =
            {
              name: "Story",
              docgenInfo: Story.__docgenInfo,
              path: "node_modules/@storybook/addon-docs/dist/esm/blocks/Story.js",
            });
      var getContext = function getContext(storyId, context) {
          var story = context.storyById(storyId);
          if (!story) throw new Error("Unknown story: ".concat(storyId));
          return context.getStoryContext(story);
        },
        extractComponentArgTypes = function extractComponentArgTypes(
          component,
          _ref,
          include,
          exclude
        ) {
          var id = _ref.id,
            extractArgTypes = ((0, _ref.storyById)(id).parameters.docs || {}).extractArgTypes;
          if (!extractArgTypes) throw new Error(index_681e4b07.aC.ARGS_UNSUPPORTED);
          var argTypes = extractArgTypes(component);
          return (argTypes = (0, filterArgTypes.h)(argTypes, include, exclude));
        },
        isShortcut = function isShortcut(value) {
          return value && [CURRENT_SELECTION, PRIMARY_STORY].includes(value);
        },
        getComponent = function getComponent() {
          var props = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            _ref3 = arguments.length > 1 ? arguments[1] : void 0,
            id = _ref3.id,
            storyById = _ref3.storyById,
            _ref4 = props,
            of = _ref4.of,
            _ref5 = props,
            story = _ref5.story,
            _storyById2 = storyById(id),
            component = _storyById2.component;
          if (isShortcut(of) || isShortcut(story)) return component || null;
          if (!of) throw new Error(index_681e4b07.aC.NO_COMPONENT);
          return of;
        },
        addComponentTabs = function addComponentTabs(
          tabs,
          components,
          context,
          include,
          exclude,
          sort
        ) {
          return Object.assign(
            {},
            tabs,
            mapValues_default()(components, function (comp) {
              return { rows: extractComponentArgTypes(comp, context, include, exclude), sort };
            })
          );
        },
        StoryTable = function StoryTable(props) {
          var context = (0, react.useContext)(DocsContext),
            currentId = context.id,
            componentStories = context.componentStories,
            storyName = props.story,
            component = props.component,
            subcomponents = props.subcomponents,
            showComponent = props.showComponent,
            include = props.include,
            exclude = props.exclude,
            sort = props.sort;
          try {
            var storyId;
            switch (storyName) {
              case CURRENT_SELECTION:
                storyId = currentId;
                break;
              case PRIMARY_STORY:
                storyId = componentStories()[0].id;
                break;
              default:
                storyId = lookupStoryId(storyName, context);
            }
            var story = useStory(storyId, context),
              _useArgs = (function useArgs(storyId, context) {
                var channel = esm.KP.getChannel(),
                  storyContext = getContext(storyId, context),
                  _useState2 = ArgsTable_slicedToArray((0, react.useState)(storyContext.args), 2),
                  args = _useState2[0],
                  setArgs = _useState2[1];
                return (
                  (0, react.useEffect)(
                    function () {
                      var cb = function cb(changed) {
                        changed.storyId === storyId && setArgs(changed.args);
                      };
                      return (
                        channel.on(dist_esm.default.STORY_ARGS_UPDATED, cb),
                        function () {
                          return channel.off(dist_esm.default.STORY_ARGS_UPDATED, cb);
                        }
                      );
                    },
                    [storyId]
                  ),
                  [
                    args,
                    (0, react.useCallback)(
                      function (updatedArgs) {
                        return channel.emit(dist_esm.default.UPDATE_STORY_ARGS, {
                          storyId,
                          updatedArgs,
                        });
                      },
                      [storyId]
                    ),
                    (0, react.useCallback)(
                      function (argNames) {
                        return channel.emit(dist_esm.default.RESET_STORY_ARGS, {
                          storyId,
                          argNames,
                        });
                      },
                      [storyId]
                    ),
                  ]
                );
              })(storyId, context),
              _useArgs2 = ArgsTable_slicedToArray(_useArgs, 3),
              args = _useArgs2[0],
              updateArgs = _useArgs2[1],
              resetArgs = _useArgs2[2],
              _useGlobals = (function useGlobals(storyId, context) {
                var channel = esm.KP.getChannel(),
                  storyContext = getContext(storyId, context),
                  _useState4 = ArgsTable_slicedToArray(
                    (0, react.useState)(storyContext.globals),
                    2
                  ),
                  globals = _useState4[0],
                  setGlobals = _useState4[1];
                return (
                  (0, react.useEffect)(function () {
                    var cb = function cb(changed) {
                      setGlobals(changed.globals);
                    };
                    return (
                      channel.on(dist_esm.default.GLOBALS_UPDATED, cb),
                      function () {
                        return channel.off(dist_esm.default.GLOBALS_UPDATED, cb);
                      }
                    );
                  }, []),
                  [globals]
                );
              })(storyId, context),
              globals = ArgsTable_slicedToArray(_useGlobals, 1)[0];
            if (!story)
              return react.createElement(index_681e4b07.aE, {
                isLoading: !0,
                updateArgs,
                resetArgs,
              });
            var argTypes = (0, filterArgTypes.h)(story.argTypes, include, exclude),
              mainLabel = getComponentName(component) || "Story",
              tabs = ArgsTable_defineProperty({}, mainLabel, {
                rows: argTypes,
                args,
                globals,
                updateArgs,
                resetArgs,
              }),
              storyHasArgsWithControls =
                argTypes &&
                Object.values(argTypes).find(function (v) {
                  return !(null == v || !v.control);
                });
            if (
              (storyHasArgsWithControls || ((updateArgs = null), (resetArgs = null), (tabs = {})),
              !component ||
                (storyHasArgsWithControls && !showComponent) ||
                (tabs = addComponentTabs(
                  tabs,
                  ArgsTable_defineProperty({}, mainLabel, component),
                  context,
                  include,
                  exclude
                )),
              subcomponents)
            ) {
              if (Array.isArray(subcomponents))
                throw new Error(
                  "Unexpected subcomponents array. Expected an object whose keys are tab labels and whose values are components."
                );
              tabs = addComponentTabs(tabs, subcomponents, context, include, exclude);
            }
            return react.createElement(index_681e4b07.aF, { tabs, sort });
          } catch (err) {
            return react.createElement(index_681e4b07.aE, { error: err.message });
          }
        },
        ComponentsTable = function ComponentsTable(props) {
          var context = (0, react.useContext)(DocsContext),
            components = props.components,
            include = props.include,
            exclude = props.exclude,
            sort = props.sort,
            tabs = addComponentTabs({}, components, context, include, exclude);
          return react.createElement(index_681e4b07.aF, { tabs, sort });
        },
        ArgsTable = function ArgsTable(props) {
          var context = (0, react.useContext)(DocsContext),
            id = context.id,
            _storyById3 = (0, context.storyById)(id),
            controls = _storyById3.parameters.controls,
            subcomponents = _storyById3.subcomponents,
            _ref6 = props,
            include = _ref6.include,
            exclude = _ref6.exclude,
            components = _ref6.components,
            sortProp = _ref6.sort,
            storyName = props.story,
            sort = sortProp || (null == controls ? void 0 : controls.sort),
            main = getComponent(props, context);
          if (storyName)
            return react.createElement(
              StoryTable,
              ArgsTable_extends({}, props, { component: main, subcomponents, sort })
            );
          if (!components && !subcomponents) {
            var mainProps;
            try {
              mainProps = { rows: extractComponentArgTypes(main, context, include, exclude) };
            } catch (err) {
              mainProps = { error: err.message };
            }
            return react.createElement(
              index_681e4b07.aE,
              ArgsTable_extends({}, mainProps, { sort })
            );
          }
          if (components)
            return react.createElement(
              ComponentsTable,
              ArgsTable_extends({}, props, { components, sort })
            );
          var mainLabel = getComponentName(main);
          return react.createElement(
            ComponentsTable,
            ArgsTable_extends({}, props, {
              components: Object.assign(
                ArgsTable_defineProperty({}, mainLabel, main),
                subcomponents
              ),
              sort,
            })
          );
        };
      (ArgsTable.defaultProps = { of: CURRENT_SELECTION }),
        (StoryTable.__docgenInfo = { description: "", methods: [], displayName: "StoryTable" }),
        "undefined" != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES[
            "node_modules/@storybook/addon-docs/dist/esm/blocks/ArgsTable.js"
          ] = {
            name: "StoryTable",
            docgenInfo: StoryTable.__docgenInfo,
            path: "node_modules/@storybook/addon-docs/dist/esm/blocks/ArgsTable.js",
          }),
        (ComponentsTable.__docgenInfo = {
          description: "",
          methods: [],
          displayName: "ComponentsTable",
        }),
        "undefined" != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES[
            "node_modules/@storybook/addon-docs/dist/esm/blocks/ArgsTable.js"
          ] = {
            name: "ComponentsTable",
            docgenInfo: ComponentsTable.__docgenInfo,
            path: "node_modules/@storybook/addon-docs/dist/esm/blocks/ArgsTable.js",
          }),
        (ArgsTable.__docgenInfo = {
          description: "",
          methods: [],
          displayName: "ArgsTable",
          props: {
            of: { defaultValue: { value: "CURRENT_SELECTION", computed: !0 }, required: !1 },
          },
        }),
        "undefined" != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES[
            "node_modules/@storybook/addon-docs/dist/esm/blocks/ArgsTable.js"
          ] = {
            name: "ArgsTable",
            docgenInfo: ArgsTable.__docgenInfo,
            path: "node_modules/@storybook/addon-docs/dist/esm/blocks/ArgsTable.js",
          });
      __webpack_require__("./node_modules/core-js/modules/es.array.some.js");
      var SourceType,
        fast_deep_equal = __webpack_require__("./node_modules/fast-deep-equal/index.js"),
        fast_deep_equal_default = __webpack_require__.n(fast_deep_equal),
        SNIPPET_RENDERED =
          ("".concat("storybook/docs", "/panel"), "".concat("storybook/docs", "/snippet-rendered"));
      function SourceContainer_defineProperty(obj, key, value) {
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
      function SourceContainer_slicedToArray(arr, i) {
        return (
          (function SourceContainer_arrayWithHoles(arr) {
            if (Array.isArray(arr)) return arr;
          })(arr) ||
          (function SourceContainer_iterableToArrayLimit(arr, i) {
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
          (function SourceContainer_unsupportedIterableToArray(o, minLen) {
            if (!o) return;
            if ("string" == typeof o) return SourceContainer_arrayLikeToArray(o, minLen);
            var n = Object.prototype.toString.call(o).slice(8, -1);
            "Object" === n && o.constructor && (n = o.constructor.name);
            if ("Map" === n || "Set" === n) return Array.from(o);
            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
              return SourceContainer_arrayLikeToArray(o, minLen);
          })(arr, i) ||
          (function SourceContainer_nonIterableRest() {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function SourceContainer_arrayLikeToArray(arr, len) {
        (null == len || len > arr.length) && (len = arr.length);
        for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
        return arr2;
      }
      !(function (SourceType) {
        (SourceType.AUTO = "auto"), (SourceType.CODE = "code"), (SourceType.DYNAMIC = "dynamic");
      })(SourceType || (SourceType = {}));
      var SourceContext = (0, react.createContext)({ sources: {} }),
        SourceContainer = function SourceContainer(_ref) {
          var children = _ref.children,
            _useState2 = SourceContainer_slicedToArray((0, react.useState)({}), 2),
            sources = _useState2[0],
            setSources = _useState2[1],
            channel = esm.KP.getChannel();
          return (
            (0, react.useEffect)(function () {
              var handleSnippetRendered = function handleSnippetRendered(id, newSource) {
                var format = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                (sources[id] && sources[id].code === newSource) ||
                  setSources(function (current) {
                    var newSources = Object.assign(
                      {},
                      current,
                      SourceContainer_defineProperty({}, id, { code: newSource, format })
                    );
                    return fast_deep_equal_default()(current, newSources) ? current : newSources;
                  });
              };
              return (
                channel.on(SNIPPET_RENDERED, handleSnippetRendered),
                function () {
                  return channel.off(SNIPPET_RENDERED, handleSnippetRendered);
                }
              );
            }, []),
            react.createElement(SourceContext.Provider, { value: { sources } }, children)
          );
        };
      (SourceContainer.__docgenInfo = {
        description: "",
        methods: [],
        displayName: "SourceContainer",
      }),
        "undefined" != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES[
            "node_modules/@storybook/addon-docs/dist/esm/blocks/SourceContainer.js"
          ] = {
            name: "SourceContainer",
            docgenInfo: SourceContainer.__docgenInfo,
            path: "node_modules/@storybook/addon-docs/dist/esm/blocks/SourceContainer.js",
          });
      __webpack_require__("./node_modules/core-js/modules/es.array.every.js"),
        __webpack_require__("./node_modules/core-js/modules/es.string.replace.js");
      var esm_parameters = __webpack_require__(
        "./node_modules/@storybook/store/dist/esm/parameters.js"
      );
      function _toConsumableArray(arr) {
        return (
          (function _arrayWithoutHoles(arr) {
            if (Array.isArray(arr)) return enhanceSource_arrayLikeToArray(arr);
          })(arr) ||
          (function _iterableToArray(iter) {
            if (
              ("undefined" != typeof Symbol && null != iter[Symbol.iterator]) ||
              null != iter["@@iterator"]
            )
              return Array.from(iter);
          })(arr) ||
          (function enhanceSource_unsupportedIterableToArray(o, minLen) {
            if (!o) return;
            if ("string" == typeof o) return enhanceSource_arrayLikeToArray(o, minLen);
            var n = Object.prototype.toString.call(o).slice(8, -1);
            "Object" === n && o.constructor && (n = o.constructor.name);
            if ("Map" === n || "Set" === n) return Array.from(o);
            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
              return enhanceSource_arrayLikeToArray(o, minLen);
          })(arr) ||
          (function _nonIterableSpread() {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function enhanceSource_arrayLikeToArray(arr, len) {
        (null == len || len > arr.length) && (len = arr.length);
        for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
        return arr2;
      }
      var SourceState,
        extract = function extract(targetId, _ref) {
          var source = _ref.source,
            locationsMap = _ref.locationsMap;
          if (!locationsMap) return source;
          var location =
            locationsMap[
              (function storyIdToSanitizedStoryName(id) {
                return id.replace(/^.*?--/, "");
              })(targetId)
            ];
          return location
            ? (function extractSource(location, lines) {
                var start = location.startBody,
                  end = location.endBody;
                if (start.line === end.line && void 0 !== lines[start.line - 1])
                  return lines[start.line - 1].substring(start.col, end.col);
                var startLine = lines[start.line - 1],
                  endLine = lines[end.line - 1];
                return void 0 === startLine || void 0 === endLine
                  ? null
                  : [startLine.substring(start.col)]
                      .concat(_toConsumableArray(lines.slice(start.line, end.line - 1)), [
                        endLine.substring(0, end.col),
                      ])
                      .join("\n");
              })(location, source.split("\n"))
            : source;
        };
      !(function (SourceState) {
        (SourceState.OPEN = "open"), (SourceState.CLOSED = "closed"), (SourceState.NONE = "none");
      })(SourceState || (SourceState = {}));
      var getStorySource = function getStorySource(storyId, sourceContext) {
          var sources = sourceContext.sources;
          return (null == sources ? void 0 : sources[storyId]) || { code: "", format: !1 };
        },
        getSnippet = function getSnippet(snippet, story) {
          var _parameters$docs,
            _parameters$docs$sour,
            _parameters$docs2,
            _parameters$docs2$sou,
            _enhanced$docs,
            _enhanced$docs$source;
          if (!story) return snippet;
          var _parameters$docs3,
            _parameters$docs3$tra,
            _parameters$docs4,
            _parameters$docs4$tra,
            parameters = story.parameters,
            isArgsStory = parameters.__isArgsStory,
            type =
              (null === (_parameters$docs = parameters.docs) ||
              void 0 === _parameters$docs ||
              null === (_parameters$docs$sour = _parameters$docs.source) ||
              void 0 === _parameters$docs$sour
                ? void 0
                : _parameters$docs$sour.type) || SourceType.AUTO,
            userCode =
              null === (_parameters$docs2 = parameters.docs) ||
              void 0 === _parameters$docs2 ||
              null === (_parameters$docs2$sou = _parameters$docs2.source) ||
              void 0 === _parameters$docs2$sou
                ? void 0
                : _parameters$docs2$sou.code;
          if (void 0 !== userCode) return userCode;
          if (type === SourceType.DYNAMIC)
            return (
              (null === (_parameters$docs3 = parameters.docs) ||
              void 0 === _parameters$docs3 ||
              null === (_parameters$docs3$tra = _parameters$docs3.transformSource) ||
              void 0 === _parameters$docs3$tra
                ? void 0
                : _parameters$docs3$tra.call(_parameters$docs3, snippet, story)) || snippet
            );
          if (type === SourceType.AUTO && snippet && isArgsStory)
            return (
              (null === (_parameters$docs4 = parameters.docs) ||
              void 0 === _parameters$docs4 ||
              null === (_parameters$docs4$tra = _parameters$docs4.transformSource) ||
              void 0 === _parameters$docs4$tra
                ? void 0
                : _parameters$docs4$tra.call(_parameters$docs4, snippet, story)) || snippet
            );
          var enhanced =
            (function enhanceSource(story) {
              var _docs$source,
                id = story.id,
                parameters = story.parameters,
                storySource = parameters.storySource,
                _parameters$docs = parameters.docs,
                docs = void 0 === _parameters$docs ? {} : _parameters$docs,
                transformSource = docs.transformSource;
              if (
                null == storySource ||
                !storySource.source ||
                (null !== (_docs$source = docs.source) &&
                  void 0 !== _docs$source &&
                  _docs$source.code)
              )
                return null;
              var input = extract(id, storySource),
                code = transformSource ? transformSource(input, story) : input;
              return { docs: (0, esm_parameters.f)(docs, { source: { code } }) };
            })(story) || parameters;
          return (
            (null == enhanced ||
            null === (_enhanced$docs = enhanced.docs) ||
            void 0 === _enhanced$docs ||
            null === (_enhanced$docs$source = _enhanced$docs.source) ||
            void 0 === _enhanced$docs$source
              ? void 0
              : _enhanced$docs$source.code) || ""
          );
        },
        getSourceProps = function getSourceProps(props, docsContext, sourceContext) {
          var currentId = docsContext.id,
            parameters = (0, docsContext.storyById)(currentId).parameters,
            codeProps = props,
            singleProps = props,
            multiProps = props,
            source = codeProps.code,
            format = codeProps.format,
            storyIds = (multiProps.ids || [singleProps.id || currentId]).map(function (targetId) {
              return targetId === CURRENT_SELECTION ? currentId : targetId;
            }),
            stories = useStories(storyIds, docsContext);
          if (!stories.every(Boolean))
            return { error: index_681e4b07.aH.SOURCE_UNAVAILABLE, state: SourceState.NONE };
          source ||
            ((format = getStorySource(storyIds[0], sourceContext).format),
            (source = storyIds
              .map(function (storyId, idx) {
                var storySource = getStorySource(storyId, sourceContext).code,
                  storyObj = stories[idx];
                return getSnippet(storySource, storyObj);
              })
              .join("\n\n")));
          var state = (function getSourceState(stories) {
              var states = stories
                .map(function (story) {
                  var _story$parameters$doc, _story$parameters$doc2;
                  return null === (_story$parameters$doc = story.parameters.docs) ||
                    void 0 === _story$parameters$doc ||
                    null === (_story$parameters$doc2 = _story$parameters$doc.source) ||
                    void 0 === _story$parameters$doc2
                    ? void 0
                    : _story$parameters$doc2.state;
                })
                .filter(Boolean);
              return 0 === states.length ? SourceState.CLOSED : states[0];
            })(stories),
            _parameters$docs5 = parameters.docs,
            _docsParameters$sourc = (void 0 === _parameters$docs5 ? {} : _parameters$docs5).source,
            _sourceParameters$lan = (void 0 === _docsParameters$sourc ? {} : _docsParameters$sourc)
              .language,
            docsLanguage = void 0 === _sourceParameters$lan ? null : _sourceParameters$lan;
          return source
            ? {
                code: source,
                state,
                format,
                language: props.language || docsLanguage || "jsx",
                dark: props.dark || !1,
              }
            : { error: index_681e4b07.aH.SOURCE_UNAVAILABLE, state };
        },
        Source = function Source(props) {
          var sourceContext = (0, react.useContext)(SourceContext),
            docsContext = (0, react.useContext)(DocsContext),
            sourceProps = getSourceProps(props, docsContext, sourceContext);
          return react.createElement(index_681e4b07.aI, sourceProps);
        };
      (Source.__docgenInfo = {
        description:
          "Story source doc block renders source code if provided,\nor the source for a story if `storyId` is provided, or\nthe source for the current story if nothing is provided.",
        methods: [],
        displayName: "Source",
      }),
        "undefined" != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES["node_modules/@storybook/addon-docs/dist/esm/blocks/Source.js"] =
            {
              name: "Source",
              docgenInfo: Source.__docgenInfo,
              path: "node_modules/@storybook/addon-docs/dist/esm/blocks/Source.js",
            });
      var _excluded = ["withSource", "mdxSource", "children"];
      function Canvas_objectWithoutProperties(source, excluded) {
        if (null == source) return {};
        var key,
          i,
          target = (function Canvas_objectWithoutPropertiesLoose(source, excluded) {
            if (null == source) return {};
            var key,
              i,
              target = {},
              sourceKeys = Object.keys(source);
            for (i = 0; i < sourceKeys.length; i++)
              (key = sourceKeys[i]), excluded.indexOf(key) >= 0 || (target[key] = source[key]);
            return target;
          })(source, excluded);
        if (Object.getOwnPropertySymbols) {
          var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
          for (i = 0; i < sourceSymbolKeys.length; i++)
            (key = sourceSymbolKeys[i]),
              excluded.indexOf(key) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(source, key) &&
                  (target[key] = source[key]));
        }
        return target;
      }
      var Canvas = function Canvas(props) {
        var _getPreviewProps = (function getPreviewProps(_ref, docsContext, sourceContext) {
            var withSource = _ref.withSource,
              mdxSource = _ref.mdxSource,
              children = _ref.children,
              props = Canvas_objectWithoutProperties(_ref, _excluded),
              mdxComponentAnnotations = docsContext.mdxComponentAnnotations,
              mdxStoryNameToKey = docsContext.mdxStoryNameToKey,
              sourceState = withSource,
              isLoading = !1;
            if (sourceState === SourceState.NONE) return { isLoading, previewProps: props };
            if (mdxSource)
              return {
                isLoading,
                previewProps: Object.assign({}, props, {
                  withSource: getSourceProps(
                    { code: decodeURI(mdxSource) },
                    docsContext,
                    sourceContext
                  ),
                }),
              };
            var targetIds = (Array.isArray(children) ? children : [children])
                .filter(function (c) {
                  return c.props && (c.props.id || c.props.name);
                })
                .map(function (s) {
                  return (
                    s.props.id ||
                    (0, dist.toId)(
                      mdxComponentAnnotations.id || mdxComponentAnnotations.title,
                      (0, dist.storyNameFromExport)(mdxStoryNameToKey[s.props.name])
                    )
                  );
                }),
              sourceProps = getSourceProps({ ids: targetIds }, docsContext, sourceContext);
            return (
              sourceState || (sourceState = sourceProps.state),
              {
                isLoading: (isLoading = useStories(
                  targetIds.map(function (targetId) {
                    return targetId === CURRENT_SELECTION ? docsContext.id : targetId;
                  }),
                  docsContext
                ).some(function (s) {
                  return !s;
                })),
                previewProps: Object.assign({}, props, {
                  withSource: sourceProps,
                  isExpanded: sourceState === SourceState.OPEN,
                }),
              }
            );
          })(props, (0, react.useContext)(DocsContext), (0, react.useContext)(SourceContext)),
          isLoading = _getPreviewProps.isLoading,
          previewProps = _getPreviewProps.previewProps,
          children = props.children;
        return isLoading
          ? react.createElement(index_681e4b07.aA, null)
          : react.createElement(
              MDXProvider,
              { components: index_681e4b07.C },
              react.createElement(index_681e4b07.az, previewProps, children)
            );
      };
      (Canvas.__docgenInfo = { description: "", methods: [], displayName: "Canvas" }),
        "undefined" != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES["node_modules/@storybook/addon-docs/dist/esm/blocks/Canvas.js"] =
            {
              name: "Canvas",
              docgenInfo: Canvas.__docgenInfo,
              path: "node_modules/@storybook/addon-docs/dist/esm/blocks/Canvas.js",
            });
      __webpack_require__("./node_modules/core-js/modules/es.string.trim.js");
      var DescriptionType,
        string = __webpack_require__(
          "./node_modules/@storybook/docs-tools/dist/esm/argTypes/docgen/utils/string.js"
        );
      !(function (DescriptionType) {
        (DescriptionType.INFO = "info"),
          (DescriptionType.NOTES = "notes"),
          (DescriptionType.DOCGEN = "docgen"),
          (DescriptionType.LEGACY_5_2 = "legacy-5.2"),
          (DescriptionType.AUTO = "auto");
      })(DescriptionType || (DescriptionType = {}));
      var getNotes = function getNotes(notes) {
          return (
            notes &&
            ("string" == typeof notes
              ? notes
              : (0, string.B)(notes.markdown) || (0, string.B)(notes.text))
          );
        },
        getInfo = function getInfo(info) {
          return info && ("string" == typeof info ? info : (0, string.B)(info.text));
        },
        noDescription = function noDescription(component) {
          return null;
        },
        getDescriptionProps = function getDescriptionProps(_ref, _ref2) {
          var of = _ref.of,
            type = _ref.type,
            markdown = _ref.markdown,
            children = _ref.children,
            id = _ref2.id,
            _storyById = (0, _ref2.storyById)(id),
            component = _storyById.component,
            parameters = _storyById.parameters;
          if (children || markdown) return { markdown: children || markdown };
          var notes = parameters.notes,
            info = parameters.info,
            _ref3 = parameters.docs || {},
            _ref3$extractComponen = _ref3.extractComponentDescription,
            extractComponentDescription =
              void 0 === _ref3$extractComponen ? noDescription : _ref3$extractComponen,
            description = _ref3.description,
            target = of === CURRENT_SELECTION ? component : of,
            componentDescriptionParameter = null == description ? void 0 : description.component;
          if (componentDescriptionParameter) return { markdown: componentDescriptionParameter };
          switch (type) {
            case DescriptionType.INFO:
              return { markdown: getInfo(info) };
            case DescriptionType.NOTES:
              return { markdown: getNotes(notes) };
            case DescriptionType.LEGACY_5_2:
              return {
                markdown: "\n"
                  .concat(getNotes(notes) || getInfo(info) || "", "\n\n")
                  .concat(extractComponentDescription(target) || "", "\n")
                  .trim(),
              };
            case DescriptionType.DOCGEN:
            case DescriptionType.AUTO:
            default:
              return {
                markdown: extractComponentDescription(
                  target,
                  Object.assign({ component }, parameters)
                ),
              };
          }
        },
        DescriptionContainer = function DescriptionContainer(props) {
          var context = (0, react.useContext)(DocsContext),
            markdown = getDescriptionProps(props, context).markdown;
          return markdown ? react.createElement(index_681e4b07.at, { markdown }) : null;
        };
      (DescriptionContainer.defaultProps = { of: "." }),
        (DescriptionContainer.__docgenInfo = {
          description: "",
          methods: [],
          displayName: "DescriptionContainer",
          props: { of: { defaultValue: { value: "'.'", computed: !1 }, required: !1 } },
        }),
        "undefined" != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES[
            "node_modules/@storybook/addon-docs/dist/esm/blocks/Description.js"
          ] = {
            name: "DescriptionContainer",
            docgenInfo: DescriptionContainer.__docgenInfo,
            path: "node_modules/@storybook/addon-docs/dist/esm/blocks/Description.js",
          });
      var STORY_KIND_PATH_SEPARATOR = /\s*\/\s*/,
        extractTitle = function extractTitle(_ref) {
          var title = _ref.title,
            groups = title.trim().split(STORY_KIND_PATH_SEPARATOR);
          return (groups && groups[groups.length - 1]) || title;
        },
        Title = function Title(_ref2) {
          var children = _ref2.children,
            context = (0, react.useContext)(DocsContext),
            text = children;
          return (
            text || (text = extractTitle(context)),
            text
              ? react.createElement(index_681e4b07.au, { className: "sbdocs-title" }, text)
              : null
          );
        };
      (Title.__docgenInfo = { description: "", methods: [], displayName: "Title" }),
        "undefined" != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES["node_modules/@storybook/addon-docs/dist/esm/blocks/Title.js"] =
            {
              name: "Title",
              docgenInfo: Title.__docgenInfo,
              path: "node_modules/@storybook/addon-docs/dist/esm/blocks/Title.js",
            });
      var Subtitle = function Subtitle(_ref) {
        var children = _ref.children,
          _useContext = (0, react.useContext)(DocsContext),
          id = _useContext.id,
          parameters = (0, _useContext.storyById)(id).parameters,
          text = children;
        return (
          text || (text = null == parameters ? void 0 : parameters.componentSubtitle),
          text
            ? react.createElement(index_681e4b07.av, { className: "sbdocs-subtitle" }, text)
            : null
        );
      };
      (Subtitle.__docgenInfo = { description: "", methods: [], displayName: "Subtitle" }),
        "undefined" != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES[
            "node_modules/@storybook/addon-docs/dist/esm/blocks/Subtitle.js"
          ] = {
            name: "Subtitle",
            docgenInfo: Subtitle.__docgenInfo,
            path: "node_modules/@storybook/addon-docs/dist/esm/blocks/Subtitle.js",
          });
      __webpack_require__("./node_modules/core-js/modules/es.object.freeze.js");
      var browser = __webpack_require__("./node_modules/util-deprecate/browser.js"),
        browser_default = __webpack_require__.n(browser),
        ts_dedent_esm = __webpack_require__("./node_modules/ts-dedent/esm/index.js"),
        theming_dist_esm =
          (__webpack_require__("./node_modules/core-js/modules/es.string.match.js"),
          __webpack_require__("./node_modules/core-js/modules/es.string.starts-with.js"),
          __webpack_require__("./node_modules/@storybook/theming/dist/esm/index.js")),
        mdx_excluded = ["children"],
        _excluded2 = ["className", "children"],
        _excluded3 = ["href", "target", "children"],
        _excluded4 = ["as", "id", "children"],
        _excluded5 = ["as", "id", "children"];
      function mdx_defineProperty(obj, key, value) {
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
      function mdx_extends() {
        return (
          (mdx_extends =
            Object.assign ||
            function (target) {
              for (var i = 1; i < arguments.length; i++) {
                var source = arguments[i];
                for (var key in source)
                  Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key]);
              }
              return target;
            }),
          mdx_extends.apply(this, arguments)
        );
      }
      function mdx_objectWithoutProperties(source, excluded) {
        if (null == source) return {};
        var key,
          i,
          target = (function mdx_objectWithoutPropertiesLoose(source, excluded) {
            if (null == source) return {};
            var key,
              i,
              target = {},
              sourceKeys = Object.keys(source);
            for (i = 0; i < sourceKeys.length; i++)
              (key = sourceKeys[i]), excluded.indexOf(key) >= 0 || (target[key] = source[key]);
            return target;
          })(source, excluded);
        if (Object.getOwnPropertySymbols) {
          var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
          for (i = 0; i < sourceSymbolKeys.length; i++)
            (key = sourceSymbolKeys[i]),
              excluded.indexOf(key) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(source, key) &&
                  (target[key] = source[key]));
        }
        return target;
      }
      var mdx_document = window_default().document,
        assertIsFn = function assertIsFn(val) {
          if ("function" != typeof val)
            throw new Error("Expected story function, got: ".concat(val));
          return val;
        },
        AddContext = function AddContext(props) {
          var children = props.children,
            rest = mdx_objectWithoutProperties(props, mdx_excluded),
            parentContext = react.useContext(DocsContext);
          return react.createElement(
            DocsContext.Provider,
            { value: Object.assign({}, parentContext, rest) },
            children
          );
        },
        CodeOrSourceMdx = function CodeOrSourceMdx(_ref) {
          var className = _ref.className,
            children = _ref.children,
            rest = mdx_objectWithoutProperties(_ref, _excluded2);
          if (
            "string" != typeof className &&
            ("string" != typeof children || !children.match(/[\n\r]/g))
          )
            return react.createElement(index_681e4b07.G, null, children);
          var language = className && className.split("-");
          return react.createElement(
            index_681e4b07.aI,
            mdx_extends(
              { language: (language && language[1]) || "plaintext", format: !1, code: children },
              rest
            )
          );
        };
      function mdx_navigate(url) {
        esm.KP.getChannel().emit(dist_esm.NAVIGATE_URL, url);
      }
      var A = index_681e4b07.B.a,
        AnchorInPage = function AnchorInPage(_ref2) {
          var hash = _ref2.hash,
            children = _ref2.children;
          return react.createElement(
            A,
            {
              href: hash,
              target: "_self",
              onClick: function onClick(event) {
                var id = hash.substring(1);
                mdx_document.getElementById(id) && mdx_navigate(hash);
              },
            },
            children
          );
        },
        AnchorMdx = function AnchorMdx(props) {
          var href = props.href,
            target = props.target,
            children = props.children,
            rest = mdx_objectWithoutProperties(props, _excluded3);
          if (href) {
            if (href.startsWith("#"))
              return react.createElement(AnchorInPage, { hash: href }, children);
            if ("_blank" !== target && !href.startsWith("https://"))
              return react.createElement(
                A,
                mdx_extends(
                  {
                    href,
                    onClick: function onClick(event) {
                      event.preventDefault(),
                        mdx_navigate(event.currentTarget.getAttribute("href"));
                    },
                    target,
                  },
                  rest
                ),
                children
              );
          }
          return react.createElement(A, props);
        },
        SUPPORTED_MDX_HEADERS = ["h1", "h2", "h3", "h4", "h5", "h6"],
        OcticonHeaders = SUPPORTED_MDX_HEADERS.reduce(function (acc, headerType) {
          return Object.assign(
            {},
            acc,
            mdx_defineProperty(
              {},
              headerType,
              (0, theming_dist_esm.zo)(index_681e4b07.B[headerType])({
                "& svg": { visibility: "hidden" },
                "&:hover svg": { visibility: "visible" },
              })
            )
          );
        }, {}),
        OcticonAnchor = theming_dist_esm.zo.a(function () {
          return { float: "left", paddingRight: "4px", marginLeft: "-20px", color: "inherit" };
        }),
        HeaderWithOcticonAnchor = function HeaderWithOcticonAnchor(_ref3) {
          var as = _ref3.as,
            id = _ref3.id,
            children = _ref3.children,
            rest = mdx_objectWithoutProperties(_ref3, _excluded4),
            OcticonHeader = OcticonHeaders[as],
            hash = "#".concat(id);
          return react.createElement(
            OcticonHeader,
            mdx_extends({ id }, rest),
            react.createElement(
              OcticonAnchor,
              {
                "aria-hidden": "true",
                href: hash,
                tabIndex: -1,
                target: "_self",
                onClick: function onClick(event) {
                  mdx_document.getElementById(id) && mdx_navigate(hash);
                },
              },
              react.createElement(
                "svg",
                {
                  viewBox: "0 0 16 16",
                  version: "1.1",
                  width: "16",
                  height: "16",
                  "aria-hidden": "true",
                  fill: "currentColor",
                },
                react.createElement("path", {
                  fillRule: "evenodd",
                  d: "M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z",
                })
              )
            ),
            children
          );
        },
        HeaderMdx = function HeaderMdx(props) {
          var as = props.as,
            id = props.id,
            children = props.children,
            rest = mdx_objectWithoutProperties(props, _excluded5);
          if (id)
            return react.createElement(
              HeaderWithOcticonAnchor,
              mdx_extends({ as, id }, rest),
              children
            );
          var Header = index_681e4b07.B[as];
          return react.createElement(Header, props);
        },
        HeadersMdx = SUPPORTED_MDX_HEADERS.reduce(function (acc, headerType) {
          return Object.assign(
            {},
            acc,
            mdx_defineProperty({}, headerType, function (props) {
              return react.createElement(HeaderMdx, mdx_extends({ as: headerType }, props));
            })
          );
        }, {});
      (AddContext.__docgenInfo = { description: "", methods: [], displayName: "AddContext" }),
        "undefined" != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES["node_modules/@storybook/addon-docs/dist/esm/blocks/mdx.js"] = {
            name: "AddContext",
            docgenInfo: AddContext.__docgenInfo,
            path: "node_modules/@storybook/addon-docs/dist/esm/blocks/mdx.js",
          }),
        (CodeOrSourceMdx.__docgenInfo = {
          description: "",
          methods: [],
          displayName: "CodeOrSourceMdx",
        }),
        "undefined" != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES["node_modules/@storybook/addon-docs/dist/esm/blocks/mdx.js"] = {
            name: "CodeOrSourceMdx",
            docgenInfo: CodeOrSourceMdx.__docgenInfo,
            path: "node_modules/@storybook/addon-docs/dist/esm/blocks/mdx.js",
          }),
        (AnchorMdx.__docgenInfo = { description: "", methods: [], displayName: "AnchorMdx" }),
        "undefined" != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES["node_modules/@storybook/addon-docs/dist/esm/blocks/mdx.js"] = {
            name: "AnchorMdx",
            docgenInfo: AnchorMdx.__docgenInfo,
            path: "node_modules/@storybook/addon-docs/dist/esm/blocks/mdx.js",
          }),
        (HeaderMdx.__docgenInfo = { description: "", methods: [], displayName: "HeaderMdx" }),
        "undefined" != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES["node_modules/@storybook/addon-docs/dist/esm/blocks/mdx.js"] = {
            name: "HeaderMdx",
            docgenInfo: HeaderMdx.__docgenInfo,
            path: "node_modules/@storybook/addon-docs/dist/esm/blocks/mdx.js",
          });
      var _templateObject,
        Subheading = function Subheading(_ref) {
          var children = _ref.children;
          if (_ref.disableAnchor || "string" != typeof children)
            return react.createElement(index_681e4b07.M, null, children);
          var tagID = children.toLowerCase().replace(/[^a-z0-9]/gi, "-");
          return react.createElement(HeaderMdx, { as: "h3", id: tagID }, children);
        };
      (Subheading.__docgenInfo = { description: "", methods: [], displayName: "Subheading" }),
        "undefined" != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES[
            "node_modules/@storybook/addon-docs/dist/esm/blocks/Subheading.js"
          ] = {
            name: "Subheading",
            docgenInfo: Subheading.__docgenInfo,
            path: "node_modules/@storybook/addon-docs/dist/esm/blocks/Subheading.js",
          });
      var warnStoryDescription = browser_default()(
          function () {},
          (0, ts_dedent_esm.C)(
            _templateObject ||
              (_templateObject = (function _taggedTemplateLiteral(strings, raw) {
                return (
                  raw || (raw = strings.slice(0)),
                  Object.freeze(
                    Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })
                  )
                );
              })([
                "\n    Deprecated parameter: docs.storyDescription => docs.description.story\n      \n    https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#docs-description-parameter\n  ",
              ]))
          )
        ),
        DocsStory = function DocsStory(_ref) {
          var description,
            _docs$description,
            id = _ref.id,
            name = _ref.name,
            _ref$expanded = _ref.expanded,
            expanded = void 0 === _ref$expanded || _ref$expanded,
            _ref$withToolbar = _ref.withToolbar,
            withToolbar = void 0 !== _ref$withToolbar && _ref$withToolbar,
            _ref$parameters = _ref.parameters,
            parameters = void 0 === _ref$parameters ? {} : _ref$parameters,
            docs = parameters.docs;
          expanded &&
            docs &&
            ((description =
              null === (_docs$description = docs.description) || void 0 === _docs$description
                ? void 0
                : _docs$description.story) ||
              ((description = docs.storyDescription) && warnStoryDescription()));
          var subheading = expanded && name;
          return react.createElement(
            Anchor,
            { storyId: id },
            subheading && react.createElement(Subheading, null, subheading),
            description && react.createElement(DescriptionContainer, { markdown: description }),
            react.createElement(
              Canvas,
              { withToolbar },
              react.createElement(Story, { id, parameters })
            )
          );
        };
      function Primary_extends() {
        return (
          (Primary_extends =
            Object.assign ||
            function (target) {
              for (var i = 1; i < arguments.length; i++) {
                var source = arguments[i];
                for (var key in source)
                  Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key]);
              }
              return target;
            }),
          Primary_extends.apply(this, arguments)
        );
      }
      (DocsStory.__docgenInfo = { description: "", methods: [], displayName: "DocsStory" }),
        "undefined" != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES[
            "node_modules/@storybook/addon-docs/dist/esm/blocks/DocsStory.js"
          ] = {
            name: "DocsStory",
            docgenInfo: DocsStory.__docgenInfo,
            path: "node_modules/@storybook/addon-docs/dist/esm/blocks/DocsStory.js",
          });
      var Primary = function Primary(_ref) {
        var story,
          name = _ref.name,
          componentStories = (0, (0, react.useContext)(DocsContext).componentStories)();
        return (
          componentStories &&
            (story = name
              ? componentStories.find(function (s) {
                  return s.name === name;
                })
              : componentStories[0]),
          story
            ? react.createElement(
                DocsStory,
                Primary_extends({}, story, { expanded: !1, withToolbar: !0 })
              )
            : null
        );
      };
      (Primary.__docgenInfo = { description: "", methods: [], displayName: "Primary" }),
        "undefined" != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES[
            "node_modules/@storybook/addon-docs/dist/esm/blocks/Primary.js"
          ] = {
            name: "Primary",
            docgenInfo: Primary.__docgenInfo,
            path: "node_modules/@storybook/addon-docs/dist/esm/blocks/Primary.js",
          });
      var Heading = function Heading(_ref) {
        var children = _ref.children;
        if (_ref.disableAnchor || "string" != typeof children)
          return react.createElement(index_681e4b07.L, null, children);
        var tagID = children.toLowerCase().replace(/[^a-z0-9]/gi, "-");
        return react.createElement(HeaderMdx, { as: "h2", id: tagID }, children);
      };
      function Stories_extends() {
        return (
          (Stories_extends =
            Object.assign ||
            function (target) {
              for (var i = 1; i < arguments.length; i++) {
                var source = arguments[i];
                for (var key in source)
                  Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key]);
              }
              return target;
            }),
          Stories_extends.apply(this, arguments)
        );
      }
      (Heading.__docgenInfo = { description: "", methods: [], displayName: "Heading" }),
        "undefined" != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES[
            "node_modules/@storybook/addon-docs/dist/esm/blocks/Heading.js"
          ] = {
            name: "Heading",
            docgenInfo: Heading.__docgenInfo,
            path: "node_modules/@storybook/addon-docs/dist/esm/blocks/Heading.js",
          });
      var Stories = function Stories(_ref) {
        var title = _ref.title,
          _ref$includePrimary = _ref.includePrimary,
          includePrimary = void 0 !== _ref$includePrimary && _ref$includePrimary,
          stories = (0, (0, react.useContext)(DocsContext).componentStories)();
        return (
          (stories = stories.filter(function (story) {
            var _story$parameters, _story$parameters$doc;
            return !(
              null !== (_story$parameters = story.parameters) &&
              void 0 !== _story$parameters &&
              null !== (_story$parameters$doc = _story$parameters.docs) &&
              void 0 !== _story$parameters$doc &&
              _story$parameters$doc.disable
            );
          })),
          includePrimary || (stories = stories.slice(1)),
          stories && 0 !== stories.length
            ? react.createElement(
                react.Fragment,
                null,
                react.createElement(Heading, null, title),
                stories.map(function (story) {
                  return (
                    story &&
                    react.createElement(
                      DocsStory,
                      Stories_extends({ key: story.id }, story, { expanded: !0 })
                    )
                  );
                })
              )
            : null
        );
      };
      (Stories.defaultProps = { title: "Stories" }),
        (Stories.__docgenInfo = {
          description: "",
          methods: [],
          displayName: "Stories",
          props: { title: { defaultValue: { value: "'Stories'", computed: !1 }, required: !1 } },
        }),
        "undefined" != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES[
            "node_modules/@storybook/addon-docs/dist/esm/blocks/Stories.js"
          ] = {
            name: "Stories",
            docgenInfo: Stories.__docgenInfo,
            path: "node_modules/@storybook/addon-docs/dist/esm/blocks/Stories.js",
          });
      var DocsPage = function DocsPage() {
        return react.createElement(
          react.Fragment,
          null,
          react.createElement(Title, null),
          react.createElement(Subtitle, null),
          react.createElement(DescriptionContainer, null),
          react.createElement(Primary, null),
          react.createElement(ArgsTable, { story: PRIMARY_STORY }),
          react.createElement(Stories, null)
        );
      };
      (DocsPage.__docgenInfo = { description: "", methods: [], displayName: "DocsPage" }),
        "undefined" != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES[
            "node_modules/@storybook/addon-docs/dist/esm/blocks/DocsPage.js"
          ] = {
            name: "DocsPage",
            docgenInfo: DocsPage.__docgenInfo,
            path: "node_modules/@storybook/addon-docs/dist/esm/blocks/DocsPage.js",
          });
      var DocsContainer_templateObject;
      __webpack_require__("./node_modules/core-js/modules/web.url.js"),
        __webpack_require__("./node_modules/core-js/modules/web.timers.js"),
        __webpack_require__("./node_modules/core-js/modules/web.url-search-params.js");
      var DocsContainer_document = window_default().document,
        globalWindow = window_default().window,
        defaultComponents = Object.assign(
          {},
          index_681e4b07.B,
          { code: CodeOrSourceMdx, a: AnchorMdx },
          HeadersMdx
        ),
        warnOptionsTheme = browser_default()(
          function () {},
          (0, ts_dedent_esm.C)(
            DocsContainer_templateObject ||
              (DocsContainer_templateObject = (function DocsContainer_taggedTemplateLiteral(
                strings,
                raw
              ) {
                return (
                  raw || (raw = strings.slice(0)),
                  Object.freeze(
                    Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })
                  )
                );
              })([
                "\n    Deprecated parameter: options.theme => docs.theme\n\n    https://github.com/storybookjs/storybook/blob/next/addons/docs/docs/theming.md#storybook-theming\n",
              ]))
          )
        ),
        DocsContainer = function DocsContainer(_ref) {
          var context = _ref.context,
            children = _ref.children,
            storyId = context.id,
            _storyById$parameters = (0, context.storyById)(storyId).parameters,
            _storyById$parameters2 = _storyById$parameters.options,
            options = void 0 === _storyById$parameters2 ? {} : _storyById$parameters2,
            _storyById$parameters3 = _storyById$parameters.docs,
            docs = void 0 === _storyById$parameters3 ? {} : _storyById$parameters3,
            themeVars = docs.theme;
          !themeVars && options.theme && (warnOptionsTheme(), (themeVars = options.theme));
          var theme = (0, theming_dist_esm.zx)(themeVars),
            allComponents = Object.assign({}, defaultComponents, docs.components);
          return (
            (0, react.useEffect)(
              function () {
                var url;
                try {
                  url = new URL(globalWindow.parent.location);
                } catch (err) {
                  return;
                }
                if (url.hash) {
                  var element = DocsContainer_document.getElementById(url.hash.substring(1));
                  element &&
                    setTimeout(function () {
                      scrollToElement(element);
                    }, 200);
                } else {
                  var _element =
                    DocsContainer_document.getElementById(anchorBlockIdFromId(storyId)) ||
                    DocsContainer_document.getElementById(storyBlockIdFromId(storyId));
                  if (_element) {
                    var allStories = _element.parentElement.querySelectorAll('[id|="anchor-"]'),
                      scrollTarget = _element;
                    allStories &&
                      allStories[0] === _element &&
                      (scrollTarget = DocsContainer_document.getElementById("docs-root")),
                      setTimeout(function () {
                        scrollToElement(scrollTarget, "start");
                      }, 200);
                  }
                }
              },
              [storyId]
            ),
            react.createElement(
              DocsContext.Provider,
              { value: context },
              react.createElement(
                SourceContainer,
                null,
                react.createElement(
                  theming_dist_esm.f6,
                  { theme },
                  react.createElement(
                    MDXProvider,
                    { components: allComponents },
                    react.createElement(
                      index_681e4b07.ax,
                      { className: "sbdocs sbdocs-wrapper" },
                      react.createElement(
                        index_681e4b07.aw,
                        { className: "sbdocs sbdocs-content" },
                        children
                      )
                    )
                  )
                )
              )
            )
          );
        };
      (DocsContainer.__docgenInfo = { description: "", methods: [], displayName: "DocsContainer" }),
        "undefined" != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES[
            "node_modules/@storybook/addon-docs/dist/esm/blocks/DocsContainer.js"
          ] = {
            name: "DocsContainer",
            docgenInfo: DocsContainer.__docgenInfo,
            path: "node_modules/@storybook/addon-docs/dist/esm/blocks/DocsContainer.js",
          });
      var Meta_document = window_default().document;
      var Preview_templateObject,
        Meta = function Meta() {
          return "docs" === new URL(Meta_document.location).searchParams.get("viewMode")
            ? (function renderAnchor() {
                var context = (0, react.useContext)(DocsContext),
                  anchorId =
                    (function getFirstStoryId(docsContext) {
                      var stories = docsContext.componentStories();
                      return stories.length > 0 ? stories[0].id : null;
                    })(context) || context.id;
                return react.createElement(Anchor, { storyId: anchorId });
              })()
            : null;
        };
      (Meta.__docgenInfo = {
        description:
          "This component is used to declare component metadata in docs\nand gets transformed into a default export underneath the hood.",
        methods: [],
        displayName: "Meta",
      }),
        "undefined" != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES["node_modules/@storybook/addon-docs/dist/esm/blocks/Meta.js"] = {
            name: "Meta",
            docgenInfo: Meta.__docgenInfo,
            path: "node_modules/@storybook/addon-docs/dist/esm/blocks/Meta.js",
          });
      var Props_templateObject,
        Preview = browser_default()(
          function (props) {
            return react.createElement(Canvas, props);
          },
          (0, ts_dedent_esm.C)(
            Preview_templateObject ||
              (Preview_templateObject = (function Preview_taggedTemplateLiteral(strings, raw) {
                return (
                  raw || (raw = strings.slice(0)),
                  Object.freeze(
                    Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })
                  )
                );
              })([
                "\n    Preview doc block has been renamed to Canvas.\n\n    https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#previewprops-renamed\n  ",
              ]))
          )
        );
      var Props = browser_default()(
        function (props) {
          return react.createElement(ArgsTable, props);
        },
        (0, ts_dedent_esm.C)(
          Props_templateObject ||
            (Props_templateObject = (function Props_taggedTemplateLiteral(strings, raw) {
              return (
                raw || (raw = strings.slice(0)),
                Object.freeze(
                  Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })
                )
              );
            })([
              "\n    Props doc block has been renamed to ArgsTable.\n\n    https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#previewprops-renamed\n  ",
            ]))
        )
      );
      Props.defaultProps = { of: CURRENT_SELECTION };
      var Wrapper = function Wrapper(_ref) {
        var children = _ref.children;
        return react.createElement("div", { style: { fontFamily: "sans-serif" } }, children);
      };
      (Wrapper.__docgenInfo = { description: "", methods: [], displayName: "Wrapper" }),
        "undefined" != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES[
            "node_modules/@storybook/addon-docs/dist/esm/blocks/Wrapper.js"
          ] = {
            name: "Wrapper",
            docgenInfo: Wrapper.__docgenInfo,
            path: "node_modules/@storybook/addon-docs/dist/esm/blocks/Wrapper.js",
          });
    },
  },
]);
