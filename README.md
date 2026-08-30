# starlane-router-starter

A minimal starter for building an app with [starlane-router](https://www.npmjs.com/package/starlane-router).

## Usage

```
npm install
npm run dev
```

Open http://localhost:5500

## Structure

- `app/router.js` — entry point: defines routes, starts the router
- `app/index.html`, `app/home.html`, `app/about.html`, `app/404.html` — pages
- `scripts/build.mjs` — bundles `app/router.js` and copies `app/`'s HTML pages into `build/`
- `server.js` — local dev server that serves `build/` for live preview
