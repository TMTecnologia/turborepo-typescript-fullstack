const jsExtensions = [".js", ".jsx"];
const tsExtensions = [".ts", ".tsx"];
const allExtensions = jsExtensions.concat(tsExtensions);

module.exports = {
  extends: ["universe/web", "universe/native"],
  settings: {
    "import/extensions": allExtensions,
    "import/resolver": {
      "babel-module": {},
      node: {
        extensions: allExtensions,
      },
    },
  },
  parser: "@typescript-eslint/parser",
  plugins: ["import", "eslint-plugin-import-helpers"],
  rules: {
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
