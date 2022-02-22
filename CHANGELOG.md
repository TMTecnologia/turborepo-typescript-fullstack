# Changelog

<a name="0.2.0"></a>
## 0.2.0 (2022-02-22)

This version brings:
- Bump yarn version to 3.x.x (Heroku deploy ready)
- Config [lerna](https://lerna.js.org/) tool
- Add styled components to [packages/ui](./packages/ui)
- Create apps/app based upon [@thlmenezes/grocery-price-watch v0.4.3](https://github.com/thlmenezes/grocery-price-watch/tree/v0.4.3) configuring for monorepo support

### Added

- ✨ (app): storybook [[e052da7](https://github.com/TMTecnologia/turborepo-typescript-fullstack/commit/e052da7426ee6bc31e2c0971a65fedab1aef3f99)]
- ✨ (app): tests with @testing-library [[e1a76fa](https://github.com/TMTecnologia/turborepo-typescript-fullstack/commit/e1a76fa46982bec745d94cce5f6267cc06b9c0a5)]
- ✨ (app): add content [[40e7f1e](https://github.com/TMTecnologia/turborepo-typescript-fullstack/commit/40e7f1e77ba547b6b66149aff7a83f11820cb8a2)]
- ✨ 🔧 (config): update settings [[cc6679e](https://github.com/TMTecnologia/turborepo-typescript-fullstack/commit/cc6679e00a40627d0b2c455c4d323548f1f29048)]
- ➕ (app): eslint [[2555cbe](https://github.com/TMTecnologia/turborepo-typescript-fullstack/commit/2555cbe6a4927584a6e6733be7a240578b5a4aac)]
- ✨ 🔧 add universe/native to config [[6cd8d1c](https://github.com/TMTecnologia/turborepo-typescript-fullstack/commit/6cd8d1c076d5c94302637d271e8f504be144d0c3)]
- ✨ expo init apps/app [[b91ce44](https://github.com/TMTecnologia/turborepo-typescript-fullstack/commit/b91ce44437e8d5a2353ee949b3a1a7b3b2cd3d41)]
- ➕ styled, for package/ui [[c108ff4](https://github.com/TMTecnologia/turborepo-typescript-fullstack/commit/c108ff47f2f6fd7f473ddf2c36b6c6aec6628d7c)]
- ✨ ♻️ create ui/src [[1534cab](https://github.com/TMTecnologia/turborepo-typescript-fullstack/commit/1534cabac6109f7269072a820e2911e82a4013bf)]
- ✨ 🔧 lerna init [[300e22f](https://github.com/TMTecnologia/turborepo-typescript-fullstack/commit/300e22f1953c20405700866a4590718efcdd8ac3)]
- ➕ lerna [[7777bd2](https://github.com/TMTecnologia/turborepo-typescript-fullstack/commit/7777bd2b3a6f069dba0b5d83239ba538377f3678)]
- ➕ ⬆️ yarn 1.22.15 -&gt; 3.1.1 [[cc88fa7](https://github.com/TMTecnologia/turborepo-typescript-fullstack/commit/cc88fa76518f515d29316dd385fe27d5b4cbf0e7)]

### Changed

- 🚨 format project [[be1b20c](https://github.com/TMTecnologia/turborepo-typescript-fullstack/commit/be1b20c2e70c5bd1fcc62a23e42aeaeb32b79a06)]

### Fixed

- 🐛 🏷️ (apps): styled-components-react-native [[b931fbe](https://github.com/TMTecnologia/turborepo-typescript-fullstack/commit/b931fbe63102cfaa953c64d854d2f8f7552b45dc)]
- 🐛 (app): @root became ~, in config/eslint [[d2688f5](https://github.com/TMTecnologia/turborepo-typescript-fullstack/commit/d2688f55147de9093b6b1600fcf73af075815995)]
- 🐛 (config/eslint): module not found [[fb07925](https://github.com/TMTecnologia/turborepo-typescript-fullstack/commit/fb07925b1b4ec9a37797a6579c6edd7ad2679760)]
- 🐛 (config/eslint): next/babel parser error [[00e028f](https://github.com/TMTecnologia/turborepo-typescript-fullstack/commit/00e028f642fcda3d43076290331aaefeffad5a82)]
- 🐛 (app): unable to resolve module node:process [[9c08e49](https://github.com/TMTecnologia/turborepo-typescript-fullstack/commit/9c08e496fc6c799e1de39f6a7ba62bb5656e76c3)]
- 🐛 eslint parse fails next/babel on js files [[bf3bb28](https://github.com/TMTecnologia/turborepo-typescript-fullstack/commit/bf3bb28db6459fca1a70e832d40969e5d5b48b9e)]
- 🐛 🔧 missing commitzen config [[dc8e9f0](https://github.com/TMTecnologia/turborepo-typescript-fullstack/commit/dc8e9f09e4edff71896554423edb819ba45cf48c)]

### Miscellaneous

- 🙈 yarn 3.1.1 [[49c3524](https://github.com/TMTecnologia/turborepo-typescript-fullstack/commit/49c3524bcc007c3fe051f230d58c469d67d12acd)]


<a name="0.1.0"></a>
## 0.1.0 (2022-02-19)

Improve upon default turbo default setup, customizing:

- [Eslint](https://eslint.org/)
  - [eslint-import-resolver-typescript](https://www.npmjs.com/package/eslint-import-resolver-typescript)
  - [import-helpers/order-imports
](https://github.com/Tibfib/eslint-plugin-import-helpers#readme)
- [Prettier](https://prettier.io/)

and adding:

- [LintStaged](https://www.npmjs.com/package/lint-staged)
  - [Husky](https://typicode.github.io/husky/#/)
  - [pinst](https://www.npmjs.com/package/pinst) to disable husky install in production
- [Commitlint](https://commitlint.js.org/#/)
  - [commitlint-config-gitmoji](https://www.npmjs.com/package/commitlint-config-gitmoji)
- [Commitzen](https://github.com/commitizen/cz-cli)
  - [cz-gitmoji](https://github.com/Landish/cz-gitmoji)
- [gitmoji-changelog](https://docs.gitmoji-changelog.dev/#/) for CHANGELOG generation

### Added

- ➕ commitzen, cz-gitmoji [[8f279a1](https://github.com/TMTecnologia/turborepo-typescript-fullstack/commit/8f279a1188a58dfa55c721443ec4514b319a86f0)]
- ➕ ⬆️ lockfile [[ec330a1](https://github.com/TMTecnologia/turborepo-typescript-fullstack/commit/ec330a173a0519f8d6c7e2ab462e0db54c2057e8)]
- ➕ commitlint, commitlint-config-gitmoji [[2f96448](https://github.com/TMTecnologia/turborepo-typescript-fullstack/commit/2f96448b88a15f28b44cc0a6adc0ee6a1b276398)]
- ➕ pinst [[8a73e98](https://github.com/TMTecnologia/turborepo-typescript-fullstack/commit/8a73e9840a674e94c8cfd2d39318a4f4ed9e2e7a)]
- ➕ husky, lint-staged [[8386fbf](https://github.com/TMTecnologia/turborepo-typescript-fullstack/commit/8386fbf2ef22e6376a3cd5cbee4d0a8cf14de7b5)]

### Changed

- 🔧 add commit script [[6299e59](https://github.com/TMTecnologia/turborepo-typescript-fullstack/commit/6299e59e7caa1e85197f3c6ccf5554dc361a6a39)]
- 🔧 eslint, commitlint, lint-staged [[d2a7e44](https://github.com/TMTecnologia/turborepo-typescript-fullstack/commit/d2a7e44a62d163fbb41c31dbe124f33cee6cafa4)]
- 🔧 eslint customize default [[6dfab93](https://github.com/TMTecnologia/turborepo-typescript-fullstack/commit/6dfab935ad89f7bbf837926b4d4e3c15eec80e83)]

### Miscellaneous

- 🔨 lint:fix [[2796c7b](https://github.com/TMTecnologia/turborepo-typescript-fullstack/commit/2796c7b0529625d60ec918ac31dfc8743eaa079f)]
- 🔨 lint git commits [[da377d9](https://github.com/TMTecnologia/turborepo-typescript-fullstack/commit/da377d9a70f3225996e46728b50e1eabdc7f5c62)]
- 🚀 postinstall with dev dependency [[651ca11](https://github.com/TMTecnologia/turborepo-typescript-fullstack/commit/651ca11e3477f30b2aa1571508f9fadb6a382369)]
-  Initial commit from Create Turborepo [[ed9d718](https://github.com/TMTecnologia/turborepo-typescript-fullstack/commit/ed9d7189c5e06ca3486612f7e579791d773e4b0b)]


