# @x12i/ai-profiles-docs usage example

AI Profiles docs knowledge SDK — install as a devDependency only. Catalog, use cases, and markdown packs for humans and agents.

This consuming application demonstrates **list the bundled guides and read a use case** using the published npm package, pinned to `0.1.0`.

## Run

Requires Node.js 24 or newer and npm. The example needs no service credentials.

```sh
npm install --ignore-scripts
npm start
```

## Example

[`src/index.mjs`](src/index.mjs) contains the complete example. Assertions check the demonstrated behavior and the program prints a small result.

This is a documentation knowledge SDK. It is installed as a development dependency. The example lists its books and use cases, then reads the first available use-case guide from the package.

## When to use the package

- Install @x12i/ai-profiles-docs as a development dependency so the product guides and package index are available to developers and coding assistants.
- Read the bundled ai-profiles documentation or use-case catalog without requiring a live documentation website.

## Links

- [npm package](https://www.npmjs.com/package/@x12i/ai-profiles-docs)

The `package.json` in this repository is private to prevent accidental publication of the example application under an npm package name.

## @x12i/ai-profiles runtime example

Resolve AI profile names into concrete model choices with bundled defaults and remote JSON refresh.

Resolve an explicit bundled profile choice without a registry request. This example consumes `@x12i/ai-profiles@5.4.0`.

```sh
npm install --ignore-scripts
npm run example:ai-profiles
```

Source: [`src/ai-profiles-example.mjs`](src/ai-profiles-example.mjs). The original documentation-package example remains available through `npm start`. Both examples are checked independently.
