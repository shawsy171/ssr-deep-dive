# REACT SSR

<https://github.com/StephenGrider/ReactSSRCasts>

## Run

```bash
npm run dev
```

### Run server

This will run all build scripts and start the server

```bash
npm run dev:server
```

starts the node server

## Build

### Build server

```bash
npm run dev:build:server
```

### Build client

```bash
npm run dev:build:client
```

## get react code for rehydration

```js
<script src="bundle.js"></script>
```

## npm webpack-node-externals

Webpack allows you to define externals - modules that should not be bundled.

When bundling with Webpack for the backend - you usually don't want to bundle its node_modules dependencies.
This library creates an externals function that ignores node_modules when bundling in Webpack.