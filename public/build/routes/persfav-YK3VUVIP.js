import {
  require_index_browser
} from "/build/_shared/chunk-CQJDDZQE.js";
import {
  projects_default
} from "/build/_shared/chunk-HDA6RXOS.js";
import {
  useLoaderData
} from "/build/_shared/chunk-XQGWEIUJ.js";
import "/build/_shared/chunk-U4FRFQSK.js";
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

// app/routes/persfav.tsx
var import_client = __toESM(require_index_browser(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\persfav.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\persfav.tsx"
  );
}
var links = () => [{
  rel: "stylesheet",
  href: projects_default
}];
var prisma = new import_client.PrismaClient();
function Projects() {
  _s();
  const {
    projects
  } = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { children: "My Projects" }, void 0, false, {
      fileName: "app/routes/persfav.tsx",
      lineNumber: 42,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "projects-grid", children: projects.map((project) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "project-card", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: project.imageUrl, alt: project.title }, void 0, false, {
        fileName: "app/routes/persfav.tsx",
        lineNumber: 45,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { children: project.title }, void 0, false, {
        fileName: "app/routes/persfav.tsx",
        lineNumber: 46,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: project.description }, void 0, false, {
        fileName: "app/routes/persfav.tsx",
        lineNumber: 47,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: project.url, target: "_blank", rel: "noopener noreferrer", children: "View Project" }, void 0, false, {
        fileName: "app/routes/persfav.tsx",
        lineNumber: 48,
        columnNumber: 13
      }, this)
    ] }, project.id, true, {
      fileName: "app/routes/persfav.tsx",
      lineNumber: 44,
      columnNumber: 34
    }, this)) }, void 0, false, {
      fileName: "app/routes/persfav.tsx",
      lineNumber: 43,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/persfav.tsx",
    lineNumber: 41,
    columnNumber: 10
  }, this);
}
_s(Projects, "DZowJppIVR2fz7wqEJxMGbGJ2Is=", false, function() {
  return [useLoaderData];
});
_c = Projects;
var _c;
$RefreshReg$(_c, "Projects");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Projects as default,
  links
};
//# sourceMappingURL=/build/routes/persfav-YK3VUVIP.js.map
