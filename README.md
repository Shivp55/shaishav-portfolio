
# Shaishav Parekh — Portfolio

A single‑page portfolio built with React + Vite + Tailwind.

## Local setup

```bash
npm install
npm run dev
```

## One‑click free deployment options

### Option A — Netlify (fastest)

1. Create a free account at https://app.netlify.com/ (GitHub login works).
2. Click **Add new site → Import an existing project**.
3. Connect your GitHub repo and select this project.
4. Build command: `npm run build`  •  Publish directory: `dist`
5. Netlify will auto‑deploy on every push to `main`.

> SPA routing is handled by `netlify.toml`.

### Option B — Vercel (also easy)

1. Go to https://vercel.com/new and import your GitHub repo.
2. Framework preset: **Vite** (auto‑detected).
3. Build command: `npm run build`  •  Output: `dist`
4. Deploy. Every push redeploys automatically.

> SPA routing is handled by `vercel.json`.

### Option C — GitHub Pages (free, no external service)

This repo includes a GitHub Action at `.github/workflows/deploy.yml`.
Just push to `main` and Pages will deploy automatically.

**Steps**

1. Create a new repo on GitHub and push this project (or upload the ZIP).
2. Go to **Settings → Pages** and set **Source: GitHub Actions**.
3. Push a commit to `main`. The workflow builds and publishes `dist`.

The `vite.config.js` automatically sets a correct `base` when building on GitHub Actions, so asset paths will work on `https://<username>.github.io/<repo>/`.

## Customizing

- Update your social links in `src/App.jsx` (`DATA.socials`).
- Add project links in `DATA.projects` to show buttons.
- Colors and layout are Tailwind classes inside the JSX.
# shaishav-portfolio
