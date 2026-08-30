# starlane-router-starter

A minimal starter for building an app with [starlane-router](https://www.npmjs.com/package/starlane-router).

## Usage

```
npm install
npm run dev
```

Open http://localhost:5500

## Structure

- `router.js` — entry point: defines routes, starts the router
- `index.html`, `home.html`, `about.html`, `404.html` — pages
- `scripts/build.mjs` — bundles `router.js` and copies the HTML pages into `build/`
- `server.js` — local dev server that serves `build/` for live preview
