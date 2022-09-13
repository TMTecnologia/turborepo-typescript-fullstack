# Turborepo starter

EOL: this template will not be updated further, check [TMTecnologia/turborepo-tmtecnologia](https://github.com/TMTecnologia/turborepo-tmtecnologia) for the new and upgraded version.

This is an official Yarn v2 starter turborepo.

- [Changelog](./CHANGELOG.md#changelog)
- 🚧 Contributing
- [Troubleshooting](./TROUBLESHOOTING.md#troubleshooting)

## What's inside?

This turborepo uses [Yarn](https://classic.yarnpkg.com/lang/en/) as a package manager. It includes the following packages/apps:

### Apps and Packages

- `docs`: a [Next.js](https://nextjs.org) app
- `app`: a [Expo](https://expo.dev/) app
- `web`: another [Next.js](https://nextjs.org) app
- `ui`: a stub React component library shared by both `web` and `docs` applications
- `config`: `eslint` shared configurations
- `tsconfig`: `tsconfig.json`s used throughout the monorepo

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Utilities

This turborepo has some additional tools already setup for you:

- [**TypeScript**](https://www.typescriptlang.org/) for static type checking
- [**ESLint**](https://eslint.org/): find and fix problems in your JavaScript code
- [**Prettier**](https://prettier.io/): an opinionated code formatter, applied through eslint
- [**Commitlint**](https://commitlint.js.org/): lint commit messages according to a customized [**commitlint-config-gitmoji**](https://www.npmjs.com/package/commitlint-config-gitmoji)
- [**Commitzen**](https://commitizen-tools.github.io/commitizen/): define a standard way of committing rules (here [**cz-gitmoji**](https://github.com/Landish/cz-gitmoji)) and communicating it.
- [**lint-staged**](https://github.com/okonet/lint-staged#readme): improve *ESLint* performance on git hooks ([**Husky**](https://typicode.github.io/husky/#/)) by only targeting staged files.

## Setup

```
yarn install
```

### Build

To build all apps and packages, run the following command:

```
yarn run build
```

### Develop

To develop all apps and packages, run the following command:

```
yarn run dev
```
