<h1 align="center">Troubleshooting</h1>

- If `yarn changelog` shows the following error:
  ```bash
  /home/.../.npm/_npx/4f934f42ed15c671/node_modules/.bin/gitmoji-changelog: linha 1: erro de sintaxe próximo ao token inesperado `('
  /home/.../.npm/_npx/4f934f42ed15c671/node_modules/.bin/gitmoji-changelog: linha 1: `const semver = require('semver')'
  error Command failed with exit code 2.
  info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
  ```
  - try to install the package globally first and then try again
  ```bash
  npm i -g gitmoji-changelog
  ```