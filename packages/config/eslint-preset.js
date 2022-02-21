const jsExtensions = [".js", ".jsx"];
const tsExtensions = [".ts", ".tsx"];
const allExtensions = jsExtensions.concat(tsExtensions);

module.exports = {
  extends: ["next", "universe/web", "universe/native"],
  settings: {
    next: {
      rootDir: ["apps/*/", "packages/*/"],
    },
    "import/extensions": allExtensions,
    "import/parsers": {
      "@typescript-eslint/parser": tsExtensions,
    },
    "import/resolver": {
      typescript: {
        alwaysTryTypes: true,
      },
      node: {
        extensions: allExtensions,
      },
    },
  },
  parser: "@typescript-eslint/parser",
  plugins: ["import", "eslint-plugin-import-helpers"],
  rules: {
    "@next/next/no-html-link-for-pages": "off",
    "import/namespace": [
      "error",
      {
        allowComputed: true,
      },
    ],
    camelcase: "error",
    "import/no-unresolved": "error",
    "import-helpers/order-imports": [
      "error",
      {
        newlinesBetween: "always",
        groups: ["module", ["/^~/"], ["parent", "sibling", "index"]],
        alphabetize: {
          order: "asc",
          ignoreCase: true,
        },
      },
    ],
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "no-use-before-define": "off",
    "@typescript-eslint/no-use-before-define": "off",
    "@typescript-eslint/no-empty-function": "warn",
    "@typescript-eslint/ban-ts-comment": "warn",
  },
};
