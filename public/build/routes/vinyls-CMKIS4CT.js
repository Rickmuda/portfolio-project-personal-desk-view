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
import "/build/_shared/chunk-7M6SC7J5.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/vinyls.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\vinyls.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\vinyls.tsx"
  );
}
var links = () => [{
  rel: "stylesheet",
  href: global_default
}];
var Vinyls = () => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "section", children: "Welcome to the Vinyls page!" }, void 0, false, {
    fileName: "app/routes/vinyls.tsx",
    lineNumber: 29,
    columnNumber: 10
  }, this);
};
_c = Vinyls;
var vinyls_default = Vinyls;
var _c;
$RefreshReg$(_c, "Vinyls");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  vinyls_default as default,
  links
};
//# sourceMappingURL=/build/routes/vinyls-CMKIS4CT.js.map
