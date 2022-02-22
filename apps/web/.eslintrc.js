const presets = require("config/eslint-preset");

module.exports = {
  ...presets,
  extends: presets.extends.concat(["next"]),
  rules: {
    ...presets.rules,
    "@next/next/no-html-link-for-pages": "off",
  },
};
