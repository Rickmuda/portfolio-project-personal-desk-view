import {
  global_default
} from "/build/_shared/chunk-VEI4DZV7.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XGOTYLZ5.js";
import {
  createHotContext
} from "/build/_shared/chunk-YVP6PTJV.js";
import "/build/_shared/chunk-UWV35TSL.js";
import {
  require_react
} from "/build/_shared/chunk-7M6SC7J5.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/shelf.tsx
var import_react = __toESM(require_react(), 1);

// app/styles/shelf.css
var shelf_default = "/build/_assets/shelf-MWZH2OQ5.css";

// app/routes/shelf.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\shelf.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\shelf.tsx"
  );
}
var links = () => [{
  rel: "stylesheet",
  href: global_default
}, {
  rel: "stylesheet",
  href: shelf_default
}];
var Shelf = () => {
  _s();
  const [position, setPosition] = (0, import_react.useState)(0);
  (0, import_react.useEffect)(() => {
    const interval = setInterval(() => {
      setPosition((prevPosition) => (prevPosition + 5) % window.innerWidth);
    }, 100);
    return () => clearInterval(interval);
  }, []);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "section", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "shelf", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "character", style: {
      left: position
    }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: "/images/goat.gif", alt: "Character" }, void 0, false, {
      fileName: "app/routes/shelf.tsx",
      lineNumber: 47,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/shelf.tsx",
      lineNumber: 44,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/shelf.tsx",
      lineNumber: 43,
      columnNumber: 7
    }, this),
    "Welcome to the Shelf page!"
  ] }, void 0, true, {
    fileName: "app/routes/shelf.tsx",
    lineNumber: 42,
    columnNumber: 10
  }, this);
};
_s(Shelf, "gVejKcPeA2/cG0XaTceq7U6lhYU=");
_c = Shelf;
var shelf_default2 = Shelf;
var _c;
$RefreshReg$(_c, "Shelf");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  shelf_default2 as default,
  links
};
//# sourceMappingURL=/build/routes/shelf-K66IZX7H.js.map
