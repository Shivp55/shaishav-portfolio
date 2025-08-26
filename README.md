
# Shaishav Parekh — Portfolio (3D)

Vite + React + Tailwind + Three.js (@react-three/fiber) portfolio.

## Local

```bash
npm install
npm run dev
```

## Deploy (free)

### Netlify
- Build: `npm run build`
- Publish: `dist`
- SPA redirects: `netlify.toml`

### Vercel
- Framework: Vite (auto)
- Build: `npm run build`
- Output: `dist`
- SPA rewrites: `vercel.json`

### GitHub Pages
- Push to a repo and enable **Pages → Source: GitHub Actions**.
- Workflow at `.github/workflows/deploy.yml` builds and publishes `dist`.
- `vite.config.js` sets `base` automatically on Actions so assets resolve.

## Notes
- Your LinkedIn and GitHub links are wired in `src/App.jsx`.
- Resume button uses a Google Docs **export** URL to trigger an immediate download.
