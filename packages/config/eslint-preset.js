module.exports = {
  extends: ["next", "universe/web", "universe/native"],
  settings: {
    next: {
      rootDir: ["apps/*/", "packages/*/"],
    },
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"],
    },
    "import/resolver": {
      typescript: {
        alwaysTryTypes: true,
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
