# AGENTS.md

## Cursor Cloud specific instructions

### Project overview

This is **vue-element-admin** v4.4.0 — a Vue 2 + Element UI admin dashboard SPA. There is no backend; all API calls are intercepted by a Mock.js mock server embedded in the webpack dev server (see `mock/mock-server.js` and `vue.config.js` `devServer.before`).

### Node.js version

This project requires **Node.js 16** (installed via `nvm`). Node 18+ causes OpenSSL and webpack compatibility issues with Vue CLI 4 / Webpack 4. The update script handles `nvm use 16` automatically.

### Key commands

| Task | Command |
|---|---|
| Dev server | `npm run dev` (port 9527) |
| Lint | `npm run lint` |
| Unit tests | `npm run test:unit` |
| Production build | `npm run build:prod` |
| All CI checks | `npm run test:ci` |

### Login credentials (mock)

The mock server accepts any password. Default accounts: `admin` / `111111` and `editor` / `111111`.

### Notes

- The dev server opens on port **9527** and auto-opens a browser tab (use `--no-open` or ignore if headless).
- No external services, databases, or Docker containers are needed.
- Husky + lint-staged are configured for pre-commit hooks (`eslint --fix` on staged `.js`/`.vue` files in `src/`).
- There is no `package-lock.json` committed; `npm install` resolves versions fresh each time.
