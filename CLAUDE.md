# CLAUDE.md

## Dev Server

- Command: `node server.js`
- Default port: `4175` (override with `PORT` env var)
- Static file server with API routes under `/api/worlds`

## Quick Reference

- Entry point: `index.html` (loads `session-compiler.js`, `session-store.js`, `app.js`)
- Styles: `styles.css`
- Design docs: `design/winterrain-rp-module-architecture-design.md`
- Frontend checklist: `design/front-design-checklist.md`
- Asset versioning: bump `?v=` query strings in `index.html` when `app.js` or `styles.css` changes
