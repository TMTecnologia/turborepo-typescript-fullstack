// Learn more https://docs.expo.io/guides/customizing-metro
const path = require("path");

// Find the workspace root, this can be replaced with `find-yarn-workspace-root`
const workspaceRoot = path.resolve(__dirname, "..", "..");
// Find root node_modules
const workspaceModulesPath = path.resolve(workspaceRoot, "node_modules");

// 1. Watch for dependencies changes
const watchFolders = [workspaceModulesPath];
// 2. Let Metro know where to resolve packages, and in what order
const nodeModulesPaths = [path.resolve(__dirname, "node_modules")];
const extraNodeModules = {
  modules: workspaceModulesPath,
};

// 3. Exported configs will be merged to defaults
module.exports = {
  resolver: {
    extraNodeModules,
    nodeModulesPaths,
  },
  watchFolders,
};
