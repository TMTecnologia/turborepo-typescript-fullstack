module.exports = {
  preset: "jest-expo",
  roots: ["<rootDir>"],
  testMatch: ["**/?(*.)+(spec|test).ts?(x)"],
  testPathIgnorePatterns: ["./node_modules/"],
  moduleFileExtensions: ["js", "jsx", "ts", "tsx"],
  moduleNameMapper: {
    "^@root(.*)$": "<rootDir>/src/$1",
  },
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "babel-jest",
  },
  transformIgnorePatterns: [
    "node_modules/(?!(jest-)?react-native|@react-native|react-clone-referenced-element|@react-native-community|expo(nent)?|@expo(nent)?/.*|react-navigation|@react-navigation/.*|@unimodules/.*|sentry-expo|native-base)",
  ],
  setupFilesAfterEnv: [
    "<rootDir>/__tests__/__mocks__/index.ts",
    "@testing-library/jest-native/extend-expect",
  ],
  coverageReporters: ["json-summary", "text", "lcov"],
  collectCoverageFrom: [
    "**/*.{ts,tsx}",
    "!**/coverage/**",
    "!**/node_modules/**",
    "!**/babel.config.js",
    "!**/jest.setup.js",
    "!storybook/**",
  ],
  coverageThreshold: {
    global: {
      lines: 50,
    },
  },
};
